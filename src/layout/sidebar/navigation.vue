<template>
<nav class="mask__navigation">
  <template v-for="(group, index) in router">
    <div :key="index">
      <template v-for="block in group.items">
        <div class="mask__navigation__block" :key="`${group.name}-${block.name}`">
          <!-- 第一層 -->
          <template v-if="pageExist(block.key)">
            <router-link :to="pageExist(block.key)">
              <li class="mask__navigation__block--title hover:underline" :class="{'activated': block.key === $route.name}">
                <span class="relative"><i class="owl-caret-right absolute" style="left: calc(-1em - 4px);"></i>{{ block.name }}</span>
              </li>
            </router-link>
          </template>
          <li v-else class="mask__navigation__block--title pointer-events-none" :class="{'activated': block.key === $route.name}">
            <span>{{ block.name }}</span>
          </li>

          <!-- 第二層 -->
          <template v-for="children in block.children">
            <router-link v-if="pageExist(children.key)" :to="pageExist(children.key)" :key="children.key">
              <li class="hover:underline" :class="{'activated': children.key === $route.name}" :key="`${group.name}-${block.name}-${children.key}`">
                <span class="relative"><i class="owl-caret-right absolute" style="left: calc(-1em - 4px);"></i>{{ children.name }}</span>
              </li>
            </router-link>
            <li v-else class="pointer-events-none" :class="{'activated': children.key === $route.name}" :key="`${group.name}-${block.name}-${children.key}`">
              <span>{{ children.name }}</span>
            </li>
          </template>

        </div>
      </template>
      <hr v-if="index + 1 < router.length" class="mask__navigation__hr">
    </div>
  </template>
</nav>
</template>

<script>
import _ from 'lodash'
import { router } from '@/mask.config.js'
export default {
  data () {
    return {
      router: router
    }
  },
  methods: {
    pageExist: function (key) {
      key = _.capitalize(key)
      const target = this.$router.matcher.match({ name: key })
      if (key && target && target.matched && target.matched.length > 0 && !target.meta.hidden) {
        console.log(key, target.matched, target)
        return target
      }
      return false
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
