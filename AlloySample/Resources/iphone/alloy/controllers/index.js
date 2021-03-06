function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClick() {
        ad.showInterstitial();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.mywin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "mywin"
    });
    $.__views.nadView = Alloy.Globals.nendAd.createView({
        bottom: 0,
        apiKey: Alloy.CFG.nendApiKey,
        spotId: Alloy.CFG.nendSpotId,
        id: "nadView"
    });
    $.__views.mywin.add($.__views.nadView);
    $.__views.tab1 = Ti.UI.createTab({
        title: "BannerType",
        window: $.__views.mywin,
        id: "tab1"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.mywin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "mywin"
    });
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 12
        },
        text: "show interstitial",
        id: "label"
    });
    $.__views.mywin.add($.__views.label);
    doClick ? $.addListener($.__views.label, "click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.tab3 = Ti.UI.createTab({
        title: "InterstitialType",
        window: $.__views.mywin,
        id: "tab3"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ad = require("net.nend");
    ad.apiKey = Alloy.CFG.nendInterstitialApiKey;
    ad.spotId = Alloy.CFG.nendInterstitialSpotId;
    ad.createInterstitial();
    $.nadView.addEventListener("receive", function() {
        Ti.API.info("banner receive");
    });
    $.nadView.addEventListener("error", function() {
        Ti.API.info("banner error");
    });
    $.nadView.addEventListener("click", function() {
        Ti.API.info("banner click");
    });
    ad.addEventListener("interstitialLoadResult", function(e) {
        Ti.API.info("interstitial LoadResult ResultCode =" + e.resultCode);
    });
    ad.addEventListener("interstitialShowResult", function(e) {
        Ti.API.info("interstitial ShowResult ResultCode =" + e.resultCode);
    });
    ad.addEventListener("interstitialClick", function(e) {
        Ti.API.info("interstitial Click ResultCode =" + e.resultCode);
    });
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.addListener($.__views.label, "click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;