// Kerakli modullar va turlarni import qilamiz
import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

// Home page uchun boshlang'ich holatni aniqlaymiz
const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

// Home page state uchun slice yaratamiz
const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    // Mashhur taomlarni saqlash uchun reducer
    setPopularDishes: (state, action) => {
      state.popularDishes = action.payload;
    },
    // Yangi taomlarni saqlash uchun reducer
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    // Top foydalanuvchilarni saqlash uchun reducer
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

// Action creatorlarni export qilamiz
export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions;

// Reducer ni export qilamiz
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
