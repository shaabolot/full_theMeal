import { Route, Routes } from "react-router-dom";
import Home from "../home/home.jsx";
import SearchInfo from "../../components/search_info/search_info.jsx";
import AlfavitInfo from "../../components/afavit_info/alfavit_info.jsx";
import CountryInfo from "../../components/country_info/country_info.jsx";
import InfoIngredients from "../../components/infoIngredients/infoingredients.jsx";
import PopularInfoIng from "../../components/popular_info_ing/popular_info_ing.jsx";
import { useDispatch } from "react-redux";
import  {useEffect} from 'react';
import {getLatestMeal,getPopular , getRandomMeal, getCountyMeals} from "../../redux-toolkit/mealSlice/mealSlice.jsx";

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestMeal());
        dispatch(getPopular());
        dispatch(getRandomMeal())
        dispatch(getCountyMeals())
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/meal/:idMeal/:title" element={<InfoIngredients/>}/>
                <Route path="/ingredient/:title" element={<PopularInfoIng/>}/>
                <Route path='/meals/:country' element={<CountryInfo/>}/>
                <Route path='/alfavit/:meals' element={<AlfavitInfo/>}/>
                <Route path='/search/:text' element={<SearchInfo/>}/>
            </Routes>
        </div>
    );
};

export default Main;