<template>
<div class="mask__sidebar__logo">
  <img :src="logo" alt="OwlNews Logo" class="mask__sidebar__logo__image">
  <div class="mask__sidebar__logo__name">{{ title }}</div>
</div>
</template>

<script>
import config from '@/mask.config.js'
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      logo: logo,
      title: config.title
    }
  }
}
</script>

<style lang="sass" scoped>
.mask__sidebar__logo
  @apply flex items-center justify-center
  @apply border-b border-grey-lightest
  @apply p-16
  &__image
    width: 36px
    @apply mr-8
  &__name
    @apply text-2xl font-bold mr-8
</style>
