import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

import classNames from "classnames/bind";
import styles from 'components/Tabs/Tabs.module.scss';
import imageProduct from 'assets/img/FastChange/product.webp';

const cx = classNames.bind(styles);


const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (newActiveTab) => {
        setActiveTab(newActiveTab);
    };

    return (
        <div>
            <div className={cx('tab-list')}>
                {children.map((tab) => (
                    <div
                        key={tab.props.label}
                        // className={cx(tab.props.label === activeTab ? 'charge-header-item active' : 'charge-header-item')}
                        // className={cx('charge-header-item')}
                        className={cx('charge-header-item', { active: tab.props.label === activeTab })}
                        aria-selected={tab.props.label === activeTab}
                    >
                        <button
                            onClick={() => handleClick(tab.props.label)}
                            className={cx('charge-header-wrap')}
                            role="tab"

                        >
                            <Image
                                className={cx('charge-header-icon')}
                                src={imageProduct}
                            />
                            {tab.props.label}
                        </button>
                    </div>
                ))}
            </div>
            <div className={cx('tab-content')}>
                {children.map((one) =>
                    one.props.label === activeTab ? one.props.children : undefined
                )}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        props: PropTypes.shape({
            label: PropTypes.string.isRequired,
            children: PropTypes.node
        })
    })).isRequired
};

export default Tabs;