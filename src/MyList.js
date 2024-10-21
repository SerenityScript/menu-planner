import deleteImg from './delete.png';

const MyList = ({ addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay }) => {
  
  return <div>
    <div>
      <div className="MyListHeading">
        <p className="MyListPar">ON THE</p>
        <h1 className="MyListH1">MENU</h1>
        <p className="MyListPar">THIS WEEK</p>
      </div>
      
      <button className="button-add" onClick={addMeal}>
        <span className="hover-underline-animation">Add new Day</span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </button>
    </div>

    <div>
      {mealPlans.map(({ title, id, mealForADay }) => (
        <div key={id}
          className={`${id === selectedDay ? "selected" : "default"}`}
          onClick={() => setSelectedDay(id)}
        >
          <p className="dayTitle">{title}</p>
          <p className="dayMeals">{mealForADay.substring(0, 20)+"..."}</p>
          <div className='btnDeleteCont'>
            <button className="button-delete" onClick={() => deleteDay(id)}><img src={deleteImg} className='iconTrash' alt='Trash' /></button>
          </div>
        </div>
      ))}
    </div>
  </div>
}

export default MyList;