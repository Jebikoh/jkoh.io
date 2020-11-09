import React from 'react';
import {Layout, Menu, Affix} from 'antd';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import Particles from 'react-tsparticles';
import styled, {keyframes} from 'styled-components';

import './index.css';
// import 'antd/dist/antd.less';

const ChevronContainer = styled.div`
  position: absolute;
  bottom: 13vh;
  text-transform: uppercase;
  font-size: 16px;

  a {
    text-decoration: none;
  }
`;

const pulse = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const Chevron = styled.i`
  margin-top: 15px;
  display: block;
  animation: ${pulse} 2s infinite;
  color: #000c17;

  &::before {
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    display: inline-block;
    height: 20px;
    position: relative;
    vertical-align: top;
    width: 20px;
    top: 0;
    transform: rotate(135deg);
  }
`;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Layout.Header className="landing-header">
          <Affix offsetTop={0}>
            <div className="logo">
              <p>JEBIKOH</p>
            </div>
            <Menu theme="dark" mode="horizontal">
              {/* <div className="logo">JEBIKOH</div> */}
              <Menu.Item style={{float: 'right'}} key="1">
                <GithubOutlined />
              </Menu.Item>
              <Menu.Item style={{float: 'right'}} key="2">
                <LinkedinOutlined />
              </Menu.Item>
              <Menu.Item style={{float: 'right'}} key="3">
                <TwitterOutlined />
              </Menu.Item>
            </Menu>
          </Affix>
        </Layout.Header>
        <Layout.Content className="content-1">
          <div className="section1-text">
            <p className="title-text">HEY, I&apos;M JADEN.</p>
            <p className="title-subtext">
              You might have seen me as &quot;Jebikoh&quot;
            </p>
            <ChevronContainer
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay="1200"
            >
              <Chevron />
            </ChevronContainer>
          </div>
          <Particles
            id="tsparticles"
            options={{
              background: {
                color: {
                  value: '#fff',
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: 'canvas',
                events: {
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 20,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: '#000c17',
                },
                links: {
                  color: '#000c17',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outMode: 'bounce',
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        </Layout.Content>
        <Layout.Content className="content-2">
          <div className="site-layout-content">Content</div>
        </Layout.Content>
        <Layout.Content className="content-3">
          <div className="site-layout-content">Content</div>
        </Layout.Content>
        <Layout.Footer style={{textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
