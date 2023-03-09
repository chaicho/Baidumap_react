import {Row,Col, Slider,InputNumber } from 'antd';
import { useState } from 'react';
export function TimeRate(props) {
  const [inputValue, setInputValue] = useState(1);
  return (
    <Row>
      <Col span={20}>
        <Slider
          min={1}
          max={10}
          trackStyle={{ backgroundColor: '#ff0000' }}
          handleStyle={{ borderColor: '#ff0000' }}
          railStyle={{ backgroundColor: '#cccccc' }}
          defaultValue={1}
          onChange={(value) => {
            props.setplayRate(value)
            setInputValue(value)
          }}
          value={typeof inputValue === 'number' ? inputValue : 0}
          />
      </Col>
      <Col span={1}>
        <InputNumber
          min={1}
          max={10}
          style={{ margin: '0 8px' }}
          value={inputValue}
          onChange={(value) => {
            props.setplayRate(value)
            setInputValue(value)
          }}
        />
      </Col>
    </Row>
  );
}