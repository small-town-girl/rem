import React from 'react'
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
function Analysis() {
    const columns = [
        {
          title: '附件名称',
          dataIndex: 'name',
          key: 'name',
          render: text => <span>{text}</span>,
        },
        {
          title: '附件大小',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '上传人',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '上传时间',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <span>Invite {record.name}</span>
              <span>Delete</span>
            </Space>
          ),
        },
      ];
      axios.post('http://crm.cimns.com/index.php/work/work/fileList',{}).then((data)=>{
        console.log(data)
      },(error)=>{
        console.log(error)
      })
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
            key: '4',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: '5',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
      ];
      console.log(data);
            return(
                <div>
                    <h3 style={{textAlign:'left',fontWeight:400,margin:0,padding:0,fontSize:'20px',textIndent:20}}>统计分析</h3>
                    {/* <div id='chart'></div> */}
                    <div style={{backgroundColor:'#fff',margin:'20px 0'}}>
                        <h5 style={{marginLeft:10,paddingTop:'5px',textIndent:15,fontSize:'14px',borderLeft:'2px solid #8de782'}}>任务总览</h5>
                        <div className='myprotopl3' style={{display:"flex"}}>
                            <div style={{paddingTop:30,display:'flex',marginLeft:'100px'}}>
                                <div className="myprochild" style={{width:100,height:100,border:'6px solid rgba(35, 52, 201, 0.2)',borderRadius:'50%',textAlign:'center'}}>
                                    <p style={{margin:0,padding:0,marginTop:'15px',fontSize:'12px'}}>完成率</p>
                                    <p style={{fontSize:'24px',fontWeight:500}}>0<b style={{fontWeight:"normal",fontSize:'14px'}}>%</b></p>
                                </div>
                                <div className="myprochild" style={{width:100,height:100,border:'6px solid rgba(35, 52, 201, 0.1)',borderRadius:'50%',textAlign:'center'}}>
                                    <p style={{margin:0,padding:0,marginTop:'15px',fontSize:'12px'}}>逾期率</p>
                                    <p style={{fontSize:'24px',fontWeight:500}}>0<b style={{fontWeight:"normal",fontSize:'14px'}}>%</b></p>
                                </div>
                            </div>    
                            <div>
                                <div id='chart'></div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#fff',minHeight:300}}>
                        <h5 style={{marginLeft:10,paddingTop:'5px',textIndent:15,fontSize:'14px',borderLeft:'2px solid #8de782'}}>任务列表</h5>
                        <Table style={{margin:'20px 10px'}} columns={columns} bordered={true}/>
                    </div>
                </div>
            )
}
export default Analysis