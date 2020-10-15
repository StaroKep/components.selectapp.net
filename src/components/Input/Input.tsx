import React, {FunctionComponent} from 'react';
import cn from 'classnames/bind';

import {InputProps} from './Input.types';

import * as styles from './Input.pcss';

const cx = cn.bind(styles);

export const Input: FunctionComponent<InputProps> = () => {
    return <input className={cx('root')} type="text" placeholder="components"/>;
};

export default Input;