import {useState} from 'react';
import classes from './header.module.css';
import logo from '../../assets/logo.jpg';
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Header = () => {
const navigate = useNavigate();
    const [inp, setInp] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${inp}`);
    }
    return (
        <nav className={classes.navbar}>
            <div className={'container'}>
                <div className={classes.navbar_content}>
                    <Link to="/">
                        <img width={300} height={60} src={logo}/>
                    </Link>
                    <form onSubmit={handleSubmit} className={classes.form_control}>
                        <input value={inp} onChange={(e)=> setInp(e.target.value)} type={'text'} placeholder={'Search...'} />
                        <button type={'submit'} >Send</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;