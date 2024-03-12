import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';

export enum AppLinksTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinksProps extends LinkProps {
	className?: string,
	theme?: AppLinksTheme
}

export const AppLink: FC<AppLinksProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinksTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
