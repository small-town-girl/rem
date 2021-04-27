
import { Tabs } from 'antd';
import instance from '../../sercice/request'

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { DatePicker, Space } from 'antd';
import axios from 'axios'
import {Select} from 'antd';
import { Checkbox } from 'antd';
const { Option } = Select;



function Tesk(){
    
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
    const [list,setlist] = useState([])
    const [list2,setlist2] = useState([])
    instance.post('http://crm.cimns.com/index.php/oa/task/myTask',{
    type: '',
    status: 1,
    priority: 'all',
    time: '',
    subUser:'',
    limit: 15,
    page: 1
    
    }).then((data)=>{
      if(data.code===200){
          if(arr.length<=0){
            let arr2 = data.data.list
            setarr(arr2)
          }
      }
    })
    instance.post('http://crm.cimns.com/index.php/admin/users/getUserList',{}).then((data)=>{
      if(data.code===200){
          if(list.length<=0){
            //   console.log(data.data.data);
            setlist(data.data)
          }
          
      }
    })
    instance.post('http://crm.cimns.com/index.php/oa/task/subTaskList',{
        type: '',
        status: 1,
        priority: 'all',
        time: '',
        subUser: '',
        limit: 15,
        page: 1


    }).then((data)=>{
      if(data.code===200){
          if(list2.length<=0){
            setlist2(data.data.list)
          }
      }
    })
    function data(item){
        var d = new Date()
        var mm = d.getMonth(item.stop_time) + 1;
        return mm
    }
    function data2(item){
        var d = new Date()
        var dd = d.getDate(item.stop_time) +1;
        return dd
    }
    function data3(item2){
        var d = new Date()
        var dd = d.getDate(item2.stop_time) +1;
        return dd
    }
    function data4(item2){
        var d = new Date()
        var mm = d.getMonth(item2.stop_time) + 1;
        return mm
    }
    return(
        <div className='ly13' style={{backgroundColor:'#fff',width:100+'%'}}>
            <div className='tc-poe'>
                <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="我的任务" key="1">
                    <div className='tc-1-top clearfix'>
                    <div className='sq'>
                        <input type='text' placeholder='搜索任务名称'/>
                        <span className='iconfont'>&#xe612;</span>
                    </div>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>任务类型</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">我负责的</Option>
                                    <Option value="Option3">我创建的</Option>
                                    <Option value="Option4">我参与的</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>状态</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">正在进行</Option>
                                    <Option value="Option3">已完成</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>截止时间</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">今天到期</Option>
                                    <Option value="Option3">明天到期</Option>
                                    <Option value="Option4">一周到期</Option>
                                    <Option value="Option5">一月到期</Option>
                                </Select>
                        </div>
                    </div>
                    </div>
                    <div className='tc-2-end'>
                        {arr.map((item,index)=>{
                            return(
                                <div key={index} className='tc-item clearfix'>
                                    <div className='check'><Checkbox onChange={onChange}>{item.task_name}</Checkbox></div>
                                    <div className='check-fr'>
                                        <div className='icon'>
                                            <span></span>
                                            <em></em>
                                        </div>
                                        <div className='tc-time'>{data(item)}-{data2(item)}截止</div>
                                        <div className='tc-img'><img src={item.thumb_img}  alt="" /></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </TabPane>
                <TabPane tab="我下属的任务" key="2">
                <div className='tc-1-top clearfix'>
                    <div className='sq'>
                        <input type='text' placeholder='搜索任务名称'/>
                        <span className='iconfont'>&#xe612;</span>
                    </div>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>任务类型</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">我负责的</Option>
                                    <Option value="Option3">我创建的</Option>
                                    <Option value="Option4">我参与的</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>状态</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">正在进行</Option>
                                    <Option value="Option3">已完成</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>截止时间</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">今天到期</Option>
                                    <Option value="Option3">明天到期</Option>
                                    <Option value="Option4">一周到期</Option>
                                    <Option value="Option5">一月到期</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>截止时间</p>
                                <Select defaultValue="全部">
                                    {list.map((item,index)=>{
                                        return(
                                            <Option key={index} >{item.realname}</Option>
                                        )
                                    })}
                                </Select>
                        </div>
                    </div>
                    </div>
                    <div className='tc-2-end'>
                        {list2.map((item2,index)=>{
                            return(
                                <div key={index} className='tc-item clearfix'>
                                    <div className='check'><Checkbox onChange={onChange}>{item2.task_name}</Checkbox></div>
                                    <div className='check-fr'>
                                        <div className='icon'>
                                            <span></span>
                                            <em></em>
                                        </div>
                                        <div className='tc-time'>{data4(item2)}-{data3(item2)}截止</div>
                                        <div className='tc-img'><img style={{display:item2.main_user.img===''?'none':'block'}} src={item2.main_user.img}  alt="" /></div>
                                    </div>
                                </div>
                            )
                        })}
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
                <div className='textin'>
                    <textarea autocomplete="off"></textarea>
                </div>
            </Modal>
            </div>
            
        </div>
        
    );
}

export default Tesk