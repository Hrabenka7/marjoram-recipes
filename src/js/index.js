// controller

import Search from './models/Search';

/** Global state of the application 
 *  - Search Object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
*/

const state = {}

const controlSearch = async () => {
  // 1. get query from view
  const query = 'pizza' // placeholder

  if (query) {
    // 2. new search object and add to state
    state.search = new Search(query);

    // 3. prepare UI for results

    // 4. search for recipes
    await state.search.getRecipes();

    // 5. render results on UI
    console.log(state.search.recipes)
  }

}

document.querySelector('.search').addEventListener('submit', e => {
  // cancel the default action = reloading page
  e.preventDefault();
  controlSearch();
})

const search = new Search('pizza');
console.log(search)
search.getRecipes();


