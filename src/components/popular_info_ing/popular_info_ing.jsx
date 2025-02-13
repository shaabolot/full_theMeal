import {useEffect} from "react";
import {getPopularInfo} from '../../redux-toolkit/mealSlice/mealSlice.jsx'
import classes from './popular_info_ing.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate,useParams} from "react-router-dom";
import List from "../list/list.jsx";

const PopularInfoIng = () => {

  const dispatch = useDispatch();
  const {title} = useParams()
  const {popularInfo} = useSelector((state) => state.meal);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPopularInfo(title))
  },[title]);

  console.log(popularInfo)

  return (
    <div>
      PopularInfoIng
    </div>
  );
};

export default PopularInfoIng;