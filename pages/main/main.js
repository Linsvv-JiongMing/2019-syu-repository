//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    expers: [
      { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557568372232&di=99aaaa4a4744efe02f7e5d5e2f6cdccd&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151125%2Fmp43967057_1448414104083_1_th.jpeg' },    //http://353976.s81i.faiusr.com/2/113/AFEIuM0VEAIYACDsp-HdBSiQ_9SbBzDuBTj8AkBx.jpg
      { src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557568498506&di=2ec37582979c5104af5692359845c0c2&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FW9LElIWd8THNdH9AXzKvKP0edJxDlj68QAzlwdZvtQvqGFShGulEyOSnBRBlmkjZXcKVuaC9eRpf9aS7qg7thA%2F640%3Fwx_fmt%3Djpeg' },

      { src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557570181611&di=d8d611a3aa65eac5a6efad8406ad9eee&imgtype=0&src=http%3A%2F%2Fwww.svccc.net%2FUpLoad%2FImage%2F20180102041615378_big.jpg' }
 


    ]   
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    var data = {
      "datas": [
        {
          "title": "什么是艾滋病？",
          "detail": "\n人类免疫缺陷病毒（Human Immunodeficiency Virus;abbr:HIV），即艾滋病（AIDS，获得性免疫缺陷综合征）病毒，是造成人类免疫系统缺陷的一种病毒。1981年，人类免疫缺陷病毒在美国首次发现。它是一种感染人类免疫系统细胞的慢病毒（Lentivirus），属逆转录病毒的一种。"
        },
        {
          "title": "感染艾滋病的方式",
          "detail": "\nHIV感染者是传染源，曾从血液、精液、阴道分泌液、乳汁等分离得HIV。握手，拥抱，接吻，游泳，蚊虫叮咬，共用餐具，咳嗽或打喷嚏，日常接触等不会传播。日常生活中感染艾滋病主要是三种传播方式：性接触传播、血液传播和母婴传播。"
        }, 
        {
          "title": "如何预防艾滋病？",
          "detail": "\n一是要洁身自爱。性生活不洁、杂乱，是导致染上艾滋病的主要原因之一，所以要预防艾滋病，必须要避免不洁的性生活。另外，正确使用避孕套，能够减少感染艾滋病或者是性病的危险。二是不与他人共用注射器。一旦与体内有艾滋病病毒的人公用针头，被传染的几率非常高。三是注意用血安全，到正规的地方献血输血。因为如果不正规的话医疗器械可能重复使用不消毒，输血用的血也可能没有经过检测。四是留意伴侣身体状况。母婴传播是一个非常常见的途径，所以如果有艾滋病的女性一旦怀孕，应该立即引流，因为孩子感染上艾滋病的几率基本上是百分之百。"
        }
      ]
    };

    this.setData({
      carInfoData: data.datas
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(carInfoData);
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
