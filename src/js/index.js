// controller

import axios from 'axios';


async function getRecipes(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = '7893ef9ece0405651bf57db44afdd467'
  
  try 
  {
    const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`)
    const recipes = result.data.recipes
    console.log(recipes)
  }
  catch (error)
  {
    alert(error);
  }
}

getRecipes('tomato pasta')

// key 7893ef9ece0405651bf57db44afdd467
// site  https://www.food2fork.com/api/search