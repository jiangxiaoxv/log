// 测试页面api
export function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: new Array(1).fill({
          a: '2016-05-03',
          b: 'Tom',
          c: 'No. 189, Grove ',
          d: 'No. 189,',
          e: '2016-05-03',
          f: 'Tom'
          // g: 'No. 189, Grove St, Los Angeles',
          // h: '2016-05-03',
          // i: 'Tom'
        })
        // data: [],
      })
    }, 200)
  })
}
