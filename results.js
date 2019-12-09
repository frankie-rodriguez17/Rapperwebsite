const JSONBOX = "https://jsonbox.io/box_38908f7b48150c5878e8/rappers6";



var url = new URL(window.location.href);
var searchterm = url.searchParams.get("search");

fetch(JSONBOX + "?q=name:*" + searchterm + "*")
.then(function(response) {
  return response.json();
})
.then(function(jsonData) {
  //console.log(jsonData);

  for (let item of jsonData) {
    let name = "<p>" +item.name+"</p>";
    let instagram = "<p><a href='https://instagram.com/" + item.instagram + "'>" + item.instagram + "</a></p>";
    
    $("#app").append("<li>"+name+instagram+"<img src='"+item.image+"'></li>");
  }
})
.catch(function(err) {
  console.log("Opps, Something went wrong!", err);
});
