import React, { useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { timeContext } from '../../Mymap';
export function TitleBar() {
  const { tick, mapsec } = useContext(timeContext)
  return (
    <Menu style={{
      backgroundColor: '#f7bb88',
      height: '100%'
    }} inverted>
      <Menu.Item header style={{ color: 'black', fontSize: '25px' }}>
        高速门架监测平台
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item  style={{ color: 'black', fontSize: '25px' }}>
          {new Date(mapsec).toLocaleString()}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

