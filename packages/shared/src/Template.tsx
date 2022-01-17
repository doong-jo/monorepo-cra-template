/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Layout, Menu } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { ReactNode, useState } from 'react';

interface PageViewProps {
  pageKey: string;
  viewPathMap: ReactNode[][];
}

const PageView = ({ pageKey, viewPathMap }: PageViewProps) => {
  if (pageKey === '') {
    return null;
  }

  const findTargetView = () => {
    for (let i = 0; i < viewPathMap.length; i += 1) {
      const viewPath = viewPathMap[i];

      for (let j = 0; j < viewPath.length - 1; j += 1) {
        if (pageKey === viewPath[j]) {
          return viewPath[j + 1];
        }
      }
    }
  };

  return <div>{findTargetView()}</div>;
};

const rootLayoutStyle = css`
  min-height: 100vh;
  flex-direction: row;
`;

const contentStyle = css`
  margin: 0 16px;
`;

const footerStyle = css`
  text-align: center;
`;

interface NavigationTemplateProps extends Pick<PageViewProps, 'viewPathMap'> {
  menuItems: ReactNode;
  defaultSelectedKeys?: string[];
}

const NavigationTemplate = ({
  menuItems,
  viewPathMap,
  defaultSelectedKeys = ['1'],
}: NavigationTemplateProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [currentKey, setCurrentKey] = useState<string>(defaultSelectedKeys[0]);

  const handleMenuClicked = (draftKey: string) => {
    setCurrentKey(draftKey);
  };

  return (
    <Layout css={rootLayoutStyle}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <Menu
          theme="dark"
          defaultSelectedKeys={defaultSelectedKeys}
          mode="inline"
          onClick={({ key }) => handleMenuClicked(key)}
        >
          {menuItems}
        </Menu>
      </Sider>
      <Layout>
        <Content css={contentStyle}>
          <PageView pageKey={currentKey} viewPathMap={viewPathMap} />
        </Content>
        <Footer css={footerStyle}>Monorepo CRA template</Footer>
      </Layout>
    </Layout>
  );
};

export const Template = { PageView, NavigationTemplate };
