import React, { Component } from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Content,
} = Layout;


class LandingpageLayout extends Component {
  render() {
    return (
      <Layout>
        <Header>{this.props.header}</Header>
        <Content>{this.props.children}</Content>
        <Footer style={{height: '15em'}}>{this.props.footer}</Footer>
      </Layout>

    )
  }
}


export default LandingpageLayout;