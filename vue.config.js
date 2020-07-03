/*
 * @Descripttion: @vue/cli3 配置文件
 * @Author: seiwhale
 * @Date: 2020-07-02 21:42:43
 * @LastEditors: seiwhale
 * @LastEditTime: 2020-07-03 09:54:09
 */
const packageJson = require("./package.json");
const ENV = process.env.NODE_ENV;

module.exports = {
  baseUrl: ENV === "gh-pages" ? `/${packageJson.name}/` : "./",
};
