import myAjax from '../lib/axios'

const getList = () =>
  myAjax.request({
    url: '/list'
  })
export { getList }