import React, { useState }from 'react'
import { Card } from 'antd'
import { Button, Toast } from 'antd-mobile'
import NormalChoiceBox from './coms/normal_choice_box/normal_choice_box'
import RowChoiceBox from './coms/row_choice_box/row_choice_box'
import { AppContext } from '../../index'
import checkSubmit from './coms/check_submit'
import submit from './coms/submit'

import './index.scss';

export default () => {
  const app = React.useContext(AppContext)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const idList = ["50001", "50002", "50003", "50401" ,"50402", "50403", "50404", "50405", "50406", "50407", "50408", "50409", "50410", 
  "50411", "50412", "50413", "50414", "50415", "50416", "50417", "50418", "50419", "50420", "50421", "50422", "50423", "50424"]

  const handleSubmit = () => {
    let isLegael = checkSubmit(idList, app.context.answers, 14)
    if (isLegael) {
      setBtnDisabled(true)
      Toast.loading("提交ing", 3000)
      submit(idList, app.context).then(res => {
        console.log(res)
        Toast.success("提交成功", 1)
      })
    }
  }

  return (
    <div className="main">
      <div className="main-header">
        疫情影响因素调查表
      </div>
      <div className="main-content">
        <NormalChoiceBox
          id="50001"
          title="您的性别"
          choices={["男", "女"]}
        />
        <NormalChoiceBox
          id="50002"
          title="您的学历"
          choices={["小学、初中", "高中、职高", "专科生", "本科生", "研究所（硕士、博士）"]}

        />
        <NormalChoiceBox
          id="50003"
          title="您的职业"
          choices={["学生", "在职职工", "自由职业", "农民、个体户", "其他"]}
        />
        <Card className="main-content-cardtitle">
          请根据您对疫情情况的了解，选择下列因素对疫情的影响程度。从左至右影响程度依次加深
        </Card>
        <RowChoiceBox
          id="50401"
          title="医疗物资供应（如口罩、防护服等）"
        />
        <RowChoiceBox
          id="50402"
          title="医疗基础设施情况（如医院密度、医院规模等）"
        />
        <RowChoiceBox
          id="50403"
          title="是否实行封城管理"
        />
        <RowChoiceBox
          id="50404"
          title="是否实行交通管制（如暂停客运、航班等）"
        />
        <RowChoiceBox
          id="50405"
          title="是否限制人员流动"
        />
        <RowChoiceBox
          id="50406"
          title="是否停工停产"
        />
        <RowChoiceBox
          id="50407"
          title="是否制定有相关法律规章"
        />
        <RowChoiceBox
          id="50408"
          title="民众是否佩戴口罩"
        />
        <RowChoiceBox
          id="50409"
          title="民众是否积极配合当地疫情防控措施"
        />
        <RowChoiceBox
          id="50410"
          title="各地区是否注重联防联控"
        />
        <RowChoiceBox
          id="50411"
          title="人口流动情况(如交通客运量、旅客周转量等）"
        />
        <RowChoiceBox
          id="50412"
          title="地域面积"
        />
        <RowChoiceBox
          id="50413"
          title="人口密度"
        />
        <RowChoiceBox
          id="50414"
          title="地理位置（与疫区距离等）"
        />
        <RowChoiceBox
          id="50415"
          title="经济发展水平（GDP）"
        />
        <RowChoiceBox
          id="50416"
          title="科技发展水平"
        />
        <RowChoiceBox
          id="50417"
          title="交通发达程度"
        />
        <RowChoiceBox
          id="50418"
          title="城镇化率"
        />
        <RowChoiceBox
          id="50419"
          title="老龄化率"
        />
        <RowChoiceBox
          id="50420"
          title="当地对疫情的应对措施"
        />
        <RowChoiceBox
          id="50421"
          title="基础保障制度的完善程度"
        />
        <RowChoiceBox
          id="50422"
          title="大众舆论"
        />
        <RowChoiceBox
          id="50423"
          title="民众基础医学知识水平"
        />
        <RowChoiceBox
          id="50424"
          title="制度体制"
        />
        <Button type="primary" className="main-content-btn" onClick={() => handleSubmit()} disabled={btnDisabled}>提交</Button>
      </div>
      <div className="main-footer">

      </div>
    </div>
  );
}


