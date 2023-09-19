import React from 'react';
import { useProfileContext } from '@/context/profileContext';
import uniqueId from '@/utils/uinqueId';
import { EditOutlined, LockOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Col, Descriptions, Divider, PageHeader, Row } from 'antd';
import { useSelector } from 'react-redux';
import photo from '@/style/images/photo.png';
import history from '@/utils/history';
import { selectCurrentItem } from '@/redux/crud/selectors';

const AdminInfo = ({ config }) => {
  const { profileContextAction } = useProfileContext();
  const { modal, updatePanel } = profileContextAction;
  const { ENTITY_NAME } = config;
  const { result } = useSelector(selectCurrentItem);
  console.log(result);
  return (
    <>
      <PageHeader
        onBack={() => window.history.back()}
        title={ENTITY_NAME}
        ghost={false}
        extra={[
          <Button
            key={`${uniqueId()}`}
            onClick={() => {
              updatePanel.open();
            }}
            type="primary"
            icon={<EditOutlined />}
          >
            Edit
          </Button>,
          <Button
            key={`${uniqueId()}`}
            icon={<LockOutlined />}
            onClick={() => {
              modal.open();
            }}
          >
            Update Password
          </Button>,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <Row align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 7 }} md={{ span: 5 }}>
          <img
            className="last left circle pad5"
            src={photo}
            style={{
              width: '100px',
              height: '100px',
              border: '2px solid #1B98F5',
            }}
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 18 }}>
          <Descriptions labelStyle={{ fontSize: '17px' }} size="small">
            <Descriptions.Item label="Company Name" span="3" style={{ paddingTop: '20px' }}>
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.company}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="Manager Name" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {`${result?.name} ${result?.surname}`}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="Company registration nr" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.companyRegNumber}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="Bank account" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.bankAccount}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="Email" span="3" style={{ paddingTop: '20px' }}>
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.email}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="Address" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.address}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="City" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.city}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="Zip code" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.zipcode}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="Country" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.country}
              </h3>
            </Descriptions.Item>
            <Descriptions.Item label="User Role" span="3">
              <h3
                style={{
                  color: '#22075e',
                }}
              >
                {result?.role.codeName}
              </h3>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Divider />
      <Button
        key={`${uniqueId()}`}
        icon={<LogoutOutlined />}
        className="right"
        onClick={() => history.push('/logout')}
      >
        Logout
      </Button>
    </>
  );
};

export default AdminInfo;
