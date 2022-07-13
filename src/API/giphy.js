import axios from "axios"



export async function getAPI(word){
const API_KEY='iLT0gdO9IBpsvSeOC4sG1l75ikMIO5Ya'
const BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key='
const END_URL = '&limit=25&offset=0&rating=g&lang=en'
const response = await axios.get(`${BASE_URL}${API_KEY}&q=${word}${END_URL}`)
console.log(response)
return response
}

