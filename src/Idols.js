import React from 'react'
import IdolCard from './IdolCard'

function Idols({idols, deleteIdol, updatedIdol}) {

   const allIdols = idols.map(idol => <IdolCard key={idol.id} idol={idol} deleteIdol={deleteIdol} updatedIdol={updatedIdol}/>)

   return (
      <div>
         <h1>All My Idols</h1>
         {allIdols}
      </div>
   )
}

export default Idols