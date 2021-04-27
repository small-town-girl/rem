import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'
export default class Myprol3 extends Component {
    componentDidMount(){
            fetch('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
              method:'post',
              headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'sessionId':global.constants.sessionId,
                'authKey':global.constants.authKey
              },
              mode:'cors',
              cache:'default'
            })
             .then(res =>res.json())
             .then((data) => {
               console.log(data)  
             });
        
             let el=document.getElementById("chart");
                // 图表初始化
                let myChart=echarts.init(el);
        
                setInterval(()=>{
                    // 图表配置项
                    let option={
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            series: ['验证客户', '需求分析', '方案报价', '谈判审核',]
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['', '', '', '', '', '', '']
                        },
                        yAxis: {
                            type: 'value',
                        },
                        series: [
                            
                            {
                                name: '验证客户',
                                type: 'line',
                                stack: '总量',
                                data: [50, 50, 50, 50, 50, ]
                            },
                            {
                                name: '需求分析',
                                type: 'line',
                                stack: '总量',
                                 data: [50, 50, 50, 50, 50, ]
                            },
                            {
                                name: '方案报价',
                                type: 'line',
                                stack: '总量',
                                data: [50, 50, 50, 50, 50, ]
                            },
                            {
                                name: '谈判审核',
                                type: 'line',
                                stack: '总量',
                                data: [100, 100, 100, 100, 100, ]
                            }
                        ]
                           
                    }		
                    // 进行图表配置
                    myChart.setOption(option);
         
                },1000);
          }
          render(){
            return(
                <div>
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
                    <div style={{display:'flex',justifyContent: 'space-between'}}>
                        <div className='myprochildlist'>
                            <h5 style={{marginLeft:10,paddingTop:'5px',textIndent:15,fontSize:'14px',borderLeft:'2px solid #8de782'}}>任务列表</h5>
                        </div>
                        <div className='myprochildlist'>
                            <h5 style={{marginLeft:10,paddingTop:'5px',textIndent:15,fontSize:'14px',borderLeft:'2px solid #8de782'}}>标签分析</h5>
                        </div>
                    </div>
                </div>
            )
          
            }
}
