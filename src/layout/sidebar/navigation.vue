<template>
<nav class="mask__navigation">
  <template v-for="(group, index) in router">
    <div :key="group.name">
      <template v-for="block in group.children">
        <div class="mask__navigation__block" :key="`${group.name}-${block.name}`">
          <li class="mask__navigation__block--title" :class="{'activated': block.key === $route.name}" >{{ block.name }}</li>
          <template v-for="children in block.children">
            <li :class="{'activated': children.key === $route.name}" :key="`${group.name}-${block.name}-${children.key}`">
              <span>{{ children.name }}</span>
            </li>
          </template>
        </div>
      </template>
      <hr v-if="index + 1 < router.length" class="mask__navigation__hr">
    </div>
  </template>
  <router-link :to="{name: 'Login'}">login</router-link>
  <router-link :to="{name: 'Dashboard'}">dashboard</router-link>
</nav>
</template>

<script>
import { router } from '@/mask.config.js'
export default {
  data () {
    return {
      router: router
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass" scoped>
.mask__navigation
  @apply list-none p-16 font-sans
  color: #909090
  &__hr
    @apply border-t border-grey-lighter
  &__block
    @apply mb-8
    &--title
      @apply font-normal my-8
      color: #515151
    li
      @apply leading-xl
      &:not(.mask__navigation__block--title)
        @apply font-light
        @apply ml-16
  .activated
    @apply text-blue #{!important}
</style>
