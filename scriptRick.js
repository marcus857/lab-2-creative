

window.onload=function(){
SetDefaultValue();

function SetDefaultValue() {
  const url2 = "https://rickandmortyapi.com/api/" + "character" + "?name=Rick Sanchez";
   fetch(url2)
     .then(function(response) {
       return response.json();
     }).then(function(json) {
       let forecast = "";
      let title = "<h3> All 'Rick' Characters </h3>";

       document.getElementById("title").innerHTML = title;

     for (let i=0; i < json.results.length; i++) {
 forecast += "<div class = \"item\">";
 forecast += "<p>" + "Name: " + json.results[i].name;
 forecast += '<img id = "pic" src="https://rickandmortyapi.com/api/' + "character" + "/avatar/" + json.results[i].id + '.jpeg"/>';
  forecast += "Status: " + json.results[i].status;
  forecast += "</br>Species: " + json.results[i].species;
  forecast += "</br>Gender: " + json.results[i].gender;
 forecast += "</p></div>";
     }
     document.getElementById("forecastResults").innerHTML = forecast;

     });
}

document.getElementById('search').addEventListener('click', function(event){
event.preventDefault();
let subject = document.getElementById('subject').value;
let s = document.getElementById('selector');
let type = s.options[s.selectedIndex].value;
// check if subject is empty
if (subject === "") {
  subject = "Rick";
}
// setup URL
let url = "https://rickandmortyapi.com/api/"  + type + "?name=" + subject;
// call API


fetch(url)
.then(function(response) {
  // make sure the request was successful
  if (response.status != 200) {
    let title = "<h3> No " + type + "'s by the name of " + subject + " </h3>";
    document.getElementById("title").innerHTML = title;
    throw Error(response.statusText);
    }
return response.json();
  
}).then(function(json){

  let itemList = "";
  console.log(json);

  if(type === "character"){
    let title = "<h3> All '" + subject + "' Characters </h3>";
    document.getElementById("title").innerHTML = title;

for (let i=0; i < json.results.length; i++) {
  itemList += "<div class = \"item\">";
  itemList += "<p>" + "Name: " + json.results[i].name + "</p>";
  itemList += '<img id = "pic" src="https://rickandmortyapi.com/api/' + "character" + "/avatar/" + json.results[i].id + '.jpeg"/>';
  itemList += "<p>Status: " + json.results[i].status;
  itemList += "</br>Species: " + json.results[i].species;
  itemList += "</br>Gender: " + json.results[i].gender;
  itemList += "</div>";
    }

  }

  if(type === "location"){
    let title = "<h3> All '" + subject + "' Locations </h3>";
    document.getElementById("title").innerHTML = title;
    for (let i=0; i < json.results.length; i++) {
  itemList += "<div class = \"item\">";
  itemList += "<p>" + "Name: " + json.results[i].name + "</p>";
  itemList += "<p>Type: " + json.results[i].type;
  itemList += "</br>Dimension: " + json.results[i].dimension;
  itemList += "</div>";
    }

  }

  if(type === "episode"){
    let title = "<h3> All '" + subject + "' Episodes </h3>";
    document.getElementById("title").innerHTML = title;
for (let i=0; i < json.results.length; i++) {
  itemList += "<div class = \"item\">";
  itemList += "<p>" + "Name: " + json.results[i].name + "</p>";
  itemList += "<p>Air Date: " + json.results[i].air_date;
  itemList += "</br>Episode: " + json.results[i].episode;
  itemList += "</div>";
    }

  }

    document.getElementById("forecastResults").innerHTML = itemList;

    });


});
}