
import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'


  export default class His16 extends Component {
    
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
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        data: ['其他', '政府', '文化传媒', '服务业', '运输', '生产', '贸易',]
                    },
                    series: [
                        {
                            // name: '访问来源',
                            type: 'pie',
                            selectedMode: 'single',
                            radius: [0, '30%'],
                            label: {
                                position: 'inner',
                                fontSize: 14,
                            },
                            labelLine: {
                                show: false
                            },
                            // data: [
                            //     {value: 1548, name: '搜索引擎'},
                            //     {value: 775, name: '直达'},
                            //     {value: 679, name: '营销广告', selected: true}
                            // ]
                        },
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['45%', '60%'],
                            labelLine: {
                                length: 30,
                            },
                            label: {
                                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                                backgroundColor: '#F6F8FC',
                                borderColor: '#8C8D8E',
                                borderWidth: 1,
                                borderRadius: 4,
                                
                                rich: {
                                    a: {
                                        color: '#6E7079',
                                        lineHeight: 22,
                                        align: 'center'
                                    },
                                    hr: {
                                        borderColor: '#8C8D8E',
                                        width: '100%',
                                        borderWidth: 1,
                                        height: 0
                                    },
                                    b: {
                                        color: '#4C5058',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        lineHeight: 33
                                    },
                                    per: {
                                        color: '#fff',
                                        backgroundColor: '#4C5058',
                                        padding: [3, 4],
                                        borderRadius: 4
                                    }
                                }
                            },
                            data: [
                                {value: 1048, name: '其他'},
                                {value: 335, name: '政府'},
                                {value: 310, name: '文化传媒'},
                                {value: 251, name: '服务业'},
                               
                            ]
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

