import request from '@/request/instance'

export function getLogData(data) {
  return request({
    // url: '/v1/get_log',
    url: '/v1/abt_log',
    method: 'get',
    params: {
      ...data
    }
  })
}
