# Async_JavaScript
This repository contains basic introduction to Asynchronous JavaScript 
=======
# Asynchronous JavaScript 
## Section 1 
### Code 1 
#### Callback Functions 

// The console logging is to show that it is Asynchronous in nature 
    
    console.log("Console 1");
    console.log("Console 2");
    
 
// A callback is a function passed as an argument to another function
    
    function thecallback() {
     console.log("Fired After 3 Seconds");
    }
    setTimeout(thecallback, 3000);
    
    console.log("Console 3");
    console.log("Console 4");

 
 
// The below example is a synchronous callback, as it is executed immediately.
    
    function howtoday() {
        console.log("How are you doing today")
    }

    function mainfunct1(callbaack) {
        callbaack();
    }

    mainfunct1(howtoday);

    console.log("Console 5");
    console.log("Console 6");


    function greeting(name) {
        console.log('Hello ' + name);
    }

    function mainfunct2(callback2) {
        let usa_name = 'Brian';
        callback2(usa_name);
    }

    mainfunct2(greeting);



    function myDisplayer(sumation) {
        console.log('Sum =  ' + sumation);
    }

    function mainfunct3(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    mainfunct3(5, 5, myDisplayer);
    

### Code 2 
Introduction to making HTTP Requests 
Html code 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP Requests </title>
</head>
<body>
    <script src="s2.js"></script>
</body>
</html>
 
 
Javascript code 
    
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
    
    

### Code 3 
Html code 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTTP Requests </title>
</head>
<body>
<script src="s3.js"></script>
</body>
</html>

Javascript code 
    
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



### Code 4 
Introduction to promises 
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
        




## Section 2
### Code 1 
Chaining Promises 
  
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
    

### Code 2 
Promises with http requests 

Html code 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTTP Requests </title>
</head>
<body>
<script src="s2.js"></script>
</body>
</html>

Javascript code 
 
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


## Section 3 
### Code 1 

Html code 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTTP Requests </title>
</head>
<body>
<script src="s1.js"></script>
</body>
</html>

JavaScript code 

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


### Code 2 
Html code 
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTTP Requests </title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

</head>

<body>
<div class="container-lg">
<div class="py-5">
<div id="div_t">
<table class="table table-striped">
  <thead>
      <tr>
          <th>#</th>
          <th>User Id</th>
          <th>Completed</th>
          <th>Title</th>
      </tr>
  </thead>
  <tbody id="divbn">

  </tbody>
</table>
</div>
</div>
</div>

<script src="s2.js"></script>
</body>
</html>

JavaScript code 
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



### Code 3 
Fetch () method 
Html code 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP Requests </title>
</head>
<body>
    <script src="s3.js"></script>
</body>
</html>

JavaScript code 
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


### Code 4 
Html code 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTTP Requests </title>
</head>
<body>
    <script src="s4.js"></script>
</body>
</html>

JavaScript code 
    
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
        })
 
 
### Links 

https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/quick-quiz 

https://www.digitalocean.com/community/tutorials/javascript-promises-for-dummies 

https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#Step_3_%E2%80%93_A_Simple_Example 

https://www.w3resource.com/javascript-exercises/ 

https://www.javascripttutorial.net/javascript-fetch-api/ 
