/*
 * wechat API
 */
'use strict'
const config = require("./config.js");
const WechatAPI = require('co-wechat-api');
const api = new WechatAPI(config.appid, config.AppSecret);

module.exports = api