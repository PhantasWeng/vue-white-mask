import axios from 'axios'
import _ from 'lodash'
// import ls from '@/utils/ls'
// import store from '@/store'
import Qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  // timeout: 50000,
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: 'indices', skipNulls: true })
  },
  crossdomain: true
})

// request interceptors
service.interceptors.request.use(config => {
  // if (!_.isEmpty(ls.get('owlJourney').user.token.accessToken)) {
  //   config.headers['Authorization'] = 'Bearer ' + ls.get('owlJourney').user.token.accessToken
  // }
  // config.params = {
  //   ...config.params,
  //   lang: store.getters['user/selectedLang'] ? store.getters['user/selectedLang'] : 'zh-TW'
  // }
  return config
}, error => {
  Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(
  response => {
    if (response && response.status !== 200) {
      // store.commit('NEW_ERROR', {
      //   status: response.data.status,
      //   response: response
      // })
      console.error(`🚨 [API] ${response.config.url.replace(response.config.baseURL, '')}`, response.data)
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.debug(`👌 [API] ${response.config.url.replace(response.config.baseURL, '')}`, response.data)
      }
    }
    return response.data
  },
  error => {
    // store.commit('NEW_ERROR', error)
    console.error('🚨 [API] ' + error)
    return Promise.reject(error)
  })

export default service
