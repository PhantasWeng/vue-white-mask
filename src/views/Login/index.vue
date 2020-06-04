<template>
<div class="flex" style="min-height: 100vh;">
  <div class="flex items-center justify-center flex-col flex-1 bg-blue-darkest">
    <h1 class="text-white text-5xl font-bold mr-8">whiteMask</h1>
    <a-card hoverable style="width: 360px">
      <a-form-model :model="formInline" @submit="handleSubmit" @submit.native.prevent>
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input v-model="formInline.password" type="password" placeholder="Password">
            <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="formInline.user === '' || formInline.password === ''"
          >
            登入
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formInline: {
        user: 'whiteMask-demo',
        password: 'test123'
      }
    }
  },
  methods: {
    handleSubmit (e) {
      console.log(this.formInline)
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>

<style scoped>

</style>
