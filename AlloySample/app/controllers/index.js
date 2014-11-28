//<!-- nend banner -->
$.nadView.addEventListener('receive', function(e){
	Ti.API.info('nadView receive');
});
$.nadView.addEventListener('error', function(e){
	Ti.API.info('nadView error');
});
$.nadView.addEventListener('click', function(e){
	Ti.API.info('nadView click');
});

//<!-- nend icons  -->
$.nadIcons.addEventListener('receive', function(e){
	Ti.API.info('nadIcons receive');
});
$.nadIcons.addEventListener('error', function(e){
	Ti.API.info('nadIcons error');
});
$.nadIcons.addEventListener('click', function(e){
	Ti.API.info('nadIcons click');
});

$.index.open();
