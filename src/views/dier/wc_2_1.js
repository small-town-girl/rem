import React, { useState, useEffect} from 'react';
import insterreq from '../../sercice/request';
import './wc_2_1.css'
import { Empty, Select,Modal, Button,Pagination,Input} from 'antd';


const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function Wc_2_1(){

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
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
    const FetchData = async () => {
      const result = await insterreq.post(
          'http://crm.cimns.com/index.php/crm/message/todayCustomer',{
            page: 1,
            limit: 15,
            types: "list",
            isSub: 0,
            type: 1
          }
        );
        console.log(result)
      // console.log(result.data.data.list);
      // setData(result.data.data.list);
    };
    FetchData(); 
  }, []);
function HandleChange() {
  console.log(1)
}
    return(
        <div className="wc_2_1">
            <div className="wc_2_1-header">
                <h2>今日需联系客户</h2>  
            </div>
            <div className="wc_2_1-bar">
                <div className="wc_2_1-bar-left">
                    <>
                        <Select defaultValue="" style={{ width: 200 }} onChange={HandleChange}>
                            <Option value="">今日需联系</Option>
                            <Option value="lucy">已逾期</Option>
                            <Option value="Yiminghe">已联系</Option>
                        </Select>
                        <Select defaultValue="jacl" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jacl">我的</Option>
                            <Option value="lucl">我下属的</Option>
                        </Select>
                     </>
                </div>
                <div className="wc_2_1-bar-right">
                    <>
                        <Button type="primary" onClick={showModal}>
                            高级筛选
                        </Button>
                        <Modal
                            style={{widli:600}}
                            title="高级筛选"
                            visible={visible}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                           
                                <h2>筛选条件</h2>
                          
                           
                                <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                                    <Option value="jack">客户名称</Option>
                                    <Option value="lucy">客户级别</Option>
                                    <Option value="Yimingha">客户行业</Option>
                                    <Option value="Yiminghb">客户来源</Option>
                                    <Option value="Yiminghc">成交状态</Option>
                                    <Option value="Yiminghd">电话</Option>
                                    <Option value="Yiminghe">网址</Option>
                                    <Option value="Yiminghf">下次联系时间</Option>
                                    <Option value="Yiminghg">备注</Option>
                                    <Option value="Yiminghh">手机</Option>
                                    <Option value="Yiminghi">创建人</Option>
                                    <Option value="Yiminghj">更新时间</Option>
                                    <Option value="Yiminghk">创建时间</Option>
                                    <Option value="Yiminghl">负责人</Option>
                                    <Option value="Yiminghm">地区定位</Option>
                                </Select>
                          
                                <Select defaultValue="jack" style={{ width: 150 }} onChange={handleChange}>
                                    <Option value="jack">等于</Option>
                                    <Option value="lucy">不等于</Option>
                                    <Option value="luco">包含</Option>
                                    <Option value="lucp">不包含</Option>
                                    <Option value="lucq">开始于</Option>
                                    <Option value="lucrn">结束于</Option>
                                    <Option value="lugs">为空</Option>
                                    <Option value="lubs">不为空</Option>
                                    <Option value="luby">大于</Option>
                                    <Option value="lupl">大于等于</Option>
                                    <Option value="lulo">小于</Option>
                                    <Option value="lusfs">小于等于</Option>
                                </Select>
                           
                            
                                <Input placeholder="Basic usage" style={{width:240}}/>
                           
                            </Modal>
                        </>
                </div>
            </div>
            <div className="wc_2_1-wrapper">
                <div className="wc_2_1-wrapper-1">
                    <div className="wc_2_1-wrapper-cd">
                        <ul>
                                <li>客户名称</li>
                                <li>客户级别</li>
                                <li>客户行业</li>
                                <li>客户来源</li>
                                <li>成交状态</li>
                                <li>电话</li>
                                <li>网址</li>
                                <li>下次联系时间</li>
                                <li>备注</li>
                                <li>手机</li>
                                <li>创建人</li>
                                <li>更新时间</li>
                                <li>创建时间</li>
                                <li>负责人</li>
                                <li>跟进记录</li>
                                <li>省、市、区/县</li>
                                <li>详细地址</li>
                            
                        </ul>
                    </div>
                    <div className="wc_2_1-weapper-sj">
                       {data.map((item)=>(
                            <ul key={item.customer_id}>
                               <li>{item.name}</li>
                               <li>{item.level}</li>
                               <li>{item.industry}</li>
                               <li>{item.source}</li>
                               <li>{item.deal_status}</li>
                               <li>{item.telephone}</li>
                               <li>{item.website}</li>
                               <li>{item.next_time}</li>
                               <li>{item.remark}</li>
                               <li>{item.telephone}</li>
                               <li>{item.create_user_id_info.realname}</li>
                               
                               <li>{item.update_time}</li>
                               <li>{item.create_time}</li>
                               <li>{item.owner_user_id_info.realname}</li>
                               <li></li>
                               <li>{item.address}</li>
                               <li></li>
                            </ul>
                       ))}
               </div>
                </div> 
            </div>
           
            <div className="wc_2_1-footer">
              <>
                <Pagination size="small" total={50} pagination={false} showSizeChanger showQuickJumper />
              </> 
            </div>
        </div>
    )
};
export default Wc_2_1