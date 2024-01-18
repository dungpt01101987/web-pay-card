import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import classNames from 'classnames/bind';
import styles from './ChargeInfo.module.scss';

import iosInfo from 'assets/img/category/ios_info.webp';

const cx = classNames.bind(styles);


const ChargeInfo = ({ title }) => {
    return (
        <div className={cx('charge-info')}>
            {title}
            <div className={cx('info-header')}>
                <Image
                    className={cx('info-header__icon')}
                    src={iosInfo}
                />
                <div className={cx('info-header__wrap')}>
                    <h2 className={cx('info-header__title')}>[Direct 13% discount] App Store card code recharge</h2>
                    <p className={cx('info-header__desc')}>Product Specification</p>
                </div>
            </div><Tab.Container id="left-tabs-example" defaultActiveKey="item1">
                <div className={cx('info-options')}>
                    <h5 className={cx('info-options__title')}>Product Specification</h5>

                    <Row>
                        <Col className={cx('info-options__wrap')}>
                            <Nav variant="underline">
                                <Nav.Link eventKey="item1" className={cx('info-options__item')}>
                                    item1
                                </Nav.Link>
                                <Nav.Link eventKey="item2" className={cx('info-options__item')}>
                                    item2
                                </Nav.Link>
                                <Nav.Link eventKey="item3" className={cx('info-options__item')}>
                                    item3
                                </Nav.Link>
                                <Nav.Link eventKey="item4" className={cx('info-options__item')}>
                                    item4
                                </Nav.Link>
                                <Nav.Link eventKey="item5" className={cx('info-options__item')}>
                                    item5
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>

                </div>
                <div className={cx('info-options')}>
                    <h5 className={cx('info-options__title')}>Product Specification</h5>
                    <Row>
                        <Col className={cx('info-options__wrap')}>
                            <Tab.Content>
                                <Tab.Pane eventKey="item1">
                                    <div className={cx('info-options__item')}>gia1</div>
                                    <div className={cx('info-options__item')}>gia2</div>
                                    <div className={cx('info-options__item')}>gia3</div>
                                    <div className={cx('info-options__item')}>gia4</div>
                                    <div className={cx('info-options__item')}>gia5</div>
                                    <div className={cx('info-options__item')}>gia6</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="item2">item2</Tab.Pane>
                                <Tab.Pane eventKey="item3">item3</Tab.Pane>
                                <Tab.Pane eventKey="item4">item4</Tab.Pane>
                                <Tab.Pane eventKey="item5">item5</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </div>
            </Tab.Container>
        </div >
    );
}

ChargeInfo.propTypes = {
    title: PropTypes.object
};

export default ChargeInfo;