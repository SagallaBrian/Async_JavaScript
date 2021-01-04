/**
 * A promise is an object that may produce a single value some time in the future: 
 * either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). 
 * A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
 * A promise is an object which can be returned synchronously 
 * from an asynchronous function. It will be in one of 3 possible states:

  Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
  Rejected: onRejected() will be called (e.g., reject() was called)
  Pending: not yet fulfilled or rejected

 */

const user_count = false;

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
	.catch(function (error) {
		console.log(error);
	});