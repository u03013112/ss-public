module.exports = {
    template: './index.html',
    config: {
        basePath: 'https://docsify.js.org/',
        alias: {
            '/de-de/changelog': '/changelog',
            '/zh-cn/changelog': '/changelog',
            '/changelog': 'https://raw.githubusercontent.com/QingWei-Li/docsify/master/CHANGELOG'
        },
        auto2top: true,
        coverpage: true,
        executeScript: true,
        loadSidebar: true,
        loadNavbar: true,
        mergeNavbar: true,
        maxLevel: 4,
        subMaxLevel: 2,
        name: 'docsify',
        search: {
            noData: {
                '/de-de/': 'Keine Ergebnisse!',
                '/zh-cn/': '没有结果!',
                '/': 'No results!'
            },
            paths: 'auto',
            placeholder: {
                '/de-de/': 'Suche',
                '/zh-cn/': '搜索',
                '/': 'Search'
            }
        }
    }
}