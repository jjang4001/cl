export class TabsService {
  constructor() {}

  getAllTabs() {
    // var ret = [{title: "click anywhere"}];
    var ret = [];
  	chrome.tabs.query({
      // no properties set
    }, function(tabs) {
      tabs.map(tab => {
        ret.push(tab);
      });
    });
    return ret;
  }
}