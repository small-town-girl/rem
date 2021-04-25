
import './Crm.css'

import {connect} from 'react-redux'

import React,{Component} from 'react'
import { actions,listCount } from '../constant'
// 导入封装好的axios

class Crm extends Component{
    state = {
        userid:[],
        crmList:[],
        isbool:true,
    }
    //滚动条小于200加载axios
    //scrollTop 滚动过的距离  clientHeight box的高度 scrollHeight 滚动条的高度
    listbox = e =>{
        const dom = e.target
        const boxHeight = dom.clientHeight - 120
        const scrollHeight = dom.scrollHeight;
        const scrollTop = dom.scrollTop
        const scrollLength = scrollHeight - scrollTop;
        let bottomOfWidth = scrollLength - boxHeight
        console.log(boxHeight,scrollHeight,scrollTop,scrollLength,bottomOfWidth,bottomOfWidth > 50 && bottomOfWidth < 150)
        console.log(bottomOfWidth)
        console.log(listCount.isbool)  
        
        if(bottomOfWidth > 100 && bottomOfWidth < 250){
            if(listCount.isbool === true){
                //isbool 为false防止连续加载多次
                listCount.isbool = false
                listCount.page++;
                this.props.dispatch({
                    type:actions.CRMLIST
                })
            }
            console.log(bottomOfWidth)
            //滚动条高度变化后isbool为true
            if(bottomOfWidth<1000){
            listCount.isbool = true
            
        }
        }
    }
    RenderList(){
        if(listCount.isbool === true){
            const {data} = this.props;
        
        if(!data){
            return null;
        }
        listCount.crmList.push(...data)
        return listCount.crmList.map((item,index) =>{
            return(
                <div key={index} className="itemList">
                    <img src={item.create_user_info.img === ''?item.create_user_info.img="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=b9703c8cad014c08196e20a13f4b2e3e/1ad5ad6eddc451dad19fbdceb2fd5266d01632ad.jpg":item.create_user_info.img} alt="" />
                    <h1>{item.action_content}</h1>
                </div>
            )
        })
        }
        

    }
    //退出按钮
    logout = () =>{
        localStorage.clear();
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className="Crm">
                {this.state.userid}
                <button onClick={this.logout}>退出登录</button>
                <div className="listbox" onScroll={this.listbox}>
                    {this.RenderList()}
                </div>
            </div>
        )
    }
    //页面将要渲染
    componentWillMount(){
        if(localStorage.token){
            const newuserInfo = JSON.parse(localStorage.token)
            const lin = [newuserInfo.userInfo];

            const newlin = lin.map((item,index)=>{
            return(
                <div key={index}>  
                    <h1>{item.username}</h1>
                    <img src={'http://crm.cimns.com/'+item.img} alt="" />
                </div>
            )
        })
        this.setState({
            userid:newlin,
        })
        }
    }
    componentDidMount(){
        this.props.dispatch({
            type:actions.CRMLIST
        })
    }
    componentDidUpdate(oldProps){
        if(oldProps !== this.props){
            const {status,history} = this.props
            if(status === 2){
                history.replace('/login')
            }
        }
    };
}

const mapStateToProps = state =>{
    return({
        ...state.list
    })
}

//connect 加强Crm
export default connect(mapStateToProps)(Crm)