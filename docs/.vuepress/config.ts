import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '碱式碳酸铜的乐色桶',
    description: '这里装着碱式碳酸铜生产的拉机',

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
})