import {useState,useEffect} from 'react'
import GiphyList from './GiphyList';
import GiphySearch from './GiphySearch';
function GiphyContainer(props){
const [gifsToDisplay,setGifsToDisplay] = useState(props)
// console.log(props.gifs('dog'))

const handleChange = async (event) => {
    event.preventDefault();
    // event => typing
    // target => input box
    // value => what is typed in the input box
    const word = event.target.value;
    setGifsToDisplay(await props.gifs(word))

    // setGifsToDisplay(()=>{
    //     const filteredGifs = props.fruits.filter((fruit)=>{
    //         return fruit.toLowerCase().includes(filteredValue.toLowerCase())
    //     })
    // return filteredFruitList
    
    // })
    
    }
    
    
    // useEffect(()=>{
    // console.log("do something",gifsToDisplay)
    // },[gifsToDisplay])
    
    return(
        <div>
       <GiphySearch onChange = {(event)=> handleChange(event)} ></GiphySearch>
       <GiphyList gifs = {gifsToDisplay}></GiphyList>
    </div>
    )
}

export default GiphyContainer