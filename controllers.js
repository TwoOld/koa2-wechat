const api = require("./wechat-api.js");

module.exports = {
    pushHandler: async ctx => {
        console.log(ctx.request.body);
        let openid = 'ozFBV0kCvNIuLwEd_B-6Fa36UfSA';
        let templateid = 'FqKcy2PNjV82_GD8S4Q_K_PYHmzpAoKXg0BAaw6M_3g';
        // 更多参数 查看API
        api.sendTemplate(openid, templateid);
        ctx.body = {
            code: 0,
            data: 'push finished'
        };
        return
    }
};
