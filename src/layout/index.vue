<template>
<div class="sticky--layout">
  <div class="sticky--body">
    <div class="mask">
      <div v-show="displayLayout" class="mask__sidebar">
        <sidebarLogo ref="sideBarHeader" :style="{height: `${height.sidebarHeader}px`}"></sidebarLogo>
        <perfect-scrollbar ref="sideBarNavigationHeight" :style="{height: `calc(100vh - ${this.height.sidebarHeader}px)`}">
          <sidebarNavigation></sidebarNavigation>
        </perfect-scrollbar>
      </div>
      <div class="mask__main">
        <mainHeader v-show="displayLayout" ref="mainHeader" :style="{height: `${height.mainHeader}px`}"></mainHeader>
        <perfect-scrollbar ref="mainViewHeight" :style="{height: `calc(100vh - ${this.height.mainHeader}px)`}">
          <div class="mask__main__view">
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
import _ from 'lodash'

export default {
  name: 'app',
  components: {
    sidebarLogo,
    sidebarNavigation,
    mainHeader
  },
  data () {
    return {
      collapsed: false,
      headerHeight: null,
      height: {
        sidebarHeader: null,
        mainHeader: null
      },
      displayLayout: true
    }
  },
  methods: {
    getHeaderHeight: async function () {
      this.height.sidebarHeader = this.$refs.sideBarHeader.$el.clientHeight
      this.height.mainHeader = this.$refs.mainHeader.$el.clientHeight
      this.syncHeaderHeight()
    },
    syncHeaderHeight: function () {
      const max = _.max([this.height.sidebarHeader, this.height.mainHeader])
      this.height.sidebarHeader = this.height.mainHeader = max
    }
  },
  created () {
    // this.resize = _.debounce(() => {
    //   this.getHeaderHeight()
    // }, 300)
    this.$nextTick(function () {
      this.getHeaderHeight()
    })
  },
  mounted () {
    // window.addEventListener('resize', this.resize)
  },
  destroyed () {
    // window.removeEventListener('resize', this.resize)
  },
  watch: {
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
