import request from '@/request/instance'

export function common(data) {
  return request({
    url: '',
    method: 'post',
    params: {
      ...data
    }
  })
}
