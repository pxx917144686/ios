/*
 * 新知卫星地图  需要登录 破解有效    @ pxx917144686



[rewrite_local]
^https:\/\/a\.xinzhi\.space\/api\/User\/getUserByToken url script-response-body https://github.com/pxx917144686/ios/blob/master/rewrite/QuantumultX/xinzhiweixingditu.js
[mitm] 
hostname = a.xinzhi.space
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var vipInfo = {
  "vip_type":"永久会员",
  "vip_expire": "2999-01-01 00:00:00",
  "is_vip": 1,
  "vip_day": 99999
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);

