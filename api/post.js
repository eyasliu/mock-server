// post router
export default {
	'get /post': () => ({
		"post|1-10": [{
			title: "@title"
		}]
	}),
	'get /post/:id': param => ({
		id: param.id,
		title: "@title",
		content: "@paragraph"
	})
}