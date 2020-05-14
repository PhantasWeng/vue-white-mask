<template>
<div class="sticky--layout">
  <div class="sticky--body">
    <div class="mask">
      <div class="mask__sidebar">
        <sidebarLogo></sidebarLogo>
        <sidebarNavigation></sidebarNavigation>
      </div>
      <div class="mask__main">
        <div class="mask__main__header">
          <div class="mask__main__header__application">
            <img src="~@/assets/logo.png" alt="OwlNews Logo" class="mask__main__header__application__logo">
            <h2 class="mask__main__header__application__title">奧丁丁 OwlTing</h2>
          </div>
          <div class="mask__main__header__control">
            <div class="mask__main__header__user">
              <img src="https://lh3.google.com/u/0/ogw/ADGmqu_U_avM1xZlSsLYty6vHruZQFOYUzOQdQ_ojOxJ=s83-c-mo">
            </div>
          </div>
        </div>
        <div class="mask__main__view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sidebarLogo from '@/layout/sidebar/logo'
import sidebarNavigation from '@/layout/sidebar/navigation'

export default {
  components: {
    sidebarLogo,
    sidebarNavigation
  },
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

.sticky--layout
  @apply flex flex-col
  min-height: 100vh
.sticky--body
  @apply flex-auto

.mask
  @apply flex
  &__sidebar
    @apply flex-initial
    @apply border-r border-grey-lightest
    min-height: 100vh
    min-width: 200px
  &__main
    @apply flex-auto text-green
    &__header
      @apply flex items-center p-8 justify-between
      @apply border-b border-grey-lightest
      min-height: 68px
      &__application
        @apply inline-flex flex-wrap items-center
        &__logo
          @apply inline-block m-8
          width: 36px
        &__title
          @apply text-grey-darkest font-bold
      &__control
      &__user
        width: 40px
        @apply overflow-hidden rounded-full
    &__view
      @apply p-16
</style>
