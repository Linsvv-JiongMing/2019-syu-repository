Page({
  /**
  * 页面的初始数据
  */
  data: {
    videoPlay: null,

    vedio_data: [{
      title: '快速检测艾滋病试剂使用示范',
      url: 'https://v.youku.com/v_show/id_XODI5NzIwNzE2.html?spm=a2h0k.11417342.soresults.dtitle',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557573229111&di=93a1dfa503499c64cf9fca976bde09e8&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1280h720%2F20171223%2F7cbc-fypvuqf3634578.jpg',

    },
    {
      title: '公益视频：我是艾滋病感染者',
      url: 'https://v.youku.com/v_show/id_XMTU3MDE2Mjg5Ng==.html?spm=a2h0k.11417342.soresults.dtitle',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557573485742&di=d61e4b141d3fae746f147a6c3ed2411f&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20091202%2FImg268616526.jpg'
    },
    {
      title: '得了艾滋病的后果',
      url: 'https://v.youku.com/v_show/id_XNDE4MTg2NTA0NA==.html?spm=a2h0k.11417342.soresults.dtitle',
      img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=582997208,3041519991&fm=26&gp=0.jpg'
    },
    {
      title: '未来人类能消灭艾滋病吗？',
      url: 'https://v.youku.com/v_show/id_XMTg0MTIxMDUxMg==.html?spm=a2h0k.11417342.soresults.dposter',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557573608564&di=837575cd5366ce4edb6058e2a79393e3&imgtype=0&src=http%3A%2F%2Fp3.ssl.cdn.btime.com%2Ft01d91724eab78aea59.jpg%3Fsize%3D504x600'
    },
    ]
  },

  // 点击cover播放，其它视频结束
  videoPlay: function (e) {
    var _index = e.currentTarget.id
    this.setData({
      _index: _index
    })
    //停止正在播放的视频
    var videoContextPrev = wx.createVideoContext(this.data._index)
    videoContextPrev.stop();

    setTimeout(function () {
      //将点击视频进行播放
      var videoContext = wx.createVideoContext(_index)
      videoContext.play();
    }, 500)
  },
})