// pages/index/publishTask/task.js

//获取应用实例
const app = getApp()

// 引入SDK核心类
var QQMapWX = require('../../../resource/qqmap-wx-jssdk.js');

var demo = new QQMapWX({
  key: 'DHYBZ-2R5KX-ZPO44-TXE3Z-WPXW2-WNBOD' // 必填腾讯地图开发者秘钥
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image1: '../../../images/name.png',
    image2: '../../../images/phone.png',
    image3: '../../../images/money.png',
    image4: '../../../images/address.png',
    image5: '../../../images/describe.png',
    image6: '../../../images/calenda.png',
    image7: '../../../images/time.png',
    image8: '../../../images/title.png',
    address: null,
    dates: null,
    time: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
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
              longitudeInit: longitude
            })
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
              var address = addressRes.result.formatted_addresses.recommend;
              _this.setData({
                address: address
              })
            },
            fail: function (e) {
              console.log(e)
            }
          })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (app.globalData.address) {
      console.log('返回地址')
      this.setData({
        address: app.globalData.address
      })
    }
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

  /**
   * 输入框获取焦点时
   */
  selected: function (e) {
    var image = e.currentTarget.dataset.image;
    var imageindex = e.currentTarget.dataset.imageindex;
    switch (imageindex) {
      case '1':
        this.setData({
          image1: image
        })
      break;
      case '2':
        this.setData({
          image2: image
        })
      break;
      case '3':
        this.setData({
          image3: image
        })
      break;
      case '4':
        this.setData({
          image4: image
        })
      break;
      case '5':
        this.setData({
          image5: image
        })
        break;
      case '6':
        this.setData({
          image6: image
        })
        break;
      case '7':
        this.setData({
          image7: image
        })
        break;
      case '8':
        this.setData({
          image8: image
        })
        break;
    }
  },

  /**
   * 输入框失去焦点时
   */
  lose: function (e) {
    var image = e.currentTarget.dataset.images;
    var imageindex = e.currentTarget.dataset.imageindex;
    switch (imageindex) {
      case '1':
        this.setData({
          image1: image
        })
        break;
      case '2':
        this.setData({
          image2: image
        })
        break;
      case '3':
        this.setData({
          image3: image
        })
        break;
      case '4':
        this.setData({
          image4: image
        })
        break;
      case '5':
        this.setData({
          image5: image
        })
        break;
      case '6':
        this.setData({
          image6: image
        })
        break;
      case '7':
        this.setData({
          image7: image
        })
        break;
      case '8':
        this.setData({
          image8: image
        })
        break;
    }
  },

  /**
   * 点击选择位置
   */
  selectAddr: function(){
    wx.navigateTo({
      url: '../map/address',
    })
    
  },

  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },

  //  点击城市组件确定事件  
  bindTimeChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  complate: function (){
    wx.showToast({
      title: '发布成功',
      image: '../../../images/happy.png',
      duration: 2000,
      mask: "true",
      success: function(){
        setTimeout(function () {
          wx.navigateTo({
            url: 'taskList',
          })
        }, 1000);

      }
    })
  }

})