import * as _ from 'lodash'

const Get = async (base, options) => {
  const params = {
    ...options,
    key: '9b149e2419b24d138abd18d157e3e29a',
  }
  /**
   * 第一种实现 query 拼接的方法
   * const query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')
   */
  const query = new URLSearchParams(
    _.pickBy(params, _.negate(_.isNil))
  ).toString()

  const url = `${base}?${query}`
  return await fetch(url, {
    method: 'GET',
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Network response error', res.status)
    })
    .then(data => data)
    .catch(error => console.error(error.message))
}

export default Get
