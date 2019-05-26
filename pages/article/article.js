// pages/article.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  navbar: ['全部','自爱','励志',"治愈"],
      currentTab: 0,
    counterId: '',
    openid: '',
    count: null,
    queryResult: '',

  },

  //响应点击导航栏
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      TypeItem : that.data.navbar[that.data.currentTab]
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var allArticle = {
      "datas": [
        {
          "id": 1,
          "cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557573919867&di=bb8486ca4aa2e0c5124ccc5008f7a5dc&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FuIpRM5MSvkNpQHnYkerFDXkJZX38SZWPDCb8G0LYvQXRP1551592732856.jpeg",
          "title": "为何不可有多伴侣？",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 2,
          "cover": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3946578258,847882725&fm=26&gp=0.jpg",
          "title": "艾滋病感染者：我仍能贡献社会！",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 3,
          "cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557574536299&di=c82ef18071159b015dcd731d2058a50f&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111109%2F2457331_223227005345_2.jpg",
          "title": "未来科技：全球首例治愈艾滋病",
          "date": "2018-09-08 14:00"
        },
        {
          "id": 4,
          "cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558169297&di=2f792c45aac97ab1380bc569863d1c33&imgtype=jpg&er=1&src=http%3A%2F%2Fcyegd2008.com%2Fupfiles%2F20161117160140.jpg",
          "title": "本团体的宗旨",
          "date": "2018-09-08 14:00"
        }
      ]
    };
    that.setData({
      allArticle: allArticle.datas,
      firstArticleList: allArticle.datas.slice(0, 1),
      secondArticleList: allArticle.datas.slice(1, 2),
      thirdArticleList: allArticle.datas.slice(2, 3),
    })
  },



  //添加跳转页面
  essay1:function(){
    wx.navigateTo({
      url: '../essay1/essay1',
    })
  },
  essay2: function () {
    wx.navigateTo({
      url: '../essay2/essay2',
    })
  },

  essay3: function () {
    wx.navigateTo({
      url: '../essay3/essay3',
    })
  },

  essay4: function () {
    wx.navigateTo({
      url: '../essay4/essay4',
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