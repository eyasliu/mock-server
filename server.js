import Mock from 'mockjs';
import Server from 'ohana';
import include from 'include-all';
import path from 'path';
import yargs from 'yargs';

const args = yargs.argv._

const files = include({
	dirname: path.resolve(__dirname, args[0] || 'api')
})

const composePaths = files => {
	const obj = {};
	for(let filename in files){

		if(files[filename] && files[filename].default){
			const item = files[filename].default;
			for(let key in item){
				obj[key] = item[key]
			}
		}
	}
	return obj;
}

const parseRoute = routes => {
	const paths = [];
	for(let key in routes){
		const k = key.split(' ');
		const item = {
			handler: routes[key]
		}
		if(k.length == 1){
			item.method = 'get';
			item.path = k[0]
		}else{
			item.method = k[0];
			item.path = k[1]
		}
		paths.push(item);
	}
	return paths;
}

const routes = parseRoute(composePaths(files))

// mock server begin
const server = new Server()
routes.forEach(item => {
	server[item.method](item.path, {
		data: () => {
			return Mock.mock(item.handler.apply(this, arguments))
		}
	})
})

server.start(3000)