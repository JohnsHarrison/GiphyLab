import './App.css';
// import axios from 'axios';
import {getAPI} from './API/giphy'
import GiphyContainer from './Components/GiphyContainer';


function App() {
  return (
    <div className="App">
    <GiphyContainer gifs = {getAPI}></GiphyContainer>
    </div>
  );
}

export default App;
