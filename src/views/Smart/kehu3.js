// 引入ex插件
// import * as echarts from 'echarts';
import instance from '../../sercice/request'
import '../../css/dahe.css'
import { Layout, } from 'antd';
import His3 from '../../paihang/ke2'
import Tab3 from '../../paihang/ku2'
import React,{Component,} from 'react'

// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import {render} from 'react-dom'

// 设置请求头
// axios.interceptors.request.use((config)=>{
//     var login = JSON.parse(localStorage.login)
//     config.headers={
//         authKey:login.authKey,
//         sessionId:login.sessionId
//     }
//     return config
//   })


const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
//导航
const {  Content } = Layout;

export default class kehu3 extends Component{
  constructor(props){
    super(props)
    this.state={
      // 选择人员？
      arr: [],
      // 办公室
      arr3:[],
      //表格数据
    }
  }
  state = {
    collapsed: false,
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
 
  // 请求
  componentDidMount(){
    // arr 选择人员
    instance.post('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
      structure_id:1
    }).then((data)=>{
        let arr1= data.data
        this.setState({
          arr:arr1
        })
        // console.log(this.state.arr)
    })
    // arr2 办公室
    instance.post('http://crm.cimns.com/index.php/admin/structures/subIndex',{
      m: 'bi',
      c: 'customer',
      a: 'read'
    }).then((data)=>{
      console.log(data)
        let arr2= data.data
        this.setState({
          arr3:arr2
        })
    })
    // 表格数据 arr4
    
  }
  render() {

    return (
      <Layout style={{ minHeight: '700' }}>
        <Content style={{ margin: '0 16px' }}>
           
          
           <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
           <div className='inptlist'>
             <select className='selectlist'>
               <option value='day'>今天</option>
               <option value='day'>昨天</option> 
               <option value='week'>上周</option>
                <option value='week'>本周</option>
                <option value='year'>本年</option>
                <option value='year'>去年</option>
                <option value='year'>今年</option>
                <option value='month'>本月</option>
                <option value='month'>上月</option>
                <option value='quarter'>本季度</option>
                <option value='quarter'>上季度</option>
                <option value='dir'>自定义</option>
              </select>
              <select className='selectlist'>
                  {this.state.arr3.map((item,index)=>{
                    return(
                      <option key={index}>{item.name}</option>
                    )
                  })}
              </select>
              <select className='selectlist'>
                  {this.state.arr.map((item,index)=>{
                    return(
                      <option key={index}>{item.realname}</option>
                    )
                  })}
              </select>
                <button className='btn'>搜索</button>
             </div>
             
             <His3></His3>
         <div id="echat" style={{width:'80%',height:400,padding:40}}></div>
           </div>
           <Tab3></Tab3>
         </Content>
            
      </Layout>
      
    ); 
  }
}
