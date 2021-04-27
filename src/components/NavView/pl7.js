// import React,{useState} from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import {
    PlusOutlined
  } from '@ant-design/icons';
const style = { height:130, padding: '8px 0',backgroundColor:'#fff',borderRadius:5 };
function Mypro(){
    return(
        <div>
            <div className='top'>
                <h3>我的任务</h3>
            </div>
            <div className='content_child'>
            <Row gutter={16}>
                <Col className="gutter-row" span={5}>
                    <div style={style}>
                        <div className='box'>
                            <h6><b>收件箱</b>  0/0</h6>
                            <div></div>
                            <p><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div style={style}>
                        <div className='box'>
                            <h6><b>今天要做</b>  0/0</h6>
                            <div></div>
                            <p><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div style={style}>
                        <div className='box'>
                            <h6><b>下一步要做</b>  0/0</h6>
                            <div></div>
                            <p><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div style={style}>
                        <div className='box'>
                            <h6><b>以后要做</b>  0/0</h6>
                            <div></div>
                            <p><PlusOutlined style={{color:'#3e8ee9'}}/> 新建任务</p>
                        </div>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    )
}
export default Mypro