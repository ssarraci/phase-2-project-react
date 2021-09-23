import React from 'react'

function IdolCard({idol, deleteIdol, updatedIdol}) {

   function deleteClick() {
      fetch(`http://localhost:3000/idols/${idol.id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then(() => {deleteIdol(idol)
         })
   }

   function likeClick() {
      const likeIdol = {
         likes: idol.likes + 1,
      }

      fetch(`http://localhost:3000/idols/${idol.id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(likeIdol),
      })
      .then((res) => res.json())
      .then(updatedIdol)
   }

   return (
      <div className="card">
         <br/>
         <h3>{idol.name}</h3>
         <h4>From {idol.group}</h4>
         <img src={idol.image} alt={idol.name} className="idol-pic" style={{height:200}}/>
         <h5>Likes: {idol.likes}</h5> 
         <button className="delete-btn" onClick={deleteClick}>Delete</button>
         <button className="like-btn" onClick={likeClick}>Like</button>  
         <br/>
         <hr/>
      </div>
   )
}

export default IdolCard