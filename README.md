# WeChatMusic
**使用 [ColorUI](https://github.com/weilanwl/ColorUI) 实现前端样式，实现了自定义导航栏，调用系统信息获取状态栏高度，再获取菜单按钮位置信息。**

| 参数     | 作用colorUI      | 类型    | 默认值 |
| -------- | ---------------- | ------- | ------ |
| bgColor  | 背景颜色类名     | String  | ''     |
| isBack   | 是否开启返回     | Boolean | false  |
| isCustom | 是否开启左侧胶囊 | Boolean | false  |
| bgImage  | 背景图片路径     | String  | ''     |

| slot块   | 作用                               |
| -------- | ---------------------------------- |
| backText | 返回时的文字                       |
| content  | 中间区域                           |
| right    | 右侧区域(小程序端可使用范围很窄！) |

* pages/component 目录下存放自定义组件
* pages/index 首页
* pages/singer-page 歌手页
* utils 目录存放常用文件，如：loading.wxml(加载模板)


* 歌手页面(singer-page) - 详情页(singer-details)/使用自定义组件(热门50,component/top-song)




// 功能模块还正在实现中... 

使用了 [网易云音乐NodeJS版API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)，获取数据，实现了登录，歌单，歌手，个人FM模块的数据显示。
```
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
```
git clone 后需下载依赖
```
npm install
```
然后运行 app.js 文件，默认端口：3000
```
node app.js
```
