import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'



  export default class His8 extends Component {
    
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
              <div></div>
          )
      
        }

}

