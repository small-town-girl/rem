// 引入ex插件
// import * as echarts from 'echarts';
import instance from '../../sercice/request'
import '../../css/dahe.css'
import { Layout, } from 'antd';
import His7 from '../../paihang/ke6'
import Tab7 from '../../paihang/ku6'
// import his71 from '../components/his71'
import React,{Component,} from 'react'
//客户7tab引入

// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import {render} from 'react-dom' 
import { Tabs } from 'antd';
import His71 from '../../paihang/his71'
import His72 from '../../paihang/his72';



// 设置请求头
// axios.interceptors.request.use((config)=>{
//     var login = JSON.parse(localStorage.login)
//     config.headers={
//         authKey:login.authKey,
//         sessionId:login.sessionId
//     }
//     return config
//   })
  
const { TabPane } = Tabs;

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

export default class kehu7 extends Component{
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
      if(!data) return;
        let arr1= data.data
        this.setState({
          arr:arr1
        })
    })
    // arr2 办公室
    instance.post('http://crm.cimns.com/index.php/admin/structures/subIndex',{
      m: 'bi',
      c: 'customer',
      a: 'read'
    }).then((data)=>{
      if(!data) return;
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
            
            <Tabs defaultActiveKey="1" >
                <TabPane tab="员工客户成交周期" key="1" >
                <His7></His7>
                </TabPane>
                <TabPane tab="地区成交周期" key="2">
                <His71></His71>
                </TabPane>
                <TabPane tab="产品成交周期" key="3">
                <His72></His72>
                </TabPane>
            </Tabs>
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
             
         <div id="echat" style={{width:'80%',height:400,padding:40}}></div>
           </div>
           <Tab7></Tab7>
         </Content>
            
      </Layout>
      
    ); 
  }
}
