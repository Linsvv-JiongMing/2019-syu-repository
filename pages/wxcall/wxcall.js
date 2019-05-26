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

    var data = {
      "datas": [
        {
          "id": 1, 
          "imgurl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1386711945,2472773964&fm=26&gp=0.jpg", //图片
          "name": "丁老师",
          "description": "领队老师",
          "wx": "123"
        },
        {
          "id": 2,
          "imgurl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1386711945,2472773964&fm=26&gp=0.jpg",
          "name": "张池",
          "description": "开发人员",
          "wx": "132"
        },
        {
          "id":3,
          "imgurl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1386711945,2472773964&fm=26&gp=0.jpg",
          "name":"闫鑫桐",
          "description":"心理咨询",
          "wx":"213"
        },
        {
          "id":4,
          "imgurl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1386711945,2472773964&fm=26&gp=0.jpg",
          "name": "陈佳利",
          "description": "线下推广",
          "wx": "231"
        },
        {
          "id": 5,
          "imgurl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1386711945,2472773964&fm=26&gp=0.jpg",
          "name": "李胜众",
          "description": "开发人员",
          "wx": "312"
        },
        {
          "id": 6,
          "imgurl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1386711945,2472773964&fm=26&gp=0.jpg",
          "name": "李依航",
          "description": "开发人员",
          "wx": "321"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
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