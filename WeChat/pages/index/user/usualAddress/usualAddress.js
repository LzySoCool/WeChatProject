// pages/index/user/usualAddress/usualAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [{
      id: 1,
      name: '李泽阳',
      phone: '13870746135',
      address: '中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼',
      isCheaked: 1
    }, {
      id: 2,
      name: '李泽阳',
      phone: '13870746135',
      address: '中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼',
      isCheaked: 0
      }, {
        id: 2,
        name: '李泽阳',
        phone: '13870746135',
        address: '中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼',
        isCheaked: 0
    }, {
      id: 2,
      name: '李泽阳',
      phone: '13870746135',
      address: '中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼',
      isCheaked: 0
      }, {
        id: 2,
        name: '李泽阳',
        phone: '13870746135',
        address: '中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼',
        isCheaked: 0
    }, {
      id: 2,
      name: '李泽阳',
      phone: '13870746135',
      address: '中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼中航国际大厦10楼',
      isCheaked: 0
    }]
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

  changeAdd: function (e) {
    var isChecked = parseInt(e.target.dataset.issct);
    var id = parseInt(e.target.dataset.id);
    var addressLists = this.data.addressList;
    var addressList = addressLists[id];
    addressList.isCheaked = isChecked;
    this.setData({
      addressList: addressLists
    })
    console.log(this.data.addressList)
  },

  /**
   * 编辑地址
   */
  updateAddress: function () {
    wx.navigateTo({
      url: 'updateAddress',
    })
  },

  /**
   * 删除地址
   */
  deleteAddress: function () {
    wx.showModal({
      confirmText: '删除',
      title: '删除地址',
      content: '确认要删除该地址吗？',
      success: function (e) {
        console.log(e)
      }
    })
  },

  /**
   * 增加地址
   */
  add_add: function () {
    wx.navigateTo({
      url: 'addAddress',
    })
  }
  })