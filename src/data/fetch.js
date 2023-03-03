function init(state) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=egg`)
    .then((response) => response.json())
    .then((response) => {
      state(response.meals);
    })
    .catch((err) => console.error(err));
}

function searchMeal(state, input) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
    .then((response) => response.json())
    .then((response) => {
      state(response.meals);
    })
    .catch((err) => console.error(err));
}

function searchDetails(id, set) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((response) => {
      set(response.meals[0]);
    })
    .catch((err) => console.error(err));
}

export { init, searchMeal, searchDetails };
