import React, { FunctionComponent, useCallback, useState, FocusEvent } from 'react';
import cn from 'classnames/bind';

import { InputType } from './Input.enums';
import { InputProps } from './Input.types';

import * as styles from './Input.pcss';

const cx = cn.bind(styles);

export const Input: FunctionComponent<InputProps> = (props) => {
    const { name, type = InputType.TEXT, placeholder = '', ...rest } = props;
    const { rootClassName, inputClassName, labelClassName, labelOffsetClassName = '' } = rest;

    const [isOffsetLabel, setIsOffsetLabel] = useState(false);
    const [htmlFor] = useState(`input_type:${type}_name:${name}_id:${+new Date()}`);

    /** Callbacks */
    const onBlurCallback = useCallback((event: FocusEvent<HTMLInputElement>) => {
        const element = event.currentTarget;
        const value = element.value;

        if (!value) {
            setIsOffsetLabel(false);
        }
    }, []);

    const onFocusCallback = useCallback(() => setIsOffsetLabel(true), []);

    /** ClassNames */
    const rootClassNames = cx('root', rootClassName);
    const inputClassNames = cx('input', inputClassName);
    const labelClassNames = cx('label', labelClassName, {
        label_offset: isOffsetLabel,
        [labelOffsetClassName]: isOffsetLabel,
    });

    const labelProps = {
        htmlFor,
        className: labelClassNames,
    };

    const inputProps = {
        name,
        type,
        className: inputClassNames,
        onFocus: onFocusCallback,
        onBlur: onBlurCallback,
    };

    /** HTML */
    return (
        <div className={rootClassNames}>
            <label {...labelProps}>{placeholder}</label>
            <input {...inputProps} />
        </div>
    );
};

export default Input;
