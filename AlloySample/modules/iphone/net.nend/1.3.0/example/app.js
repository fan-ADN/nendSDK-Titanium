var win = Ti.UI.createWindow({
    backgroundColor:'white'
});
win.open();

var ad = require('net.nend');

// Banner Type
var adView = ad.createView({
    spotId: 3172,
    apiKey: 'a6eca9dd074372c898dd1df549301f277c53f2b9',
    width: 320,
    height: 50,
    bottom: 0,
});

// Icons Layout View Type
var iconsAdView = ad.createIconsView({
	adType:'icon',
	bottom:125,
	width: 300,
	height: 75,
	spotId:101281,
	apiKey:'2349edefe7c2742dfb9f434de23bc3c7ca55ad22',
    orientation:'horizontal',
	textColor:'RED',
});

//##################################
	
	// 受信成功通知
	adView.addEventListener('receive',function(e){
	    Ti.API.info('adView receive');
	});
	// 受信エラー通知
	adView.addEventListener('error',function(e){
	    Ti.API.info('adView error');
	});
	// クリック通知
	adView.addEventListener('click',function(e){
	    Ti.API.info('adView click');
	});
	
	// 受信成功通知
	iconsAdView.addEventListener('receive',function(e){
	    Ti.API.info('iconsAdView receive');	    
	});
	// 受信エラー通知
	iconsAdView.addEventListener('error',function(e){
	    Ti.API.info('iconsAdView error');
	});
	// クリック通知
	iconsAdView.addEventListener('click',function(e){
	    Ti.API.info('iconsAdView click');
	});

//##################################

var btnLayout = Ti.UI.createView({
    layout: 'horizontal',
});

// 広告リロード停止ボタン
var pauseBtn = Ti.UI.createButton({
   title: 'pause', 
   width: '50%'
});
pauseBtn.addEventListener('click', function(e) {
    adView.pause();
    iconsAdView.pause();
});

// 広告リロード再開ボタン
var resumeBtn = Ti.UI.createButton({
   title: 'resume', 
   width: '50%'
});
resumeBtn.addEventListener('click', function(e) {
    adView.resume();
    iconsAdView.resume();
});

btnLayout.add(pauseBtn);
btnLayout.add(resumeBtn);
win.add(btnLayout);

win.add(adView);
win.add(iconsAdView);