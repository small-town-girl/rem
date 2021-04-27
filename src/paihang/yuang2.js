import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'



  export default class His12 extends Component {
    
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
                      text: '新增商机数量',
                      // subtext: '纯属虚构'
                  },
                  tooltip: {
                      trigger: 'axis'
                  },
                  legend: {
                      data: ['当月合同数量', '上月合同增长','去年合同数量']
                  },
                 
                  xAxis: [
                      {
                      type: 'category',
                      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七日'],
                      max:''
                  },
                      
                      
                  ]
                  ,
                  yAxis: {
                      max:'10',
                      type: 'value',
                       boundaryGap: [[0.2],[0.2]],
                      axisLabel: {
                          formatter: '{value} 个'
                      }
                  },
                  series: [
                      {
                          name: '当月合同数量',
                          type: 'line',
                          color:'rgb(241, 15, 185)',
                          data: [1, 1, 1, 1, 1, 1, 1],
                          markPoint: {
                              data: [
                                  {type: 'max', name: '最大值'},
                                  {type: 'min', name: '最小值'},
                                  {type:'markLine'}
                              ]
                          },
                          markLine: {
                              data: [
                                  {type: 'average', name: '平均值'}
                              ]
                          }
                      },
                      {
                          name: '上月合同数量',
                          type: 'line',
                          data: [1, 1, 1, 1, 1, 1],
                          markPoint: {
                              data: [
                                  {name: '周最低', value: -1, xAxis: 1, yAxis: -1.5}
                              ]
                          },
                          markLine: {
                              data: [
                                  {type: 'average', name: '平均值'},
                                  [{
                                      symbol: 'none',
                                      x: '90%',
                                      yAxis: 'max'
                                  }, {
                                      symbol: 'circle',
                                      label: {
                                          position: 'start',
                                          formatter: '最大值'
                                      },
                                      type: 'max',
                                      name: '最高点'
                                  }]
                              ]
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

