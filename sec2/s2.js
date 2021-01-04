let loaddata = new Promise(function (resolve, reject) {
    
    let request = new XMLHttpRequest();
	let usa_url = "https://jsonplaceholder.typicode.com/todos";

	request.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let jsonform = JSON.parse(this.responseText);
			resolve(jsonform);
		}
		else if (this.readyState == 4) {
			let errcall = "An error has occurred " + this.status + ' resource ' + this.statusText
			reject(errcall);
		}
	};

	request.open("GET", usa_url, true);
	request.send();
});


loaddata
	.then(function (fulfilled) {
		console.log('This is a first promise ');
		return fulfilled ;
    })
    .then(function (data_retr) {
		console.log('This is a Chained promise ');
		console.log(data_retr);
    })
	.catch(function (error) {
		console.log(error);
	});