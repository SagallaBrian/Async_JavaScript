/**
 * Chaining promises 

 */

const user_count = true;

let countValue = new Promise(function (resolve, reject) {
	if (user_count) {
		resolve("There is a count value.");
	} else {
		reject("There is no count value");
	}
});

countValue
	.then(function (fulfilled) {
		console.log(fulfilled);
    })
    .then(function () {
		console.log('This is a Chained promise ');
    })
	.catch(function (error) {
		console.log(error);
	});