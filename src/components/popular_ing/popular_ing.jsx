import 'react';
import classes from './popular_ing.module.css';

const PopularIng = (props) => {
    const {strIngredient, onClick} = props
    return (
        <div onClick={onClick} className={classes.content_item}>
            <img src={`https://www.themealdb.com/images/ingredients/${strIngredient}.png`} alt={''} />
            <p>{strIngredient}</p>
        </div>
    );
};

export default PopularIng;