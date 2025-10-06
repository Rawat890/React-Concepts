import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'

const {Title}= Typography;

const HomePage = () => {
  return (
    <>
     <Title level={2} className='heading'>Global Crypto Stats</Title>
     <Row>
      <Col span={12}><Statistic title="Total Crptocurrencies" value='5'/></Col>
      <Col span={12}><Statistic title="Total Exchange" value='5'/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value='5'/></Col>
      <Col span={12}><Statistic title="Total 24th Volume" value='5'/></Col>
      <Col span={12}><Statistic title="Total Markets" value='5'/></Col>
     </Row>
    </>
  )
}

export default HomePage