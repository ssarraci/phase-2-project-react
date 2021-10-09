import React, {useState} from 'react'

function IdolForm({addIdol}) {

   const [formData, setFormData] = useState({
      name: "",
      group: "",
      image: "",
   })

   const newIdol = {
      ...formData,
      likes: 0,
   }

   function handleSubmit(e) {
      e.preventDefault()
      setFormData('')
      fetch('http://localhost:3000/idols', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(newIdol)
      })
         .then((res) => res.json())
         .then(addIdol)
   }

   function handleChange(e) {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      })
   }

   return (
      <div>
         <br/>
         <form onSubmit={handleSubmit}>
            
            <label> Name: 
                  <input type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}/>
            </label>

            <br/>

            <label> Group: 
                  <input type="text" 
                  name="group" 
                  value={formData.group} 
                  onChange={handleChange}/>
            </label>

            <br/>
            
            <label> Image: 
                  <input type="text" 
                  name="image" 
                  value={formData.image} 
                  onChange={handleChange}/>
            </label>

            <br/>
            
            <input type="submit" name="submit" value="Add a Idol!"/>   
         </form>
      </div>
   )
}

export default IdolForm