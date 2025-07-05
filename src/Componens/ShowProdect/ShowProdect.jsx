import "./ShowProdect.css"
import man from "../../Assets/man.jpg"
import women from "../../Assets/women.jpg"
function ShowProdect({item,index,handlerRemove,HandlerEdit}) {
  const ImgCatogry = (catogry)=>{
    if(catogry === "man") return man
    if(catogry === "women") return women
    return man
  }
  return (
    <div className="ShowProdect">
      <div className="personal">
        {/* section imgpersonal  */}
       <div className="imgpersonal"><img src={ImgCatogry(item.catogry)} alt="img personal"/></div>
         {/* section heading  */}
        <h2>: {item.name}</h2>

      </div>

      {/* section task item  */}

     <div className="box">
       <div className="items">
          <h3><span><i class="fa-regular fa-clipboard"></i></span>task:{item.task}</h3>
          <h3><span><i class="fa-solid fa-calendar-days"></i></span>date: {item.date}</h3>
          <h3><span><i class="fa-solid fa-stopwatch"></i></span>time:{item.time}</h3>
          <h3><span><i class="fa-solid fa-circle-user"></i></span>catogry: {item.catogry}</h3>
      </div>

      {/* section remove & edit  */}
      <div className="icons">
        <span onClick={()=>handlerRemove(index)}><i class="fa-solid fa-trash-can"></i></span>
        <span onClick={()=>HandlerEdit(index)}><i class="fa-solid fa-pen-to-square"></i></span>
      </div>
     </div>
    </div>
  )
}

export default ShowProdect