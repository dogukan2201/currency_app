import { useState } from 'react'
import './App.css'
import { Currency } from './components/Currency'
import { Button, Input, Select, Space ,InputNumber, Flex, Segmented,Divider} from 'antd';
import {ArrowRightOutlined } from '@ant-design/icons';
import { Ant } from './components/Ant';

function App() {


  return (
    <>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        EXCHANGE APP

          <Ant/>
  
      </div>
    </>
  )
}

export default App
