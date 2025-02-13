import 'react';
import classes from './home.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import List from "../../components/list/list.jsx";
import MealItem from '../../components/meal-item/meal-item.jsx';
import PopularIng from "../../components/popular_ing/popular_ing.jsx";
// import { onDescription } from  '../../redux-toolkit/mealSlice/mealSlice.jsx'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {latest, popular} = useSelector((state) => state.meal);
  console.log(popular);

  const handelMealInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  }

  const handelPopularMeal = (title  ) => {
    navigate(`/ingredient/${title}`);
    // dispatch(onDescription(description));
  }

  return (
    <section>
      <div className='container'>
        <div className={classes.home_search}>
          <form>
            <div>
              <input type={'text'}/>
            </div>
            <div>
              <button type='submit'>🔍</button>
            </div>
          </form>
        </div>
        <div className={classes.meal_item}>
          <h3>Latest Mels</h3>
          <div className={classes.meal_item_content}>
            <List
              items={latest}
              renderItem={(elem, i) => {
                return (
                  <MealItem
                    key={i}
                    onClick={() => handelMealInfo(elem.idMeal, elem.strMeal)}
                    {...elem}
                  />
                )
              }}
            />
          </div>
        </div>
        <div className={classes.popular}>
          <h3>Popular Ingredirnts</h3>
          <div className={classes.popular_ingredients}>
            <List
              items={popular && popular}
              renderItem={(elem, i) =>
                i < 4 ? (
                  <PopularIng
                    onClick ={() => handelPopularMeal(elem.strIngredient)}
                    key={i}
                    {...elem}
                  />
                ) : null
              }
            />

          </div>
                </div>
                </div>
                </section>
                );
              };

export default Home;