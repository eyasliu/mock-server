// post router
export default {
	'get /post': () => ({
		"string|1-10": "★"
	}),
	'get /post/:id': param => ({
		id: param.id,
		"string|1-10": "★"
	})
}