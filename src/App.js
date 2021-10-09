import './App.css';
import Idols from './Idols'
import IdolForm from './IdolForm'
import Nav from './Nav'
import Home from './Home'
import { Route, Switch} from 'react-router-dom'
import React, {useEffect, useState} from 'react'

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

  function updatedIdol(likedIdols) {
    const changedIdols = idols.map((idol) => idol.id === likedIdols.id ? likedIdols : idol)
    setIdols(changedIdols)
  }

  function searchedIdol(searchedTerm){
    const searched = idols.filter((idol) => idol.name.includes(searchedTerm)
    )
    setIdols(searched)
  }

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/idols">
          <Idols 
            idols={idols}
            deleteIdol={deleteIdol}
            updatedIdol={updatedIdol}
            searchedIdol={searchedIdol}/>
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
