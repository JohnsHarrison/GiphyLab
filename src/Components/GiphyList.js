function GiphyList(props){
    if(!props.gifs.data){
        return null
    }else {
console.log(props.gifs.data.data)
const list = props.gifs.data.data
const mappedList = list.map((gif,index)=>{
   
  return  <img key = {index} src = {gif.images.original.url} alt=''></img>
})
return <div className="GifContainer">
{mappedList}
</div>
}
}

export default GiphyList