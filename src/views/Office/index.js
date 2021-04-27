import instance from '../../sercice/request'
import './index.css'
import React,{Component} from 'react'
import {connect} from 'react-redux'
//日期格式化插件
import moment from 'moment'
// ant 组件
import {Tabs,Calendar} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { actions,listCount } from '../../constant'

const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2497575_4yqp0mbzkij.js', // 在 iconfont.cn 上生成
  });
  
const { TabPane } = Tabs;

function onPanelChange(value, mode) {
    console.log(value, mode);
  }



class Index extends Component{
    constructor(){
        super();
        this.state = {
            listPage:[],
            taskList:[],
            newTaskList:[],
            take_status:'',
            eventList:[],
        }
    }
    
    onPanelChange(value, mode) {
        console.log(value, mode);
      }
    onSelect(e) {
        console.log(e._d)
    }
    TabPane = e => {
        listCount.page = 1
        if(e == '1'){
            listCount.type = 0
            this.props.dispatch({
                type:actions.OFF_INDEX
            })
        }else if(e == '2'){
            listCount.type = 1
            this.props.dispatch({
                type:actions.OFF_INDEX
            })
        }else if(e == '3'){
            listCount.type = 5
            this.props.dispatch({
                type:actions.OFF_INDEX
            })
        }else if(e == '4'){
            listCount.type = 4
            this.props.dispatch({
                type:actions.OFF_INDEX
            })
        }else if(e == '5'){
            listCount.type = 2
            this.props.dispatch({
                type:actions.OFF_INDEX
            })
        }else if(e == '6'){
            listCount.type = 3
            this.props.dispatch({
                type:actions.OFF_INDEX
            })
        }
    }; 
    
    render(){
        return(
            <>
            <div className="tabs-box">
                <div className="el-tabs--top">
                    <div className="is-top">
                    <Tabs defaultActiveKey="1" onChange={this.TabPane} className="123">

                    <TabPane tab="全部" key="1" >
                    <div className="tabs-content">
                        {this.state.listPage}
                    </div> 
                    </TabPane>

                    <TabPane tab="日志" key="2">
                      <div className="tabs-content">
                        {this.state.listPage}
                    </div>
                    </TabPane>
                    <TabPane tab="审批" key="3">
                    <div className="tabs-content">
                        {this.state.listPage}
                    </div>
                    </TabPane>
                    <TabPane tab="任务" key="4">
                    <div className="tabs-content">
                        {this.state.listPage}
                    </div>
                    </TabPane>
                    <TabPane tab="日程" key="5">
                    <div className="tabs-content">
                        {this.state.listPage}
                    </div>
                    </TabPane>
                    <TabPane tab="公告" key="6">
                    <div className="tabs-content">
                        {this.state.listPage}
                    </div>
                    </TabPane>
                    </Tabs>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <div className="task">
                    <div className="v-task">
                        <div className="title">任务</div>
                        <div className="content-box">
                                {this.state.taskList}
                                {this.state.newTaskList}
                        </div>
                    </div>
                </div>
                <div className="schedule">
                    <div className="schedule-calendar">
                        <div className="title" style={{margin:0}}>
                            <span>日程</span>
                            <div className="rt">
                                <MyIcon type="icon-jiahao" />
                                <span>创建</span>
                            </div>
                            <div>
                                <div className="wh_item_date">
                                    <div className="site-calendar-demo-card">
                                      <Calendar fullscreen={false} onSelect={this.onSelect} onPanelChange={onPanelChange} />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
    componentWillMount(){
        //http://crm.cimns.com/index.php/oa/index/taskList 任务
        instance.post('http://crm.cimns.com/index.php/oa/index/taskList').then((data)=>{
            if(!data) return;
            if(data.code === 200){
                if(data.data.count === 0){
                    const nullTask = [
                        {
                            imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAB+CAYAAAD2mvksAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzQjMyOTQ5MzM0MDExRTlBQjYwRkQyMTZENENDRDNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzQjMyOTRBMzM0MDExRTlBQjYwRkQyMTZENENDRDNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTNCMzI5NDczMzQwMTFFOUFCNjBGRDIxNkQ0Q0NEM0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTNCMzI5NDgzMzQwMTFFOUFCNjBGRDIxNkQ0Q0NEM0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pueZCAAAWF0lEQVR42uxd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'
                        }
                    ]
                    const map = nullTask.map((item,index) => {
                        return(
                            <div key={index} className="no-task">
                                <img src={item.imgUrl} alt="" />
                                <p>
           、                         目前没有任务，快去
                                    <span className="add">添加</span>
                                    吧!
                                </p>
                            </div>
                        )
                    })
                    this.setState({
                        taskList:map
                    })
                }else{
                    const newTaskList = data.data.list.map((item,index)=>{
                        return(
                            <div key={index} className="task-content">
                                <div className="name-time">
                                    <p className="task-name">
                                        <span className="item-name">{item.name}</span>
                                    </p>
                                </div>
                                <div className="rt">
                                    <span className="type-color" style={{backgroundColor:'#cccccc'}}>无</span>
                                </div>
                            </div>
                        )
                    })
                    this.setState({
                        newTaskList:newTaskList
                    })
                }
            }
        });
        //http://crm.cimns.com/index.php/oa/index/eventList  日历
        instance.post('http://crm.cimns.com/index.php/oa/index/eventList').then((data)=>{
            if(!data) return;
            if(data.code === 200){
                const eventList = data.data.map((item,index)=>{
                    return(
                        <div key={index} className="wh_content_item">
                            {item.date}
                        </div>
                    )
                })
                this.setState({
                    eventList:eventList
                })
            }
        });

        //---------------------------  发送action
        listCount.type = 0
        this.props.dispatch({
            type:actions.OFF_INDEX
        })
        
    }
    componentDidMount(){
        const dic = document.getElementsByClassName('ant-tabs-content-holder')
        dic[0].addEventListener('scroll',function INDEX(){
            const boxHeight = dic[0].clientHeight
            const scrollHeight = dic[0].scrollHeight;
            const scrollTop = dic[0].scrollTop
            const scrollLength = dic[0].scrollHeight - scrollTop;
            let bottomOfWidth = scrollLength - boxHeight
            console.log(scrollTop,scrollHeight,boxHeight,bottomOfWidth)
            if(bottomOfWidth > 100 && bottomOfWidth < 250){
                console.log('进入第一层')
                if(listCount.isbool === true){
                    console.log('进入第二层')
                    //isbool 为false防止连续加载多次
                    listCount.isbool = false
                    listCount.page++;
                    console.log(this.props)
                    this.props.dispatch({
                        type:actions.OFF_INDEX
                    })
                }
                //滚动条高度变化后isbool为true
                if(bottomOfWidth>1000){
                    console.log('变化后')
                    listCount.isbool = true
                }
            }
        }.bind(this));
        
    }
    componentDidUpdate(oldProps){
        if(oldProps !== this.props){
            const {status} = this.props
            if(status === 1){
                if(!this.props.data) return;
                let data = this.props.data
                let newData = [];
                data.forEach(item => {
                    const ddd = item
                    newData.push(ddd)
                });
                const newdata = newData.map((item,index)=>{
                        return(
                            <div key={index} className="list">
                                    <div className="div-photo" style={item.create_user_info.thumb_img === ''?{backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVDOEE2RjU5MUFFQzExRTlCRDBEQzU1MTNFNzlGMDhBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVDOEE2RjVBMUFFQzExRTlCRDBEQzU1MTNFNzlGMDhBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM4QTZGNTcxQUVDMTFFOUJEMERDNTUxM0U3OUYwOEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM4QTZGNTgxQUVDMTFFOUJEMERDNTUxM0U3OUYwOEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GWQoxAAADX0lEQVR42sxZS08TURQ+nba2BRpLGyBNWLAguBMVDcGduMJo4kL/gwkrlv4AWSoJiRr/Au5cYIyRnUoUEXciC9KmbZq+wLbpC1rPqaemYGfmzr3Tx5d8adK5595vZu49r3FkMhmQxAXkAvIW8jJyBhlGjvD1AjKB3Ef+QG4hPyGrMos5JIReRT5CPkAGLdrmkBvIl8jdbgmdRa4il8gO1NBAvkU+Ru6JGGgCY7zIp8ivyDs2iASeY4nnfMZrKD3RaX5VV6C7+I58iDyQeaI3kB97IBJ4jc/IeatCyeADcgx6hxDyvZ5YTed1v2lzM73ECK89bSbUy3tyDPqHMdbgNRK62qM9KbJnn+id+ll2Fy4YDJwg5ziqnRG1KiuyXC5DpVKBQqHQ/K3VauD3+2F8fBxcLun7drGmu+1PlMLijowzPz4+hng8ru+oHY6m4GAwKCO2wU91t7VHl2UjTjabNV6p0YCjoyOVCLbcOkweTjCkQK/ZdLOdnKjsVdLm0djBXpTOLhoNW8YYgLTNk9DFbh9fTdNUp1jU2C1JgQ5ivV4XevW5XE5F6KzGmbkUqlXxZL1UKqkInSGhE7LWbrdbeKzP51MROkFC/dLpTigEo6OjpuPC4bDQOAP4lXZ5y5l7PB7dMUNDQxAIBNQPJDKveqKnpqbA6XT+d43+m5yctMNx5Elo0g7308kFUZzvdAMSSGpcd0vh9PQU8vk8RCKRjhGKEpREIgHFYlHIjRlg38Xl6n0rVpQlpVKpZtZkBorzrVg/PDzc3NNer9eq0D2NayPxDgI67mg0KiTyPOjJHh4eNn8tYouEblO2Juq0k0m1LU1xPxaLCSUzjN9UoZLQCvK1iAW9bsUE49/eTqfTosOpfqq0jupzEQs6HHbBQkh90V7cfUO+M7NQPLmW81jWtHO+uKPK78uAFXfX2SudKZep/7MOg4N1aOv0nW+S+XrYbzL0m/C3SVzSa0DQBeqqpfooMsV1Usms90Stv3vkn/sgsshrH5j1nlqgIHCbqo0eiszwmtt6aR4YiF3gQ9Zt0Bo39USaCSX8YrFr7C664YLWeI19s8TZtLWEXGGftmmjyE2ec4XXAFWh7S6DPjZcQ76ibo6EuBzbzvFce6KGDhs/iF2Czh/EfoINH8T+CDAAQ2YfaFZ8NPkAAAAASUVORK5CYII=')"}:{backgroundImage:"url("+item.create_user_info.thumb_img+")"}}></div>
                                    <div className="img-text">
                                        <div className="name-time">
                                            <p className="name-behavior">
                                                <span className="name">{item.create_user_info.realname}</span>
                                                <span className="behavior">{item.content}</span>
                                            </p>
                                            <p className="time">{moment(item.create_time*1000).format('yyyy-MM-DD HH:mm:ss')}</p>
                                        </div>
                                    <div className="log-title">
                                        <img src=
                                        {item.type_name === '审批'?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0MDhCNkZDREQ3MjExRTg4Q0U5RjE0NEFGNDgyMjJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0MDhCNkZEREQ3MjExRTg4Q0U5RjE0NEFGNDgyMjJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTQwOEI2RkFERDcyMTFFODhDRTlGMTQ0QUY0ODIyMkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTQwOEI2RkJERDcyMTFFODhDRTlGMTQ0QUY0ODIyMkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oeA6rAAAAwklEQVR42mL8//8/Ay0BEwONAQsyx2v/DqoYus3Rg2QfqALxWiD+CMVroWKk+QAHUAfiE0AsgCQWBMROQGwBxDcpjYM2NMNhQAAqR3Eku+CRcxvwVESMBXvwyO2ihgXVQPwBi/gHqBzFFtyAppZ1SGLroGI3qJFMGaBJMRiIYeVK8KApKrBZ4AnEz6CuRccwgE3uGVQvQQvmArEkGY6VhOolaIEkBSEiOSgzGvXqAyhgpLUFlNahjMMriBiHfKsCIMAA6PQqT/UQnboAAAAASUVORK5CYII=':item.type_name === '任务'?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBOUE5REExREQ3MzExRThBMUYwQjFCNTg1NkQ2MTAyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBOUE5REEyREQ3MzExRThBMUYwQjFCNTg1NkQ2MTAyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEE5QTlEOUZERDczMTFFOEExRjBCMUI1ODU2RDYxMDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEE5QTlEQTBERDczMTFFOEExRjBCMUI1ODU2RDYxMDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57t/L3AAABYUlEQVR42rTWzyuEQRjA8fddG+UPUHvhROFkIwcHBxyQi/wFyBEXJ4mD4iJHUU5ydfIjDpu4EU7clJTNSVIKrR3f0XOYpn133u2d96nPvvu+MzvP/NrZDZVSQZqR1S/qdtx7w2H+4P+acdQbRlH3wVKUMme4EuwiV+F5TspqTnCGkvTSOQty1XW/cRQnwRDqjPtpvFb43AumjPt6jEQuckR04zhiisw67l0UEdc+dlMmSDmyjgUMjIX0mkClPYI4UcYjftFq7T7nGoQWO7bRgja0y/u9WhLYR4MZc1jHJj7xg31s+ZiiU+hT7AZNxvN+nGMQl0mmaAdLVuM6nmUNNpJO0YP0VseJHBn36JUR9KAxyRSVhI4rzOIDqxiQnVVOkqALh+jEsoyuGZNSXsBXtQR30khUzGACY+jAilH2hnnXLsrHHEkfFjCKBlxgDU++vsnvWBTVf5XS/leR+nH9J8AA0WtPt3rsnZkAAAAASUVORK5CYII=':item.type_name === '公告'?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk0RUZBQkQ3REQ3MzExRTg5OThEODQ5RDg1REI5QzM5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk0RUZBQkQ4REQ3MzExRTg5OThEODQ5RDg1REI5QzM5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTRFRkFCRDVERDczMTFFODk5OEQ4NDlEODVEQjlDMzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRFRkFCRDZERDczMTFFODk5OEQ4NDlEODVEQjlDMzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bTt6SAAABaklEQVR42mL8//8/Ay0By9cpU2hqARMDjQElFrgB8REgPoBFTgKITcm1wBlq8E4gtgZieyQ5NiAuBeLbQDyJVAscgPggEO+BGowNbAbiNiBeCMSe4EiGSjADcQkQxwGxKhCzkhlsIFeXA/EFeCqC0u1Qr1EKtuKK5Hia5QMozUcFs0DB2gnE3FD+cyBugFlwBohtqGCBNhALQ/n3kH0AipjdQMxFgQXfgNgdVxAdA2ILaERbIrkC3YU85MYBCFyGJlNY5IMyzQ+0BBEIxBVAbILDPFEg/gjEv/AVFSlA/AIaSeJI4v+AeC20CHCBBikIXEdLpleB2AufBYFQlwggK0QDe6FlkREQeyOJg5L7E6hFc3BZcBCJ7UIgiM8D8X0kPsg3jkAcCfUJVgt2oRVsjGSkqBVA3I/LgktA/BrKBsWBLrXrg3/QMIYBe1pUOIuA+AsQH4cWzxSXRehgOxDzDok6mZHWzRaAAAMAI/dA8v6GjBkAAAAASUVORK5CYII=':item.type_name === '日程'?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNThDREExREQ3MzExRThCOEZFRTkyOEREMkFGMjg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkxNThDREEyREQ3MzExRThCOEZFRTkyOEREMkFGMjg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTE1OENEOUZERDczMTFFOEI4RkVFOTI4REQyQUYyODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTE1OENEQTBERDczMTFFOEI4RkVFOTI4REQyQUYyODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hQTY2AAAA1ElEQVR42mL8//8/Ay0BC5jcXEgb0337GZgYaAwG1IJ6IH4BxB141EwG4p9A3I8/DhDgOBBbIPEZgRiUCsrxWAJTUwDlXwRiA1w+sKBCqOiTEgfEpOH/hJMpqndpkA9IczExgHFQJFN0IA91GQgLAPEbalvwEBqEl4GYA4hZaZWTi4C4Boj5aWHBBiB+DsQZ5KYifOAXEJcB8VRS9JHig5dAHAjErpSkok941MoCcScRZn7CZwGo5vlKQbL/il4wooflPCimGmCkdZ08vKtMqgCAAAMAO3wlhQGcnaUAAAAASUVORK5CYII=':''} className="img-5" />
                                        <span className="type-name">{item.type_name}</span>
                                    </div>
                                    <div className="h-title">
                                        <span>{item.title === ''?'':item.title}</span>
                                    </div>
                                </div>
                                </div>
                        )
                });
                this.setState({
                    listPage:newdata
                });
            };
            
        };
    }

 }

const mapStateToProps = state =>{
    return({
        ...state.offIndex
    })
}

export default connect(mapStateToProps)(Index)
