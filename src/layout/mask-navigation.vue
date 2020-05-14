<template>
  <nav class="mask__navigation">
    <template v-for="group in data">
      <div :key="group.name">
        <template v-for="(block, index) in group.children">
          <div class="mask__navigation__block" :key="`block-${index}`">
            <li class="mask__navigation__block--title">{{ block.name }}</li>
            <template v-for="children in block.children">
              <li :key="children.key">{{ children.type }}{{ children.name }}</li>
            </template>
          </div>
        </template>
        <hr class="mask__navigation__hr">
      </div>
    </template>
    <!-- <div class="layout__sidebar__navigation__block">
      <li class="layout__sidebar__navigation__block--title">旅宿</li>
      <li class="activated">旅宿列表</li>
      <li>申請列表</li>
      <li>外部房源</li>
    </div>
    <div class="layout__sidebar__navigation__block">
      <li class="layout__sidebar__navigation__block--title">標籤</li>
    </div>
    <div class="layout__sidebar__navigation__block">
      <li class="layout__sidebar__navigation__block--title">行銷活動</li>
      <li>邀請回饋</li>
      <li>優惠券</li>
      <li>活動列表</li>
    </div>
    <div class="layout__sidebar__navigation__block">
      <li class="layout__sidebar__navigation__block--title">財務</li>
      <li>銷退</li>
      <li>帳務</li>
      <li>飯店帳務</li>
    </div>
    <hr class="layout__sidebar__navigation__hr">
    <div class="layout__sidebar__navigation__block">
      <li class="layout__sidebar__navigation__block--title">會員</li>
      <li>會員列表</li>
      <li>訂閱</li>
    </div>
    <div class="layout__sidebar__navigation__block">
      <li class="layout__sidebar__navigation__block--title">評論</li>
      <li>評論列表</li>
      <li>入住夜間</li>
    </div>
    <hr class="layout__sidebar__navigation__hr">
    <div class="layout__sidebar__navigation__block">
      <li class="layout__sidebar__navigation__block--title">權限</li>
    </div> -->
  </nav>
</template>

<script>
export default {
  name: 'mask-navigation',
  data () {
    return {
      data: [
        {
          name: 'group01',
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
          name: 'group02',
          type: 'group',
          children: [
            {
              name: '儀表版',
              children: []
            },
            {
              name: '前台',
              children: [
                {
                  name: '首頁編輯'
                },
                {
                  name: '政策/條款'
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

<style lang="sass">
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
