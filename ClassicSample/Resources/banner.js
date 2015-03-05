Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'BannerType',
    backgroundColor:'#fff'
});

var ad = require('net.nend');
var adView;
if (Ti.Platform.osname == 'android') {
	adView = ad.createView({
	spotId: 3174,
	apiKey: 'c5cb8bc474345961c6e7a9778c947957ed8e1e4f',
	width: '320dp',
	height: '50dp'
	});
} else {
	adView = ad.createView({
	spotId: 3172,
	apiKey: 'a6eca9dd074372c898dd1df549301f277c53f2b9',
	width: 320,
	height: 50
	});	
}

win.add(adView);

var label = Ti.UI.createLabel({
	color:'#000000',
	text:'back',
	height:'auto',
	width:'auto',
	top: 30
});

//Add behavior for UI
label.addEventListener('click', function(e) {
	Ti.API.info('Back');
	win.close();
	Titanium.UI.currentWindow.close();
});

win.add(label);

win.open();