export class TabsService {
  constructor() {}

  getAllTabs() {
    var ret = [];
  	chrome.tabs.query({
      currentWindow: true
    }, function(tabs) {
      for (var i=0; i<tabs.length; i++) {
        ret.push(tabs[i].url);
      }
    });
    return ret;
  }
}