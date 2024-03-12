import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string,
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink theme={AppLinksTheme.SECONDARY} to="/" className={styles.mainLink}>
                Главная
            </AppLink>
            <AppLink theme={AppLinksTheme.SECONDARY} to="/about">
                О сайте
            </AppLink>
        </div>
    </div>
);
