import cn from 'classnames';
import React from 'react';

import styles from './index.module.css';

const View = {
    'headline-system-xlarge': styles.headlineSystemXlarge,
    'headline-system-large': styles.headlineSystemLarge,
    'headline-system-normal': styles.headlineSystemNormal,
    'headline-system-small': styles.headlineSystemSmall,
    'headline-system-xsmall': styles.headlineSystemXsmall,
};

type ViewType = keyof typeof View;

export type HeadingProps = {
    /** Уровень заголовка */
    level?: 1 | 2 | 3 | 4 | 5;
    /** Вариант начертания */
    view?: ViewType;
    /** Css-класс для стилизации */
    className?: string;
    /** Id компонента для тестов */
    dataTestId?: string;
    /** Контент */
    children?: React.ReactNode;
};

export const Heading: React.FC<HeadingProps> = ({
    level = 2,
    view = 'headline-system-large',
    className,
    dataTestId,
    children,
}: HeadingProps): React.ReactElement => {
    const Component = `h${level}`;

    return React.createElement(
        Component,
        {
            className: cn(styles.component, className, styles[view]),
            'data-test-id': dataTestId,
        },
        children,
    );
};
