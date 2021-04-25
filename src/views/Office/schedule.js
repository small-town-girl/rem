import './schedule.css'
import {Component} from 'react'
import { ConfigProvider } from 'antd'; //组件3 小日历
import { Calendar,Select } from 'antd';  //组件1


// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn')
//css样式

function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
}

export default class Schedule extends Component{
    render(){
        return(
            <div style={{height:100+'%',width:100+'%'}}>
                <div className="task-calendars">
                    <div className="add-btn">
                        <button className="el-button el-button--primary" type="button"> 
                            <span>创建日程</span>
                        </button>
                    </div>
                    <div className="fc fc-unthemed fc-ltr" id="calendar">
                            <div className="fc-toolbar fc-header-toolbar">
                                <div className="fc-left">
                                    <button className="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right">今天</button>
                                    <div className="fc-button-group">
                                        <button type="button" className="fc-agendaDay-button fc-button fc-state-default fc-corner-left">日</button>
                                        <button type="button" className="fc-agendaWeek-button fc-button fc-state-default fc-state-active">周</button>
                                        <button type="button" className="fc-month-button fc-button fc-state-default fc-corner-right">月</button>
                                    </div>
                                </div>
                                <div className="fc-right"></div>
                                <div className="fc-center"></div>
                                <div className="fc-clear"></div>
                            </div>
                            <div className="no1_2_content"> {/*  内容 */}
                                <ConfigProvider locale={zhCN}> <Calendar onPanelChange={onPanelChange} />   {/*ant此组件功能插入不进去*/}</ConfigProvider>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
