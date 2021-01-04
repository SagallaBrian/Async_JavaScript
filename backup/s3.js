function loaddata() {

  let request = new XMLHttpRequest();
  let usa_url = "https://jsonplaceholder.typicode.com/todoss";
/*
  request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          let jsonform = JSON.parse(this.responseText);
          console.log(jsonform);
      }
  };
*/ 


  request.addEventListener("readystatechange", function () {
      if (this.readyState == 4 && this.status == 200) {
          let jsonform = JSON.parse(this.responseText);
          console.log(jsonform);
      }
      else if(this.readyState == 4)
      {
          console.log("An error has occurred " + this.status + ' resource ' + this.statusText);
      }
  });

  request.open("GET", usa_url, true);
  request.send();
}
// loaddata();

document.getElementById("btnone").addEventListener("click", loaddata); 


/* 
https://medium.com/better-programming/everything-about-xmlhttprequest-in-javascript-8adacc98a209 
https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started#Step_3_%E2%80%93_A_Simple_Example 

*/