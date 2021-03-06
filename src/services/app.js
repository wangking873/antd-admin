import { request } from '../utils'
import qs from 'qs'

export async function login(params) {
  return request('/api/login', {
    method: 'post',
    data:params,
  })
}

export async function loginOut(params) {
  return request('/api/loginOut', {
    method: 'post',
    data:params,
  })
}

export async function userInfo(params) {
  return request('/api/userInfo', {
    method: 'get',
    data:params,
  })
}
