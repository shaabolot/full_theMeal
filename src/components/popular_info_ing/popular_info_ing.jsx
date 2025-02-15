import {useEffect} from "react";
import {getPopularInfo} from '../../redux-toolkit/mealSlice/mealSlice.jsx'
import classes from './popular_info_ing.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate,useParams} from "react-router-dom";
import List from "../list/list.jsx";

const PopularInfoIng = () => {

  const dispatch = useDispatch();
  const {title} = useParams()
  const {popularInfo, text} = useSelector((state) => state.meal);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPopularInfo(title))
  },[title]);

  const infoClick = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  }

  return (
    <div className={'container'}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h2>{title}</h2>
          <div className={classes.content_title}>
            <img src={`https://www.themealdb.com/images/ingredients/${title}.png`} alt={''}/>
          </div>
        </div>
        <div className={classes.images_title}>
          <h2>Meals</h2>
          <div className={classes.images}>
            <List
              items={popularInfo}
              renderItem={(elem, i) => (
                <div onClick={() => infoClick(elem.idMeal, elem.strMeal)} key={i} className={classes.images_item}>
                  <div className={classes.item}>
                    <img src={elem.strMealThumb} alt={elem.strMeal} />
                  </div>
                  <p>{elem.strMeal}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div className={classes.description}>
        <h2>Description</h2>
        <p className={classes.text}>{text}</p>
      </div>
    </div>
  );
};

export default PopularInfoIng;