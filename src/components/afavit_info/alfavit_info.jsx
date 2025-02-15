import {useEffect} from "react";
import classes from "./alfavit_info.module.css";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAlfavitMeals} from "../../redux-toolkit/mealSlice/mealSlice.jsx";
import List from "../list/list.jsx";
import Alfavit from "../alfavit/alfavit.jsx";

const AlfavitInfo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {meals} = useParams()
  useEffect(() => {
    dispatch(getAlfavitMeals(meals))
  },[meals])

  const {alfavitMeal} = useSelector((state) => state.meal);
  console.log(alfavitMeal);

  const infoClick = (id, title) => {
    navigate(`/meal/${id}/${title}`);
  }

  return (
    <div className={'container'}>
  <div className={classes.content}>
    {alfavitMeal ? (
      <List
      items={alfavitMeal}
      renderItem={(elem, i) => (
        <div key={i} className={classes.meal_content} onClick={()=>infoClick(elem.idMeal, elem.strMeal)}>
          <div className={classes.images}>
            <img src={elem.strMealThumb} alt="" />
          </div>
          <p>{elem.strMeal}</p>
        </div>
      )}
      />
    ):(
      <h2 className={classes.text}>No Meals Found</h2>
    )
    }
  </div>
      <div>
        <h2 className={classes.text}>Browse Meals</h2>
        <br/>
        <Alfavit />
      </div>
    </div>
  );
};

export default AlfavitInfo;