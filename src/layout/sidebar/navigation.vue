<template>
<nav class="mask__navigation">
  <template v-for="(group, index) in data">
    <div :key="group.name">
      <template v-for="block in group.children">
        <div class="mask__navigation__block" :key="`${group.name}-${block.name}`">
          <li class="mask__navigation__block--title">{{ block.name }}</li>
          <template v-for="children in block.children">
            <li :key="`${group.name}-${block.name}-${children.key}`">
              <span>{{ children.name }}</span>
            </li>
          </template>
        </div>
      </template>
      <hr v-if="index + 1 < data.length" class="mask__navigation__hr">
    </div>
  </template>
</nav>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          name: 'website',
          type: 'group',
          children: [
            {
              name: '儀表版',
              type: 'block',
              children: []
            },
            {
              name: '前台',
              type: 'block',
              children: [
                {
                  key: 'homepage-edit',
                  name: '首頁編輯',
                  type: 'page'
                },
                {
                  key: 'policy-edit',
                  name: '政策/條款',
                  type: 'page'
                },
                {
                  key: 'phantas',
                  name: 'Phantas',
                  type: 'link'
                }
              ]
            }
          ]
        },
        {
          name: 'hotels',
          type: 'group',
          children: [
            {
              name: '旅宿',
              type: 'block',
              children: [
                {
                  key: 'hotel-list',
                  name: '旅宿列表',
                  type: 'page'
                },
                {
                  key: 'hotel-apply',
                  name: '申請列表',
                  type: 'page'
                },
                {
                  key: 'hotel-outer',
                  name: '外部房源',
                  type: 'link'
                }
              ]
            },
            {
              name: '標籤',
              type: 'block',
              children: [
                {
                  key: 'projects-list',
                  name: '行銷活動',
                  type: 'page'
                },
                {
                  key: 'invitations-list',
                  name: '邀請回饋',
                  type: 'page'
                },
                {
                  key: 'coupons',
                  name: '優惠券',
                  type: 'link'
                },
                {
                  key: 'events-list',
                  name: '活動列表',
                  type: 'link'
                }
              ]
            },
            {
              name: '財務',
              type: 'block',
              children: [
                {
                  key: 'finance-refund',
                  name: '銷退',
                  type: 'page'
                },
                {
                  key: 'finance-accounts',
                  name: '帳務',
                  type: 'page'
                },
                {
                  key: 'finance-hotels',
                  name: '飯店帳務',
                  type: 'link'
                }
              ]
            }
          ]
        },
        {
          name: 'user',
          type: 'group',
          children: [
            {
              name: '會員',
              type: 'block',
              children: [
                {
                  key: 'user-list',
                  name: '會員列表',
                  type: 'page'
                },
                {
                  key: 'user-subscription',
                  name: '訂閱',
                  type: 'page'
                }
              ]
            },
            {
              name: '評論',
              type: 'block',
              children: [
                {
                  key: 'comments-list',
                  name: '評論列表',
                  type: 'page'
                },
                {
                  key: 'comments-nights',
                  name: '入住夜間',
                  type: 'page'
                }
              ]
            }
          ]
        },
        {
          name: 'system',
          type: 'group',
          children: [
            {
              name: '系統',
              type: 'block',
              children: [
                {
                  key: 'system-auth',
                  name: '權限',
                  type: 'page'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.mask__navigation
  @apply list-none p-16 font-sans
  color: #909090
  &__hr
    @apply border-t border-grey-lighter
  &__block
    @apply mb-8
    &--title
      @apply font-normal my-8
      color: #515151
    li
      @apply leading-xl
      &:not(.mask__navigation__block--title)
        @apply font-light
        @apply ml-16
    .activated
      @apply text-blue
</style>
