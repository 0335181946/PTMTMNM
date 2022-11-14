import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AboutMe from './AboutMe';
import ChangePassword from './ChangePassword';
import MyOrders from './MyOrders';

const MyAccount = () => {
    return (
        <div className='my_container'>
            <div className='my_row'>
                <h2 className='shop_title1'>ACCOUNT</h2>
            </div>
            <div className='my_row'>
                <Tabs>
                    <TabList>
                        <Tab>Infomation</Tab>
                        <Tab>Order</Tab>
                        <Tab>Setting</Tab>
                    </TabList>

                    <TabPanel>
                       <AboutMe/>
                    </TabPanel>
                    <TabPanel>
                        <MyOrders/>
                    </TabPanel>

                    <TabPanel>
                        <ChangePassword/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default MyAccount