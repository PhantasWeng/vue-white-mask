<template>
<div class="sticky--layout">
  <div class="sticky--body">
    <div class="mask">
        <div class="mask__sidebar">
          <sidebarLogo ref="sideBarLogo"></sidebarLogo>
          <perfect-scrollbar>
            <sidebarNavigation ref="sideBarNavigation"></sidebarNavigation>
          </perfect-scrollbar>
        </div>
      <div class="mask__main">
        <mainHeader ref="mainHeader"></mainHeader>
        <perfect-scrollbar>
          <div class="mask__main__view" ref="mainView">
            <router-view></router-view>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sidebarLogo from '@/layout/sidebar/logo'
import sidebarNavigation from '@/layout/sidebar/navigation'
import mainHeader from '@/layout/main/header'
// import _ from 'lodash'

export default {
  components: {
    sidebarLogo,
    sidebarNavigation,
    mainHeader
  },
  data () {
    return {
      collapsed: false,
      sidebar: {
        logo: {
          height: null
        }
      },
      main: {
        header: {
          height: null
        }
      }
      // resize: null
    }
  },
  created () {
    // this.resize = _.debounce(() => {
    //   console.log('resize', this.$refs.sideBarLogo.$el.clientHeight)
    // }, 300)
    this.$nextTick(function () {
      this.sidebar.logo.height = this.$refs.sideBarLogo.$el.clientHeight
      this.main.header.height = this.$refs.mainHeader.$el.clientHeight
      this.$refs.sideBarNavigation.$el.style.height = `calc(100vh - ${this.sidebar.logo.height}px)`
      this.$refs.mainView.style.height = `calc(100vh - ${this.sidebar.logo.height}px)`
    })
  },
  mounted () {
    // console.log(this.$refs.sideBarLogo.$el.clientHeight)
    // window.addEventListener('resize', this.resize)
  },
  destroyed () {
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style lang="sass">
body
  @apply overflow-hidden
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
