import { Table, Tag, Space } from 'antd';
import axios from 'axios';
function Myprol2(){
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
              <span>Invite {record.nspanme}</span>
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
    return(
        <div>
            <Table columns={columns} dataSource={data} bordered={true}/>
        </div>
    )
   }
   export default Myprol2