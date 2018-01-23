// pages/index/publishTask/taskDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskDetail: {
      id: 1,
      title: '带份饭',
      taskContent: '某某店的某某饭，多放辣椒，不要香菜',
      money: 45,
      address: '中航国际大厦10楼，斯蒂芬斯蒂芬水电费胜多负少的发生的放松放松电风扇',
      time: '2018-01-04',
      phone: '13317071014',
      latitude: 25.82751,
      longitude: 114.92085,
      isSelect: 2//任务状态：1未领取 2已领取
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   * 查看位置，进行导航
   */
  navMap: function(e) {
    var _this = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = _this.data.taskDetail.latitude
        var longitude = _this.data.taskDetail.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name: _this.data.taskDetail.address
        })
      },
    })
  },

  getTask: function() {
    wx.showToast({
      title: '领取成功',
      image: '../../../images/happy.png',
      duration: 2000,
      mask: "true",
      success: function () {
        // setTimeout(function () {
        //   wx.navigateTo({
        //     url: 'taskList',
        //   })
        // }, 1000);

      }
    })
  },
  /**
   * 拨打电话
   */
  calling: function(e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      success: function() {
        console.log(e.currentTarget.dataset.phone)
      }
    })
  }
})