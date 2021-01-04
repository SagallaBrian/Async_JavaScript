
const resource_url = "https://jsonplaceholder.typicode.com/todos";

async function assyncfunction() {

    console.log("Asynchronous Function called");

    const loadaswait = await fetch(resource_url);
    if (loadaswait.status !== 200) {
        throw new Error('Error: ' + loadaswait.status + " " + loadaswait.statusText);
    }
    const processawait = await loadaswait.json();
    return processawait

}

assyncfunction()
    .then(function (process_data) {
        console.log('Resolved');
        console.log(process_data);
    })
    .catch(function (error) {
        console.log('Rejected');
        console.log(error.message);
    });