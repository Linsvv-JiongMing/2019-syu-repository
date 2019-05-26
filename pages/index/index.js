Page({

  /**
   * 页面的初始数据
   */
  data: {
    ips: [
      { 
         id: "1",
         title: "①阅读说明书", 
         isSelect: true,
         description: "① 检测前仔细阅读说明书，弄清操作步骤   ② 将手洗净，为采血做好准备，环境温度较低时，请使用热水。",
         url:"/asset/img/bkg.png"
      },

      {
         id: "2", 
         title: "②认识试纸", 
         isSelect:false,
        description: "①打开试纸包装，如图，每份韩国SD试纸（4代）包括：试纸、稀释液、无痛采血针、备用手动针、酒精棉、吸管2支、说明书。② 韩国SD试纸（4代）为单人份独立包装，撕开铝铂袋取出试纸。如图，试纸被嵌在塑料盒内，表锚透明塑料盖，可以看到底板标有清楚的标识，C为质控线，T为检测线（T1检测p24抗原，T2检测HIV抗体），S(圆孔)为加样处；" ,
         url:'/asset/img/222.png',
      },

      { 
         id: "3", 
         title: "③刺指加血",
         isSelect:false,
        description: "① 拧掉无痛采血针的针柄，准备刺指；     ② 用酒精棉对待刺手指消毒(一般为左手中指)并凉干，轻甩几次手臂，将血液甩至指端；③ 用待刺手指按压无痛采血针开关，钢针会快速从圆孔内弹出并缩回，刺指无痛感；",
         url:'/asset/img/333.jpg',
      },

      { 
         id: "4", 
         title: "④加稀释液", 
         isSelect: false,
        description: "① 指肚向上，轻轻挤压创口周围，待形成血珠后，使用吸管吸取血液并加至试纸的加样处(S).② 等待些许，待血珠渗入加样处(S)的反应垫后，再滴加3-4滴稀释液。注意：无痛采血针只能弹一次，刺指前请准备好。加血量为1大滴或2滴，以全部染红浸透加样处(S)为准。" ,
         url:'/asset/img/444.jpg',
      },

      { 
         id: "5",
         title: "⑤查看检测结果", 
         isSelect: false,
        description: "① 阴性(-)结果：仅质控线（C）变红，说明是这一个安全的结果。② 阳性()结果：有质控线（C） 检测线（T）2条红线（T1或T2），这是一个危险的结果，说明有可能感染HIV。③ 阳性()结果：有质控线（C） 检测线（T）3条红线（T1和T2），这是一个危险的结果，说明有可能感染HIV。④ 无效的结果：质控线（C）没有变红，说明检测无效，为避免检测失败，加血量需要1大滴。",
         url:'/asset/img/555.jpg',
      },
        ],
    content:"艾滋检测最好的途径当然是去医院。但是如果由于各种原因不想去医院检测，我们也可以通过艾滋试纸进行自测。点击上述按钮即可获取自我检测的详细步骤，滑动图片更便于理解操作哦。"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },

  /**
    * item点击事件
    */
  onIpItemClick: function (event) {
    console.log(event);
    var id = event.currentTarget.dataset.item.id;
    var curIndex = 0;
    for (var i = 0; i < this.data.ips.length; i++) {
      if (id == this.data.ips[i].id) {
        this.data.ips[i].isSelect = true;
        curIndex = i;
      } else {
        this.data.ips[i].isSelect = false;
      }
    }
    this.setData({
      content:this.data.ips[curIndex].description,
      ips: this.data.ips,
    });
  },

  text:function(event){
    consloe.log(event);
    var id = event.currentTarget.dataset.item.id;
    var curIndex = 0;
    for (var i = 0; i < this.data.ips.length; i++) {
      if (id == this.data.ips[i].id) {
        this.data.ips[i].isSelect = true;
        curIndex = i;
      } else {
        this.data.ips[i].isSelect = false;
      }
    }
    this.setData({
      content: this.data.ips[curIndex].url,
      ips: this.data.ips,
    });
  },




})