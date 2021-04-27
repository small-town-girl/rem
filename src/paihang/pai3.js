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
                        text: '签约金额排行榜',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                  
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis:
                         {
                        boundaryGap:[1,2],
                    },
                  
                    yAxis:[ {
                        type: 'category',
                        data: ['aa', 'bb', 'cb', 'db', 'eb', '姓名']
                    },
                     {
                        type: 'category',
                        data: ['aa', 'bb', 'cb', 'db', 'eb', '(元)']
                    },
                    ],
                   
                    
                   
                       
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

