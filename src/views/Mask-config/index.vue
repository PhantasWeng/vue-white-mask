<template>
<div>
  <pre>
    router: [
      // 第一層
      {
        items: [
          // 第二層
          {
            key: 'dashboard',
            name: '儀表版'
          },
          // 第二層
          {
            key: 'start',
            name: '開始',
            hidden: true,
            children: [
              // 第三層
              {
                key: 'installation',
                name: '安裝'
              },
              // 第三層
              {
                key: 'mask-config',
                name: '設定檔'
              }
            ]
          }
        ]
      }
    ]
  </pre>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
