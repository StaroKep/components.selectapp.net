import React, { FunctionComponent } from 'react';
import cn from 'classnames/bind';

import { InputProps } from './Input.types';

import * as styles from './Input.pcss';

const cx = cn.bind(styles);

export const Input: FunctionComponent<InputProps> = (props) => {
    const { name, type, className, placeholder } = props;

    const classNames = cx('root', className);

    return <input name={name} className={classNames} type={type} placeholder={placeholder} />;
};

export default Input;
