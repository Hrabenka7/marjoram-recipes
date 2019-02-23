import axios from 'axios'

export default class Search {
  constructor(query){
    this.query = query
  }

  async getRecipes() {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '7893ef9ece0405651bf57db44afdd467'

    try {
      const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
      this.recipes = result.data.recipes
      console.log(this.recipes)
    }
    catch (error) {
      alert(error);
    }
}


}

