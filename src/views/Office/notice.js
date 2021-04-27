import { Tabs } from 'antd';

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import instance from '../../sercice/request'
import {Select} from 'antd';

const { Option } = Select;



function Notice(){
    
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
   
  const [listt,setlistt]=useState([])
  instance.post('http://crm.cimns.com/index.php/oa/announcement/index',{
    type: 1,
    page: 1,
    limit: 15
  }).then((data)=> {
    if(data.code===200){
        if(listt.length <= 0){  
          //   console.log(data.data.data.list);
            setlistt(data.data.list)
        }
    }
  })
 
    return(
        <div className='ly13' style={{backgroundColor:'#fff',width:100+'%'}}>
            <div className='tc-poe'>
                <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="公告" key="1">
                    
                    <div className='tc-select'>
                    <div className='tc-1-top clearfix'>
                        <div className='tc-select'>
                            <div className='tc-select-1 clearfix'>
                                <p>公告状态</p>
                                    <Select defaultValue="Option1">
                                        <Option value="Option1">公式中</Option>
                                        <Option value="Option2">已结束</Option>
                                    </Select>
                            </div>
                        </div>
                    </div>
                    <div className='tc-2-end'>
                    <div className="offs-contb">
                                <ul className="litext">
                                    {listt.map((itm,inde)=>{
                                        return(
                                            <li key={inde}>
                                            <div className="item">
                                                <div className="ite-top">
                                                    <div className="ite-let">
                                                        <div className="img"><img style={{display:itm.thumb_img===""?'none':'block'}} src={itm.thumb_img} alt=""></img>
                                                        <span style={{display:itm.thumb_img===''?'block':'none'}}>理员</span>
                                                        </div>
                                                        <div className="txt">
                                                        <p>{itm.realname}</p>
                                                        <p>2021-04-10 14:26</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="textl">{itm.title}</p>
                                                <div className="ite-btom"> <p >{itm.title}</p></div>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                    </div>
                        
                    </div>
                    
                </TabPane>
                </Tabs>
                <div className='tc-poa'>
                    <Button type="primary" onClick={showModal}>
                        新建任务
                    </Button>
                </div>
                <Modal title="新建任务" visible={isModalVisible} okText="保存" cancelText="取消" width={800} maskStyle={{ background: '#ddd' }} onOk={handleOk} onCancel={handleCancel}>
                <div className='tc-top clearfix'>
                    <div className='tc-top-input-1'>
                        <span>任务名称</span>
                        <input type='text' />
                    </div>
                    <div className='tc-top-input-1'>
                        <span>负责人</span>
                        <input type='text' />
                    </div>
                </div>
                <div className='tc-top clearfix'>
                    <div className='tc-top-input-1'>
                        <span>开始时间</span>
                        <Space direction="vertical" >
                            <DatePicker onChange={onChange} placeholder='选择日期' />
                        </Space>
                    </div>
                    <div className='tc-top-input-1'>
                        <span>结束时间</span>
                        <DatePicker onChange={onChange} placeholder='选择日期' />
                    </div>
                </div>
                <div className='tc-color'>
                    <p>优先级</p>
                    <ul className='clearfix'>
                        <li>高</li>
                        <li>中</li>
                        <li>低</li>
                        <li>无</li>
                    </ul>
                </div>
                <div className='textin'>
                    <textarea autocomplete="off"></textarea>
                </div>
            </Modal>
            </div>
            
        </div>
        
    );
}

export default Notice
