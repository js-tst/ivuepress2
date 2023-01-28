"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vuepress_1 = require("vuepress");
var vuepress_theme_reco_1 = require("vuepress-theme-reco");
exports.default = (0, vuepress_1.defineUserConfig)({
    description: '这里装着碱式碳酸铜生产的拉机',
    head: [["script", {}, "\n    var _hmt = _hmt || [];\n    (function() {\n        var hm = document.createElement(\"script\");\n        hm.src = \"https://hm.baidu.com/hm.js?fee96d561d8e7513befc2d9cb32d0949\";\n        var s = document.getElementsByTagName(\"script\")[0];\n        s.parentNode.insertBefore(hm, s);\n    })();\n    ",]],
    lang: 'zh-CN',
    theme: (0, vuepress_theme_reco_1.recoTheme)({
        // Public 文件路径
        logo: '/images/icon.png',
        // URL
        //logo: 'https://vuejs.org/images/logo.png',
        autoSetBlogCategories: true,
        autoAddCategoryToNavbar: true,
        author: '碱式碳酸铜',
        authorAvatar: '/images/head.png'
    }),
    title: '碱式碳酸铜的乐色桶',
});
