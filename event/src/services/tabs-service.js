export class TabsService {
  constructor() {}

  getAllTabs() {
    var ret = [];
  	chrome.tabs.query({
      // no properties set
    }, function(tabs) {
      for (var i=0; i<tabs.length; i++) {
        ret.push(tabs[i]);
      }
    });
    return ret;
  }
}