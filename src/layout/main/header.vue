<template>
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
</template>

<style lang="sass" scoped>
.mask__main__header
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
</style>
