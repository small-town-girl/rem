import * as echarts from 'echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入标题和提示框
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import { Table } from 'antd';
import React , {Component}from 'react'; 
import * as $ from 'jquery'



  export default class His15 extends Component {
    constructor(prop){
        super(prop);
        this.state={
            option:[],
            style:{
                width:"300px",
                height:"500px"
            }
        };
    }
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
         let ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
         let chartDom = document.getElementById('echart1');
         let myChart = echarts.init(chartDom);

                myChart.showLoading();
                
                $.get(ROOT_PATH + '/data/asset/geo/HK.json', function (geoJson) {

                    myChart.hideLoading();
    
                    echarts.registerMap('HK', geoJson);
                    
                    this.option = {
                        title: {
                            text: '香港18区人口密度 （2011）',
                            subtext: '人口密度数据来自Wikipedia',
                            sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: '{b}<br/>{c} (p / km2)'
                        },
                      
                        visualMap: {
                            min: 800,
                            max: 50000,
                            text: ['多', '少'],
                            realtime: false,
                            calculable: true,
                            inRange: {
                                color: ['lightskyblue', 'yellow', 'orangered']
                            }
                        },
                        series: [
                            {
                                name: '香港18区人口密度',
                                type: 'map',
                                mapType: 'HK', // 自定义扩展图表类型
                                label: {
                                    show: true
                                },
                                data: [
                                    {name: '中西区', value: 20057.34},
                                    {name: '湾仔', value: 15477.48},
                                    {name: '东区', value: 31686.1},
                                    {name: '南区', value: 6992.6},
                                    {name: '油尖旺', value: 44045.49},
                                    {name: '深水埗', value: 40689.64},
                                    {name: '九龙城', value: 37659.78},
                                    {name: '黄大仙', value: 45180.97},
                                    {name: '观塘', value: 55204.26},
                                    {name: '葵青', value: 21900.9},
                                    {name: '荃湾', value: 4918.26},
                                    {name: '屯门', value: 5881.84},
                                    {name: '元朗', value: 4178.01},
                                    {name: '北区', value: 2227.92},
                                    {name: '大埔', value: 2180.98},
                                    {name: '沙田', value: 9172.94},
                                    {name: '西贡', value: 3368},
                                    {name: '离岛', value: 806.98}
                                ],
                                // 自定义名称映射
                                nameMap: {
                                    'Central and Western': '中西区',
                                    'Eastern': '东区',
                                    'Islands': '离岛',
                                    'Kowloon City': '九龙城',
                                    'Kwai Tsing': '葵青',
                                    'Kwun Tong': '观塘',
                                    'North': '北区',
                                    'Sai Kung': '西贡',
                                    'Sha Tin': '沙田',
                                    'Sham Shui Po': '深水埗',
                                    'Southern': '南区',
                                    'Tai Po': '大埔',
                                    'Tsuen Wan': '荃湾',
                                    'Tuen Mun': '屯门',
                                    'Wan Chai': '湾仔',
                                    'Wong Tai Sin': '黄大仙',
                                    'Yau Tsim Mong': '油尖旺',
                                    'Yuen Long': '元朗'
                                }
                            }
                        ]
                    };
                    
                        console.log(this.option);
                        myChart.setOption(this.option)
               
                    
                });
            
            
            
      }
      render(){
          return(
              <div>
                  <div id="echart1"  style={{width:'70%',height:400,padding:20,}} ></div>
                  
                  </div>
              
              
          )}

}

