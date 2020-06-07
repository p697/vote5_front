import React, { useState } from 'react';
import {
  Card,
  Radio
} from 'antd';
import { AppContext } from '../../../../index'

import './normal_choice_box.scss';

export default (props) => {
  const { id, title, choices } = props;
  const app = React.useContext(AppContext)
  const [selected, setSelected] = useState(-1)

  const radioStyle = {
    display: 'block',
    height: '36px',
    lineHeight: '30px',
    fontSize: '15px',
    lineHeight: '15px'
  };

  const onChange = e => {
    setSelected(e.target.value)
    app.setContext({
      ...app.context,
      ...{
        answers: {
          ...app.context.answers,
          ...{
            [id]: e.target.value + 1
          }
        }
      }
    })
  }

  const ChoicesCom = () => {
    return (
      <Radio.Group onChange={e => onChange(e)} value={selected}>
        {choices.map((choice, index) => {
          return <Radio style={radioStyle} value={index} key={index}>
            {choice}
          </Radio>
        })}
      </Radio.Group>
    )
  }

  return (
    <Card title={title} bordered={false} size="small" className="normal_choice_box" 
      headStyle={{ fontSize: "16px" }} 
    >
      <ChoicesCom />
    </Card>
  );
}


