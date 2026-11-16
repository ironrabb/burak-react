import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

// HomePage'dan umumiy ma'lumotlardan birini tanlaydi
const selectHomePage = (state: AppRootState) => state.homePage;

// HomePage'dan populyar taomlardan birini tanlaydi
export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes,
);

// HomePage'dan yangi taomlardan birini tanlaydi
export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes,
);

// HomePage'dan eng yaxshi foydalanuvchilardan birini tanlaydi
export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers,
);
