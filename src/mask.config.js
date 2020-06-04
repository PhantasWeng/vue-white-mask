const mask = {
  title: 'whiteMask',
  router: [
    {
      items: [
        {
          key: 'dashboard',
          name: '儀表版'
        },
        {
          key: 'start',
          name: '開始',
          hidden: true,
          children: [
            {
              key: 'installation',
              name: '安裝'
            },
            {
              key: 'mask-config',
              name: '設定檔'
              // hidden: true
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          name: '表單',
          children: [
            {
              key: 'single-form',
              name: '簡單表單'
            },
            {
              key: 'group-form',
              name: '群組表單'
            }
          ]
        },
        {
          name: '列表/表格',
          children: [
            {
              key: 'table',
              name: '表格'
            },
            {
              key: 'list',
              name: '列表'
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          name: '模組',
          children: [
            {
              key: 'auth',
              name: '會員驗證 SSO'
            },
            {
              key: 'cookie-agreement',
              name: '同意 Cookie 使用'
            }
          ]
        },
        {
          name: '相關 Plugins',
          children: [
            {
              key: 'plugins-list',
              name: 'Plugin 列表'
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          name: '系統',
          children: [
            {
              key: 'log',
              name: 'Log 列表'
            }
          ]
        }
      ]
    }
  ]
}
const router = mask.router
export { router }

export default mask
