import React, { useState } from 'react'; //组件2
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import {
    PlusOutlined
  } from '@ant-design/icons';
  import { Modal, Button,Upload, } from 'antd';
import { DatePicker, Space } from 'antd';
import { UploadOutlined} from '@ant-design/icons';
const style = { height:110, padding: '8px 0',backgroundColor:'#fff',borderRadius:5 };
function Myprol1(){
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
    const { RangePicker } = DatePicker;
 return(
    <div>
        <div className='content_child'>
        <Row gutter={15}>
            <Col className="gutter-row" span={5}>
                <div style={style}>
                    <div className='box'>
                        <h6><b>收件箱</b>  0/0</h6>
                        <div></div>
                        <p onClick={showModal}><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                    </div>
                </div>
            </Col>
            <Col className="gutter-row" span={5}>
                <div style={style}>
                    <div className='box'>
                        <h6><b>今天要做</b>  0/0</h6>
                        <div></div>
                        <p onClick={showModal}><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                    </div>
                </div>
            </Col>
            <Col className="gutter-row" span={5}>
                <div style={style}>
                    <div className='box'>
                        <h6><b>下一步要做</b>  0/0</h6>
                        <div></div>
                        <p onClick={showModal}><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                    </div>
                </div>
            </Col>
            <Col className="gutter-row" span={5}>
                <div style={{ height:50,textAlign:'center', padding: '8px 0',backgroundColor:'#fff',borderRadius:5 }}>
                    <p onClick={showModal} style={{marginTop:'5px',color:'#999'}}><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                </div>
            </Col>
        </Row>
        </div>
        <Modal title="新建任务" okText="保存" cancelText="取消" width={700} maskStyle={{ background: '#eee',height:'100%'}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} bodyStyle={{padding:40,fontSize: '12px'}} style={{marginTop:-70}}>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                    <div className='proinput'><p><b style={{fontWeight:'none',color:'red'}}>*</b>任务名称</p><input type="text" className="ass acc"></input></div>
                    <div className='proinput'><p>负责人</p><input type="text" className="ass acc"></input></div>
                    <div className='proinput'><p>开始时间-结束时间</p>
                        <Space direction="vertical" size={12}>
                            <RangePicker />
                        </Space>
                    </div>
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
 )
}
export default Myprol1