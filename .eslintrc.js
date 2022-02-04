module.exports = {
  // 浏览器启动环境
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    react
  ],
  extends: 'eslint:recommended', // 相当于规则集合
  // 解释器选项
  parserOptions: {
    ecmaFeatures: { // 想使用额外的语言特性
      experimentalObjectRestSpread: false, // 启用实验性的object rest/spread properties支持 （不建议开启）
      jsx: true, // 启用jsx
    },
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'], // 引号报错
    semi: ['error', 'always'], // 强制分号结尾
    'no-unused-vars': 'off', // 关闭规则
  },
}
