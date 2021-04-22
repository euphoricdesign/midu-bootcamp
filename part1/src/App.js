import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app el curso fullstack bootcamp</p>
}

function App () {
  return (
    <div className="App">
      <Mensaje color="lightblue" message="Estamos trabajando" />
      <Mensaje color="pink" message="En un curso" />
      <Mensaje color="lightcoral" message="De React..."/>
      <Description />
    </div>
  )
} 

export default App;
