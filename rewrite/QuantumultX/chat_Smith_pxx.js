/*
[rewrite_local]
# pxx917144686
# 此脚本用于 chat Smith APP  https://apps.apple.com/sg/app/ai-chatbot-ai-chat-smith-4/id1559479889?l=zh-Hans-CN
# 此脚本，已是混淆的版本，混淆代码，使其更难理解和复制。

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/pxx917144686/ios/master/rewrite/QuantumultX/chat_Smith_pxx.js

[MITM]
hostname = buy.itunes.apple.com

*/

var _0x1a2b=["\uD83D\uDC95\uD83D\uDC9C\uD83D\uDC97\uD83D\uDC9A\uD83D\uDC99","\x70\x78\x78\x39\x31\x37\x31\x34\x34\x36\x38\x36","\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74","\x63\x68\x61\x74\x20\x41\x49","\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x2E\x6D\x65\x2F\x47\x75\x64\x69\x6E\x67\x38\x38","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x72\x65\x63\x65\x69\x70\x74\x2E\x69\x6E\x5F\x61\x70\x70","\x6C\x61\x74\x65\x73\x74\x5F\x72\x65\x63\x65\x69\x70\x74\x5F\x69\x6E\x66\x6F","\x70\x65\x6E\x64\x69\x6E\x67\x5F\x72\x65\x6E\x65\x77\x61\x6C\x5F\x69\x6E\x66\x6F","\x6A\x73\x6F\x6E\x69\x66\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x62\x6F\x64\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x77\x65\x72\x63\x61\x73\x65","\x64\x65\x6C\x65\x74\x65","\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74","\x6B\x65\x79","\x68\x65\x61\x64\x65\x72\x73","\x72\x65\x70\x6C\x61\x63\x65","\x6D\x61\x70","\x5E\x5B\x61\x2D\x7A\x5D\x2B\x24","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x69\x6E\x63\x6C\x75\x64\x65","\x74\x6F\x4A\x53\x4F\x4E","\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65\x5F\x6D\x73","\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65","\x45\x74\x63\x2F\x47\x4D\x54","\x41\x6D\x65\x72\x69\x63\x61\x2F\x4C\x6F\x73\x5F\x41\x6E\x67\x65\x6C\x65\x73","\x66\x61\x6C\x73\x65","\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x5F\x69\x64","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x5F\x69\x64","\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65","\x69\x6E\x5F\x69\x6E\x74\x72\x6F\x5F\x6F\x66\x66\x65\x72\x5F\x70\x65\x72\x69\x6F\x64","\x69\x6E\x5F\x61\x70\x70\x5F\x6F\x77\x6E\x65\x72\x73\x68\x69\x70\x5F\x74\x79\x70\x65","\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x5F\x67\x72\x6F\x75\x70\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72","\x77\x65\x62\x5F\x6F\x72\x64\x65\x72\x5F\x6C\x69\x6E\x65\x5F\x69\x74\x65\x6D\x5F\x69\x64","\x65\x78\x70\x69\x72\x65\x73\x5F\x64\x61\x74\x65\x5F\x6D\x73","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x64\x61\x74\x65","\x41\x6D\x65\x72\x69\x63\x61\x2F\x4C\x6F\x73\x5F\x41\x6E\x67\x65\x6C\x65\x73","\x65\x78\x70\x69\x72\x61\x74\x69\x6F\x6E\x5F\x69\x6E\x74\x65\x6E\x74","\x61\x75\x74\x6F\x5F\x72\x65\x6E\x65\x77\x5F\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64","\x69\x6E\x5F\x62\x69\x6C\x6C\x69\x6E\x67\x5F\x72\x65\x74\x72\x79\x5F\x70\x65\x72\x69\x6F\x64","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x5F\x69\x64","\x61\x75\x74\x6F\x5F\x72\x65\x6E\x65\x77\x5F\x73\x74\x61\x74\x75\x73","\x70\x78\x78"];
var guding = {};
var guding6 = JSON[_0x1a2b[9]](typeof $response != _0x1a2b[13] && $response[_0x1a2b[12]] || null);

Object[_0x1a2b[21]]($request[_0x1a2b[18]])[_0x1a2b[20]]((key) => {
    if (key === _0x1a2b[16]) {
        const lowerKey = key[_0x1a2b[22]]();
        $request[_0x1a2b[18]][lowerKey] = $request[_0x1a2b[18]][key];
        delete $request[_0x1a2b[18]][key];
    }
});

var UA = $request[_0x1a2b[18]][_0x1a2b[1]];
var uaProductMapping = {
    [_0x1a2b[2]]: {
        [_0x1a2b[3]]: _0x1a2b[0]
    }
};

var receipt = {
    quantity: "1",
    purchase_date_ms: "1686002766000",
    expires_date: "6666-06-06 06:06:06 Etc/GMT",
    expires_date_pst: "6666-06-06 06:06:06 America/Los_Angeles",
    is_in_intro_offer_period: _0x1a2b[28],
    transaction_id: "666666666666666",
    is_trial_period: _0x1a2b[28],
    original_transaction_id: "666666666666666",
    purchase_date: "2024-06-26 06:06:06 Etc/GMT",
    product_id: _0x1a2b[4],
    original_purchase_date_pst: "2024-06-26 06:06:06 America/Los_Angeles",
    in_app_ownership_type: "PURCHASED",
    subscription_group_identifier: "20877951",
    original_purchase_date_ms: "1686002766000",
    web_order_line_item_id: "666666666666666",
    expires_date_ms: "148204937166000",
    purchase_date_pst:
