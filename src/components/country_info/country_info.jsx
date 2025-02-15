import'react';
import classes from './country_info.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import List from "../list/list.jsx";
import {getCounrtyInfoMeal} from "../../redux-toolkit/mealSlice/mealSlice.jsx";
import {useEffect} from "react";

const CountryInfo = () => {
  const dispatch = useDispatch();
  const {country} = useParams()
  const navigate = useNavigate();
  const { countryInfo } = useSelector((state) => state.meal);
  useEffect(() => {
    dispatch(getCounrtyInfoMeal(country))
  },[country])

  const handelInfo = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  }

  return (
    <div className={'container'}>
      <div className={classes.content}>
        <List
        items={countryInfo}
        renderItem={(elem, i) => (
          <div key={i} className={classes.item} onClick={() => handelInfo(elem.idMeal, elem.strMeal)} >
            <div className={classes.img}>
              <img src={elem.strMealThumb} alt={elem.strMeal} />
            </div>
            <p>{elem.strMeal}</p>
          </div>
        )}
        />
      </div>
    </div>
  );
};

export default CountryInfo;