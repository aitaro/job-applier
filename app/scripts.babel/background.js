'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId, info, tab){
  if (tab.url.includes('https://job.axol.jp')) {
    // Twitter のページなら有効になる
    // console.log(add(3,6))
    // console.log('hogehoge')
    chrome.pageAction.show(tabId);
    // fill(1,2);
  }
  // chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
