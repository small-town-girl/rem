
// export default Journal

import { Tabs, Button, Space,  Modal, Select, DatePicker } from 'antd';
import instance from '../../sercice/request'
import { useState } from 'react'
const { TabPane } = Tabs;
const { Option } = Select;


function callback(key) {
    console.log(key);
}




function Journal(props) {
    const [visible, setvisible] = useState(false)
    const [arr, setarr] = useState([]) //日志
    const [text, settext] = useState([]) //
    const [lolp, setlolp] = useState([])
    let tpl = true
    function onChange(value) {
        console.log(value);
    }
    

    instance.post('http://crm.cimns.com/index.php/admin/users/getUserList').then((data) => {
        if (data.data.code === 200) {
            if (lolp.length <= 0) {
                setlolp(data.data.data)
            }
        }
    }, (err) => {
        console.log(err)
    })
    // console.log(lolp);
    // 日志 
    instance.post('http://crm.cimns.com/index.php/oa/log/index', {
        create_time: '',
        page: 1,
        limit: 15,
        by:'',
    }).then((data) => {
        if (data.code === 200) {
            if (arr.length <= 0) {
                setarr(data.data.list)
            }
        } 
    })

    instance.post('http://crm.cimns.com/index.php/oa/log/index',{
        create_time: '',
        page: 1,
        limit: 15,
        by: 'me'
    }).then((data) => {
        if (data.code === 200) {
            if (text.length <= 0) {
                settext(data.data.list)
            }
        }
    })
    function showModal() {
        setvisible(true)
    };
    function handleOk() {
        setvisible(false)
    };
    return (
        <div className="cont-rgt" style={{backgroundColor:'#fff',width:100+'%'}}>
            <div className="off3 off5">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="全部" key="1">
                        <div className="off3-cont">
                        <div className='tc-1-top clearfix'>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>发起人</p>
                                <Select defaultValue="全部">
                                {lolp.map((item, idx) => {
                                    return (
                                        <Option  value ={item.username} key={idx}>{item.username}</Option>
                                        )
                                    })}
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>提交时间</p>
                            <div className='tc-slel-fl'>
                            <Space direction="vertical" >
                                <DatePicker onChange={onChange} placeholder='选择日期' />
                            </Space>
                            </div>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>类型</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">日报</Option>
                                    <Option value="Option3">周报</Option>
                                    <Option value="Option4">月报</Option>
                                </Select>
                        </div>
                    </div>
                    </div>
                            <div className="offs-contb">
                                    {arr.map((itm, ine) => {
                                        return (
                                            <li key={ine} style={{overflow:'hidden',marginBottom:20}}>
                                                <div className="item">
                                                    <div className="ite-top">
                                                        <div className="ite-let">
                                                            <div className="img" style={{float:'left'}}><img src={itm.create_user_info.thumb_img} alt="" style={{width:25,borderRadius:17.5}}></img></div>
                                                            <div className="txt" style={{marginLeft:50,textAlign:'left'}}>
                                                                <p>{itm.create_user_info.realname} <span>已读</span></p>
                                                                <p>2021-04-08 14:47 0个部门，1个同事</p>
                                                            </div>
                                                        </div>
                                                        <div className="ite-com" style={{textAlign:'left'}}>
                                                            <p>今日工作内容： <span>{itm.content}</span></p>
                                                            <p>明日工作内容：<span>{itm.tomorrow}</span></p>
                                                            <p>遇到的问题：<span>{itm.question}</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="replys" style={{textAlign:'left'}}>
                                                        <div className="reply"><button onClick={() => {
                                                            tpl = !tpl;
                                                        }}><i className="iconfont">&#xe6a8;</i>回复</button></div>
                                                       
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                <p className="tnb">没有更多了</p>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="我发出的日志" key="2" >
                    <div className="off3-cont">
                        <div className='tc-1-top clearfix'>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>提交时间</p>
                            <div className='tc-slel-fl'>
                            <Space direction="vertical" >
                                <DatePicker onChange={onChange} placeholder='选择日期' />
                            </Space>
                            </div>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>类型</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">日报</Option>
                                    <Option value="Option3">周报</Option>
                                    <Option value="Option4">月报</Option>
                                </Select>
                        </div>
                    </div>
                    </div>
                            <div className="offs-contb">
                                    {text.map((itm, ine) => {
                                        return (
                                            <li key={ine} style={{overflow:'hidden',marginBottom:20}}>
                                                <div className="item">
                                                    <div className="ite-top">
                                                        <div className="ite-let">
                                                            <div className="img" style={{float:'left'}}><img src={itm.create_user_info.thumb_img} alt="" style={{width:25,borderRadius:17.5}}></img></div>
                                                            <div className="txt" style={{marginLeft:50,textAlign:'left'}}>
                                                                <p>{itm.create_user_info.realname} <span>已读</span></p>
                                                                <p>2021-04-08 14:47 0个部门，1个同事</p>
                                                            </div>
                                                        </div>
                                                        <div className="ite-com" style={{textAlign:'left'}}>
                                                            <p>今日工作内容： <span>{itm.content}</span></p>
                                                            <p>明日工作内容：<span>{itm.tomorrow}</span></p>
                                                            <p>遇到的问题：<span>{itm.question}</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="replys" style={{textAlign:'left'}}>
                                                        <div className="reply"><button onClick={() => {
                                                            tpl = !tpl;
                                                        }}><i className="iconfont">&#xe6a8;</i>回复</button></div>
                                                       
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                <p className="tnb">没有更多了</p>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="我收到的" key="3" >
                    <div className="off3-cont">
                        <div className='tc-1-top clearfix'>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>发起人</p>
                                <Select defaultValue="全部">
                                {lolp.map((item, idx) => {
                                    return (
                                        <Option  value ={item.username} key={idx}>{item.username}</Option>
                                        )
                                    })}
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>提交时间</p>
                            <div className='tc-slel-fl'>
                            <Space direction="vertical" >
                                <DatePicker onChange={onChange} placeholder='选择日期' />
                            </Space>
                            </div>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>类型</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">日报</Option>
                                    <Option value="Option3">周报</Option>
                                    <Option value="Option4">月报</Option>
                                </Select>
                        </div>
                    </div>
                    </div>    
                    </div>
                    <div className="offs-contb">
                            <p className="tnb">没有更多了</p>
                        </div>
                    </TabPane>
                    <TabPane tab="未读" key="4" >
                    <div className="off3-cont">
                        <div className='tc-1-top clearfix'>
                    <div className='tc-select'>
                        <div className='tc-select-1 clearfix'>
                            <p>发起人</p>
                                <Select defaultValue="全部">
                                {lolp.map((item, idx) => {
                                    return (
                                        <Option  value ={item.username} key={idx}>{item.username}</Option>
                                        )
                                    })}
                                </Select>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>提交时间</p>
                            <div className='tc-slel-fl'>
                            <Space direction="vertical" >
                                <DatePicker onChange={onChange} placeholder='选择日期' />
                            </Space>
                            </div>
                        </div>
                        <div className='tc-select-1 clearfix'>
                            <p>类型</p>
                                <Select defaultValue="Option1">
                                    <Option value="Option1">全部</Option>
                                    <Option value="Option2">日报</Option>
                                    <Option value="Option3">周报</Option>
                                    <Option value="Option4">月报</Option>
                                </Select>
                        </div>
                    </div>
                    </div>
                            <div className="offs-contb">
                                    {arr.map((itm, ine) => {
                                        return (
                                            <li key={ine} style={{overflow:'hidden',marginBottom:20}}>
                                                <div className="item">
                                                    <div className="ite-top">
                                                        <div className="ite-let">
                                                            <div className="img" style={{float:'left'}}><img src={itm.create_user_info.thumb_img} alt="" style={{width:25,borderRadius:17.5}}></img></div>
                                                            <div className="txt" style={{marginLeft:50,textAlign:'left'}}>
                                                                <p>{itm.create_user_info.realname} <span>未读</span></p>
                                                                <p>2021-04-08 14:47 0个部门，1个同事</p>
                                                            </div>
                                                        </div>
                                                        <div className="ite-com" style={{textAlign:'left'}}>
                                                            <p>今日工作内容： <span>{itm.content}</span></p>
                                                            <p>明日工作内容：<span>{itm.tomorrow}</span></p>
                                                            <p>遇到的问题：<span>{itm.question}</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="replys" style={{textAlign:'left'}}>
                                                        <div className="reply"><button onClick={() => {
                                                            tpl = !tpl;
                                                        }}><i className="iconfont">&#xe6a8;</i>回复</button></div>
                                                       
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                <p className="tnb">没有更多了</p>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
                <Button type="primary" className="off3-btn" onClick={showModal}>
                    写日志
            </Button>
                <Modal
                    visible={visible}
                    title="写日志"
                    className="off5-maskt"
                    onOk={handleOk}
                    onCancel={handleOk}
                    footer={[
                        <Button key="back" onClick={handleOk}>
                            确认
                </Button>,
                        <Button key="submit" type="primary" onClick={handleOk}>
                            取消
                </Button>
                    ]}
                >
                </Modal>
            </div>
        </div>
    )
}
export default Journal