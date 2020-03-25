// fetch('data/athlete.json')
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     appendData(data);
// })
// .catch(function (err) {
//     console.log('error: ' + err);
// });

// function appendData(data) {
// var mainContainer = document.getElementById("athlete");
// for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i].firstname + ' ' + data[i].lastname + ' ' + data[i].username;
//     mainContainer.appendChild(div);
// }
// }
//*********************************************** */
//Trying to jquery to retieve athletes data
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//     document.getElementById("athlete").innerHTML = myObj.firstname;
//   }
// };
// xmlhttp.open("GET", "./data/athlete.json", true);
// xmlhttp.send();