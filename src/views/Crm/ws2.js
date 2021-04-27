// export default Ws2
import React from 'react'
import {Switch,Route, Link} from 'react-router-dom'
import '../dier/wc_2.css'
import { Menu} from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';

import Wc_2_1 from '../dier/wc_2_1'
import Wc_2_2 from '../dier/wc_2_2'
import Wc_2_3 from '../dier/wc_2_3'
import Wc_2_4 from '../dier/wc_2_4'
import Wc_2_5 from '../dier/wc_2_5'
import Wc_2_6 from '../dier/wc_2_6'
import Wc_2_7 from '../dier/wc_2_7'


function Ws2(){
    return(
        <div className="wc_2 clearfix">
           <div className="wc_2-header">
                <h2>代办事项</h2>
           </div>
           <div className="wc_2-routebox clearfix">
                <div className="wc_2-route">
                    <>             
                        <Menu
                        
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub3']}
                        >
                            <Menu.Item key="1" icon={<MailOutlined />}>
                                <Link to="/crm/ws2/wc_2_1">
                                    今日需联系客户
                                </Link>
                            
                            </Menu.Item>
                            <Menu.Item key="2" icon={<CalendarOutlined />}>
                                <Link to="/crm/ws2/wc_2/wc_2_2">
                                    分配给我的线索
                                </Link>
                            
                            </Menu.Item>
                            <Menu.Item key="3" icon={<AppstoreOutlined />}>
                                <Link to="/crm/ws2/wc_2/wc_2_3">
                                    分配给我的客户
                                </Link>
                            
                            </Menu.Item>
                            <Menu.Item key="4" icon={<SettingOutlined />}>
                                <Link to="/crm/ws2/wc_2/wc_2_4">
                                    待审核合同
                                </Link>
                            
                            </Menu.Item>
                            <Menu.Item key="5" icon={<LinkOutlined/>}>
                                <Link to="/crm/ws2/wc_2/wc_2_5">
                                    待审核回款
                                </Link>
                            
                            </Menu.Item>
                            <Menu.Item key="6" icon={<CalendarOutlined />}>
                                <Link to="/crm/ws2/wc_2/wc_2_6">
                                    待回款提醒
                                </Link>
                            
                            </Menu.Item>
                            <Menu.Item key="7" icon={<MailOutlined />}>
                                <Link to="/crm/ws2/wc_2/wc_2_7">
                                    即将到期的合同
                                </Link>
                        
                            </Menu.Item>

                        </Menu>
                    </>        

                </div>
                <div className="wc_2-r">
                        <Switch>
                            <Route path="/crm/ws2/wc_2_1" component={Wc_2_1} exact/>
                            <Route path="/crm/ws2/wc_2/wc_2_2" component={Wc_2_2} />
                            <Route path="/crm/ws2/wc_2/wc_2_3" component={Wc_2_3} />
                            <Route path="/crm/ws2/wc_2/wc_2_4" component={Wc_2_4} />
                            <Route path="/crm/ws2/wc_2/wc_2_5" component={Wc_2_5} />
                            <Route path="/crm/ws2/wc_2/wc_2_6" component={Wc_2_6} />
                            <Route path="/crm/ws2/wc_2/wc_2_7" component={Wc_2_7} />
                        </Switch>
                </div>
           </div>
        </div>
    )
};

export default Ws2