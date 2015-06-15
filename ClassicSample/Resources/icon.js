Titanium.UI.setBackgroundColor('#000');

var win = Titanium.UI.createWindow({  
    title:'BannerType',
    backgroundColor:'#fff'
});

if (Ti.Platform.osname == 'android'){
	var ad = require('net.nend');

	var adIconsView;
	// Android
	adIconsView = ad.createView ({
		adType: 'icon',
		spotId: 101282,
		apiKey: '0c734134519f25412ae9a9bff94783b81048ffbe',
		orientation:'horizontal',
		width: '300dp',
		height: '75dp'
	});
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
}

win.open();