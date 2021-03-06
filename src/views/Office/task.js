
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
                <TabPane tab="????????????" key="1">
                    <div className='tc-1-top clearfix'>
                    <div className='sq'>
                        <input type='text' placeholder='??????????????????'/>
                        <span className='iconfont'>&#xe612;</span>
                    </div>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>????????????</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">??????</Option>
                                    <Option value="Option2">????????????</Option>
                                    <Option value="Option3">????????????</Option>
                                    <Option value="Option4">????????????</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>??????</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">??????</Option>
                                    <Option value="Option2">????????????</Option>
                                    <Option value="Option3">?????????</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>????????????</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">??????</Option>
                                    <Option value="Option2">????????????</Option>
                                    <Option value="Option3">????????????</Option>
                                    <Option value="Option4">????????????</Option>
                                    <Option value="Option5">????????????</Option>
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
                                        <div className='tc-time'>{data(item)}-{data2(item)}??????</div>
                                        <div className='tc-img'><img src={item.thumb_img}  alt="" /></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </TabPane>
                <TabPane tab="??????????????????" key="2">
                <div className='tc-1-top clearfix'>
                    <div className='sq'>
                        <input type='text' placeholder='??????????????????'/>
                        <span className='iconfont'>&#xe612;</span>
                    </div>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>????????????</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">??????</Option>
                                    <Option value="Option2">????????????</Option>
                                    <Option value="Option3">????????????</Option>
                                    <Option value="Option4">????????????</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>??????</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">??????</Option>
                                    <Option value="Option2">????????????</Option>
                                    <Option value="Option3">?????????</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>????????????</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">??????</Option>
                                    <Option value="Option2">????????????</Option>
                                    <Option value="Option3">????????????</Option>
                                    <Option value="Option4">????????????</Option>
                                    <Option value="Option5">????????????</Option>
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>????????????</p>
                                <Select defaultValue="??????">
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
                                        <div className='tc-time'>{data4(item2)}-{data3(item2)}??????</div>
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
                        ????????????
                    </Button>
                </div>
                <Modal title="????????????" visible={isModalVisible} okText="??????" cancelText="??????" width={800} maskStyle={{ background: '#ddd' }} onOk={handleOk} onCancel={handleCancel}>
                <div className='tc-top clearfix'>
                    <div className='tc-top-input-1'>
                        <span>????????????</span>
                        <input type='text' />
                    </div>
                    <div className='tc-top-input-1'>
                        <span>?????????</span>
                        <input type='text' />
                    </div>
                </div>
                <div className='tc-top clearfix'>
                    <div className='tc-top-input-1'>
                        <span>????????????</span>
                        <Space direction="vertical" >
                            <DatePicker onChange={onChange} placeholder='????????????' />
                        </Space>
                    </div>
                    <div className='tc-top-input-1'>
                        <span>????????????</span>
                        <DatePicker onChange={onChange} placeholder='????????????' />
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