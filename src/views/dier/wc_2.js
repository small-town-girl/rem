// import React from 'react'
// import {Switch,Route, Link} from 'react-router-dom'
// import './kh_2.css'
// import { Menu} from 'antd';
// import {
//   MailOutlined,
//   CalendarOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
//   LinkOutlined,
// } from '@ant-design/icons';

// import Kh_2_1 from './kh_2_1'
// import Kh_2_2 from './kh_2_2'
// import Kh_2_3 from './kh_2_3'
// import Kh_2_4 from './kh_2_4'
// import Kh_2_5 from './kh_2_5'
// import Kh_2_6 from './kh_2_6'
// import Kh_2_7 from './kh_2_7'


// function Kh_2(){
//     return(
//         <div className="wc_2 clearfix">
//            <div className="kh_2-header">
//                 <h2>代办事项</h2>
//            </div>
//            <div className="wc_2-routebox clearfix">
//                 <div className="wc_2-route">
//                     <>             
//                         <Menu
                        
//                             defaultSelectedKeys={['1']}
//                             defaultOpenKeys={['sub3']}
//                         >
//                             <Menu.Item key="1" icon={<MailOutlined />}>
//                                 <Link to="/App/box/kh/kh_2">
//                                     今日需联系客户
//                                 </Link>
                            
//                             </Menu.Item>
//                             <Menu.Item key="2" icon={<CalendarOutlined />}>
//                                 <Link to="/App/box/kh/kh_2/kh_2_2">
//                                     分配给我的线索
//                                 </Link>
                            
//                             </Menu.Item>
//                             <Menu.Item key="3" icon={<AppstoreOutlined />}>
//                                 <Link to="/App/box/kh/kh_2/kh_2_3">
//                                     分配给我的客户
//                                 </Link>
                            
//                             </Menu.Item>
//                             <Menu.Item key="4" icon={<SettingOutlined />}>
//                                 <Link to="/App/box/kh/kh_2/kh_2_4">
//                                     待审核合同
//                                 </Link>
                            
//                             </Menu.Item>
//                             <Menu.Item key="5" icon={<LinkOutlined/>}>
//                                 <Link to="/App/box/kh/kh_2/kh_2_5">
//                                     待审核回款
//                                 </Link>
                            
//                             </Menu.Item>
//                             <Menu.Item key="6" icon={<CalendarOutlined />}>
//                                 <Link to="/App/box/kh/kh_2/kh_2_6">
//                                     待回款提醒
//                                 </Link>
                            
//                             </Menu.Item>
//                             <Menu.Item key="7" icon={<MailOutlined />}>
//                                 <Link to="/App/box/kh/kh_2/kh_2_7">
//                                     即将到期的合同
//                                 </Link>
                        
//                             </Menu.Item>

//                         </Menu>
//                     </>        

//                 </div>
//                 <div className="kh_2-r">
//                         <Switch>
//                             <Route path="/App/box/kh/kh_2" component={Kh_2_1} exact/>
//                             <Route path="/App/box/kh/kh_2/kh_2_2" component={Kh_2_2} />
//                             <Route path="/App/box/kh/kh_2/kh_2_3" component={Kh_2_3} />
//                             <Route path="/App/box/kh/kh_2/kh_2_4" component={Kh_2_4} />
//                             <Route path="/App/box/kh/kh_2/kh_2_5" component={Kh_2_5} />
//                             <Route path="/App/box/kh/kh_2/kh_2_6" component={Kh_2_6} />
//                             <Route path="/App/box/kh/kh_2/kh_2_7" component={Kh_2_7} />
//                         </Switch>
//                 </div>
//            </div>
//         </div>
//     )
// };

// export default Kh_2