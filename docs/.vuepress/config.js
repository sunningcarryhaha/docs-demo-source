module.exports = {
    base:'/docs-demo/',
    title: 'docsdemo',
    description: 'carry docsdemo',
    plugins: ['autobar'],
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': 'path/to/some/dir'
          }
        }
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Github', link: 'https://github.com/sunningcarryhaha' }
      ],
      sidebarGroupOrder: [
        'getting-started', // 分组名称，即文件夹名称
        'configurations'
      ],
      sidebar: 'auto',
      sidebarDepth:'2',
      displayAllHeaders: true
    }
}