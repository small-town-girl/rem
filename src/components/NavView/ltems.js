import React,{Component} from 'react'
import '../../css/ltems.css'
import { Layout, Modal,Menu} from 'antd';
import insterreq from '../../sercice/request'
import {Switch,Route,Link} from 'react-router-dom'
import {
  DesktopOutlined,
  ContainerOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined,
  AppstoreAddOutlined,
  TagOutlined,
  DeleteOutlined,
  MenuFoldOutlined
} 
from '@ant-design/icons';
import Pl7 from './pl7'
import Pl1 from './pl1'
import Pl2 from './pl2'
import Pl3 from './pl3'
import Pl4 from './pl4'
import Pl5 from './pl5'
import Pl6 from './pl6'
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
let type = true

export default class Office extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
    constructor(props){
      super(props)
      this.state={
        arr:[]
      }
    }
    render() {
      insterreq.post('http://crm.cimns.com/index.php/work/index/workList', {
      }).then((data)=>{
        // if(this.state.arr.length<=0){
        //   this.setState({
        //     arr:data.data.data
        //   })
        // }
        console.log(this.state.arr); 
      },(error)=>{
        console.log(error)
      })
    return (
      <Layout style={{minHeight:'100%'}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
          <div className="logo2">
            <div className='ks'>
              <span style={{display:type === true?'block':'none'}}>快速创建</span><i>+</i>
            </div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="工作台">
              <Menu.Item key="1"><Link to='/ltems/pl7'>我的任务</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/ltems/pl1'>任务日历</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ContainerOutlined />}title="项目">
              {/* {this.state.arr.map((item, idx) => {
              return(
                <Menu.Item key={idx+'10'}>
                  <Link to='/app/pl6/myproself'>{item.name}</Link>
                </Menu.Item>
              )
            })} */}
            </SubMenu>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              <Link to='/ltems/pl2'>统计分析</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<AppstoreAddOutlined />}>
              <Link to='/ltems/pl3'>归档项目</Link>
            </Menu.Item>
            <SubMenu key="sub3" icon={<TagOutlined />} title="标签">
            <Menu.Item key="7">
              <Link to='/ltems/pl4'>safsdf</Link>
            </Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<DeleteOutlined />}>
              <Link to='/ltems/pl5'>回收站</Link>
            </Menu.Item>
          </Menu>
          <div className='btn1' onClick={()=>{type = !type}}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </div>
        </Sider>
        <Layout className="site-layout">
            <Content className="site-layout-background" style={{backgroundColor:'rgba(0,0,0,0)',padding: 24}}>
                <Route path='/ltems/pl7' component={Pl7} exact/>
                <Route path='/ltems/pl1' component={Pl1}/>
                <Route path='/ltems/pl2' component={Pl2}/>
                <Route path='/ltems/pl3' component={Pl3}/>
                <Route path='/ltems/pl4' component={Pl4}/>
                <Route path='/ltems/pl5' component={Pl5}/>
                <Route path='/ltems/pl6' component={Pl6}/>
            </Content>
        </Layout>
        <Modal title="新建任务" okText="保存" cancelText="取消" width={700} maskStyle={{ background: '#eee',height:'100%'}} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} bodyStyle={{padding:40,fontSize: '12px'}} style={{marginTop:-70}}>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',}}>
              <div className='proinput' style={{marginBottom:10}}><p><b style={{fontWeight:900,color:'red',paddingRight:10}}>|</b>项目名称</p><input type="text" className="ass acc" style={{color:'#999',marginBottom:0}} placeholder="请输入内容"></input></div>
          </div>
          <div style={{marginBottom:20,display:'flex'}}>
            <li className='ly4list' style={{backgroundColor:'rgb(43, 206, 106)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(43, 206, 165)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(43, 206, 206)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(88, 181, 218)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(59, 157, 214)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(66, 87, 207)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(165, 91, 214)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(232, 126, 247)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(243, 100, 195)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(240, 100, 124)'}}></li>
            <li className='ly4list' style={{backgroundColor:'rgb(243, 72, 138)'}}></li>
          </div>
          <div>
            <p>任务描述</p>
            <textarea style={{border:'1px solid #ccc',width:'100%',height:'100px'}} placeholder='请输入内容'></textarea>
          </div>
          <div style={{marginTop:10}}>
            <p>可见范围</p>   
            <select style={{width:'240px',height:'30px',border:'1px solid rgb(88, 181, 218)'}}>
              <option>公开：企业所有成员都可以看见此项目</option>
              <option>私有：只有加入的成员才能看见此项目</option>
            </select>
          </div>
          <div style={{marginTop:10}}>
            <p>项目成员</p>
            <div style={{display:'flex'}}>
              <li style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'blue',marginRight:10}}></li>
              <li className='iconfont' style={{width:'30px',height:'30px',borderRadius:'50%',border:'1px solid #999',color:'#999',lineHeight:'30px',textAlign:'center'}}>&#xe711;</li>
            </div>
            
          </div>
        </Modal>
      </Layout>
      
    );
  }
}


