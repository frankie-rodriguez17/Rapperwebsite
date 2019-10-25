const JSONBOX = "https://jsonbox.io/box_38908f7b48150c5878e8/rapperwebsite";

fetch(JSONBOX)
.then(function(response) {
  return response.json();
})
.then(function(jsonData) {
  //console.log(jsonData);

  for (let item of jsonData) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(item.name);
    var instagramNode = document.createTextNode(item.instagram);
    node.appendChild(textnode);
    node.appendChild(instagramNode);
    document.getElementById("app").appendChild(node);
    $("#app").append("<a href='https://instagram.com/" + item.instagram + "'>" + item.instagram + "</a>");
  }
})
.catch(function(err) {
  console.log("Opps, Something went wrong!", err);
});
