# koa2-wechat

基于koa2 使用co-wechat与co-wechat-api 快速搭建微信公众号

# 使用ngrok进行外网映射

进行公众号开发是需要腾讯微信服务器能够访问到我们的服务器，所以要进行映射，推荐 ngrok，好用！  
[https://ngrok.com/](https://ngrok.com/)  进行注册/n
下载相应版本的客户端，根据网站提示一步一步来就可以了/n
进入目录后使用命令行 ./ngrok http 8080  打开映射 （端口号与项目中的保持一致即可）/n
