import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export function RulesViewer() {
  const [showXml, setShowXml] = useState(false);
  const [xmlContent, setXmlContent] = useState('');

  const handleButtonClick = () => {
    const xhr = new XMLHttpRequest();
    const xmlUrl = `http://localhost:3000/Data/rules/rules.xml`;
    xhr.open('GET', xmlUrl, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const xmlContent = xhr.responseText;
        setXmlContent(xmlContent);
        setShowXml(true);
      }
    };
    xhr.send();
  };

  const handleClose = () => {
    setShowXml(false);
  };

  const xmlContentDiv = showXml ? (
    <Modal
      visible={true}
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>规则文件</span>
          <Button type="primary" onClick={() => downloadFile(xmlContent)}>导出</Button>
          <span span style={{marginLeft: '20px'}}></span>
          {/* <Button type="link" onClick={handleClose}>关闭</Button> */}
        </div>
      }
      footer={null}
      onCancel={handleClose}
      bodyStyle={{ padding: '10px', overflowY: 'scroll', maxHeight: '50vh' }}
      style={{ top: '50px' }}
    >
      <pre>{xmlContent}</pre>
    </Modal>
  ) : null;

  const downloadFile = (content) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'rules.xml';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <React.Fragment>
      <Button
        type="primary"
        shape="round"
        size="small"
        style={{ fontSize: '12px', backgroundColor: '#fff', color: '#000', border: 'none' }}
        onClick={handleButtonClick}
      >
        显示规则文件
      </Button>
      {xmlContentDiv}
    </React.Fragment>
  );
}
