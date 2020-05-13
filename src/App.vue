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
              <li>全覽</li>
            </div>
            <div class="layout__sidebar__navigation__group">
              <li>前台</li>
              <li>首頁編輯</li>
              <li>政策/條款</li>
            </div>
            <div class="layout__sidebar__navigation__group">
              <li>旅宿列表</li>
              <li>申請列表</li>
              <li>外部房源</li>
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
      @apply list-none
      &__group
        li:first-child
          @apply font-bold
        li:not(:first-child)
          @apply ml-16

  &__mainContent

.serviceName
  @apply text-grey-darker font-bold text-xl
</style>
