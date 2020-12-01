const base_url = 'https://api.rawg.io/api/';

//Getting the date

const getCurrentMonth = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    }else{
        return month;
    }
}

const getCurrentDay = () => {
    const date = new Date();
    const day = date.getDate();
    if (day < 10) {
        return `0${day}`;
    }else{
        return day;
    }
}


const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;

