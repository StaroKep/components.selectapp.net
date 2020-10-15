import React, {FunctionComponent} from 'react';
// import cn from 'classnames/bind';

import {InputProps} from './Input.types';

import * as styles from './Input.pcss';

// const cx = cn.bind(styles);

export const Input: FunctionComponent<InputProps> = () => {
    debugger;
    console.log(styles);
    //cx('root')
    return <input className="" type="text" placeholder="components"/>;
};

export default Input;