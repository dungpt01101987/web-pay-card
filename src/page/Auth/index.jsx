import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Row } from 'antd';
import {
    ContentAuth,
} from 'page/Auth/styled';

function Auth() {
    return (
        <Row>
            <Col span={14}></Col>
            <Col span={10}>
                <ContentAuth>
                    <Outlet />
                </ContentAuth>
            </Col>
        </Row>

    );
}

export default Auth;