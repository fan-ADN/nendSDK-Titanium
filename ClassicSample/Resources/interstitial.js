Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'BannerType',
    backgroundColor:'#fff'
});

var ad = require('net.nend');

var button = Ti.UI.createButton({
	title: 'show interstitial',
	color: 'black',
	width: 'auto',
	height: 'auto'
});

button.addEventListener('click', function(){
	ad.showInterstitial();
});

win.add(button);

var label = Ti.UI.createLabel({
	color:'#000000',
	text:String.format('Back'),
	height:'auto',
	width:'auto',
	top: 10
});
win.add(label);

//Add behavior for UI
label.addEventListener('click', function(e) {
	Ti.API.info('Back');
	win.close();
	Titanium.UI.currentWindow.close();
});

//Interstitialの生成
if (Ti.Platform.osname == 'android'){
  ad.apiKey='8c278673ac6f676dae60a1f56d16dad122e23516';
  ad.spotId='213206';
}else{
  ad.apiKey='308c2499c75c4a192f03c02b2fcebd16dcb45cc9';
  ad.spotId='213208';
}

ad.createInterstitial();

win.open();