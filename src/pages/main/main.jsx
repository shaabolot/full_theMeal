import { Route, Routes } from "react-router-dom";
import Home from "../home/home.jsx";
import InfoIngredients from "../../components/infoIngredients/infoingredients.jsx";
import { useDispatch } from "react-redux";
import  {useEffect} from 'react';
import {getLatestMeal,getPopular} from "../../redux-toolkit/mealSlice/mealSlice.jsx";

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestMeal());
        dispatch(getPopular());
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/meal/:idMeal/:title" element={<InfoIngredients/>}/>
            </Routes>
        </div>
    );
};

export default Main;