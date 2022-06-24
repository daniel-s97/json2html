
function json2form(json, form) {
	// parse our JSON data
	let data = JSON.parse(json);
	// grab each element in the json object
	for (var i in data) {
		// create our element type
		var e = document.createElement(data[i].type);
		// if innerText Exists add it
		console.log(data[i]);
		if (data[i].innerText) {
			e.innerText = data[i].innerText;
		}
		// grab our attributes
		for (var a in data[i].attributes) {
			e.setAttribute(a, data[i].attributes[a]);
		}
		// grab our classes
		for (var c in data[i].class) {
			console.log(data[i].class);
			e.classList.add(data[i].class[c]);
		}
		form.appendChild(e);
	}
}

