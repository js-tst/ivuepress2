import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
    description: '这里装着碱式碳酸铜生产的拉机',
    head: [["script", {}, `
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fee96d561d8e7513befc2d9cb32d0949";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
    `,]],
    lang: 'zh-CN',

    theme: recoTheme({
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
})