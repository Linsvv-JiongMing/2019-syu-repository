// pages/samples/samples.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var sampleList = {
      datas: [
        {
          "id": 1,
          "cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558166875&di=72a6aa677f3e324eacb7eea24d1e9692&imgtype=jpg&er=1&src=http%3A%2F%2Fs16.sinaimg.cn%2Fmw690%2F006hnNxAgy6ZLDiRIlNcf%26amp%3B690",
          "title": "艾滋病的防治知识",
          "description":"\n关爱患者 拒绝歧视",
          "date": "2019-04-08 9:21"
        },
        {
          "id": 2,
          "cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557572256959&di=1d8a30d16a70598b53d5a4d64e3b9976&imgtype=0&src=http%3A%2F%2Fwww.hhyyxc.gov.cn%2Fueditor%2Fimage%2F201612%2F01110247462806.jpg",
          "title": "艾滋病感染者的日常护理",
          "description": "\n没有人是一座孤岛，背后总有人支持您！",
          "date": "2019-04-19 14:51"
        }, 
        /*{
          "id": 3,
          "cover": "http://458515.s81i.faiusr.com/2/101/AFEIk-4bEAIYACDKwMnfBSjf4rfhAzCyBTj8AkBl.jpg",
          "title": "课程·预约",
          "description": "\n人人都能学的心理学",
          "date": "2019-05-2 22:09"
        }*/
      ]
    };
    that.setData({
      sampleList: sampleList.datas
    })
  },


//添加的页面跳转
   1:function(){
     wx.navigateTo({
       url: '../essayone/essayone',
     })
   },


  2: function () {
    wx.navigateTo({
      url: '../essaytwo/essaytwo',
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

  }
})