const JSONBOX = "https://jsonbox.io/box_38908f7b48150c5878e8/rapperwebsite";
function addData() {
 

  let name = document.getElementById("name").value;
  if (name.length ==0) {
    alert("please enter a name");
    return;
  }

  let instagram = document.getElementById("instagram").value;
  if (instagram.length ==0) {
    alert("please enter a Instagram");
    return;
  }


  let data = {
    name: name,
    instagram: instagram
  };


  console.log(data);
  var req = new Request(JSONBOX, {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  });

  fetch(req).then(function(data) {
    console.info("POST succeeded");
  });
}

document.getElementById("addButton").addEventListener("click", addData);
