import React from 'react'
import IdolCard from './IdolCard'

function Idols({idols, deleteIdol, updateIdol}) {

   const allIdols = idols.map(idol => <IdolCard key={idol.id} idol={idol} deleteIdol={deleteIdol} updateIdol={updateIdol}/>)

   return (
      <div>
         <h1>All My Idols</h1>
         {allIdols}
      </div>
   )
}

export default Idols