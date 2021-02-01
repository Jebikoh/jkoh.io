import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hover.css';

import ReactFullpage from '@fullpage/react-fullpage';
import styled, {keyframes} from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import Iframe from 'react-iframe';
import { Helmet } from 'react-helmet';

// Images
import secure from './assets/secure.png';
import thirdParty from './assets/third-party.png';
import traceable from './assets/traceable.png';

import bitcoinLogo from './assets/bitcoin.png';
import ethereumLogo from './assets/ethereum.png';
import rippleLogo from './assets/ripple.png';
import coinbaseLogo from './assets/coinbase.png';

const ChevronContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  text-transform: uppercase;
  font-size: 16px;
  a {
    text-decoration: none;
  }
  width: 100%;
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
      <ReactFullpage
    scrollingSpeed = {1000} /* Options here */

    render={({ fullpageApi }) => {
      return (
        <>
          <Helmet>
            <title>What Is Blockchain?</title>
          </Helmet>
          <ReactFullpage.Wrapper>
            <div className="section">
              <p className="header-text">WHAT IS <span style={{'color': '#3ac0ff'}}>BLOCKCHAIN</span>?</p>
              <p className="subtext">Please note, this is not optimized for mobile</p>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text"><span style={{'color': '#3ac0ff'}}>Blockchain</span> is a new technology behind many modern day apps & ecosystems. 
                  <br />
                  <br />

                  You've probably heard of a few: <br /> <span style={{'color': '#ff9416'}}>Bitcoin</span>, <span style={{'color': '#62688f'}}>Ethereum</span>, or maybe <span style={{'color': '#069aee'}}>Ripple</span>.
                </p>
              </div>
              <Container className="image-container">
                  <Row>
                    <Col><img src={bitcoinLogo} style={{"width": "100px"}} className="hvr-icon-bob"/></Col>
                    <Col><img src={ethereumLogo} style={{"width": "100px"}}/></Col>
                    <Col><img src={rippleLogo} style={{"width": "100px"}}/></Col>
                  </Row>
                </Container>
                <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">Think of <span style={{'color': '#3ac0ff'}}>blockchain</span> as a permanent, immutable <span style={{'color': '#3ac0ff'}}>list of transactions</span>.
                  <br />
                  <br />
                  <span style={{'color': '#d142f5'}}>Transactions</span> on this list are grouped together into <span style={{'color': '#d142f5'}}>blocks</span>.
                </p>
              </div>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">This <span style={{'color': '#3ac0ff'}}>list</span> is distributed to a network of thousands of <span style={{'color': '#ff427b'}}>interconnected computers</span>.
                <br/>
                <br/>
                Each computer is called a <span style={{'color': '#ff427b'}}>node</span>.
                </p>
              </div>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">
                  On the next slide, zoom out to see an example map of <span style={{'color': '#ff427b'}}>nodes</span> in a network.
                  <br/>
                  <br/>
                  Each of these <span style={{'color': '#ff427b'}}>nodes</span> has an identical, up-to-date, version of the <span style={{'color': '#3ac0ff'}}>list</span>.
                </p>
              </div>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
                <Iframe url="https://matallo.carto.com/builder/e70677d5-1111-40a8-9e19-f27da227a55c/embed?state=%7B%22map%22%3A%7B%22ne%22%3A%5B-7.318881730366743%2C-25.532226562500004%5D%2C%22sw%22%3A%5B22.14670778001263%2C18.764648437500004%5D%2C%22center%22%3A%5B7.667441482726068%2C-3.3837890625000004%5D%2C%22zoom%22%3A5%7D%2C%22widgets%22%3A%7B%22382ba308-9b92-4a88-bc6d-2ca8bda2137a%22%3A%7B%22autoStyle%22%3Atrue%7D%7D%7D"
                        className="node-map"
                />
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">
                  Crazy right?
                  <br />
                  <br />
                  Let's talk about what happens when someone tries to submit a <span style={{'color': '#3ac0ff'}}>transaction</span>
                </p>
              </div>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">
                  If two people want to make a <span style={{'color': '#3ac0ff'}}>transaction</span>, they request one from the <span style={{'color': '#ff427b'}}>network</span>.
                  <br />
                  <br />
                  The request is broadcasted to <span style={{'color': '#ff427b'}}>every single node</span>.
                </p>
              </div>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">
                  Collectively, the <span style={{'color': '#ff427b'}}>network</span> verifies the transaction via complex algorithms.
                  <br />
                  <br />
                  Any disagreement is settled by a minimum 51% majority.
                </p>
              </div>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">
                  If successful, the <span style={{'color': '#3ac0ff'}}>transaction</span> is packed with others into a <span style={{'color': '#d142f5'}}>block</span>
                  <br />
                  <br />
                  This <span style={{'color': '#d142f5'}}>block</span> is then added to the <span style={{'color': '#3ac0ff'}}>list</span>, and all <span style={{'color': '#ff427b'}}>nodes</span> update.
                </p>
              </div>
              <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">
                  This allows for secure, third-party-less (e.g. Paypal), tracable transactions.
                </p>
              </div>
                <Container className="image-container">
                  <Row>
                    <Col><img src={secure} style={{"width": "100px"}}/></Col>
                    <Col><img src={thirdParty} style={{"width": "100px"}}/></Col>
                    <Col><img src={traceable} style={{"width": "100px"}}/></Col>
                  </Row>
                </Container>
                <ChevronContainer
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-delay="1200"
              >
                <Chevron />
              </ChevronContainer>
            </div>
            <div className="section">
              <div className="text-container">
                <p className="body-text">
                  Now that you know the basics of <span style={{'color': '#3ac0ff'}}>blockchain</span>, jump in! Here are some places to start:
                </p>
              </div>
              <Container className="explore-container">
                <Row>
                  <Col>
                    <a href="https://coinbase.com">
                      <img src={coinbaseLogo} style={{"width": "100px"}}/>
                    </a>
                  </Col>
                  <Col>
                    <a href="https://ethereum.org/en/dapps/#explore">
                        <img src={ethereumLogo} style={{"width": "100px"}}/>
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
          </ReactFullpage.Wrapper>
        </>
      );
    }}
  />
    </div>
  );
}

export default App;
