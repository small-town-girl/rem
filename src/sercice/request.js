import ReactDOM from 'react-dom'
import axios from 'axios';
//ant-d 全局提示
import { message } from 'antd';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import {BASE_URL,TIMEOUT} from './config';
import React from 'react';

const instance = axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT
})

//当前请求的数量

let requestCount = 0

//显示loading
function showLoading(){
    if(requestCount === 0){
        var dom = document.createElement('div')
        dom.setAttribute('id','loading')
        document.body.appendChild(dom)
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        ReactDOM.render(<Spin indicator={antIcon} />,dom);
    }
    requestCount++
}

//隐藏loading

function hiddenLoading(){
    requestCount--
    if(requestCount === 0){
        document.body.removeChild(document.getElementById('loading'))
    }
}

//请求拦截器

instance.interceptors.request.use(config=>{
    if (config.headers.isLoading !== false) {
        showLoading()
    }
    const islogin = localStorage.token? true : false;

    if(islogin === false){
        window.location.href = '/login'
        return;
    }
    const newuserInfo = JSON.parse(localStorage.token)
        config.headers['Accept'] = 'application/json, text/plain, */*'
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        config.headers['authKey'] = newuserInfo.authKey
        config.headers['sessionId'] = newuserInfo.sessionId
    return config;
},err => {
    if (err.isLoading !== false) {
        hiddenLoading()
    }
    return message.error(err);
})

//响应拦截器

instance.interceptors.response.use(res=>{
    if (res.headers.isLoading !== false) {
        hiddenLoading()
    }
    switch (res.data.code) {
        case 101:
            return message.error(res.data.code+res.data.error);
        case 200:
            return res.data;
        default:
            return {};
    }
},err => {
    
        hiddenLoading()
    return console.log(err === 'timeout of 5000ms exceeded')
    
})


//暴露instance
export default instance;