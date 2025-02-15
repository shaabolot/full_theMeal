import 'react';
import classes from './search.module.css';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSearchMeal} from "../../redux-toolkit/mealSlice/mealSlice.jsx";
import List from "../list/list.jsx";
import {useEffect} from "react";

const SearchInfo = () => {
  const dispatch = useDispatch();
  const {search} = useSelector((state) => state.meal);
  const navigate = useNavigate();
  const {text} = useParams()
  useEffect(() => {
    dispatch(getSearchMeal(text));
  }, [text])

  const handelInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  }
  return (
    <div className={'container'}>
      <div className={classes.content}>
        {search ? (
          <List
            items={search}
            renderItem={(elem, i) => (
              <div className={classes.meal_content} key={i} onClick={() => handelInfo(elem.idMeal, elem.strMeal)}>
                <div className={classes.images}>
                  <img src={elem.strMealThumb} alt=""/>
                </div>
                <p>{elem.strMeal}</p>
              </div>
            )}
          />
        ) : (
          <h2 className={classes.text}>No Product</h2>
        )}
      </div>
    </div>
  );
};

export default SearchInfo;