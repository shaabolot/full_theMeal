import 'react';
import classes from './mael-item.module.css';

const MealItem = (props) => {
    let strMeal, strMealThumb, onClick;
    ({strMealThumb, strMeal, onClick} = props);
    return (
        <div onClick={onClick} className={classes.meal_content} >
            <div className={classes.meal_image}>
                <img src={strMealThumb} alt={strMealThumb} />
            </div>
            <p>{strMeal}</p>
        </div>
    );
};

export default MealItem;