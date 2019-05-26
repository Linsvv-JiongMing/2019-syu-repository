var app = getApp()
Page({
  data: {
  },
  onLoad: function (options) {
  },

  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
        })
      }
    })
  },
})