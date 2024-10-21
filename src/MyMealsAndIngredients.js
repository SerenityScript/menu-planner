import idea from './idea.png';

const MyMealsAndIngredients = ({ selectedDay, updateDay }) => {
  
  const editMyMeal = (myInput, value) => {
    updateDay({
      ...selectedDay,
      [myInput]: value
    })
  }

  if (!selectedDay) return <p className="parDefault"><img className='iconIdea' src={idea} alt='Idea' /> Plan your week ahead of time!</p>
  return <div className="whole-plan">
    <div className="MyListHeading">
      <p className="MyListPar">ON THE</p>
      <h1 className="MyListH1">GROCERY</h1>
      <p className="MyListPar">LIST</p>
    </div>

    <form className="meal-editing">
      <label>
        Day of the week:
        <input
          type="text"
          className="myInput"
          placeholder="Today is..."
          id="title"
          value={selectedDay.title}
          onChange={(e) => editMyMeal("title", e.target.value)}
        />
      </label>
      
      <label>
        Menu:
        <textarea
          placeholder="Write your meal plan here..."
          spellCheck="false"
          id='mealForADay'
          value={selectedDay.mealForADay}
          onChange={(e) => editMyMeal("mealForADay", e.target.value)}
        />
      </label>
      
      <label>
        List of ingredients:
        <textarea
          placeholder="Enter ingredients..."
          spellCheck="false"
          id="mealForADay"
          value={selectedDay.ingredients}
          onChange={(e) => editMyMeal("ingredients", e.target.value)}
        />
      </label>
    </form>
  </div>
}

export default MyMealsAndIngredients;