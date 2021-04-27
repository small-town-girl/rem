import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import instance from '../sercice/request'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'


  export default class His4 extends Component {
    
    componentDidMount(){
        instance.post('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
          mode:'cors',
          cache:'default'
        }).then((data)=>{
            console.log(data)
        });
    
         let el=document.getElementById("echat");
            // 图表初始化
            let myChart=echarts.init(el);
    
            setInterval(()=>{
                // 图表配置项
                let option={
                    title: {
                        text: '跟进方式分析',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                {value: 1048, name: '打电话'},
                                {value: 735, name: '发邮件'},
                                {value: 580, name: '发短信'},
                                {value: 484, name: '锦棉拜访'},
                                {value: 300, name: '活动'}
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                                }
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

