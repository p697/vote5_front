import React, { useState } from 'react';
import {
  Card,
  Rate
} from 'antd';
import { AppContext } from '../../../../index'

import './row_choice_box.scss';

export default (props) => {
  const { id, title, isShow, changeShowList } = props;
  const app = React.useContext(AppContext)
  const [selected, setSelected] = useState(0)
  const desc = ["没有影响", "有点影响", "一般影响", "很有影响", "十分影响"]

  const onChange = e => {
    if (changeShowList) {
      changeShowList()
    }
    
    setSelected(e)
    app.setContext({
      ...app.context,
      ...{
        answers: {
          ...app.context.answers,
          ...{
            [id]: e
          }
        }
      }
    })
  }

  if (isShow === 0) {
    return ''
  }

  return (
    <Card title={title} bordered={false} size="small" className="row_choice_box" headStyle={{ fontSize: "15px" }} >
      <Rate character="●" value={selected} onChange={e => onChange(e)} className="row_choice_box-cricle" />
      {selected ? <span className="ant-rate-text row_choice_box-ratetext">{desc[selected - 1]}</span> : ''}
    </Card>
  );
}


