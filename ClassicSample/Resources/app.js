Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

//win1 : banner type
var win1 = Titanium.UI.createWindow({  
    title:'BannerType',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    title:'BannerType',
    window:win1
});

var ad = require('net.nend');
var adView;
if (Ti.Platform.osname == 'android') {
	adView = ad.createView({
		spotId: 3174,
		apiKey: 'c5cb8bc474345961c6e7a9778c947957ed8e1e4f',
		bottom: 0,
		// isAdjust: true
	});
} else {
	adView = ad.createView({
		spotId: 3172,
		apiKey: 'a6eca9dd074372c898dd1df549301f277c53f2b9',
		bottom: 0,
		// isAdjust: true
	});	
}
win1.add(adView);


//win2:icon type (Android only)
if (Ti.Platform.osname == 'android') {
	var win2 = Titanium.UI.createWindow({  
	    title:'IconType',
	    backgroundColor:'#fff'
	});
	var tab2 = Titanium.UI.createTab({  
	    title:'IconType',
	    window:win2
	});
	var adIconsView;
	adIconsView = ad.createView ({
		adType: 'icon',
		spotId: 101282,
		apiKey: '0c734134519f25412ae9a9bff94783b81048ffbe',
		orientation:'horizontal',
		width: '300dp',
		height: '75dp',
		// textHidden: true,
		// iconSpaceEnabled: false,
		iconCount: 1
	});
	win2.add(adIconsView);
}


// win3 : interstitial type
var win3 = Titanium.UI.createWindow({  
    title:'InterstitialType',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    title:'InterstitialType',
    window:win3
});
var button = Ti.UI.createButton({
	title: 'show interstitial',
	color: 'black',
	width: 'auto',
	height: 'auto'
});
button.addEventListener('click', function(){
	ad.showInterstitial();
});
win3.add(button);

if (Ti.Platform.osname == 'android'){
  ad.apiKey='8c278673ac6f676dae60a1f56d16dad122e23516';
  ad.spotId=213206;
}else{
  ad.apiKey='308c2499c75c4a192f03c02b2fcebd16dcb45cc9';
  ad.spotId=213208;
}
ad.createInterstitial();

tabGroup.addTab(tab1);
if (Ti.Platform.osname == 'android') {
	tabGroup.addTab(tab2);  
}
tabGroup.addTab(tab3);  

tabGroup.open();

//Event Listener
adView.addEventListener('receive', function(e){
    Ti.API.info('banner receive');
});

adView.addEventListener('error', function(e){
    Ti.API.info('banner error');
});

adView.addEventListener('click', function(e){
    Ti.API.info('banner click');
});

adView.addEventListener('information', function(e){
    Ti.API.info('banner information click');
});

if (Ti.Platform.osname == 'android') {
	adIconsView.addEventListener('receive', function(e){
	    Ti.API.info('icon receive');
	});
	
	adIconsView.addEventListener('error', function(e){
	    Ti.API.info('icon error');
	});

	adIconsView.addEventListener('click', function(e){
	    Ti.API.info('icon click');
	});

	adIconsView.addEventListener('information', function(e){
	    Ti.API.info('icon information click');
	});
}

ad.addEventListener('interstitialLoadResult', function(e){
    Ti.API.info('interstitial LoadResult ResultCode = ' + e.resultCode);
});

ad.addEventListener('interstitialShowResult', function(e){
    Ti.API.info('interstitial ShowResult ResultCode = ' + e.resultCode);
});

ad.addEventListener('interstitialClick', function(e){
    Ti.API.info('interstitial Click ResultCode = ' + e.resultCode);
});
