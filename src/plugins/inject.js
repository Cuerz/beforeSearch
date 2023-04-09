console.log("This is injected into start")
// 发送消息
// 测试后台
chrome.runtime.sendMessage({ cmd: "inject" }, function (response) { console.log('response', response); });
//监听消息
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log(request)
//   console.log(sender)
//   sendResponse("yes")
// });

console.log("This is injected into end")