import { DownOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';

function RecruiterUserProfile(props) { 
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item icon={<DownOutlined />} disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    );

    return (
        <>
          <Dropdown overlay={menu}  trigger={['click']}>
            <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <UserOutlined /> Mahipal Gurjala <DownOutlined />
            </div>
          </Dropdown>  
        </>
    );
}

export default RecruiterUserProfile;