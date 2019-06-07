'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId, info, tab){
  if (tab.url.includes('https://www.amazon.co.jp')) {
    // Twitter のページなら有効になる
    console.log(tab.url)
    chrome.pageAction.show(tabId);
  }
  // chrome.pageAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
