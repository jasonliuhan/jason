function weixingzhefu(json) {
	var appId = json.data.result.appId; //公众号名称，由商户传入  
	var timeStamp = json.data.result.timeStamp //时间戳，自1970年以来的秒数
	var signType = json.data.result.signType //微信签名方式
	var paySign = json.data.result.paySign //微信签名
	var package = json.data.result.package //统一下单接口返回的prepay_id参数值
	var nonceStr = json.data.result.nonceStr //随机串
	var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
	if(wechatInfo[1] < "5.0") {
		alert('需要微信版本5.0以上才能使用微信支付');
		return false;
	} else {

		WeixinJSBridge.invoke(
			'getBrandWCPayRequest', {
				appId: '' + appId + '', // 必填，公众号的唯一标识
				timeStamp: '' + timeStamp + '', // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				nonceStr: '' + nonceStr + '', // 支付签名随机串，不长于 32 位
				package: '' + package + '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
				signType: '' + signType + '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				paySign: '' + paySign + '', // 支付签名
			},
			function(res) {
				// 支付成功后的回调函数
				WeixinJSBridge.log(res.err_msg);
				if(res.err_msg == "get_brand_wcpay_request:ok") {
					// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
					///////////跳转
					/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
					alert("支付成功");
					//跳转订单页

					window.location.href = 'http://m.30mifi.com/slhd/mika/gmList.html?userId=' + userId + '&tId=1';
				} else {
					alert("支付失败");
				}
			}
		);

	}
}