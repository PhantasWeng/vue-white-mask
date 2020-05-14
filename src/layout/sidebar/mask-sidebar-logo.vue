<template>
<div class="mask__sidebar__logo">
  <img src="~@/assets/logo.png" alt="OwlNews Logo" class="mask__sidebar__logo__image">
  <div class="mask__sidebar__logo__name">WhiteMask</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.mask__logo
  @apply flex items-center justify-center
  @apply border-b border-grey-lightest
  @apply p-16
  &__image
    width: 36px
    @apply mr-8
  &__name
    @apply text-2xl font-bold mr-8
</style>
