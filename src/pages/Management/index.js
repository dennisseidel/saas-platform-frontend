import React, {Component} from 'react';
import { Layout, Row, Col } from 'antd';
import { withAuthenticator } from 'aws-amplify-react';



import { List, Avatar } from 'antd'; // or 'aws-amplify-react-native';

const { Content } = Layout;



class Management extends Component {
  state = {
    services: [ {
      title: 'Recommending Medication Combination',
      link: '/medicationcombination',
      description: 'A pre trained model for recomendion medications based on https://github.com/sjy1203/GAMENet.',
      avatar: 'https://www.researchgate.net/publication/327496088/figure/fig1/AS:668066744631296@1536290932483/The-GAMENet-At-current-t-th-visit-the-multi-hot-input-c-t-d-c-t-p-are-input-into.png',
    },
    {
      title: 'OpenMRS',
      link: '/mrs',
      description: 'A configurable instance of Medical Record System based on https://github.com/openmrs/openmrs-core',
      avatar: 'https://github.com/openmrs/openmrs-book-guide/blob/master/assets/OpenMRS-cross.png?raw=true'
    },
    {
      title: 'eHealth Record / PHR API',
      link: '/pmr',
      description: 'A backend for your eHealth Record / Personal Medical Record Application',
      avatar: 'http://computingcage.com/wp-content/uploads/2015/11/personal-health-record-graph.jpg'
    },
    {
      title: 'Laboratory Information Management System',
      link: '/lims',
      description: 'Laboratory Information Management System (LIMS) for enterprise environments based on https://github.com/senaite/senaite.core',
      avatar: "http://www.climet.com/images/LIMS.png"
    }],
    exploreActions: [
      {
        title: 'Manage your tenant users.',
        link: '/tenant'
      }
    ]


  };
  render() {
    return (
      <div style={{ padding: "50px 50px", backgroundColor: "white"}}>
      <Row style={{ margin: "0 0 2em"}}>
        <Col span={24}><h1>Management Console</h1></Col>
      </Row>
      <Row>
        <Col span={16}>
             
          <h2>Services</h2>
          <div style={{ margin: "2em 2em 0 0"}}>
          <List
            bordered
            itemLayout="horizontal"
            dataSource={this.state.services}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.link}>{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
          </div>
        </Col>
        <Col span={8}>
          <h2>Explore Platform</h2>
          <div style={{ margin: "2em 2em 0 0"}}>
          <List
      size="small"
      dataSource={this.state.exploreActions}
      renderItem={item => (<List.Item><a href={item.link}>{item.title}</a></List.Item>)}
    />
        </div>
        </Col>
      </Row>
    </div>
    )
  }

}

export default withAuthenticator(Management);