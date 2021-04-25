import React,{Component} from 'react'
import './Nav.css'
import {Route,Link} from 'react-router-dom'

/* Ant ui */
import { Menu} from 'antd';

/* 自定义图标 */
import { createFromIconfontCN,UserOutlined} from '@ant-design/icons';
//引入NavView
import Office from './NavView/Office'
import Crm from './NavView/Crm'
import Smart from './NavView/Smart'
import Items from './NavView/Items'
import Space from './NavView/Space.js'
import { connect } from 'react-redux';

class Nav extends Component{
    constructor(){
        super();
        this.state={
            loginshows:false,
            userImgUrl:''
        }
        this.loginshow = this.loginshow.bind(this)
    }
    MyIcon = createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_2476064_2a1kboalj1g.js', // 在 iconfont.cn 上生成
    });
    //获取loginbox
    loginbox = React.createRef();
    loginshow(){
        this.loginshows = !this.loginshows
        if(this.loginshows === true){
            this.loginbox.current.style.opacity = 1
            this.loginbox.current.style.display = 'block'
        }else{
            this.loginbox.current.style.opacity = 0
            this.loginbox.current.style.display = ''
        }
    }
    space = () =>{
        this.props.history.push('/space')
    }
    //退出按钮
    logout = () =>{
        localStorage.clear();
        this.props.history.push('/login')
    }
    render(){
        return(
            <div className="Home">
            <div className="Nav_box">
                <div className="nav_def">
                    <img className="Hlogo" src="http://crm.cimns.com/static/img/logo.3e34073.png" alt="" />
                    <div className="nav_bar">
                        <Menu mode="horizontal" lang="zhCN" defaultSelectedKeys={this.props.history.location.pathname}>
                            <Menu.Item key="/off/index" icon={<this.MyIcon type="icon-pc" />}>
                            <Link to='/off/index'>办公</Link>
                            </Menu.Item>
                            <Menu.Item key="/crm" icon={<this.MyIcon type="icon-kehufenxi" />}>
                            <Link to='/crm'>客户管理</Link>
                            </Menu.Item>
                            <Menu.Item key="/smart" icon={<this.MyIcon type="icon-shangye-" />}>
                            <Link to='/smart'>商业智能</Link>
                            </Menu.Item>
                            <Menu.Item key="/ltems" icon={<this.MyIcon type="icon-xiangmu" />}>
                            <Link to='/ltems'>项目管理</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <span className="buton">
                        <button className="auth-button">开通授权</button>
                        <div className="isShow">
                            <div className="auth-content">
                                <div className="header-title">您暂未开通授权</div>
                                <div className="detail">
                                为了给您提供更好的服务支持
                                <br />
                                建议您购买官方授权
                                </div>
                                <span className="phone">400-0812-558</span>
                            </div>
                        </div>
                    </span>
                    <span>
                        <div className="userheader" onClick={this.loginshow}>
                            <div className="navbar">
                                <img src={this.state.userImgUrl === ''?'http://bpic.588ku.com/element_origin_min_pic/00/33/84/7156d3cd2a455ae.jpg':'http://crm.cimns.com/'+this.state.userImgUrl} alt="" />
                            </div>
                            <i className="mark"></i>
                            <div className="btnlogin" ref={this.loginbox}>
                                <div className="handel-item" onClick={this.space}>
                                    <i className="wukong-versions"><UserOutlined /></i>
                                    个人中心
                                </div>
                                <div className="handel-item" onClick={this.logout}>
                                    <i className="wukong-versions"><this.MyIcon type="icon-tuichudenglu" /></i>
                                    退出登录
                                </div>
                                <div className="handel-item hr-top">
                                    <i className="wukong-versions"><this.MyIcon type="icon-banbenpitchon" /></i>
                                    版本 V9.3.2.191220
                                </div>
                                <div className="handel-box"><button>进入企业管理后台</button></div>
                                
                            </div>
                        </div>
                        
                    </span>
                </div>
            </div>
            <div className="content">
                <Route path="/off/" component={Office} />
                <Route path="/crm/" component={Crm} />
                <Route path="/smart" component={Smart} />
                <Route path="/ltems" component={Items} />
                <Route path="/space" component={Space} />
            </div>
        </div>
        )
    }
    componentDidMount(){
        if(!localStorage.token){
            this.props.history.push('/login')
            return;
        }
        var userImgUrl = JSON.parse(localStorage.token)
        this.setState({
            userImgUrl:userImgUrl.userInfo.img
        })
    }
}

export default connect()(Nav)