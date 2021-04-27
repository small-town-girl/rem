import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'

  export default class His23 extends Component {
    
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
           console.log(data)  
         });
    
         let el=document.getElementById("echat");
            // 图表初始化
            let myChart=echarts.init(el);
    
            setInterval(()=>{
                // 图表配置项
                let option={
                    title: {
                        text: '新增客户排行榜'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        type: 'value',
                        name: '（元）',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true,
                        data: ['a', 'b', 'c'],
                        axisLabel: {
                            formatter: function (value) {
                                return '{' + value + '| }\n{value|' + value + '}';
                            },
                            margin: 20,
                            rich: {
                                value: {
                                    lineHeight: 10,
                                    align: 'center'
                                },
                                a: {
                                    height: 10,
                                    align: 'center',
                                  
                                },
                                b: {
                                    height: 10,
                                    align: 'center',
                                    
                                },
                                c: {
                                    height: 10,
                                    align: 'center',
                                }
                            }
                        }
                    },
                    series: [
                        {
                            name: '姓名',
                            type: 'bar',
                            // data: [165, 170, 30],
                            // label: seriesLabel,
                            markPoint: {
                                symbolSize: 1,
                                symbolOffset: [0, '50%'],
                                
                                
                            }
                        },
                        {
                            name: '金额',
                            type: 'bar',
                            // label: seriesLabel,
                            data: [150,]
                        },
                        {
                            name: '名字',
                            type: 'bar',
                            // label: seriesLabel,
                            data: [150,]
                        },
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

