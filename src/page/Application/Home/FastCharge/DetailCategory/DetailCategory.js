import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Image from 'react-bootstrap/Image';

import classNames from 'classnames/bind';
import styles from './DetailCategory.module.scss';

import imgIos from 'assets/img/category/ios.webp';
import ChargeInfo from 'page/Application/Home/FastCharge/ChargeInfo';

const cx = classNames.bind(styles);

const DetailCategory = ({ data }) => {

    return (
        <div className={cx('detail-category')}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="category1">
                <Row>
                    <Col className={cx('charge-goods')}>
                        <Nav variant="pills">
                            <Nav.Link eventKey="category1" className={cx('charge-goods-item')}>
                                <Image
                                    className={cx('charge-goods__icon')}
                                    src={imgIos}
                                />
                                <div className={cx('charge-goods__info')}>
                                    <h2 className={cx('charge-goods__title')}>IOS Top-up</h2>
                                    <p className={cx('charge-goods__desc')}>0 premium for the entire site</p>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav variant="pills">
                            <Nav.Link eventKey="category2" className={cx('charge-goods-item')}>
                                <Image
                                    className={cx('charge-goods__icon')}
                                    src={imgIos}
                                />
                                <div className={cx('charge-goods__info')}>
                                    <h2 className={cx('charge-goods__title')}>IOS Top-up</h2>
                                    <p className={cx('charge-goods__desc')}>0 premium for the entire site</p>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav variant="pills">
                            <Nav.Link eventKey="category3" className={cx('charge-goods-item')}>
                                <Image
                                    className={cx('charge-goods__icon')}
                                    src={imgIos}
                                />
                                <div className={cx('charge-goods__info')}>
                                    <h2 className={cx('charge-goods__title')}>IOS Top-up</h2>
                                    <p className={cx('charge-goods__desc')}>0 premium for the entire site</p>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav variant="pills">
                            <Nav.Link eventKey="category4" className={cx('charge-goods-item')}>
                                <Image
                                    className={cx('charge-goods__icon')}
                                    src={imgIos}
                                />
                                <div className={cx('charge-goods__info')}>
                                    <h2 className={cx('charge-goods__title')}>IOS Top-up</h2>
                                    <p className={cx('charge-goods__desc')}>0 premium for the entire site</p>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav variant="pills">
                            <Nav.Link eventKey="category5" className={cx('charge-goods-item')}>
                                <Image
                                    className={cx('charge-goods__icon')}
                                    src={imgIos}
                                />
                                <div className={cx('charge-goods__info')}>
                                    <h2 className={cx('charge-goods__title')}>IOS Top-up</h2>
                                    <p className={cx('charge-goods__desc')}>0 premium for the entire site</p>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav variant="pills">
                            <Nav.Link eventKey="category6" className={cx('charge-goods-item')}>
                                <Image
                                    className={cx('charge-goods__icon')}
                                    src={imgIos}
                                />
                                <div className={cx('charge-goods__info')}>
                                    <h2 className={cx('charge-goods__title')}>IOS Top-up</h2>
                                    <p className={cx('charge-goods__desc')}>0 premium for the entire site</p>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav variant="pills">
                            <Nav.Link eventKey="category7" className={cx('charge-goods-item')}>
                                <Image
                                    className={cx('charge-goods__icon')}
                                    src={imgIos}
                                />
                                <div className={cx('charge-goods__info')}>
                                    <h2 className={cx('charge-goods__title')}>IOS Top-up</h2>
                                    <p className={cx('charge-goods__desc')}>0 premium for the entire site</p>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col >
                        <Tab.Content>
                            <Tab.Pane eventKey="category1"><ChargeInfo title="Detail category 1" /></Tab.Pane>
                            <Tab.Pane eventKey="category2">Detail category 2</Tab.Pane>
                            <Tab.Pane eventKey="category3">Detail category 3</Tab.Pane>
                            <Tab.Pane eventKey="category4">Detail category 4</Tab.Pane>
                            <Tab.Pane eventKey="category5">Detail category 5</Tab.Pane>
                            <Tab.Pane eventKey="category6">Detail category 6</Tab.Pane>
                            <Tab.Pane eventKey="category7">Detail category 7</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

DetailCategory.propTypes = {
    data: PropTypes.object
};

export default DetailCategory;