// fetch() method is available in the global scope that instructs the web browsers to send a request to a URL.

const resource_url = "https://jsonplaceholder.typicode.com/todos";

fetch(resource_url)
    .then(function (data_retr) {
        return data_retr.json();
    })
    .then(function (process_data) {
        console.log('Resolved');
        console.log(process_data);
    })
    .catch(function (error) {
        console.log('Rejected');
        console.log(error);
    });