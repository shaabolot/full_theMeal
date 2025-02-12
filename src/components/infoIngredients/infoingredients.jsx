import {useEffect} from "react";
import classes from "./infoingredients.module.css";
import { getInfoMeal } from "../../redux-toolkit/mealSlice/mealSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate , useParams } from "react-router-dom";
import List from "../list/list.jsx";

const InfoIngredients = () => {
    const dispatch = useDispatch();
    const { idMeal } = useParams()
    const { infoMeal } = useSelector((state) => state.meal);

    console.log(infoMeal)

    useEffect(() => {
        dispatch(getInfoMeal(idMeal));
    },[])

    return (
        <div className={'container'}>
            <List
            items={infoMeal}
            renderItem={(elem, i) => (
                <div key={i} className={classes.infoIngredients}>
                    <div className={classes.title}>
                        <h2>{elem.strMeal}</h2>
                        <h2>Ingredients</h2>
                    </div>
                    <div className={classes.images}>
                        <div className={classes.first_img}>
                            <img src={elem.strMealThumb} alt={elem.strMeal} />
                            <a href={elem.strYoutube}>Watch Video You Tube</a>
                        </div>
                        <div className={classes.second_img}>
                            {elem.strIngredient1 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient1}.png`} alt={''}/>
                                    <p>{elem.strIngredient1}</p>
                                </div>
                            ) : null}
                            {elem.strIngredient2 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient2}.png`} alt={''} />
                                        <p>{elem.strIngredient2}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient3 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient3}.png`} alt={''} />
                                        <p>{elem.strIngredient3}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient4 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient4}.png`} alt={''} />
                                        <p>{elem.strIngredient4}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient5 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient5}.png`} alt={''} />
                                        <p>{elem.strIngredient5}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient6 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient6}.png`} alt={''} />
                                        <p>{elem.strIngredient6}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient7 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient7}.png`} alt={''} />
                                        <p>{elem.strIngredient7}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient8 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient8}.png`} alt={''} />
                                        <p>{elem.strIngredient8}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient9 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient9}.png`} alt={''} />
                                        <p>{elem.strIngredient9}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient10 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient10}.png`} alt={''} />
                                        <p>{elem.strIngredient10}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient11 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient11}.png`} alt={''} />
                                        <p>{elem.strIngredient11}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient12 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient12}.png`} alt={''} />
                                        <p>{elem.strIngredient12}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient13 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient13}.png`} alt={''} />
                                        <p>{elem.strIngredient13}</p>
                                </div>
                                ) : null}

                            {elem.strIngredient14 ? (
                                <div className={classes.second_item}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${elem.strIngredient14}.png`} alt={''} />
                                        <p>{elem.strIngredient14}</p>
                                </div>
                                ) : null}
                        </div>
                    </div>
                    <div className={classes.instructions}>
                        <h3>Instructions</h3>
                        <p>{elem.strInstructions}</p>
                    </div>
                </div>
            )}
            />
        </div>
    );
};

export default InfoIngredients;