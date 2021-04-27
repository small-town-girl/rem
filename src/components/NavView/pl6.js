
import axios from "axios"
import React,{useState} from 'react'
import {Link,Route} from 'react-router-dom'
import Ly4myprol1 from './ltemss1'
import Ly4myprol2 from './ltemss2'
import Ly4myprol3 from './ltemss3'
import Ly4myprol4 from './ltemss4'
import { Popover } from 'antd';
function Myproself(){
    let [proarr,setproarr]=useState([])
    axios.post('http://crm.cimns.com/index.php/work/index/workList', {

      }).then((data)=>{
        if(proarr.length<=0){
          setproarr(data.data.data)
        }
        console.log(proarr);
      },(error)=>{
        console.log(error)
      })
      // const text = <span>Title</span>;
      const content = (
        <div>
          <p>添加项目成员</p>
          <p>项目设置</p>
          <p>归档项目</p>
          <p>删除项目</p>
          <p>退出项目</p>
        </div>
      );
    return(
        <div>
            <div className='top' style={{margin:0,padding:0,backgroundColor:'#fff',height:90}}>
                <div style={{display:'flex'}}>
                  <div>
                    <span style={{paddingTop:10,paddingLeft:30,fontSize:15,fontWeight:400}}>
                      <b className='iconfont' style={{color:'#8de782',fontSize:'24px',paddingRight:10}}>&#xe628;</b>
                      {proarr.map((item, idx) => {
                      return(
                          <span key={idx}>
                              {item.name}
                          </span>
                      )
                      })}
                    </span>
                    <Popover placement="bottomLeft" content={content} trigger="click">
                      <span className='iconfont' style={{paddingLeft:15,color:'#ccc'}}>&#xe609;</span>
                    </Popover>
                    
                  </div>
                  <div style={{position:'absolute',right:100}}>
                    <span className='iconfont' style={{color:'#999',fontSize:'25px',paddingRight:'30px',}}>&#xe611;</span>
                    <span className='iconfont' style={{color:'#999',fontSize:'25px'}}>&#xe6be;</span>
                  </div>
                </div>
                <div className='myprolist' style={{display:'flex',marginLeft:55}}>
                  <Link to='/app/ly4/myproself'>任务版</Link>
                  <Link to='/app/ly4/myproself/ly4myprol2'>附件</Link>
                  <Link to='/app/ly4/myproself/ly4myprol3'>任务统计</Link>
                  <Link to='/app/ly4/myproself/ly4myprol4'>归档任务</Link>
                </div>
            </div>
            <div className='myproContent' style={{marginTop:'20px'}}>
                <Route path='/app/ly4/myproself' component={Ly4myprol1} exact></Route>
                <Route path='/app/ly4/myproself/ly4myprol2' component={Ly4myprol2} exact></Route>
                <Route path='/app/ly4/myproself/ly4myprol3' component={Ly4myprol3} exact></Route>
                <Route path='/app/ly4/myproself/ly4myprol4' component={Ly4myprol4} exact></Route>
            </div>
        </div>
    )
}
export default Myproself