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
          key: 'frontend',
          name: '前台',
          hidden: true,
          children: [
            {
              key: 'homepage-edit',
              name: '首頁編輯'
            },
            {
              key: 'policy-edit',
              name: '政策/條款'
              // hidden: true
            },
            {
              key: 'phantas',
              name: 'Phantas'
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          name: '旅宿',
          children: [
            {
              key: 'hotel-list',
              name: '旅宿列表'
            },
            {
              key: 'hotel-apply',
              name: '申請列表'
            },
            {
              key: 'hotel-outer',
              name: '外部房源'
            }
          ]
        },
        {
          name: '標籤',
          children: [
            {
              key: 'projects-list',
              name: '行銷活動'
            },
            {
              key: 'invitations-list',
              name: '邀請回饋'
            },
            {
              key: 'coupons',
              name: '優惠券'
            },
            {
              key: 'events-list',
              name: '活動列表'
            }
          ]
        },
        {
          name: '財務',
          children: [
            {
              key: 'finance-refund',
              name: '銷退'
            },
            {
              key: 'finance-accounts',
              name: '帳務'
            },
            {
              key: 'finance-hotels',
              name: '飯店帳務'
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          name: '會員',
          children: [
            {
              key: 'user-list',
              name: '會員列表'
            },
            {
              key: 'user-subscription',
              name: '訂閱'
            }
          ]
        },
        {
          name: '評論',
          children: [
            {
              key: 'comments-list',
              name: '評論列表'
            },
            {
              key: 'comments-nights',
              name: '入住夜間'
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
              key: 'system-auth',
              name: '權限'
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
