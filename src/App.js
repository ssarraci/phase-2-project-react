import './App.css';
import Idols from './Idols'
import IdolForm from './IdolForm'
import Nav from './Nav'
import Home from './Home'
import { Route, Switch} from 'react-router-dom'
import {useEffect, useState} from 'react'

function App() {

  const [idols, setIdols] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/idols`)
    .then(res => res.json())
    .then(data => setIdols(data))
  }, [])

  function addIdol(addIdol) {
    setIdols([...idols, addIdol])
  }

  function deleteIdol(deleteIdol) {
    const updatedIdols = idols.filter((idol) => idol.id !== deleteIdol.id)
    setIdols(updatedIdols)
  }

  function updatedIdol(updatedIdol) {
    const changedIdols = idols.map((idol) => idol.id === updatedIdols.id ? updatedIdols : idol)
    setIdols(changedIdols)
  }

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/idols">
          <Idols 
            idols={idols}
            deleteIdol={deleteIdol}
            updatedIdol={updatedIdol}/>
        </Route>
        <Route exact path="/idols/new">
          <IdolForm addIdol={addIdol}/>
        </Route>
        <Route exact path ="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
