import request from '@/utils/request'

export default {
  functionName (params) {
    return request({
      // cancelToken: cancelToken.token,
      url: `url`,
      method: 'get',
      params: {
        param: `param`
      }
    })
  }
}
