import React, { useRef, FC } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import { FieldProps, OptionShape } from '@alfalab/core-components-select';
import { useFocus } from '@alfalab/hooks';

import { FlagIcon } from '../flag-icon';

import styles from './index.module.css';

const Option: FC<OptionShape> = ({ value }) => {
    return (
        <span key={value}>
            <FlagIcon country={value as string} />
        </span>
    );
};

export const SelectField: FC<FieldProps> = ({
    selectedItems = [],
    Arrow,
    innerProps = {},
    ...restProps
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [focusVisible] = useFocus(wrapperRef, 'keyboard');

    const ref = innerProps.ref ? mergeRefs([innerProps.ref, wrapperRef]) : wrapperRef;

    return (
        <div
            ref={ref}
            className={cn(styles.component, {
                [styles.focusVisible]: focusVisible,
            })}
        >
            <div {...innerProps} {...restProps} className={styles.inner}>
                {selectedItems.map(Option)}
                {Arrow}
            </div>
        </div>
    );
};
