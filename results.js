const JSONBOX = "https://jsonbox.io/box_38908f7b48150c5878e8/rapperwebsite";



var url = new URL(window.location.href);
var searchterm = url.searchParams.get("search");

fetch(JSONBOX + "?q=name:*" + searchterm + "*")
.then(function(response) {
  return response.json();
})
.then(function(jsonData) {
  //console.log(jsonData);

  for (let item of jsonData) {
    $("#app").append("<li>"+item.name+"<a href='https://instagram.com/" + item.instagram + "'>" + item.instagram + "</a><img src='"+item.image+"'></li>");
  }
})
.catch(function(err) {
  console.log("Opps, Something went wrong!", err);
});
