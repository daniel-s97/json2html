function json2form(json) {
	// parse our JSON data
	let data = JSON.parse(json);
	// grab each element in the json object
	for (var i in data) {
		// create our element type
		var e = document.createElement(data[i].type);
		// grab our attributes
		for (var a in data[i].attributes) {
			e.setAttribute(a, data[i].attributes[a]);
		}
		form.appendChild(e);
	}
}
