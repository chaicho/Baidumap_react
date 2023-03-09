import React, { useContext } from 'react';
import { Menu } from 'semantic-ui-react';

import { timeContext } from '../../Mymap';

export function TitleBar() {
  const { tick, mapsec } = useContext(timeContext);
  return (
    <>
      <style>
        {`
          .ui.menu {
            margin: 0;
            border-right: 0;
            border-left: 0;
          }
          .ui.menu .item::before {
            position: absolute;
            content: '';
            top: 0;
            right: 0;
            height: 100%;
            width: 1px;
            background: rgba(34, 36, 38, .1);
          }
          .ui.menu .header.item {
            padding-right: 0 !important;
          }
        `}
      </style>
      <Menu inverted style={{ backgroundColor: '#005f73' }}>
        <Menu.Item style={{ color: 'white', fontSize: '25px' }}>
          高速门架监测平台
        </Menu.Item>
        <Menu.Item position="right" style={{ color: 'white', fontSize: '25px', paddingRight: '0 !important' }}>
          {new Date(mapsec).toLocaleString()}
        </Menu.Item>
      </Menu>
    </>
  );
}

// export default TitleBar;
