
function something(value){

  document.getElementById("test").innerHTML = value;


}


function doTheTing(){


  var area = document.getElementById("contentArea");

  // variables for the information needed to populate PDMs
  var productImage = "Placeholder.png";
  var url = "https://google.com";
  var siteName = "Google";
  var price = "100.00";

  // create and add the PDMs to the page
  var m = document.createAttribute("id");
  m.value = "product";
  var Outer_div = document.createElement("div");
  Outer_div.className = "PDM";
  Outer_div.setAttributeNode(m);
  var method = document.createAttribute("onclick");
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.src = productImage;
  var target =  "_blank";
  var a = document.createElement("a");
  a.target = target;
  a.href = url;
  var site = document.createElement("h3");
  site.innerHTML = siteName;
  var pTag = document.createElement("p");
  pTag.innerHTML = price;

  //a.append(site);
  div.append(img);
  //div.append(a);
  div.append(site);
  div.append(pTag);

  //a.append(site);
  a.append(div);

  Outer_div.append(a);
  area.append(Outer_div);




}

function followURL(){
  //var g = this.getAttribute("");
  //chrome.tabs.create({url: "https://google.com"});
}

$(document).ready(function(){

  for(var j = 0; j < 3; j++){
    doTheTing();
  }

  //chrome.tabs.create({url: "https://google.com"});

  var products = document.getElementsByClassName('PDM');

  /*for(var i = 0; i < products.length; i++){

    products.addEventListener('click', followURL(), false);

  }*/







});
