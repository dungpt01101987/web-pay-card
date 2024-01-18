import React from "react";
import Image from 'react-bootstrap/Image';

import classNames from 'classnames/bind';
import styles from 'page/Application/Home/RecommendGoods/RecommendGoods.module.scss';
import { Link } from "react-router-dom";

import imgTitleRecommend from 'assets/img/recommend-goods/recommend_title.png';
import imgDuokaitou from 'assets/img/recommend-goods/duokaitou.webp';


import bgTab1 from 'assets/img/recommend-goods/tab1.png';
import bgTab2 from 'assets/img/recommend-goods/tab2.png';

import iconTop1 from 'assets/img/recommend-goods/top1.png';
import iconTop2 from 'assets/img/recommend-goods/top2.png';
import iconTop3 from 'assets/img/recommend-goods/top3.png';
import duuyinTopUp from 'assets/img/recommend-goods/DuuyinTopUp.webp';
import newImage from 'assets/img/recommend-goods/image_top1_new.webp';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const cx = classNames.bind(styles);

const listRecommend = [
    {
        id: 1,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou'
    },
    {
        id: 2,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 2'
    },
    {
        id: 3,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 3'
    },
    {
        id: 4,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 4'
    },
    {
        id: 5,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 5'
    },
    {
        id: 6,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 6'
    },
    {
        id: 7,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 7'
    },
    {
        id: 8,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 8'
    },
    {
        id: 9,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 9'
    },
    {
        id: 10,
        image: imgDuokaitou,
        title: 'Duo Duo kaitou 10'
    }
]

const RecommendGoods = () => {
    return (
        <div className={cx('recommend-goods')}>
            <div className={cx('left-panel')}>
                <Image className={cx('left-panel__title')} src={imgTitleRecommend} />
                <div className={cx('panel-goods')}>
                    {listRecommend.map((recommend) => (
                        <Link to="#" className={cx('panel-goods__item')} key={recommend.id}>
                            <Image className={cx('panel-goods__icon')} src={recommend.image} />
                            <span className={cx('panel-goods__name')}>{recommend.title}</span>
                            <button type='button' className={cx('panel-goods__btn')}>
                                Buy Now
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={cx('right-panel')}>
                <div className={cx('rank-list')}>
                    <Image src={bgTab1} className={cx('rank-list__bg')} />
                    <Image src={bgTab2} className={cx('rank-list__bg')} />
                    <div className={cx('rank-list__wrap')}>
                        <Tabs
                            defaultActiveKey="salesRanking"
                            id="justify-tab-example"
                            className={cx('list-tab')}
                            justify
                        >
                            <Tab eventKey="salesRanking" title="Sales Ranking" className={cx('list-tab__item')}>
                                <div className={cx('goods-list')}>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <Image className={cx('goods-list__icon')} src={iconTop1} />
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={duuyinTopUp} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Douyin Top up</h4>
                                                <p>Sold: 589,192 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <Image className={cx('goods-list__icon')} src={iconTop2} />
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={duuyinTopUp} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Douyin Top up</h4>
                                                <p>Sold: 589,192 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <Image className={cx('goods-list__icon')} src={iconTop3} />
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={duuyinTopUp} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Douyin Top up</h4>
                                                <p>Sold: 589,192 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <div className={cx('goods-list__icon')}></div>
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={duuyinTopUp} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Douyin Top up</h4>
                                                <p>Sold: 589,192 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                </div>
                            </Tab>
                            <Tab eventKey="newProductRanking" title="New Product Ranking" className={cx('list-tab__item')} >
                                <div className={cx('goods-list')}>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <Image className={cx('goods-list__icon')} src={iconTop1} />
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={newImage} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Nishuihan</h4>
                                                <p>Sold: 577 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <Image className={cx('goods-list__icon')} src={iconTop2} />
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={newImage} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Nishuihan</h4>
                                                <p>Sold: 577 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <Image className={cx('goods-list__icon')} src={iconTop3} />
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={newImage} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Nishuihan</h4>
                                                <p>Sold: 577 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                    <Link to="#" className={cx('goods-list__item')}>
                                        <div className={cx('goods-list__icon')}></div>
                                        <div className={cx('goods-info')}>
                                            <Image className={cx('goods-info-icon')} src={newImage} />
                                            <div className={cx('goods-info__wrap')}>
                                                <h4 className={cx('goods-info__title')}>Nishuihan</h4>
                                                <p>Sold: 577 items</p>
                                            </div>
                                        </div>
                                        <button className={cx('goods-list__btn')}>
                                            Purchase
                                        </button>
                                    </Link>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div className={cx('article-panel')}>
                    <h3 className={cx('article-panel__title')}>
                        Latest News
                        <i className={cx('el-icon pointer')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
                            </svg>
                        </i>
                    </h3>
                    <div className={cx('article-list')}>
                        <Link to="#" className={cx('article-list__item')}>Little Sea Whale丨Gratitude promotion, you can get 655 yuan every day</Link>
                        <Link to="#" className={cx('article-list__item')}>Little Whale Members Day & Double Eleven | Whale Joy Four Consecutive</Link>
                        <Link to="#" className={cx('article-list__item')}>Halloween Joy Night, Lets Make Mischief Together!</Link>
                        <Link to="#" className={cx('article-list__item')}>24 magical coupons & popular products, limited to 4 days</Link>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default RecommendGoods;