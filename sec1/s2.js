
function usedata(datato, numerr) {
    console.log('The call back fired');
    if (numerr === 2) {
        console.log('Successful Fetch');
        console.log(datato);  
    }
    else 
    {
        console.log('An error has occured ');
        console.log(datato);  
    }
    
}

function loaddata(myCallback) {

    let request = new XMLHttpRequest();
    let usa_url = "https://jsonplaceholder.typicode.com/todos";

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let jsonform = JSON.parse(this.responseText);
            myCallback(jsonform, 2);
        }
        else if(this.readyState == 4)
        {
            let errcall = "An error has occurred " + this.status + ' resource ' + this.statusText
            myCallback(errcall, 4);
        }
    };

    request.open("GET", usa_url, true);
    request.send();
}
loaddata(usedata);