
function createPDM(){


  var area = document.getElementById("contentArea");

  // variables for the information needed to populate PDMs
  var productImage = "Placeholder.png";
  var url = "reaspberry pi"; //"https://google.com";
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

// establish connection with background script
var port = chrome.extension.connect({
     name: "Transfer Connection"
});

port.onMessage.addListener(function(msg) {
     //console.clear();
     console.log(msg);

     // send the msg to seperate functions that will populate the popup

});

$(document).ready(function(){

  for(var j = 0; j < 11; j++){
    createPDM();
  }

  /*
  * QUERY EXAMPLE shopping
  * https://www.google.com/search?output=search&tbm=shop&q=raspberry+pi
  *
  * QUERY EXAMPLE google search
  * https://www.google.com/#q=raspberry+pi
  */


  /*$.get( "https://google.com", function( data ) {

    console.log(data);

  });*/

  //var products = document.getElementsByClassName('PDM');

});
