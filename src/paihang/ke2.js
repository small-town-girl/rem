import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import instance from '../sercice/request'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

// import { Table } from 'antd';
import React , {Component}from 'react'



  export default class hisg extends Component {
    
    componentDidMount(){
        instance.post('http://crm.cimns.com/index.php/admin/structures/getSubUserByStructrue',{
          method:'post',
          mode:'cors',
          cache:'default'
        }).then((data) =>{
            console.log(data)
        });
    
         let el=document.getElementById("echat");
            // 图表初始化
            let myChart=echarts.init(el);
    
            setInterval(()=>{
                // 图表配置项
                let option={
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            }
                        },
                       
                       
                        xAxis: [
                            {
                                type: 'category',
                                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                                axisPointer: {
                                    type: 'shadow'
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'category',
                                name: '跟进客户数',
                                min: 0,
                                max: 250,
                                interval: 50,
                                axisLabel: {
                                    // type:'lineStyle',
                                    formatter: '{value}个'
                                }
                            },
                            {
                                type: 'category',
                                name: '跟进次数',
                                min: 0,
                                max: 25,
                                interval: 5,
                                 axisLabel: {
                                    // type:'lineStyle',
                                    formatter: '{value}次'
                                }
                               
                            }
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

