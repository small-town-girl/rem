import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'



  export default class Hisg extends Component {
    
    componentDidMount(){
        fetch('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
          method:'post',
          headers:{
            'Content-Type':'application/json;charset=UTF-8',
            // 'sessionId':global.constants.sessionId,
            // 'authKey':global.constants.authKey
          },
          mode:'cors',
          cache:'default'
        })
         .then(res =>res.json())
         .then((data) => {
        //    console.log(data)  
         });
    
         let el=document.getElementById("echat");
            // 图表初始化
            let myChart=echarts.init(el);
    
            setInterval(()=>{
                // 图表配置项
                let option={
                    
                        title: {
                            text: '客户总量分析',
                            subtext: '新增客户数/个'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                       
                        xAxis: {
                            name:'跟进时间/天',
                            boundaryGap: false,
                            data: ['0', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', '1-10', '1-11', '1-12', '1-13', '1-14', '1-15',]
                        },
                        yAxis: {
                            data:[0,5,10,15,20,25,30,35,40,50,55,60,70],
                           
                        },
                       
                        series: [
                            {
                                name: '用电量',
                                type: 'line',
                                smooth: true,
                               
                                markArea: {
                                    itemStyle: {
                                        color: 'rgb(243, 68, 68,.7)'
                                    },
                                    data: [ [{
                                        xAxis: '1-4'
                                    }, {
                                        xAxis: '1-5'
                                    },
                                    ],],
                                    
                                }
                            }
                        ]
                }		
                // 进行图表配置
                myChart.setOption(option);
     
            },1000);
      }
      render(){
          return(
              <div></div>
          )
      
        }

}
