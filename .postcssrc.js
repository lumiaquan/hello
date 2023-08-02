// module.exports = ({ file }) => {
//   console.log(file);
//   const designWidth = file.includes("node_modules/vant") ? 375 : 750;
//   return {
//     plugins: {
//       autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
//       "postcss-px-to-viewport": {
//         unitToConvert: "px", // 要转化的单位
//         viewportWidth: designWidth, // UI设计稿的宽度
//         unitPrecision: 6, // 转换后的精度，即小数点位数
//         propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
//         viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
//         fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
//         selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
//         minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
//         mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
//         replace: true, // 是否转换后直接更换属性值
//         landscape: false, // 是否处理横屏情况
//         exclude: [/font-size/],
//       },
//     },
//   };
// };

module.exports = ({ file }) => {
  const designWidth = file.includes("vant") ? 37.5 : 75;
  return {
    plugins: {
      autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
      "postcss-pxtorem": {
        rootValue: designWidth, //换算基数，
        unitPrecision: 3, //允许REM单位增长到的十进制数字,小数点后保留的位数。
        propList: ["*"],
        exclude: false, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
        selectorBlackList: [], //要忽略并保留为px的选择器，本项目我是用的vant ui框架，所以忽略他
        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
        minPixelValue: 1, //设置要替换的最小像素值
      },
    },
  };
};
