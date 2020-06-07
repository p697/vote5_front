// import React from 'react'
import { Toast } from 'antd-mobile'


export default (idList, answers, standard) => {
  let legalNumber = 0
  idList.forEach(id => {
    if (answers[id]) {
      legalNumber ++
    }
  })
  console.log("合法：" + legalNumber)
  if ( legalNumber >= standard ) {
    return true
  } else {
    Toast.fail("填写的题目太少啦", 1)
    return false
  }
}


