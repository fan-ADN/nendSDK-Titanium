Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'BannerType',
    backgroundColor:'#fff'
});

var ad = require('net.nend');

var adIconsView;
if (Ti.Platform.osname == 'android'){
	// Android
	adIconsView = ad.createView ({
	adType: 'icon',
	spotId: 101282,
	apiKey: '0c734134519f25412ae9a9bff94783b81048ffbe',
	orientation:'horizontal',
	width: '300dp',
	height: '75dp',
	iconCount: 4
});
} else {
	// iOS
	adIconsView = ad.createView ({
	adType: 'icon',
	spotId: 101281,
	apiKey: '2349edefe7c2742dfb9f434de23bc3c7ca55ad22',
	orientation:'horizontal',
	width: 300,
	height: 75,
	iconCount: 4
	});
}

win.add(adIconsView);


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

win.open();