import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',

    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/icon.png',
        // URL
        //logo: 'https://vuejs.org/images/logo.png',
    }),
})