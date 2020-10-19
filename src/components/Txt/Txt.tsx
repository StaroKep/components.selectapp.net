import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { TxtType, TxtTag, TxtAlign, TxtWeight } from './Txt.enums';
import { TxtProps } from './Txt.types';

import * as styles from './Txt.pcss';

const cx = cn.bind(styles);

export const Txt: FunctionComponent<TxtProps> = (props) => {
    const {
        className,
        children,
        type = TxtType.MEDIUM,
        tag = TxtTag.SPAN,
        align = TxtAlign.LEFT,
        weight = TxtWeight.MEDIUM,
        color,
    } = props;

    const classNames = cx('root', type, tag, className, align, weight, color);

    switch (tag) {
        case TxtTag.H1:
            return <h1 className={classNames}>{children}</h1>;
        case TxtTag.H2:
            return <h2 className={classNames}>{children}</h2>;
        case TxtTag.H3:
            return <h3 className={classNames}>{children}</h3>;
        case TxtTag.H4:
            return <h4 className={classNames}>{children}</h4>;
        case TxtTag.H5:
            return <h5 className={classNames}>{children}</h5>;
        case TxtTag.H6:
            return <h6 className={classNames}>{children}</h6>;
        case TxtTag.PARAGRAPH:
            return <p className={classNames}>{children}</p>;
        case TxtTag.SPAN:
        default:
            return <span className={classNames}>{children}</span>;
    }
};

export default Txt;
