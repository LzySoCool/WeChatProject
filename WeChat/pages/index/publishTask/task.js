// pages/index/publishTask/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image1: '../../../images/name.png',
    image2: '../../../images/phone.png',
    image3: '../../../images/money.png',
    image4: '../../../images/address.png'
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
    }
  },

  /**
   * 点击选择位置
   */
  selectAddr: function(){
    wx.chooseLocation({
      success: function (res) {
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