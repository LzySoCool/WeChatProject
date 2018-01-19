// pages/index/map/main.js

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitudeInit: 0,
    longitudeInit: 0,
    circles: [
      // latitude: 25.819596097748395,
      // longitude: 114.91951962432861,
      // color: "#fff",
      // fillColor: "#000000",
      // radius: 2
    ],
    markers: []
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getLocation({
      success: function (res) {
        wx.getLocation({
          type: 'gcj02',
          success: function (res) {
            var latitude = res.latitude
            var longitude = res.longitude
            _this.setData({
              latitudeInit: latitude,
              longitudeInit: longitude,
              markers: [{
                id: "0",
                latitude: res.latitude,
                longitude: res.longitude,
                width: 10,
                height: 10,
              }, {
                id: "1",
                latitude: 25.8183598961112,
                longitude: res.longitude,
                width: 10,
                height: 10,
              }],
              circles: [{
                latitude: res.latitude,
                longitude: res.longitude,
                color: '#FF0000DD',
                fillColor: '#7cb5ec88',
                radius: 300,
                strokeWidth: 1
              }]
            })
            console.log(_this.data.latitudeInit)
            console.log(_this.data.longitudeInit)
          },
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  chooseLocation: function() {
    var _this = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.chooseLocation({
                success: function(res) {
                  // _this.setData({
                  //   circles: [{
                  //     latitude: res.latitude,
                  //     longitude: res.longitude,
                  //     color: '#555555',
                  //     fillColor: '#000000',
                  //     radius: 2
                  //   }]
                  // })
                  console.log(res.latitude)
                  console.log(res.longitude)
                },
              })
            }
          })
        }
      }
    })
  }
})