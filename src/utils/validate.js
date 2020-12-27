/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAccount(str) {
  // 用户名正则，4到16位（字母，数字，下划线，减号）
  const reg = /^[a-zA-Z0-9_-]{4,16}$/
  return reg.test(str)
}

export function validPwd(str) {
  // 数字大写字母 小写字母 组成的6位
  const reg = /^[a-zA-Z0-9_-]{4,16}$/
  return reg.test(str)
}

export function validEmail(str) {
  // Email正则
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  return reg.test(str)
}