import { Table } from 'antd';
// import axios from 'axios'
// import React , {useState} from 'react'
function Tab24(){
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
          title: '公司总排名',
          width: 80,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        
        },
        {
          title: '签订人',
          width: 85,
          dataIndex: 'age',
          key: 'age',
          fixed: 'left',
        },
        {
          title: '部门',
          dataIndex: 'address',
          key: '1',
          width: 80,
        },
        {
            title: '合同金额',
            dataIndex: 'address',
            key: '1',
            width: 80,
          },
        
      ];
      
      const data = [];
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
export default Tab24;