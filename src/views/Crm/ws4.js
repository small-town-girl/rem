import React, { useState, useEffect} from 'react';
import insterreq from '../../sercice/request';
import {Empty,Input, Space,Select, Modal, Button,Pagination,DatePicker} from 'antd';
import '../dier/wc_3.css'


const { Search } = Input;

  const onSearch = value => console.log(value);
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
function Ws4(){
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('基本信息');
  
    const showModal = () => {
      setVisible(true);
    };
    const showModal1 = () => {
        setVisible(true);
      };
  
    const handleOk = () => {
      setModalText('lie modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };
  
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = () => {
          insterreq.post('http://crm.cimns.com/index.php/crm/leads/index',{
                page: 1,
                limit: 15,
                search: '',
              }).then((data)=>{
                console.log(data)
            })
          // setData(result.data.data.list);
        };
        fetchData(); 
      }, []);

   
    return(
        <div className="wc_3">
            <div className="wc_3-header clearfix">
                <div className="wc_3-header-title">
                    <h2>线索管理</h2>
                </div>
                <div className="wc_3-header-ss">
                    <Space direction="vertical">
                        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                    </Space>
                </div>
                <div className="wc_3-header-cj clearfix">
                    <div className="wc_3-header-cj-1">
                        <>
                            <Button type="primary" onClick={showModal}>
                                新建线索
                            </Button>
                            <Modal
                                title="新建线索"
                                visible={visible}
                                onOk={handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel}
                            >
                                <div style={{height:'600px'}}>
                                    <h4>基本信息</h4>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>线索名称</h6>
                                        <Input style={{width:'284px',margin:'0 10px'}}/>  
                                    </div>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>线索来源</h6>
                                        <>
                                            <Select defaultValue="请选择" style={{ width: 284 }} onChange={handleChange}>
                                                <Option value="1">促销活动</Option>
                                                <Option value="2">搜索引擎</Option>
                                                <Option value="3">广告</Option>
                                                <Option value="4">转介绍</Option>
                                                <Option value="5">线上注册</Option>
                                                <Option value="6">线上询价</Option>
                                                <Option value="7">预定上门</Option>
                                                <Option value="8">陌拜</Option>
                                                <Option value="9">招商资源</Option>
                                                <Option value="10">公司资源</Option>
                                                <Option value="11">展会资源</Option>
                                                <Option value="12">个人资源</Option>
                                                <Option value="13">电话咨询</Option>
                                                <Option value="14">邮件咨询</Option> 
                                            </Select>
                                        </>
                                    </div>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>电话</h6>
                                        <Input style={{width:'284px',margin:'0 10px'}}/>  
                                    </div>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>手机</h6>
                                        <Input style={{width:'284px',margin:'0 10px'}}/>  
                                    </div>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>客户行业</h6>
                                        <>
                                            <Select defaultValue="请选择" style={{ width: 284 }} onChange={handleChange}>
                                                <Option value="1">IT/通信/电子/互联网</Option>
                                                <Option value="2">金融业</Option>
                                                <Option value="3">房地产</Option>
                                                <Option value="4">商业服务</Option>
                                                <Option value="5">贸易</Option>
                                                <Option value="6">生产</Option>
                                                <Option value="7">运输/物流</Option>
                                                <Option value="8">服务业</Option>
                                                <Option value="9">文化传媒</Option>
                                                <Option value="10">政府</Option>
                                                <Option value="11">其他</Option>
                                                
                                            </Select>
                                        </>
                                    </div>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>客户级别</h6>
                                        <>
                                            <Select defaultValue="请选择" style={{ width: 280 }} onChange={handleChange}>
                                                <Option value="1">A(重点客户)</Option>
                                                <Option value="2">B(普通客户)</Option>
                                                <Option value="3">C(非优先客户)</Option>
                                            </Select>
                                        </>
                                    </div>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>地址</h6>
                                        <Input style={{width:'284px',margin:'0 10px'}}/>  
                                    </div>
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>下次联系时间</h6>
                                        <Space direction="vertical">
                                            <DatePicker onChange={onChange} />
                                        </Space>
                                    </div>
                                    
                                    <div style={{float:'left',width:'309px',height:'77px'}}>
                                        <h6 style={{margin:'5px 10px'}}>备注</h6>
                                        <Input style={{width:'284px',height:'70px',margin:'0 10px'}}/>  
                                    </div>
                                </div>
                            </Modal>
                        </>
                    </div>
                    <div className="wc_3-header-cj-2">
                        <>
                            <Select defaultValue="gd" style={{ width: 70 }} onChange={handleChange}>
                                <Option value="jack">导入</Option>
                                <Option value="lucy">导出</Option>
                                <Option value="gd">更多</Option>
                            </Select>
                        </>
                    </div>
                </div>
            </div>
            <div className="wc_3-con-top">
                    <div className="wc_3-con-top-1">场景:</div>
                    <div className="wc_3-con-top-2">
                    <>
                        <Select defaultValue="lucy" style={{ width: 120 }} bordered={false}>
                            <Option value="jack">我负责的线索</Option>
                            <Option value="lucy">全部线索</Option>
                            <Option value="Yiminghe">下属的线索</Option>
                            <Option value="cxe">已转化的线索</Option>
                        </Select>
                    </>
                    </div>
                    <div className="wc_3-con-top-3">
                    <>
                        <Button type="primary" onClick={showModal1}>
                            高级筛选
                        </Button>
                        <Modal
                            // title="Title"
                            // visible={visible}
                            // onOk={handleOk}
                            // confirmLoading={confirmLoading}
                            // onCancel={handleCancel}
                        >
                        <p>{modalText}</p>
                        </Modal>
                    </>
                    </div> 
                </div>
            <div className="wc_3-con">
                <div className="wc_3-con-con">
                    <div className="wc_3-con-con-1">
                        <ul>
                                <li>线索名称</li>
                                <li>线索来源</li>
                                <li>电话</li>
                                <li>手机</li>
                                <li>客户行业</li>
                                <li>客户级别</li>
                                <li>地址</li>
                                <li>下次联系时间</li>
                                <li>备注</li>
                                <li>创建人</li>
                                <li>更新时间</li>
                                <li>创建时间</li>
                                <li>负责人</li>
                                <li>跟进记录</li>
                               
                            </ul>
                    </div>
                    <div className="wc_3-con-con-2">
                        
                            {data.map((item)=>(
                            <ul key={item.create_user_id}>
                                    <li>{item.name} </li>
                                     <li>{item.source}</li>
                                     <li> {item.telephone}</li>
                                     <li>{item.next_time}</li>
                                     <li>{item.industry}</li>
                                     <li>{item.level}</li>
                                     <li>{item.detail_address}</li>
                                     <li>{item.next_time}</li>
                                     <li>{item.remark}</li>
                                     <li>{item. create_user_id_info.realname}</li>
                                     <li>{item.update_time}</li>
                                     <li>{item.create_time}</li>  
                                     <li> {item.owner_user_id_info.realname}</li>
                                </ul>
                            ))}
                    </div>
                </div>
            </div>
            <div className="wc_3-footer">
                    <>
                        <Pagination size="small" total={50} pagination={false} showSizeChanger showQuickJumper />
                    </>
                </div>
        </div>
    )
}
export default Ws4