
function shoplyStorage(info){

  console.log(info.selectionText);
}

chrome.contextMenus.create({title: "Search with Shoply",
                             contexts:["selection"],
                              onclick: function(info){ shoplyStorage(info); }
});
