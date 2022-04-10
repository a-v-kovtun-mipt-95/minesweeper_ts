const localStorageKey = "bestTimes";

export const saveScoreBoardInLocalStorage = bestTimes =>
    localStorage.setItem(localStorageKey, JSON.stringify(bestTimes));

export const getScoreBoardFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) ||
    {
        beginner: [],
        intermediate: [],
        expert: [],
    };