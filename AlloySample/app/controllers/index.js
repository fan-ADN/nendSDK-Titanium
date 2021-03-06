function doClick(e) {
	ad.showInterstitial();
}

var ad = require('net.nend');
ad.apiKey=Alloy.CFG.nendInterstitialApiKey;
ad.spotId=Alloy.CFG.nendInterstitialSpotId;
ad.createInterstitial();

$.nadView.addEventListener('receive', function(e){
    Ti.API.info('banner receive');
});

$.nadView.addEventListener('error', function(e){
    Ti.API.info('banner error');
});

$.nadView.addEventListener('click', function(e){
    Ti.API.info('banner click');
});

$.nadView.addEventListener('information', function(e){
    Ti.API.info('banner information click');
});

if (OS_ANDROID) {
$.nadIconsView.addEventListener('receive', function(e){
    Ti.API.info('icon receive');
});

$.nadIconsView.addEventListener('error', function(e){
    Ti.API.info('icon error');
});

$.nadIconsView.addEventListener('click', function(e){
    Ti.API.info('icon click');
});

$.nadIconsView.addEventListener('information', function(e){
    Ti.API.info('icon information click');
});
}

ad.addEventListener('interstitialLoadResult', function(e){
    Ti.API.info('interstitial LoadResult ResultCode =' + e.resultCode);
});

ad.addEventListener('interstitialShowResult', function(e){
    Ti.API.info('interstitial ShowResult ResultCode =' + e.resultCode);
});

ad.addEventListener('interstitialClick', function(e){
    Ti.API.info('interstitial Click ResultCode =' + e.resultCode);
});

$.index.open();
