import React,{useState} from 'react'
import axios from 'axios';
function Enpty(){
    const [arr,setarr]=useState([])
    axios.post('http://crm.cimns.com/index.php/work/tasklable/read',{
        lablxe_id: 3
    }).then((data)=>{
        if(arr.length<=0){
            let arr2= data.data.data
            let arr3 = []
            for(var i in arr2){
                arr3.push(arr2[i])
            }
            setarr(arr3)
        }
        
      },(error)=>{
        console.log(error)
      })
      console.log(arr)
    return(
        <div>
            <h3 style={{fontSize:'20px',textAlign:'left',marginBottom:25}}>
            {arr[1]}
            </h3>
            <div style={{width:'100%',minHeight:'600px',backgroundColor:'#fff'}}>
                <span style={{color:'#999'}}>没有找到数据</span>
            </div>
        </div>
    )
}
export default Enpty