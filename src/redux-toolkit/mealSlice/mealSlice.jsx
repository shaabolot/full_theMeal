import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import instance from "../../http/settings.jsx";

const initialState = {
    latest: [],
    infoMeal: [],
    popular: [],
  popularInfo: []
}

export const getLatestMeal = createAsyncThunk(
    "latest/getLatestMeal",
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const mealNum = [52772, 52771, 52770, 52769, 52768, 52767, 52764, 52765];
            const results = await Promise.all(
                mealNum.map(async (number) => {
                    const result = await instance.get(`lookup.php?i=${number}`);
                    return result.data.meals;
                })
            );
            const combinedMeals = results.flat()
            dispatch(latestMeal(combinedMeals))
        } catch (error) {
            rejectWithValue(error.message)
        }
    }
);

export const getInfoMeal = createAsyncThunk(
    'infoMeal/getInfoMeal',
    async (elem, {rejectWithValue, dispatch}) => {
        try{
            const result = await instance.get(`lookup.php?i=${elem}`)
            dispatch(infoIngrediendMeal(result.data.meals))
        }
        catch (error) {
            rejectWithValue(error.message)
        }
    }
);

export const getPopular = createAsyncThunk(
    'popular/getPopular',
    async (_, {rejectWithValue, dispatch}) => {
        try {
            const result = await instance.get('list.php?i=list')
            dispatch(popularMeal(result.data.meals))
        }
        catch (error) {
            rejectWithValue(error.message)
        }
    }
)

export const getPopularInfo = createAsyncThunk(
  'popularInfo/getPopularInfo',
  async (elem, {rejectWithValue, dispatch}) => {
    try{
      const result = await instance.get(`filter.php?i=${elem}`)
      dispatch(popularMealInfo(result.data.meals))
    }catch (error) {
      rejectWithValue(error.message)
    }
  }
)


const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        latestMeal: (state, action) => {
            state.latest = action.payload;
        },
        infoIngrediendMeal: (state, action) => {
            state.infoMeal = action.payload;
        },
        popularMeal: (state, action) => {
            state.popular = action.payload;
        },
      popularMealInfo: (state, action) => {
          state.popularInfo = action.payload;
      }
    }
})

export const {
    latestMeal,
    infoIngrediendMeal,
    popularMeal,
    popularMealInfo
} = mealSlice.actions;

export default mealSlice.reducer;