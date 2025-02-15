import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import instance from "../../http/settings.jsx";

const initialState = {
  latest: [],
  infoMeal: [],
  popular: [],
  popularInfo: [],
  text: "",
  randomMeal: [],
  randomIngredients: [],
  country:[],
  countryInfo:[],
  alfavitMeal: [],
  search: []
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
    try {
      const result = await instance.get(`lookup.php?i=${elem}`)
      dispatch(infoIngrediendMeal(result.data.meals))
    } catch (error) {
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
      dispatch(getRandomIngredients(result.data.meals))
    } catch (error) {
      rejectWithValue(error.message)
    }
  }
)

export const getPopularInfo = createAsyncThunk(
  'popularInfo/getPopularInfo',
  async (elem, {rejectWithValue, dispatch}) => {
    try {
      const result = await instance.get(`filter.php?i=${elem}`)
      dispatch(popularMealInfo(result.data.meals))
    } catch (error) {
      rejectWithValue(error.message)
    }
  }
)

export const getRandomMeal = createAsyncThunk(
  'randomMeal/getRandomMeal',
  async (_, {rejectWithValue, dispatch}) => {
    try{
      const random = [1,2,3,4,5,6,7,8]
      const respons = await Promise.all(
        random.map(() => instance.get('random.php'))
      );
      const randomMealData = respons.map(
        (res) => res.data.meals[0]
      )
      dispatch(getRandom(randomMealData))
    }catch(error){
      rejectWithValue(error.message)
    }
  }
)

export const getCountyMeals = createAsyncThunk(
  'county/getCountyMeals',
  async (_, {rejectWithValue, dispatch}) => {
    try{
      const res = await instance.get(`list.php?a=list`)
      dispatch(getCountry(res.data.meals))
    }catch(error){
      rejectWithValue(error.message)
    }
  }
)

export const getCounrtyInfoMeal = createAsyncThunk(
  'countyInfo/getCounrtyInfoMeal',
  async (elem, {rejectWithValue, dispatch}) => {
    try {
      const res = await instance.get(`filter.php?a=${elem}`)
      dispatch(getCountryInfo(res.data.meals))
    }catch(error){
      rejectWithValue(error.message)
    }
  }
)

export const getAlfavitMeals = createAsyncThunk(
  'alfavitMeal/getAlfavitMeals',
  async (elem, {rejectWithValue, dispatch}) => {
    try{
      const res = await instance.get(`search.php?f=${elem}`)
      dispatch(getAlfavitMeal(res.data.meals))
    }catch(error){
      rejectWithValue(error.message)
    }
  }
)

export const getSearchMeal = createAsyncThunk(
  'search/getSearchMeal',
  async (elem, {rejectWithValue, dispatch}) => {
    try{
      const res = await instance.get(`search.php?s=${elem}`)
      dispatch(getSearch(res.data.meals))
    }catch(error){
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
    },
    onDescription: (state, action) => {
      state.text = action.payload;
    },
    getRandom : (state, action) => {
      state.randomMeal = action.payload;
    },
    getRandomIngredients: (state, action) => {
      state.randomIngredients = action.payload;
    },
    getCountry: (state, action) => {
      state.country = action.payload;
    },
    getCountryInfo: (state, action) => {
      state.countryInfo = action.payload;
    },
    getAlfavitMeal: (state, action) => {
      state.alfavitMeal = action.payload;
    },
    getSearch : (state, action) => {
      state.search = action.payload;
    }
  }
})

export const {
  latestMeal,
  infoIngrediendMeal,
  popularMeal,
  popularMealInfo,
  onDescription,
  getRandom,
  getRandomIngredients,
  getCountry,
  getCountryInfo,
  getAlfavitMeal,
  getSearch
} = mealSlice.actions;

export default mealSlice.reducer;