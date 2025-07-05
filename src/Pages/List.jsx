import ShowDetales from "../Componens/ShowProdect/ShowProdect"

function List({task,handlerRemove,HandlerEdit}) {
  return (
    <div className="List">
      {task.length > 0 ? (

        task.map((item,index)=>{
          return (
             <ShowDetales key={item.id} item={item} index={index} handlerRemove={handlerRemove} HandlerEdit={HandlerEdit}/>
          )
        })

      ) : <h2>no tasks</h2>}
     
    </div>
  )
}

export default List