
import './App.css'
import Playerlist from './players';


function App () {
  let players = [
"ronaldo",
"messi",
"neymar",
"ronaldino"
]

return(
  <Playerlist data={players}/>
)

};



export default App;