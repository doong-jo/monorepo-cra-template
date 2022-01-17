/** @jsxImportSource @emotion/react */
import './App.css';

import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Template } from '@mono/shared';
import { Menu } from 'antd';

import { ApiRequestExample } from './pages/ApiRequestExample';
import { SubMenuPage } from './pages/SubMenuPage';

const { SubMenu } = Menu;
const { NavigationTemplate } = Template;

const App = () => (
  <NavigationTemplate
    defaultSelectedKeys={['API_REQUEST_EXAMPLE']}
    menuItems={
      <>
        <Menu.Item key="API_REQUEST_EXAMPLE" icon={<PieChartOutlined />}>
          API request example
        </Menu.Item>
        <SubMenu key="SUB_MENUS" icon={<UserOutlined />} title="Sub Menu">
          <Menu.Item key="1">Sub Menu 1</Menu.Item>
          <Menu.Item key="2">Sub Menu 2</Menu.Item>
          <Menu.Item key="3">Sub Menu 3</Menu.Item>
        </SubMenu>
      </>
    }
    viewPathMap={[
      ['API_REQUEST_EXAMPLE', <ApiRequestExample />],
      ['SUB_MENUS', '1', <SubMenuPage name="Sub Menu 1 Content" />],
      ['SUB_MENUS', '2', <SubMenuPage name="Sub Menu 2 Content" />],
      ['SUB_MENUS', '3', <SubMenuPage name="Sub Menu 3 Content" />],
    ]}
  />
);

export default App;
