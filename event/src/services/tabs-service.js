export class TabsService {
  constructor() {}

  getAllTabs() {
    var ret = [{title: "click anywhere"}];
  	chrome.tabs.query({
      // no properties set
    }, function(tabs) {
      ret[0] = tabs[0];
      for (var i=1; i<tabs.length; i++) {
        ret.push(tabs[i]);
      }
    });
    return ret;
  }
}