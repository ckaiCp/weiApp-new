//index.js
//获取应用实例
const { connect } = require("./../../libs/redux/wechat-weapp-redux.js");
const {} = require("./../../store/action.js");
var app = getApp();

const mapStateToData = state => ({

});

const mapDispatchToPage = dispatch => ({

});

const pageConfig = {
    data: {},
    //事件处理函数
    onLoad() {
        console.log("onload", "API-index");
    },
    onReady() {
        console.log("ready", "API-index");
    },
    onShow() {
        console.log("onshow", "API-index");
    },
    onHide() {
        console.log("onhide", "API-index");
    },
    onUnload() {
        console.log("onUnload", "API-index");
    },
    onPullDownRefresh() {
        console.log("onPullDownRresh", "API-index");
    },
    onReachBottom() {
        console.log("onReachBottom", "API-index");
    },
    onShareAppMessage() {

    }
};

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);