// import React from 'react'
import { Toast } from 'antd-mobile'


export default (idList, answers, standard, needId) => {
  let legalNumber = 0
  let isNeed = true
  idList.forEach(id => {
    if (answers[id]) {
      legalNumber ++
    }
  })
  console.log("合法：" + legalNumber)
  needId.reverse().forEach(idObj => {
    if (!answers[idObj.id]) {
      isNeed = false
      Toast.fail(idObj.msg, 1)
    }
  });
  if ( legalNumber >= standard ) {
    return true
  } else if (isNeed) {
    Toast.fail("填写的题目太少啦", 1)
    return false
  } else {
    return false
  }
}


