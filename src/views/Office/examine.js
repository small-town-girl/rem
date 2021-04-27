
import { Tabs } from 'antd';

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import instance from '../../sercice/request'
import axios from 'axios'
import {Select} from 'antd';



const { Option } = Select;



function Axamine(){
    const { RangePicker } = DatePicker;
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
   
   const [arr,setarr] = useState([])
   const [arr2,setarr2] = useState([])

   instance.post('http://crm.cimns.com/index.php/oa/examine/index','by:my&limit:15&category_id:&check_status:0&page:1').then((data)=> {
    if(!data) return;
    console.log(1)
    // if(data.code===200){
    //     if(arr.length <= 0){  
    //         setarr(data.data.list)
    //     }
    // }
  })
  instance.post('http://crm.cimns.com/index.php/oa/examine/index',{
    by: 'stay_examine',
    limit: 15,
    category_id: '',
    check_status: 'all',
    page: 1
  }).then((data)=> {
      if(!data) return;
      console.log(1)
    // if(data.code===200){
    //     if(arr2.length <= 0){  
    //         setarr2(data.data.list)
    //     }
    // }
  })
 
    return(
        <div className='ly13' style={{backgroundColor:'#fff',width:100+'%'}}>
            <div className='tc-poe'>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="我发起的" key="1">
                        <div className='tc-1-top clearfix'>
                            <div className='tc-select'>
                                <div className='tc-select-1 clearfix'>
                                    <p>审核状态</p>
                                        <Select defaultValue="Option1">
                                            <Option value="Option1">全部</Option>
                                            <Option value="Option2">待审</Option>
                                            <Option value="Option3">审批中</Option>
                                            <Option value="Option4">通过</Option>
                                            <Option value="Option5">失败</Option>
                                            <Option value="Option2">撤回</Option>
                                        </Select>
                                </div>
                                <div className='tc-select-1 clearfix'>
                                    <p>发起时间</p>
                                    <div className='flaaa'>
                                    <Space direction="vertical" size={12}>
                                        <RangePicker />
                                    </Space>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sp-end'>
                            {arr.map((item,index)=>{
                                return(
                                    <div className='sp-itel' key={index}>
                                        <div className='sp-top clearfix'>
                                            <div className='sp-fl'>
                                                <div className='sp-fl-img'><img src={item.create_user_info.thumb_img}  alt="" /></div>
                                                <div className='sp-name'>
                                                    <p>{item.create_user_info.realname}</p>
                                                    <p>2021-04-12 8:33</p>
                                                </div>
                                            </div>
                                            <div className='sp-fr'>
                                                <span></span><span>{item.category_name}-{item.check_status_info}</span><span className='iconfont'>· · ·</span>
                                            </div>
                                        </div>
                                        <div className='sp-end-end'>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='end-p'>没有更多了</p>
                    </TabPane>
                    <TabPane tab="我审批的" key="2">
                    <div className='tc-1-top clearfix'>
                            <div className='tc-select'>
                                <div className='tc-select-1 clearfix'>
                                    <p>审核状态</p>
                                        <Select defaultValue="Option1">
                                            <Option value="Option1">全部</Option>
                                            <Option value="Option2">待审</Option>
                                            <Option value="Option3">审批中</Option>
                                            <Option value="Option4">通过</Option>
                                            <Option value="Option5">失败</Option>
                                            <Option value="Option2">撤回</Option>
                                        </Select>
                                </div>
                                <div className='tc-select-1 clearfix'>
                                    <p>发起时间</p>
                                    <div className='flaaa'>
                                    <Space direction="vertical" size={12}>
                                        <RangePicker />
                                    </Space>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sp-end'>
                            {arr2.map((item,index)=>{
                                return(
                                    <div className='sp-itel' key={index}>
                                        <div className='sp-top clearfix'>
                                            <div className='sp-fl'>
                                                <div className='sp-fl-img'><img src={item.create_user_info.thumb_img}  alt="" /></div>
                                                <div className='sp-name'>
                                                    <p>{item.create_user_info.realname}</p>
                                                    <p>2021-04-12 8:33</p>
                                                </div>
                                            </div>
                                            <div className='sp-fr'>
                                                <span></span><span>{item.category_name}-{item.check_status_info}</span><span className='iconfont'>· · ·</span>
                                            </div>
                                        </div>
                                        <div className='sp-end-end'>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='end-p'>没有更多了</p>
                    </TabPane>
                </Tabs>
                <div className='tc-poa'>
                    <Button type="primary" onClick={showModal}>
                        新建任务
                    </Button>
                </div>
                <div className='tc-poa-2'>
                    <div className='tc-select-1 clearfix'>
                            <p>审批类型</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">普通审批</Option>
                                    <Option value="Option3">请假审批</Option>
                                    <Option value="Option4">出差审批</Option>
                                    <Option value="Option5">加班审批</Option>
                                    <Option value="Option6">差旅审批</Option>
                                    <Option value="Option7">借款申请</Option>
                                </Select>
                        </div>
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

export default Axamine