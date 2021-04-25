
import './Crm.css'

import React,{Component} from 'react'
// 导入封装好的axios
import instance from '../sercice//request'

export default class Crm extends Component{
    state ={
        userid:[],
        crm_list:[],
        isbool:true,
        listPage:[],
        type:0,
        page:0,
    }
    //滚动条小于200加载axios
    //scrollTop 滚动过的距离  clientHeight box的高度 scrollHeight 滚动条的高度
    listbox = e =>{
        const dom = e.target
        const boxHeight = dom.clientHeight
        const scrollHeight = dom.scrollHeight;
        const scrollTop = dom.scrollTop
        const scrollLength = scrollHeight - scrollTop;
        let bottomOfWidth = scrollLength - boxHeight
        if(bottomOfWidth > 100 && bottomOfWidth < 250){
            if(this.state.isbool === true){
                console.log('到底底部')
                //isbool 为false防止连续加载多次
                this.setState({
                    isbool:false
                });
                this.setState({
                    page:this.state.page++,
                });
                this.listPage();
            }
            //滚动条高度变化后isbool为true
            if(bottomOfWidth>1000){
                this.setState({
                    isbool:true
                });
            }
        }
    }
    listPage = () => {
        instance.post('http://crm.cimns.com/index.php/oa/index/index','type='+this.state.type+'&page='+this.state.page+'&limit=15').then(
                (data)=>{
                    const list = data.data.list;
                    const newList = [];
                    this.setState({
                        listPage:list
                    })
                    newList.push(...this.state.listPage) 
                    console.log(newList)
                    const newlist = newList.map((item,index)=>{
                        return(
                            <div key={index} className="itemList">
                                <img src={item.create_user_info.img === ''?item.create_user_info.img="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=b9703c8cad014c08196e20a13f4b2e3e/1ad5ad6eddc451dad19fbdceb2fd5266d01632ad.jpg":item.create_user_info.img} alt="" />
                                {item.action_content}
                            </div>
                        )
                    });
                    this.setState({
                        page:this.state.page+1
                    })
                    console.log(this.state.page)
                    this.setState({
                        crm_list:newlist
                    })
                }
            )
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
                {this.state.crm_list}
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
        this.listPage();
    }
}