<template>
<div class="sticky--layout">
  <div class="sticky--body">
    <div class="mask">
      <div class="mask__sidebar">
        <sidebarLogo></sidebarLogo>
        <sidebarNavigation></sidebarNavigation>
      </div>
      <div class="mask__main">
        <mainHeader></mainHeader>
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
import mainHeader from '@/layout/main/header'

export default {
  components: {
    sidebarLogo,
    sidebarNavigation,
    mainHeader
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
    &__view
      @apply p-16
</style>
