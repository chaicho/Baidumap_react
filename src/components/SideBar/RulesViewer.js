import React, { useState } from 'react';

export function RulesViewer() {
  // 初始化 state，用于存储 XML 文件内容和显示/隐藏标志
  const [xmlContent, setXmlContent] = useState('');
  const [showXml, setShowXml] = useState(false);

  // 点击按钮时的事件处理函数
  const handleButtonClick = () => {
    // 创建 XMLHttpRequest 对象
    const xhr = new XMLHttpRequest();

    // 获取 XML 文件的 URL
    const xmlUrl = `http://localhost:3000/Data/rules/rules.xml`;
    // 设置请求方法和 URL
    xhr.open('GET', xmlUrl, true);

    // 注册 readyState 改变事件处理函数
    xhr.onreadystatechange = () => {
      // 如果请求完成且响应状态码为 200
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // 获取响应文本内容
        const xmlContent = xhr.responseText;

        // 更新 state，设置 XML 文件内容和显示标志
        setXmlContent(xmlContent);
        setShowXml(true);
      }
    };

    // 发送请求
    xhr.send();
  };

  // 根据显示/隐藏标志决定是否显示 XML 文件内容
  const xmlContentDiv = showXml ? (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        left: '0',
        padding: '10px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,.3)',
      }}
    >
      <pre>{xmlContent}</pre>
    </div>
  ) : null;

  // 渲染界面
  return (
    <div>
      <button onClick={handleButtonClick}>显示 XML 文件</button>
      {xmlContentDiv}
    </div>
  );
}
