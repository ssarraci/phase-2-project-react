import React, {useState} from 'react'
import IdolCard from './IdolCard'



function Idols({idols, deleteIdol, updatedIdol, searchedIdol}) {

   const [searchTerm, setSearchTerm] = useState("")

   const allIdols = idols.map((idol) => 
      <IdolCard key={idol.id} idol={idol} deleteIdol={deleteIdol} updatedIdol={updatedIdol}/>)
   
   return (
      <div>
         <h1>All My Idols</h1>
         <h2>Search</h2>
            <form onSubmit={(e) => {
               e.preventDefault()
               searchedIdol(searchTerm)}} >
               <input type="text" placeholder="search name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
               <input type="submit" value="search"/>
            </form>
            
         {allIdols}
      </div>
   )
}

export default Idols