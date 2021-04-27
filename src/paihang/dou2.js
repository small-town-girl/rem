import { Table } from 'antd';
// import axios from 'axios'
// import React , {useState} from 'react'
function Tab9(){
    //发送请求
    // const [arr4,setarr4] = useState([])
    // axios.post('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
    //   structure_id: 1,
    //   user_id: '',
    //   type:'year'
    // }).then((data)=>{
    //     if(arr4.length<=0){
    //         let arr5=[...data.data.data]
    //         setarr4(arr5)
    //         // console.log(arr5);
    //     }
      
    // },(err)=>{
    //     console.log(err)
    // }
    
    // )
    const columns = [
        {
          title: '商机名称',
          width: 80,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        
        },
        {
          title: '客户名称',
          width: 85,
          dataIndex: 'age',
          key: 'age',
          fixed: 'left',
        },
        {
          title: '商机状态组',
          dataIndex: 'address',
          key: '1',
          width: 80,
        },
        {
            title: '商机阶段',
            dataIndex: 'address',
            key: '1',
            width: 80,
          },
          {
            title: '商机金额',
            dataIndex: 'address',
            key: '1',
            width: 80,
          },
          {
            title: '预计成交日期',
            dataIndex: 'address',
            key: '1',
            width: 80,
          },
          {
            title: '负责人',
            dataIndex: 'address',
            key: '1',
            width: 80,
          },
          {
            title: '创建时间',
            dataIndex: 'address',
            key: '1',
            width: 80,
          },
        
      ];
      
      const data = [];
      //循环数据
    //   for (let i = 0; i < arr4.length -1; i++) {
    //     data.push({
    //       key: i,
    //       name: `${arr4[i].realname}`,
    //       age: 32,
    //       address: `${i}`,
    //     });
    //   }
    
  
return(
<div>
    <Table columns={columns} dataSource={data} scroll={{ x: 1200 ,y:300}} sticky />,
</div>
  
);
}
export default Tab9;