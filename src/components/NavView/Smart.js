import React,{Component} from 'react'
import './Office.css'
import { Layout, Menu, Button} from 'antd';

// views视图
import kehu2 from '../../views/Smart/kehu2'
import kehu3 from '../../views/Smart/kehu3'
import kehu4 from '../../views/Smart/kehu4'
import kehu5 from '../../views/Smart/kehu5'
import kehu6 from '../../views/Smart/kehu6'
import kehu7 from '../../views/Smart/kehu7'
import Loudou1 from '../../views/Smart/loudou1'
import Loudou2 from '../../views/Smart/loudou2'
import Loudou3 from '../../views/Smart/loudou3'
import Yuangong1 from '../../views/Smart/yuangong1'
import Yuangong2 from '../../views/Smart/yuangong2'
import Yuangong3 from '../../views/Smart/yuangong3'
import Yuangong4 from '../../views/Smart/yuangong4'
import Huaxiang1 from '../../views/Smart/huaxiang1'
import Huaxiang2 from '../../views/Smart/huaxiang2'
import Huaxiang3 from '../../views/Smart/huaxiang3'
import Huaxiang4 from '../../views/Smart/huaxiang4'
import Canpin1 from '../../views/Smart/canpin1'
import Canpin2 from '../../views/Smart/canpin2'
import Paihang1 from '../../views/Smart/paihang1'
import Paihang2 from '../../views/Smart/paihang2'
import Paihang3 from '../../views/Smart/paihang3'
import Paihang4 from '../../views/Smart/paihang4'
import Paihang5 from '../../views/Smart/paihang5'
import Paihang6 from '../../views/Smart/paihang6'
import Paihang7 from '../../views/Smart/paihang7'
import Paihang8 from '../../views/Smart/paihang8'
import Paihang9 from '../../views/Smart/paihang9'
import Bangong1 from '../../views/Smart/bangong1'
import Bangong2 from '../../views/Smart/bangong2'
import Yeji1 from '../../views/Smart/yeji1'

import {Link,Route,Redirect} from 'react-router-dom'
/* ant 组件 */

import {
    UserOutlined,
    TeamOutlined,
    FilterOutlined,
    LineChartOutlined,
    AppstoreOutlined,
    BarChartOutlined,
    FundOutlined,
    AimOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

  const { SubMenu} = Menu;

export default class Office extends Component{
        state = {
            collapsed: false,
          };
          onCollapse = collapsed => {
            console.log(collapsed);
            this.setState({ collapsed });
          };
    //获取loginbox
    Navbutton = React.createRef();
    //获取loginbox
    buttonbox = React.createRef();
    toggleCollapsed(){//设置buttonnav 的 right 数值
        this.setState({
            collapsed : !this.state.collapsed
        })
        console.log(this.state.collapsed)
        if(this.state.collapsed){
            this.Navbutton.current.style.right = 10 + '%'
            this.buttonbox.current.style.width = 64 + 'px'
        }else{
            this.Navbutton.current.style.right = 4 +'%'
            this.buttonbox.current.style.width = 200 + 'px'
        }
      }
    render(){
        return(
            <main className="index" style={{height:100+'%'}}>
                <div className="index_left">
                <div className="leftNav" ref={this.buttonbox}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }} className="leftNav_button" ref={this.Navbutton}>
                      {React.createElement(this.state.collapsed ? MenuFoldOutlined : MenuUnfoldOutlined)}
                    </Button>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{height:'100%',overflow:'auto'}}>
                        <SubMenu key="sub1" icon={<TeamOutlined />} title=" 员工客户分析">
                          <Menu.Item key="1"><Link to='/smart/kehu2'>客户总量分析</Link></Menu.Item>
                          <Menu.Item key="2"><Link to='/smart/kehu3'>客户跟进次数分析</Link></Menu.Item>
                          <Menu.Item key="4"><Link to='/smart/kehu4'>客户跟进方式分析</Link></Menu.Item>
                          <Menu.Item key="5"><Link to='/smart/kehu5'>客户转化率分析</Link></Menu.Item>
                          <Menu.Item key="6"><Link to='/smart/kehu6'>公海客户分析</Link></Menu.Item>
                          <Menu.Item key="7"><Link to='/smart/kehu7'>成交周期分析</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<FilterOutlined />} title="销售漏斗分析 ">
                          <Menu.Item key="8"><Link to='/smart/loudou1'>销售漏斗</Link></Menu.Item>
                          <Menu.Item key="9"><Link to='/smart/loudou2'>新增商机分析</Link></Menu.Item>
                          <Menu.Item key="10"><Link to='/smart/loudou3'>商机妆化率分析</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<LineChartOutlined />} title="员工业绩分析">
                          <Menu.Item key="11"><Link to='/smart/yuangong1'>合同数量分析</Link></Menu.Item>
                          <Menu.Item key="12"><Link to='/smart/yuangong2'>合同金额分析</Link></Menu.Item>
                          <Menu.Item key="13"><Link to='/smart/yuangong3'>回款金额分析</Link></Menu.Item>
                          <Menu.Item key="14"><Link to='/smart/yuangong4'>合同汇总表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<UserOutlined />} title="客户画像分析">
                          <Menu.Item key="15"><Link to='/smart/huaxiang1'>城市分布分析</Link></Menu.Item>
                          <Menu.Item key="16"><Link to='/smart/huaxiang2'>客户行业分析</Link></Menu.Item>
                          <Menu.Item key="17"><Link to='/smart/huaxiang3'>客户级别分析</Link></Menu.Item>
                          <Menu.Item key="18"><Link to='/smart/huaxiang4'>客户来源分析</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" icon={<AppstoreOutlined /> }title="产品分析">
                          <Menu.Item key="19"><Link to='/smart/canpin1'>产品销售情况分析</Link></Menu.Item>
                          <Menu.Item key="20"><Link to='/smart/canpin2'>产品分类销售分析</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" icon={<BarChartOutlined /> }title="排行榜">
                          <Menu.Item key="21"><Link to='/smart/paihang1'>合同金额排行</Link></Menu.Item>
                          <Menu.Item key="22"><Link to='/smart/paihang2'>回款金额排行</Link></Menu.Item>
                          <Menu.Item key="23"><Link to='/smart/paihang3'>签约合同排行</Link></Menu.Item>
                          <Menu.Item key="24"><Link to='/smart/paihang4'>产品销量排行</Link></Menu.Item>
                          <Menu.Item key="25"><Link to='/smart/paihang5'>新增客户数排行</Link></Menu.Item>
                          <Menu.Item key="26"><Link to='/smart/paihang6'>新增联系人排行</Link></Menu.Item>
                          <Menu.Item key="27"><Link to='/smart/paihang7'>跟进次数排行</Link></Menu.Item>
                          <Menu.Item key="28"><Link to='/smart/paihang8'>跟进客户数排行</Link></Menu.Item>
                          <Menu.Item key="29"><Link to='/smart/paihang9'>出差次数排行</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" icon={ <FundOutlined />}title="办公分析">
                          <Menu.Item key="30"><Link to='/smart/bangong1'>日志分析</Link></Menu.Item>
                          <Menu.Item key="31"><Link to='/smart/bangong2'>审批分析</Link></Menu.Item>
                        </SubMenu>
                          <Menu.Item key="32" icon={ <AimOutlined />}><Link to='/smart/yeji1'>业绩目标完成情况</Link></Menu.Item>
                    </Menu>
                </div>
                </div>
                <div className="index_right">
                    <div style={{height: 100+'%'}}>
                        <div className="workbench">
                        <Route path="/smart" exact render={()=> <Redirect to="/smart/kehu2" /> } />
                        <Route path="/smart/kehu2" component={kehu2}></Route>
                        <Route path="/smart/kehu3" component={kehu3}></Route>
                        <Route path='/smart/kehu4' component={kehu4}></Route>
                        <Route path='/smart/kehu5' component={kehu5}></Route>
                        <Route path='/smart/kehu6' component={kehu6}></Route>
                        <Route path='/smart/kehu7' component={kehu7}></Route>
                        <Route path='/smart/loudou1' component={Loudou1}></Route>
                        <Route path='/smart/loudou2' component={Loudou2}></Route>
                        <Route path='/smart/loudou3' component={Loudou3}></Route>
                        <Route path='/smart/yuangong1' component={Yuangong1}></Route>
                        <Route path='/smart/yuangong2' component={Yuangong2}></Route>
                        <Route path='/smart/yuangong3' component={Yuangong3}></Route>
                        <Route path='/smart/yuangong4' component={Yuangong4}></Route>
                        <Route path='/smart/huaxiang1' component={Huaxiang1}></Route>
                        <Route path='/smart/huaxiang2' component={Huaxiang2}></Route>
                        <Route path='/smart/huaxiang3' component={Huaxiang3}></Route>
                        <Route path='/smart/huaxiang4' component={Huaxiang4}></Route>
                        <Route path='/smart/canpin1' component={Canpin1}></Route>
                        <Route path='/smart/canpin2' component={Canpin2}></Route>
                        <Route path='/smart/paihang1' component={Paihang1}></Route>
                        <Route path='/smart/paihang2' component={Paihang2}></Route>
                        <Route path='/smart/paihang3' component={Paihang3}></Route>
                        <Route path='/smart/paihang4' component={Paihang4}></Route>
                        <Route path='/smart/paihang5' component={Paihang5}></Route>
                        <Route path='/smart/paihang6' component={Paihang6}></Route>
                        <Route path='/smart/paihang7' component={Paihang7}></Route>
                        <Route path='/smart/paihang8' component={Paihang8}></Route>
                        <Route path='/smart/paihang9' component={Paihang9}></Route>
                        <Route path='/smart/bangong1' component={Bangong1}></Route>
                        <Route path='/smart/bangong2' component={Bangong2}></Route>
                        <Route path='/smart/yeji1' component={Yeji1}></Route>
                        </div>
                    </div>  
                </div>
            </main>
        )
    }
}