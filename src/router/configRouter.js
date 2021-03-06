import _ from 'lodash'
import maskConfig from '@/mask.config'

const configRouter = () => {
  const result = []
  _.flatMap(maskConfig.router, group => {
    _.flatMap(group.items, first => {
      // console.log(`[first] ${_.capitalize(first.key)}`, first)
      try {
        require(`@/views/${_.capitalize(first.key)}`)
        result.push({
          path: first.key,
          name: _.capitalize(first.key),
          component: () => import(`@/views/${_.capitalize(first.key)}`),
          children: [],
          meta: {
            name: first.name,
            hidden: first.hidden
          }
        })
      } catch (err) {
        // console.warn(first.key, err)
        if (first.key) {
          result.push({
            path: first.key,
            name: _.capitalize(first.key),
            component: () => import('@/layout/container'),
            children: [],
            meta: {
              name: first.name,
              hidden: first.hidden
            }
          })
        }
      }
      if (first.children) {
        const target = _.findKey(result, { name: _.capitalize(first.key) })
        if (target) {
          _.flatMap(first.children, second => {
            try {
              require(`@/views/${_.capitalize(second.key)}`)
              result[target].children.push({
                path: second.key,
                name: _.capitalize(second.key),
                component: () => import(`@/views/${_.capitalize(second.key)}`),
                meta: {
                  name: second.name,
                  hidden: second.hidden
                }
              })
            } catch (err) {
            }
          })
        }
      }
    })
  })
  console.log('result', result)
  return result
}

export default configRouter()
