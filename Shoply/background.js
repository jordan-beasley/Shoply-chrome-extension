
function shoplyStorage(info){

  console.log(info.selectionText);

  chrome.extension.onConnect.addListener(function(port){
    port.postMessage(info.selectionText); // send the selected text to popup.js
  });

}

// adding an option to the context menu in the browser
chrome.contextMenus.create({title: "Search with Shoply",
                             contexts:["selection"],
                              onclick: function(info){ shoplyStorage(info); }
});

// test connection
/*chrome.extension.onConnect.addListener(function(port) {
     console.log("Connected .....");
     port.onMessage.addListener(function(msg) {
          console.log("message recievedm" + msg);
          port.postMessage("Hi Popup.js");
     });
});*/
