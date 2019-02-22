import React from 'react';
import {Row, Col} from 'antd';

const footer = () => {
  return (
    <div>
      <Row
        style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%'
      }}>
        <Col span={8}>
          <b>Über CloudTool</b>
          <div>
            <ul>
              <li>Über CloudTool</li>
              <li>So funktioniert's</li>
              <li>Blog</li>
              <li>Customer Care</li>
              <li>Careers</li>
              <li>Return Policy</li>
            </ul>
          </div>
        </Col>
        <Col span={8}>
          <b>Partner with us</b>
          <ul>
            <li>API</li>
          </ul>
        </Col>
        <Col span={8}>
          <b>Legal</b>
          <ul>
            <li>Terms of Services</li>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default footer;