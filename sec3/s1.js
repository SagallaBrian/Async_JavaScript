function processdata(data_retr) {
    return new Promise(function (resolve, reject) {
        console.log("Process function called");
        let arrval = data_retr.filter(function (par1) {
            return par1.completed === true
        })
        resolve(arrval);
    });
}

function loaddata() {
    console.log("Load data function called");

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


loaddata()
    .then(function (data_retr) {
        return processdata(data_retr);
    })
    .then(function (prossesing_data) {
        console.log(prossesing_data);

    })
    .catch(function (errors) {
        console.log(errors)
    })

