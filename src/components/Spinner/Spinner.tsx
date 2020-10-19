import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import {SpinnerSize} from "./Spinner.enums";
import { SpinnerProps } from './Spinner.types';

import * as styles from './Spinner.pcss';

const cx = cn.bind(styles);

export const Spinner: FunctionComponent<SpinnerProps> = (props) => {
    const { size = SpinnerSize.MEDIUM, rootClassName } = props;

    const rootClassNames = cx('root', rootClassName, `root_size_${size}`);

    return <div className={rootClassNames} />;
};

export default Spinner;
