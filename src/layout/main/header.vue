<template>
<div class="mask__main__header">
  <div class="mask__main__header__application">
    <img src="~@/assets/logo.png" alt="OwlNews Logo" class="mask__main__header__application__logo">
    <h2 class="mask__main__header__application__title">奧丁丁 OwlTing</h2>
  </div>
  <div class="mask__main__header__control">
    <div class="mr-16 flex items-center justify-center">
      <a-dropdown :trigger="['click']">
        <a-badge :count="9" :offset="[-4, 4]">
          <a-button shape="circle" icon="bell" size="large" />
        </a-badge>
        <div slot="overlay" class="border border-grey-lightest bg-white">
          <a-list item-layout="horizon" size="small" :data-source="notification" class="px-8">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta>
                <template slot="title" class="text-xs">
                  <router-link to="">
                    <div class="text-xs">{{ item.title }}</div>
                    <div class="text-xs text-grey-darker">{{ item.description }}</div>
                  </router-link>
                </template>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
      </a-dropdown>
    </div>
    <a-dropdown :trigger="['click']">
      <a-avatar :size="40" class="bg-red cursor-pointer" src="https://lh3.google.com/u/0/ogw/ADGmqu_U_avM1xZlSsLYty6vHruZQFOYUzOQdQ_ojOxJ=s83-c-mo">PW</a-avatar>
      <a-menu slot="overlay" class="border border-grey-lightest">
        <a-menu-item key="0" disabled>
          <span>通知</span>
        </a-menu-item>
        <a-menu-item key="1" disabled>
          <span>個人資訊</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="2">
          <router-link :to="{name: 'Login'}">登入</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link :to="{name: 'Login'}">登出</router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="4" disabled>
          <div class="mx-8 my-4 text-xs text-grey-dark">登入時間 {{ $dayjs().format('YYYY-MM-DD ddd mm:ss') }}</div>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      notification: [
        {
          title: '[更新] 個人資料選單',
          description: '右上角頭像新增下拉選單'
        },
        {
          title: '[更新] 個人資料選單',
          description: '右上角頭像新增下拉選單'
        },
        {
          title: '[更新] 個人資料選單',
          description: '右上角頭像新增下拉選單'
        },
        {
          title: '[更新] 個人資料選單',
          description: '右上角頭像新增下拉選單'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.mask__main__header
  @apply flex items-center p-8 justify-between
  @apply border-b border-grey-lightest
  // height: 168px
  &__application
    @apply inline-flex flex-wrap items-center
    &__logo
      @apply inline-block m-8
      width: 36px
    &__title
      @apply text-grey-darkest font-bold
  &__control
    @apply flex items-center
    @apply mr-8
  &__user
    width: 40px
    @apply overflow-hidden rounded-full
</style>
