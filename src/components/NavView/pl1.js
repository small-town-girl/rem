
import { Calendar,Select, } from 'antd';  //组件1
import React, { useState } from 'react'; //组件2
import { Popover, Modal, Button,Upload, } from 'antd';
import { ConfigProvider } from 'antd'; //组件3 小日历

import { UploadOutlined} from '@ant-design/icons';



// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';



import '../../css/pl1.css'
moment.locale('zh-cn')

function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
}
function Mydata() {

    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      previewFile(file) {
        console.log('Your upload file:', file);
        // Your process logic. Here we just mock to the same file
        return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
          method: 'POST',
          body: file,
        })
          .then(res => res.json())
          .then(({ thumbnail }) => thumbnail);
      },
    };
    
    const { Option } = Select;

    const children = [];
    for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    

    // const [proarr, setproarr] = useState([])
    // axios.post('http://crm.cimns.com/index.php/admin/users/getUserList').then((data) => {
    //     if (data.data.code === 101) {
    //         console.log(data.data.arr)
    //     }
    //     else{
    //         if(proarr.length <=0){
    //             setproarr(data.data.data)
    //         }
    //     }
    //     console.log(proarr)
    // }, (err) => {
    //     console.log(err)
    // })

    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal() {
        setIsModalVisible(true);
    };

    function handleOk() {
        setIsModalVisible(false);
    };

    function handleCancel() {
        setIsModalVisible(false);
    };
    const content = (
        <div className="site-calendar-demo-card prodata">
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      );
    return (

        <div className="no1_2_box">
            <div className="no1_2_nav">   {/* 导航部分 */}
                <div className="no1_1_navtop">
                    <div>
                        <button className="navtop_left">今天</button>
                        <button className="navtop_rigth">日</button>
                        <button className="navtop_rigth">周</button>
                        <button className="navtop_rigth bg">月</button>
                    </div>
                </div>
                <div className="nav_center">
                    <span className="iconfont zs"><button>&#xe605;</button></span>
                    <h2 className="rq">2019年 四月</h2>
                    <span className="iconfont zz"><button>&#xe647;</button></span>
                </div>
                <div className="nav_rigth"> {/*创建任务*/}
                    <Button type="primary" onClick={showModal}>
                        创建任务
                    </Button>
                    <Modal title="新建任务" okText="保存" cancelText="取消" width={700} maskStyle={{ background: '#eee',height:'100%'}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} bodyStyle={{padding:40,fontSize: '12px'}} style={{marginTop:-70}}>
                        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                            <div className='proinput'><p><b style={{fontWeight:'none',color:'red'}}>*</b>任务名称</p><input type="text" className="ass acc"></input></div>
                            <div className='proinput'><p>负责人</p><input type="text" className="ass acc"></input></div>
                            <div className='proinput'><p>开始时间</p>
                            <Popover placement="bottomLeft" content={content} title="Title" trigger="focus" style={{position:'relative'}}>
                                <input type="text" className="ass acc" placeholder='开始时间'></input>
                            </Popover></div>
                            <div className='proinput'><p>结束时间</p>
                            <Popover placement="bottomLeft" content={content} title="Title" trigger="focus">
                                <input type="text" className="ass acc" placeholder='结束时间'></input>
                            </Popover></div>
                        </div>
                        
                        <div style={{marginBottom:35}}>
                            <p>优先级</p>
                            <ul className='prolist'>
                                <li style={{border:'1px solid rgb(243, 125, 125)',color:'rgb(243, 125, 125)'}}>高</li><li style={{border:'1px solid rgb(230, 128, 70)',color:'rgb(230, 128, 70)'}}>中</li><li style={{border:'1px solid rgb(70, 158, 230)',color:'rgb(70, 158, 230)'}}>低</li><li style={{backgroundColor:'#ccc',color:'#fff'}}>无</li>
                            </ul>
                        </div>
                        <div>
                            <p>任务描述</p>
                            <textarea className="no2_2_axx" style={{border:'1px solid #ccc'}}></textarea>
                        </div>
                        
                        <div className="no1_2_guanlian">
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>关联业务</Button>
                            </Upload>        
                        </div>
                        
                    </Modal>

                </div>
            </div>

            <div className="no1_2_content"> {/*  内容 */}
                <ConfigProvider locale={zhCN}> <Calendar onPanelChange={onPanelChange} />   {/*ant此组件功能插入不进去*/}</ConfigProvider>

            </div>
        </div>
    )
}
export default Mydata