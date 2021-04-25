
import React,{Component} from 'react'
import './login.css'

//导入全局提示
import { message } from 'antd';
//引入connect 加强Login
import {connect} from 'react-redux'
//引入常量
import {actions} from '../constant/index'

class Login extends Component{
        state = {
            username:'',
            password:''
        }
    
    user_pass = e =>{
        let dom = e.target
        let type = dom.getAttribute('login')
        let val = dom.value.split(' ').join('')
        let newjson = {...this.state}
        newjson[type] = val
        this.setState(newjson)
    }
    //登录按钮事件
    loginbtn = () =>{
        const {password,username} = {...this.state}
        if(password === '' && username === '') return message.error('不能为空')
        this.props.dispatch({
            type:actions.LOGIN,
            data:{
                ...this.state
            }
        })
    }
    
    render(){
        return(
            <div className="wrapper router-view">
            <div className="left">
                <div className="bigBg"></div>
            </div>
            <div className="right">
                
                <div className="input">
                    <p className="heibig">悟空CRM</p>
                    <div className="username">
                    <input type="text" login="username" placeholder="请输入用户名" value={this.username} onChange={this.user_pass} maxLength="12" />
                        
                    </div>
                    <div className="password">
                    <input type="password" login="password" placeholder="请输入密码" value={this.password} onChange={this.user_pass} maxLength="16" />
                        
                        
                        
                    </div>
                    <button className="login_btn" onClick={this.loginbtn}>登录</button>
                </div>
                <div className="copyright">     
                    悟空CRM受国家计算机软件著作权保护，未经授权不得进行商业行为，违者必究。
                    <br />
                    <a href="http://www.5kcrm.com/">©2021 悟空CRM</a>
                </div>
            </div>
            <img className="logo" src="http://crm.cimns.com/static/img/logo.3e34073.png" alt="" />
        </div>
        )
    }
    componentDidMount(){
        if(localStorage !== ''){
            if(localStorage.token){
                this.props.history.push('off/index')
            }
        }
    }
    componentWillUpdate(newProps){
        //根据传递来的status判断
        if(newProps !== this.props){
            const {status} = newProps
            if(status === 1){
                this.props.history.push('off/index')
            }else if(status === 2){
                message.error('账号不存在')
            }
        }
    }
}


const mapStateToProps = state =>{
    return {
        ...state.user
    }
}

export default connect(mapStateToProps)(Login)