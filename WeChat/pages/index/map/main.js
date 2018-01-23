// pages/index/map/main.js

//获取应用实例
const app = getApp()
// 引入SDK核心类
var QQMapWX = require('../../../resource/qqmap-wx-jssdk.js');

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    map_width: 380,
    map_height: 380,
    latitudeInit: 0,
    longitudeInit: 0,
    radius: '0.5',
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
    var demo = new QQMapWX({
      key: 'DHYBZ-2R5KX-ZPO44-TXE3Z-WPXW2-WNBOD' // 必填腾讯地图开发者秘钥
    });
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
                radius: parseFloat(_this.data.radius)*1000,
                strokeWidth: 1
              }]
            })
            console.log(_this.data.latitudeInit)
            console.log(_this.data.longitudeInit)
          },
        }),
        demo.reverseGeocoder({
          //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          coord_type: 5,
          success: function (addressRes) {
            console.log(addressRes)
            var address = addressRes.result.formatted_addresses.recommend;
            console.log(address)
          },
          fail: function (e) {
            console.log(e)
          }
        })
      },
    }),
      //set the width and height
      // 动态设置map的宽和高
      wx.getSystemInfo({
        success: function (res) {
          _this.setData({
            map_width: res.windowWidth
            , map_height: res.windowHeight-100
          })
        }
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
        console.log(res)
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
                  console.log(res)
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
  //获取中间点的经纬度，并mark出来
  , getLngLat: function () {
    var that = this;
    this.mapCtx = wx.createMapContext("myMap");
    this.mapCtx.getCenterLocation({
      success: function (res) {

        that.setData({
          longitude: res.longitude
          , latitude: res.latitude
          , markers: [
            {
              id: 0
              , longitude: res.longitude
              , latitude: res.latitude
              , width: 30
              , height: 30
            }, {
              id: "1",
              latitude: 25.8183598961112,
              longitude: 114.92085,
              width: 10,
              height: 10,
            }
          ],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: parseFloat(that.data.radius)*1000,
            strokeWidth: 1
          }]
        })

      }
    })
  }, 
  regionchange(e) {
    // 地图发生变化的时候，获取中间点，也就是用户选择的位置
    if (e.type == 'end') {
      this.getLngLat()
    }
  },
  scopeSelect: function(e){
    console.log(e)
    this.setData({
      radius: e.detail.value
    });
    console.log(e.detail.value)
    this.getLngLat();
  },

  taskList: function(){
    wx.navigateTo({
      url: '../publishTask/taskList'
    })
  }
})