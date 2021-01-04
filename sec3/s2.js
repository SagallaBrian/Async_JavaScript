// Introduction to Async await 

function processdata(data_retr) {
    return new Promise(function (resolve, reject) {
        console.log("Process Function called ");

        let arrval = data_retr.filter(function (par1) {
            return par1.completed === false
        })
        resolve(arrval);
    });
}
function nomdispfunction(dataparam) {
    console.log('Display function');
    let dispstring = '';
    dataparam.forEach((value, index, array) => {
        dispstring += ` <tr><th scope="row">${value.id}</th><td>${value.userId}</td><td>${value.completed}</td><td>${value.title}</td></tr> `
    })
    document.getElementById('divbn').innerHTML = dispstring;
}

function loaddata() {
    console.log('Load Function called');

    return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const resource_url = "https://jsonplaceholder.typicode.com/todos";

        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let jsonform = JSON.parse(this.responseText);
                resolve(jsonform);
            }
            else if (this.readyState == 4) {
                let errcall = "An error has occurred " + this.status + ' resource ' + this.statusText;
                reject(errcall);
            }
        };
        request.open("GET", resource_url, true);
        request.send();
    });
}

async function assyncfunction() {
    console.log("Asynchronous Function called");
    try {
        const loadaswait = await loaddata();
        const processawait = await processdata(loadaswait);
        nomdispfunction(processawait);

    } catch (error) {
        console.log(error);
    }
}

assyncfunction();