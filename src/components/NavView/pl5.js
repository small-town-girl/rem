import React,{useState} from 'react'
import axios from 'axios';
import { Form, Checkbox } from 'antd';
function Bin(){
    let [binarr,setbinarr]=useState([])
    axios.post('http://crm.cimns.com/index.php/work/trash/index', {
      }).then((data)=>{
          if(binarr.length<=1){
            // setbinarr(data.data.data.list)
          }
      },(error)=>{
        console.log(error)
      })
    //   console.log(binarr)
    return(
        <div>
            <h3 style={{fontSize:'20px',textAlign:'left',marginBottom:25}}>回收站</h3>
            <div style={{width:'100%',minHeight:'600px',backgroundColor:'#fff'}}>
            {binarr.map((item,idx)=>{
                return(
                <div style={{paddingLeft:10,borderBottom:'1px solid #ccc',height:'57px'}} key={idx}>
                    <Form.Item>
                        <Checkbox checked={item.checked} style={{lineHeight:'57px',color:'#666',textDecoration:'line-through'}}>{item.name}</Checkbox>
                        <span className='iconfont' style={{lineHeight:'57px',color:'#666',float:'right',paddingRight:20}}>&#xe66d; 04-19 截止</span>
                    </Form.Item>
                </div> 
                )
            })}
            </div>
        </div>
    )
}
export default Bin