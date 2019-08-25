import Mock from 'mockjs'
Mock.mock(/\/list/, () => {
  return {
    code: 200,
    data: { name: '我是数据' }
  }
})