export {}

chrome.runtime.onInstalled.addListener((details) => {
    console.log('[background.js] onInstalled', details);
});

chrome.runtime.onConnect.addListener((port) => {
    console.log('[background.js] onConnect', port)
});

chrome.runtime.onStartup.addListener(() => {
    console.log('[background.js] onStartup')
});

chrome.runtime.onSuspend.addListener(() => {
    console.log('[background.js] onSuspend')
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.active) {
        chrome.tabs.sendMessage(tabId, { type: 'page-rendered'});
    }
    if (tab.active && changeInfo.status === "complete") {
        chrome.tabs.sendMessage(tabId, { type: 'page-rendered-anime365'});
    }
})
