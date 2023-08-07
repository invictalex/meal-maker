import {useState} from 'react'
import downArrow from "./assets/down-arrow.svg"
import IngredientsList from "./IngredientsList.jsx"


export default function UserIngredientsSection() {


  const [userIngredients, setUserIngredients] = useState({
    input: "",
    list: [],
    notification: ""
  })

  const handleChange = (event) => {
    
    setUserIngredients((prevIng) => ({
        ...prevIng,
        input: event.target.value
      })
    )
  }


  const handleSubmit = (event) =>
  {
    event.preventDefault()

    userIngredients.list.includes(userIngredients.input) ? 
    
      setUserIngredients((prevIng) => ({
        ...prevIng,
        input: "",
        notification: `Oops, you've already added ${userIngredients.input}!`
      })) :

      setUserIngredients((prevIng) => ({

        input: "",
        list: [...prevIng.list, prevIng.input],
        notification: ""
      }))

  }

  const removeItem = (itemToRemove) => {

    
    setUserIngredients((prevIng) => ({

      ...prevIng,
      list: prevIng.list.filter(item => item !== itemToRemove)     

    }))
  }

  
  return (
    <section >
      <form className="user-ingredients-form" onSubmit={handleSubmit}>
        <div className="input-panel">
          <input type="text"
            name="userInput"
            value={userIngredients.input}
            className="user-input"
            placeholder="spaghetti"
            onChange={handleChange}
          />
          <button className="plus">+</button>
        </div>
      </form>
      <p className="notification">{userIngredients.notification}</p>

      <IngredientsList 
        userList={userIngredients.list} 
        handleCancel={removeItem}
      />


      <button className="get-recipes-btn">Get Recipes<img src={downArrow} style={{width: "25px", display: "block", margin: "auto"}} /></button>
    </section>
  
  
        
  )
}