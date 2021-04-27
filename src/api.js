//Base URL
const base_url = "https://api.rawg.io/api/";
const key = "6009f7a5bc4a43a0b78b3ffa795b3b51";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
// Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${key}`;

// Screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${key}`;

//Searcg
export const gameSearchURL = (game_name) =>
  `${base_url}games?key=${key}&search=${game_name}&page_size=10`;
