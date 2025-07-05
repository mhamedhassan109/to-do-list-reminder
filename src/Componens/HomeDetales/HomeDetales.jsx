import "./HomeDetales.css"
import imgHome from "../../Assets/to do list.png"

function HomeDetales() {
  return (

    
    <div className="HomeDetales">

      {/* section img  */}
        <div className="imgHome"><img src={imgHome} alt="img home"/> </div>


      {/* section heading  */}
        <h2>To Do List App</h2>

      {/* section descreption  */}
        <p>
            This is a simple To Do List application built with React. 
             You can add, delete, and edit your daily tasks with ease.
             Stay organized and boost your productivity!
         </p>
    </div>
  )
}

export default HomeDetales