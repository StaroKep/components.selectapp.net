import React, { CSSProperties, FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { BackgroundType } from './Background.enums';
import { BackgroundProps } from './Background.types';

import * as styles from './Background.pcss';

const cx = cn.bind(styles);

export const Background: FunctionComponent<BackgroundProps> = (props) => {
    const { url, type = BackgroundType.DEFAULT, rootClassName } = props;

    const rootClassNames = cx('root', rootClassName, `root_type_${type}`);

    const style: CSSProperties = {
        backgroundImage: `url("${url}")`,
    };

    return <div className={rootClassNames} style={style} />;
};

export default Background;
