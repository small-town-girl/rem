// 引入ex插件
// import * as echarts from 'echarts';
import axios from 'axios'
import { Layout, } from 'antd';
// import Froms from '../components/froms'
import React,{Component} from 'react'

// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import His17 from '../../paihang/hua3';
import Tab17 from '../../paihang/xiang3'


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
const { Header, Content,} = Layout;
export default class Huaxiang4 extends Component{
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
    axios.post('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
      structure_id:1
    }).then((data)=>{
    //   if(arr4.length<=0){
    //     let arr5=[...data.data.data]
    //     setarr4(arr5)
    //     console.log(arr5);
    // }
        let arr1= data.data.data
        this.setState({
          arr:arr1
        })
        // console.log(this.state.arr)
    },(err)=>{
        console.log(err)
    })
    // arr2 办公室
    axios.post('http://crm.cimns.com/index.php/admin/structures/subIndex',{
      m: 'bi',
      c: 'customer',
      a: 'read'
    }).then((data)=>{
        let arr2= data.data.data
        this.setState({
          arr3:arr2
        })
        // console.log(this.state.arr3)
    },(err)=>{
        console.log(err)
    })
    // 表格数据 arr4
    
  }
  render() {
    // const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '80vh' }}>
        
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
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
                {/* {this.state.arr3.map((item,index)=>{
                      return(
                        <option key={index}>{item.name}</option>
                      )
                    })} */}
              </select>
              <select className='selectlist'>
                  {/* {this.state.arr.map((item,index)=>{
                    // return(
                    //   <option key={index}>{item.realname}</option>
                    // )
                  })} */}
              </select>
                <button className='btn'>搜索</button>
             </div>
              {/* //这里引入hisg */}
              <His17></His17>
          <div id="echat" style={{width:'80%',height:400,padding:30}}></div>
            </div>
            <Tab17></Tab17>
          </Content>
        </Layout>
                
      </Layout>
      
    ); 
  }
}

