/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable */

console.log("background page is ok")

URLDATA = null,
COOKIESDATA = null,
    chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (var key in changes) {
            var storageChange = changes[key];
            console.log('Storage key "%s" in namespace "%s" changed. ' +
                        'Old value was "%s", new value is "%s".',
                        key,
                        namespace,
                        storageChange.oldValue,
                        storageChange.newValue);
            }
    });
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        console.log(request);
        switch (request.cmd) {
            case 'inject':
                geturl()
                break;
            case 'popup':
                switch (request.click) {
                    case 'geturl':
                        sendResponse(URLDATA);
                        break;
                    case 'getcookies':
                        getcookies(URLDATA)
                        sendResponse(COOKIESDATA);
                        break;
                    case 'do':
                        sendResponse('sendurl success');
                        // eslint-disable-next-line no-undef
                        chrome.runtime.sendMessage(
                            { cmd: "background", click: "sendurl", data: URLDATA },
                            function (response) {
                                console.log("response", response);
                            }
                        );
                        break;
                    default:
                        sendResponse('OK');
                        break;
                }
                break;
            default:
                sendResponse('OK');
                break;

        }
        sendResponse('OK');
    });

function geturl() {
    let data = chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        URLDATA = url
        console.log('url--', url);
        return url
    }
    );
    return data;
}

function getcookies(url) {
    let data = chrome.cookies.getAll({ url }, function (cookies) {
        const resList = cookies.map(item => {
            return `${item.name}=${item.value}`
        })
        const cookieStr = resList.join(";")
        console.log("cookies-----", cookieStr);
        COOKIESDATA = cookieStr
        return cookieStr;
    });
    return data;
}