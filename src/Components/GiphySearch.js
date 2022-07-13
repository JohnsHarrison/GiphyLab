function GiphySearch(props){
    return(
        <div className="SearchBar">
            <label htmlFor="giphy-search">Search for Gifs</label>
            <input placeholder="Type Here" type='text' value={props.value} onChange={props.onChange} name = 'fruit-filter'></input>
        </div>
    )
}
export default GiphySearch