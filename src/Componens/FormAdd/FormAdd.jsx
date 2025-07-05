import "./FormAdd.css"
import man from "../../Assets/man.jpg"
function FormAdd({formData,setformData,handlerAdd,handlerSave}) {
  return (
    <div className="FormAdd">

      {/* section personal  */}
          <div className="personal">
              <div className="imgpersonal">
                <img src={man} alt="img personal"/>
              </div>
                <input type="text" placeholder="write name" value={formData.name} onChange={(e)=>setformData({...formData,name:e.target.value})}/>
              </div>
      {/* section items task   */}  
    <div className="box">
      <div className="items">
        <h3><span><i class="fa-regular fa-clipboard"></i></span>task:</h3>
      <h3><span><i class="fa-solid fa-calendar-days"></i></span>date: </h3>
      <h3><span><i class="fa-solid fa-stopwatch"></i></span>time:</h3>
      <h3><span><i class="fa-solid fa-circle-user"></i></span>catogry: </h3>
    
      </div>

    {/* section input form  */}
      
      <div className="form">
      <input type="text" placeholder="add task" value={formData.task} onChange={(e)=>setformData({...formData,task:e.target.value})}/>
      <input type="date" value={formData.date} onChange={(e)=>setformData({...formData,date:e.target.value})}/>
      <input type="time" value={formData.time} onChange={(e)=>setformData({...formData,time:e.target.value})}/>
      <select value={formData.catogry} onChange={(e)=>setformData({...formData,catogry:e.target.value})}>
        <option>man</option>
        <option>women</option>
      </select>
      </div>
    </div>

     {/* section button add & save  */}
    <div className="btn">
        <button onClick={handlerAdd}>add</button>
        <button onClick={handlerSave}>save</button>
    </div>


    </div>
  )
}

export default FormAdd