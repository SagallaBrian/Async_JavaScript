
function successFunction(datato) {
	console.log('The Sucess callback Function fired');
	console.log(datato);

}

function errorFunction(errorme) {
	console.log('The Error callback Function fired');
	console.log(errorme);
}

function loaddata(successCallback, errorcallbakc) {

	let request = new XMLHttpRequest();
	let usa_url = "https://jsonplaceholder.typicode.com/todosms";

	request.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let jsonform = JSON.parse(this.responseText);
			successCallback(jsonform);
		}
		else if (this.readyState == 4) {
			let errcall = "An error has occurred " + this.status + ' resource ' + this.statusText
			errorcallbakc(errcall);
		}
	};

	request.open("GET", usa_url, true);
	request.send();
}
loaddata(successFunction, errorFunction);