YL.static = {
  /** “关于”信息 */
  softwareName: 'Neko的桌面~', //网站名。请在此处填写您自己的网站名，如王小明的博客。
  version: "2.3.3", // 网站版本号
  iconBtnStart: 'html5', //主图标
  author: 'Neko',//作者
  contactInformation: '没有',//联系方式
  officialWebsite: '没有',//软件官网
  welcome: "欢迎光临~",//加载完毕控制台提示信息
  copyrightDetail: '假装授权了233',//版权详细信息
  otherStatements: 'Neko酱只想在这个世界上多呆一会，她又有什么错呢？',//其他信息（可留空）

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI基础设置 */
  lang: 'zh-cn', //语言
  localStorageName: "ylui-storage", //ls存储名
  lockedApps: ['yl-system', 'yl-color-picker', 'ylui-fa', 'yl-browser'], // 锁定的应用（不允许被脚本修改）
  trustedApps: [], // 受信任的应用（可以使用敏感API）
  debug: true,//启用更多调试信息
  beforeOnloadEnable: true,//启用关闭前询问（打包app时请关闭防止出错）
  WarningPerformanceInIE: true,//在IE下提示体验不佳信息
  languages: {}, //推荐留空，自动从文件加载
  changeable: false,//存档数据是否可被普通用户修改
  dataCenter: false,//是否展示数据管理中心

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** YLUI注册信息 */
  authorization: '学习版~',//授权类型
  serialNumber: 23333,//序列号

};
