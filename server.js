const Koa = require('koa');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const app = new Koa();
const cors = require('kcors');

// 访问目录下静态文件 http://example.com/openid.html
const static = require('koa-static');
const path = require('path');

// 菜单配置文件
const menu = require("./menu.js");
// 逻辑控制器
const controllers = require('./controllers.js');
// 微信配置信息
const config = require("./config.js");

// 核心module
const wechat = require('co-wechat');
const api = require("./wechat-api.js");

// 创建自定义菜单
let createMenu = async (ctx, next) => {
  let menuRes = await api.createMenu(menu);
  console.log('结果', menuRes);
}
createMenu();

// 不用理会
app.use(logger());
app.use(cors())
app.use(koaBody())

// 配置可访问静态文件目录
app.use(static(
  path.join(__dirname, './')
))

// 配置router 可用于推送模板消息等 直接调用 http://example.com/push
router
  .post('/push', controllers.pushHandler)

app.use(router.routes());

// 微信接收消息/返还消息 模块
app.use(wechat({
  appid: config.appid,
  token: config.token,
  encodingAESKey: config.encodingAESKey
}).middleware(async (message, ctx) => {
  // 微信输入信息就是这个 message
  // event类型 订阅
  // { ToUserName: 'gh_a8f57f2423fa',
  // FromUserName: 'ozFBV0kCvNIuLwEd_B-6Fa36UfSA',
  // CreateTime: '1524735492',
  // MsgType: 'event',
  // Event: 'subscribe',
  // EventKey: '' }

  // 消息类型
  // { ToUserName: 'gh_a8f57f2423fa',
  // FromUserName: 'ozFBV0kCvNIuLwEd_B-6Fa36UfSA',
  // CreateTime: '1524735388',
  // MsgType: 'text',
  // Content: '你好',
  // MsgId: '6548688626934741069' }

  // 普通回复
  console.log('receive message: ',message);
  // 字符串可组合 <a>标签 \n换行符等
  return '欢迎关注麦客多\n随时随地做介入!\n<a href="http://example.com">链接</a>';
  //你也可以这样回复text类型的信息
  // return {
  //   content: 'text object',
  //   type: 'text'
  // };
  // 回复一段音乐
  // return {
  //   type: "music",
  //   content: {
  //     title: "来段音乐吧",
  //     description: "一无所有",
  //     musicUrl: "http://mp3.com/xx.mp3",
  //     hqMusicUrl: "http://mp3.com/xx.mp3"
  //   }
  // };
  // 转发到客服接口
  // return {
  //   type: "customerService",
  //   kfAccount: "test1@test"
  // };
  // 回复高富帅(图文回复)
  // return [
  //   {
  //     title: '你来我家接我吧',
  //     description: '这是女神与高富帅之间的对话',
  //     picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
  //     url: 'http://nodeapi.cloudfoundry.com/'
  //   }
  // ];
}));

app.listen(8080);
