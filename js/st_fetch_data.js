// fetch('./data/athlete.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
// });

// function appendData(data) {
//     var mainContainer = document.getElementById("#athlete");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 'Name: ' + data[i].firstname + ' ' + data[i].lastname + ' <br> Username: ' + data[i].username;
//         mainContainer.appendChild(div);
//     }
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
//********************** */

//Effort to use jquery to retrieve json data and display from jquery docs
// $.getJSON( "data/athlete.json", function( data ) {
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });
   
//     $( "<ul/>", {
//       "class": "js-st_athlete",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });
//**************************** */

//Another javascript try ** this one worked except the variable would not show in console...?
// let name, picUrl,sex, city, state, country, memberSince, athleteObj=[];

// let showObj = function () {
//      for (let prop in athleteObj) {
//         console.log(prop);
//         console.log(athleteObj[prop]);
//     };
// }

// let athleteRequest = new Request("./data/athlete.json")
// fetch(athleteRequest)
    // .then(function(resp){
    //     return resp.json();
    // })
    // .then(function(data){
    //     console.log(data);

        // name = data.username;
        // picUrl = data.profile_medium;
        // sex = data.sex;
        // city = data.city;
        // state = data.state;
        // country = data.country
        // memberSince = data.created_at;
        // athleteObj = data;
        // showObj();
    // });

   //**************************************************************** */
// $.getJSON('data/athlete.json',function(data){
//     console.log(data);
//     var output = '<ul>';  
//     $.each(data, function(key,val){
//       output += '<div>val.username</div>' +  + <br/> +  <img scr=val.profile_medium alt="profile image"/>;
//     });
//     output += '</ul>';
//     $('#update').html(output);
//     });

//********************************************/
//zsolt's solution in javascript...This showed an error line 91, 

function callback( response ) {
    let markup = response.map(element => `<li>${element.username}</li>`).join('');

   document.getElementById('#athlete').innerHTML = `<ul>${markup}</ul>`;
}

fetch('./data/athlete.json')
    .then( data => data.json() )
    .then( callback );