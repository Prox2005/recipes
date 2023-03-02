function init(state) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=egg`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      state(response.meals);
    })
    .catch((err) => console.error(err));
}

function searchMeal(state, input) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      state(response.meals);
    })
    .catch((err) => console.error(err));
}

export { init, searchMeal };
