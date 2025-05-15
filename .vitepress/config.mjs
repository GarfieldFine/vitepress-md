import {defineConfig} from 'vitepress'
import {set_sidebar} from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    head: [["link", { rel: "icon", href: "/book1.svg" }]],
    title: "Orange Ink",
    description: "A VitePress Site",
    titleTemplate: "Orange Ink",
    themeConfig: {
        //上次更新时间 //
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short', // 可选值full、long、medium、short
                timeStyle: 'medium' // 可选值full、long、medium、short
            },
        },
        //自定义上下页名 //
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        darkModeSwitchLabel: '深浅模式', // 移动端主题切换按钮的文本
        sidebarMenuLabel:'目录',  // 移动端侧边栏菜单按钮的文本
        returnToTopLabel:'返回顶部',  // 移动端返回顶部按钮的文本
        outline: [1,3],
        outlineTitle: '文章目录',
        logo: '/book1.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '计算机基础', link: '/computer-basics/'},
            {text: '后端', link: '/backend/'},
            {text: '算法小练', link: '/algorithm-practice/'},
            {text: '项目', link: '/project/'}
        ],
        sidebar: {
            '/computer-basics/': [
                // {
                //     text: '操作系统',
                //     collapsed: false,
                //     items: set_sidebar("computer-basics/cn")
                // },
                // {
                //     text: '计算机网络',
                //     collapsed: false,
                //     items: set_sidebar("computer-basics/os")
                // },
                {
                    text: 'linux',
                    collapsed: false,
                    items: set_sidebar("computer-basics/linux")
                },
            ],
            '/backend/': [
                {
                    text: 'java',
                    collapsed: false,
                    items: set_sidebar("backend/java")
                },
                {
                    text: 'MySQL',
                    collapsed: false,
                    items: set_sidebar("backend/mysql")
                },
                {
                    text: 'redis',
                    collapsed: false,
                    items: set_sidebar("backend/redis")
                },
            ],
            '/algorithm-practice/': [
                {
                    text: '算法小练',
                    collapsed: false,
                    items: set_sidebar("algorithm-practice/")
                }
            ],
            '/project/': [
                {
                    text: '项目',
                    collapsed: false,
                    items: set_sidebar("project/")
                }
            ]

        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/GarfieldFine'}
        ],

        footer: {
            copyright: 'Copyright © 2025-present Evan You'
        },

        // 设置搜索框的样式
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
    }
})
