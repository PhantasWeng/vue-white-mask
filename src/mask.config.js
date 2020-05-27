module.exports = {
  title: 'whiteMask',
  router: [
    {
      hotels: {
        path: '/hotels',
        name: 'hotels',
        component: () => import('@/views/Hotels')
      }
    }
  ]
}
