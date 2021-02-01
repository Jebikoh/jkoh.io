import React from 'react';
import {Layout, Menu, Affix, List, Avatar} from 'antd';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Particles from 'react-tsparticles';
import styled, {keyframes} from 'styled-components';
import {Helmet} from 'react-helmet';

import './index.css';
import projects from './projects.json';
import Project from './Project';

const listData: Project[] = [];

projects.Projects.forEach(project => {
  listData.push(project);
});

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
      <Helmet>
        <title>Jayden // JKOH</title>
      </Helmet>
      <Layout>
        <Affix>
          <Layout.Header className="nav">
            <div className="logo">
              <p>LOGO TEXT</p>
            </div>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item style={{float: 'right'}} key="1">
                <a
                  href="https://github.com/Jebikoh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined style={{margin: 0}} />
                </a>
              </Menu.Item>
              <Menu.Item style={{float: 'right'}} key="2">
                {/* <a href="https://www.linkedin.com/in/aneesh-edara/"> */}
                <LinkedinOutlined />
                {/* </a> */}
              </Menu.Item>
              <Menu.Item style={{float: 'right'}} key="3">
                <a
                  href="https://twitter.com/jebikoh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterOutlined style={{margin: 0}} />
                </a>
              </Menu.Item>
            </Menu>
          </Layout.Header>
        </Affix>
        <Layout.Content className="content">
          <div className="section1-text">
            <p className="title-text">HEY, I&apos;M JAYDEN.</p>
            <p className="title-subtext">
              Subtext
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
            className="particles"
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
                  random: false,
                  value: 2,
                },
              },
              detectRetina: true,
            }}
          />
        </Layout.Content>
        <Layout.Content className="content text-section">
          <div className="content-center">
            <p className="section-header">About Me</p>
            <Avatar
              size={192}
              icon={<UserOutlined />}
              style={{margin: 'auto', marginBottom: '0.5em'}}
            />
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec ante ac massa ultricies vestibulum. Aliquam tempor neque et
              enim pharetra tempus. Suspendisse potenti. Nunc eu velit mi.
              Phasellus ut felis id odio convallis sodales. Donec sit amet lacus
              et ante egestas lacinia vel sed tortor. Curabitur fringilla justo
              at mi auctor, at vulputate dolor suscipit. Maecenas vitae sem eu
              risus euismod aliquet. Curabitur efficitur hendrerit purus, vel
              interdum ligula. Mauris ac ex eu dolor sodales iaculis. Ut
              molestie sagittis dolor, quis luctus odio dictum in. Vivamus vel
              efficitur augue. Sed vitae pretium velit. Praesent nec eros ut
              elit vulputate pretium. In id erat odio.
            </p>
          </div>
        </Layout.Content>
        <Layout.Content className="content text-section project-section">
          <p className="section-header">My Projects</p>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.name}
                extra={<img width={128} alt="logo" src={item.image} />}
              >
                <List.Item.Meta
                  title={<a href={item.href}>{item.name}</a>}
                  description={item.meta}
                />
                {item.description}
              </List.Item>
            )}
          />
        </Layout.Content>
        <Layout.Footer style={{textAlign: 'center'}}>
          Jaden Edara ©2020
        </Layout.Footer>
      </Layout>
    </div>
  );
}

export default App;
