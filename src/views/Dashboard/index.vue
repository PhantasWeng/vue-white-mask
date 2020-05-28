<template>
  <div class="home">
    <a-alert message="whiteMask is currently under development." type="info" close-text="Close" />
    <div class="flex items-center">
      <h1 class="uppercase">Dashboard</h1>
      <a-tag color="orange" class="ml-8">v0.1</a-tag>
    </div>
    <div class="md:flex">
      <a-card class="border border-1 border-grey-lightest" :bordered="false">
        <img slot="cover" alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        <a-card-meta title="whiteMask" description="A Vue admin framework" :bordered="false">
          <a-avatar
            slot="avatar"
            src="https://lh3.google.com/u/0/ogw/ADGmqu_U_avM1xZlSsLYty6vHruZQFOYUzOQdQ_ojOxJ=s83-c-mo"
          />
        </a-card-meta>
      </a-card>
      <div class="flex-auto">
        <a-card class="lg:mx-8 mt-8 lg:mt-0 mb-8 border border-1 border-grey-lightest" :bordered="false">
          <template>
            <div>
              <a-progress :percent="30" />
              <a-progress :percent="50" status="active" />
              <a-progress :percent="70" status="exception" />
              <a-progress :percent="100" />
              <a-progress :percent="50" :show-info="false" />
            </div>
          </template>
        </a-card>
        <a-card class="lg:mx-8 border border-1 border-grey-lightest" :bordered="false">
          <a-statistic title="Road Map" :value="10" style="margin-right: 50px">
            <template #suffix>
              <span>/100</span>
            </template>
          </a-statistic>
          <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893">
            <template #suffix>
              <span>/100</span>
            </template>
          </a-statistic>
        </a-card>
      </div>
    </div>
    <div class="border border-1 border-grey-lightest p-16 my-8">
      <a-skeleton />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// var owlsight = require('owlsight')
// console.log('owlsight', owlsight)
export default {
  name: 'Home',
  components: {
  }
}
</script>
