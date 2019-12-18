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

