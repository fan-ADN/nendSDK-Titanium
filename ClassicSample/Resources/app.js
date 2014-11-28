// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'BannerType',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'BannerType',
    window:win1
});


// bannerAd
var ad = require('net.nend');
var adView;
if (Ti.Platform.osname == 'android') {
	adView = ad.createView({
	spotId: 3174,
	apiKey: 'c5cb8bc474345961c6e7a9778c947957ed8e1e4f',
	width: '320dp',
	height: '50dp',
	// top: '100dp'
	// left: '0dp'
	});
} else {
	adView = ad.createView({
	spotId: 3172,
	apiKey: 'a6eca9dd074372c898dd1df549301f277c53f2b9',
	width: 320,
	height: 50,
	//top: 100,
	//left: 10,
	});	
}
win1.add(adView);


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'IconType',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'IconType',
    window:win2
});


// iconViews.
var adIconsView;
if (Ti.Platform.osname == 'android'){
	// Android
	adIconsView = ad.createView ({
	adType: 'icon',
	spotId: 101282,
	apiKey: '0c734134519f25412ae9a9bff94783b81048ffbe',
	orientation:'horizontal',
	// top: '100dp',
	// left: '10dp',
	width: '300dp',
	height: '75dp'
});
} else {
	// iOS
	adIconsView = ad.createView ({
	adType: 'icon',
	spotId: 101281,
	apiKey: '2349edefe7c2742dfb9f434de23bc3c7ca55ad22',
	orientation:'horizontal',
	//top: 100,
	//left: 10,
	width: 300,
	height: 75
	});
}

win2.add(adIconsView);

//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
