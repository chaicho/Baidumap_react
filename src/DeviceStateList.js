import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
const dataSource = [
    {
        name: '0xdsad',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        desc: '我是一条测试的描述',
    },
    {
        name: '0xsadas',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        desc: '我是一条测试的描述',
    },
    {
        name: '0xasda',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        desc: '我是一条测试的描述',
    },
    {
        name: '0xadas',
        image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        desc: '我是一条测试的描述',
    },
    {
      name: '0xdsad',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
  },
  {
      name: '0xsadas',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
  },
  {
      name: '0xasda',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
  },
  {
      name: '0xadas',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
  },
];
export default () => (
 <ProList  onRow={(record) => {
        return {
            onMouseEnter: () => {
                console.log(record);
            },
            onClick: () => {
                console.log(record);
            },
        };
    }} rowKey="name" headerTitle="龙门架列表"  dataSource={dataSource} showActions="hover" showExtra="never" 
    pagination={{
      pageSize: 5,
    }}
    metas={{
        title: {
            dataIndex: 'name',
        },
        // avatar: {
        //     dataIndex: 'image',
        // },
        description: {
            dataIndex: 'desc',
        },

        subTitle: {
            render: () => {
                return (<Space size={0}>
              <Tag color="blue">问题描述</Tag>
              <Tag color="#5BD8A6">门架状况</Tag>
            </Space>);
            },
        },
        actions: {
            render: (text, row) => [
                <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
            链路
          </a>,
                <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="gg">
            报警
          </a>,
                <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
            查看
          </a>,
            ],
        },
    }}/>);