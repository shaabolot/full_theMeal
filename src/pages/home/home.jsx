import {useState} from "react";
import classes from './home.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import List from "../../components/list/list.jsx";
import MealItem from '../../components/meal-item/meal-item.jsx';
import PopularIng from "../../components/popular_ing/popular_ing.jsx";
import {onDescription} from '../../redux-toolkit/mealSlice/mealSlice.jsx'
import Alfavit from '../../components/alfavit/alfavit.jsx'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {latest, popular, randomMeal,randomIngredients,country} = useSelector((state) => state.meal);
  const handelMealInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  }
  const handelPopularMeal = (title, description) => {
    navigate(`/ingredient/${title}`);
    dispatch(onDescription(description));
  }
  const randomMealsId = (id,title) => {
    navigate(`/meal/${id}/${title}`);
  }
  const randomItemClick = (title) => {
    navigate(`/ingredient/${title}`);
  }

  const randomItem = []
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * randomIngredients.length);
    randomItem.push(randomIngredients[randomIndex]);
  }

  const countryMeals = (title) => {
    navigate(`/meals/${title}`);
  }

  const [inp, setInp] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inp}`);
  }

  return (
    <section>
      <div className='container'>
        <div className={classes.home_search}>
          <form onSubmit={handleSubmit}>
            <div>
              <input value={inp} onChange={(e) => setInp(e.target.value)} type={'text'}/>
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
                    onClick={() => handelPopularMeal(elem.strIngredient, elem.strDescription)}
                    key={i}
                    {...elem}
                  />
                ) : null
              }
            />

          </div>
        </div>
        <div className={classes.random_meals}>
          <div className={classes.random_content}>
            <h3>Random Meals</h3>
            <div className={classes.random_images}>
              <List
              items={randomMeal}
              renderItem={(elem,i) => (
                <MealItem
                  onClick={() => randomMealsId(elem.idMeal, elem.strCategory)}
                  key={i}
                  {...elem}
                />
              )}
              />
            </div>
          </div>
        </div>
        <div className={classes.random_ingr_title}>
          <h3>Random Ingredients</h3>
          <div className={classes.random_ingr}>
            <List
            items={randomItem}
            renderItem={(elem, i) =>(
              <PopularIng
                onClick={() => randomItemClick(elem.idIngredient)}
              key={i}
              {...elem}
              />
            )}
            />
          </div>
        </div>
        <div className={classes.country}>
          <h3> Browse Country</h3>
          <div className={classes.country_meal}>
            <List
            items={country}
            renderItem={(elem, i) =>(
              <div key={i} className={classes.flags} onClick={() => countryMeals(elem.strArea)}>
                <img src={`https://www.themealdb.com/images/icons/flags/big/64/${elem.strArea.substr(
                  0,
                  2
                )}.png`} alt="" />
              </div>
            )}
            />
          </div>
        </div>
        <div className={classes.alfavit}>
          <h3>Browse By Name</h3>
          <div className={classes.alfavit_content}>
            <Alfavit/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;