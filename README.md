# 基于koa2 使用 co-wechat 与 co-wechat-api 快速入门搭建微信公众号

标签： 微信公众号 nodejs koa2

---

## 讲在前面的话 ##
自己前段时间通过网上的各路大神的资料，摸索着完成了公司公众号的搭建，目前也只是简单的一些功能，但跌跌撞撞的也打开了这个新世界的大门。<br>
微信公众号的原理，可以简单的理解为 用户<--->腾讯微信服务器<--->我们的服务器 三方间的通讯。微信服务器作为中转站来处理信息。所以正式上线的公众号是需要申请，审核后才可开发上线的。<br>
在本地开发测试时，需要微信服务器能够访问到我们的本地服务器，所以要用到ngrok来映射。<br>
co-wechat的作用就是搭建起整个三方的通讯。<br>
co-wechat-api的作用就是将我们自己的业务通过微信服务器的业务接口发送给用户。<br>
理解了这个原理，就可以开始入手这个简单示例了。<br>
简单明了，进入主题吧！

## 微信公众平台接口测试帐号申请 ##
本文只涉及测试帐号的相关开发测试内容

 1. 登录页面，微信扫一扫即可使用![此处输入图片的描述][1]
 2. 登录后的页面，第一次登录时，接口配置信息处的URL和Token应该是空的![此处输入图片的描述][2]

## ngrok申请 ##
用于将本地服务器映射到外网可访问的地址

 1. [ngrok官方网站][3]，右上角SIGN UP注册![此处输入图片的描述][4]![此处输入图片的描述][5]
 2. 注册后登录，将获取到一个属于你的authtoken，之后下载相应客户端，根据提示完成ngrok的使用，官网说明很详细，这里不多做介绍，下面是我在linux上运行的结果，映射8080端口![此处输入图片的描述][6]

## 开始搭建项目 ##
将本项目下载到本地，当然也可以自己新建项目或使用已有项目，本项目只是一个纯净的示例，方便大家学习使用

    cd koa2-wechat
    npm install

修改config.js

    {
        appid: '测试帐号中的appID',
        AppSecret: '测试帐号中的appsecret',
        token: '自定义一个token',
        encodingAESKey: ''
    }

之后就可以启动项目

    node server.js

本地项目启动成功后，如果没有启动ngrok，请启动ngrok，将Forwarding后的http地址复制![此处输入图片的描述][7]<br>
填写到测试帐号的配置信息，同样要填写config.js中自定义好的token，注意要保持一致![此处输入图片的描述][8]
完成后，确保config.js中appid与appsecret填写正确，测试帐号url与token填写正确，点击提交，注意上方提示，出现黄色的配置失败也是正常状况，需要再次点击提交，出现绿色的配置成功，恭喜你，已经完成了测试开发版微信公众号搭建，扫描测试帐号的二维码就可以看到刚刚搭建的内容了。

更多的功能以及本示例中的简单代码，同学们请自行学习！

以上都是个人原创，如有不妥之处，望指点！

  [1]: https://twoold-1256656839.cos.ap-beijing.myqcloud.com/share/wechat-koa2/1.png
  [2]: https://twoold-1256656839.cos.ap-beijing.myqcloud.com/share/wechat-koa2/2.png
  [3]: https://ngrok.com/
  [4]: https://twoold-1256656839.cos.ap-beijing.myqcloud.com/share/wechat-koa2/3.png
  [5]: https://twoold-1256656839.cos.ap-beijing.myqcloud.com/share/wechat-koa2/4.png
  [6]: https://twoold-1256656839.cos.ap-beijing.myqcloud.com/share/wechat-koa2/5.png
  [7]: https://twoold-1256656839.cos.ap-beijing.myqcloud.com/share/wechat-koa2/5.png
  [8]: https://twoold-1256656839.cos.ap-beijing.myqcloud.com/share/wechat-koa2/6.png
