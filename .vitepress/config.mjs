import {defineConfig} from 'vitepress'
import {set_sidebar} from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    head: [["link", { rel: "icon", href: "/public/logo.svg" }]],
    title: "嘉界",
    description: "A VitePress Site",
    themeConfig: {
        outline: [1,3],
        outlineTitle: '文章目录',
        logo: '/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '计算机基础', link: '/computer-basics/'},
            {text: '后端', link: '/backend/'},
            {text: '算法小练', link: '/algorithm-practice/'}
        ],
        sidebar: {
            '/computer-basics/': [
                {
                    text: '操作系统',
                    items: set_sidebar("computer-basics/cn")
                },
                {
                    text: '计算机网络',
                    items: set_sidebar("computer-basics/os")
                },
            ],
            '/backend/': [
                {
                    text: 'java',
                    items: set_sidebar("backend/java")
                },
                {
                    text: 'MySQL',
                    items: set_sidebar("backend/mysql")
                },
                {
                    text: 'redis',
                    items: set_sidebar("backend/redis")
                },
            ],
            '/algorithm-practice/': [
                {
                    text: '算法小练',
                    items: set_sidebar("algorithm-practice/")
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
