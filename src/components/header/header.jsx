import React, {useState} from 'react';
import classes from './header.module.css';
import logo from '../../assets/logo.jpg';

const Header = () => {
    return (
        <nav className={classes.navbar}>
            <div className={'container'}>
                <div className={classes.navbar_content}>
                    <img width={300} height={60} src={logo} />
                    <form className={classes.form_control}>
                        <input type={'text'} placeholder={'Search...'} />
                        <button type={'submit'} >Send</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;