import {Component} from 'react'
//axios
import instance from '../../sercice/request'

import { Tabs } from 'antd';
import { Collapse } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { Panel } = Collapse;

export default class Addressbook extends Component{
    constructor(){
        super();
        this.state = {
            arr:[],
            arrs:[]
        }
    }
    render(){
        return(
            <div className='ly17' style={{backgroundColor:'#fff',width:100+'%'}}>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="员工" key="1">
                    <div className='ly17-top'>
                        <span className='iconfont'></span><input type='text' placeholder='搜索成员' style={{border:'1px solid #ccc',outline:0,appearance:'none'}} />
                    </div>
                    <div className='ly17-end'>
                    <ul className="off7-com">
                    {/* {this.state.arrs.map((item, index) => {
                      return (
                        <li className="off7-item" key={index}>
                          <p className="of7-title">{item}</p>
                          {this.state.arr[item].map((itm, inde) => {
                            return (
                              <div className="itsl" key={inde}>
                                <p className="name">{itm.realname}</p>
                                <div className="xit">
                                  <p>
                                    <i className="iconfont">&#xe705;</i>{" "}
                                    {itm.structure_name}
                                  </p>
                                  <p
                                    style={{
                                      display: itm.post ? "block" : "none",
                                    }}
                                  >
                                    <i className="iconfont">&#xe617;</i>
                                    {itm.post}
                                  </p>
                                  <p>
                                    <i className="iconfont">&#xe621;</i>
                                    {itm.username}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </li>
                      );
                    })} */}
                  </ul>
                    </div>
                </TabPane>
                <TabPane tab="部门" key="2">
                    <div className='ly17-top'>
                        <span className='iconfont'></span><input type='text' placeholder='搜索成员' style={{border:'1px solid #ccc',outline:0,appearance:'none'}} />
                    </div>
                    <div>
                    <Collapse onChange={callback}>
                        <Panel header="办公室" key="1">
                        <div className='ly17-end'>
                        <ul className="off7-com">
                        {
                                this.state.arrs.map((item,index)=>{
                                    return(
                                        <div key={index} style={{padding:20}}>
                                            <p>{item.mobile}</p>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                        </Panel>
                        <Panel header="打杂部" key="2">

                        </Panel>
                    </Collapse>
                    </div>
                </TabPane>
            </Tabs>
        </div>
        )
    }
    componentWillMount(){
        instance.post('http://crm.cimns.com/index.php/oa/addresslist/index',{
            type: 1,
        }).then((data)=> {
                if(data.code === 200){
                        let arr1 = data.data
                        let arr2 = []
                        let arr3 = []
                        for (var i in arr1) {
                            arr2.push(arr1[i])
                            arr3.push(arr1[i].userList)
                        }
                        this.setState({
                            arr:data.data
                        })
                        this.setState({
                            arrs:arr3
                        })
                }
        })
    }
}


