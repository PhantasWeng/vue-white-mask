<template>
<div class="layoutDefault">
  <div class="sticky-body">
    <div class="layout">
      <div class="layout__sidebar">
        <div class="layout__sidebar__logo">
          <img src="~@/assets/logo.png" alt="OwlNews Logo" class="layout__sidebar__logo__image">
          <div class="layout__sidebar__logo__name">OwlNews</div>
        </div>
        <nav class="layout__sidebar__navigation">
          <ul>
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">儀表版</li>
            </div>
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">前台</li>
              <li>首頁編輯</li>
              <li>政策/條款</li>
            </div>
            <hr class="layout__sidebar__navigation__hr">
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">旅宿</li>
              <li class="activated">旅宿列表</li>
              <li>申請列表</li>
              <li>外部房源</li>
            </div>
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">標籤</li>
            </div>
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">行銷活動</li>
              <li>邀請回饋</li>
              <li>優惠券</li>
              <li>活動列表</li>
            </div>
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">財務</li>
              <li>銷退</li>
              <li>帳務</li>
              <li>飯店帳務</li>
            </div>
            <hr class="layout__sidebar__navigation__hr">
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">會員</li>
              <li>會員列表</li>
              <li>訂閱</li>
            </div>
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">評論</li>
              <li>評論列表</li>
              <li>入住夜間</li>
            </div>
            <hr class="layout__sidebar__navigation__hr">
            <div class="layout__sidebar__navigation__group">
              <li class="layout__sidebar__navigation__group--title">權限</li>
            </div>
          </ul>
        </nav>
      </div>
      <div class="layout__main">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.layoutDefault
  @apply flex flex-col
  min-height: 100vh
  .sticky-body
    @apply flex-auto

.layout
  &__sidebar
    @apply float-left
    @apply border-r border-grey-lightest
    min-height: 100vh
    min-width: 200px

    &__logo
      @apply flex items-center justify-center
      @apply border-b border-grey-lightest
      @apply p-16
      &__image
        width: 36px
        @apply mr-8
      &__name
        @apply text-xl font-bold mr-8

    &__navigation
      @apply list-none p-16 font-sans
      color: #909090
      &__hr
        @apply border-t
        border-color: #D8D8D8
      &__group
        @apply mb-8
        &--title
          @apply font-normal my-8
          color: #515151
        li
          @apply leading-xl
          &:not(.layout__sidebar__navigation__group--title)
            @apply font-light
            @apply ml-16
        .activated
          @apply text-blue

  &__mainContent

.serviceName
  @apply text-grey-darker font-bold text-xl
</style>
