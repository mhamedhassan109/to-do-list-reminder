import { Data } from "./Data.js"
import {Routes,Route} from "react-router-dom"
import Layout from "./Componens/Layout.jsx"
import Home from "./Pages/Home.jsx"
import Add from "./Pages/Add.jsx"
import List from "./Pages/List.jsx"
import { useState } from "react"
function App() {
  const [task,settask] = useState(Data)
  const [formData,setformData] = useState({
    name:"",
    task:"",
    date:"",
    time:"",
    catogry:"",
  })

  // add task function 

  const handlerAdd = ()=>{
    const newTask = {
      id:Date.now(),
      ...formData
    }
    settask([...task,newTask])
    alert("add task")
    setformData({
       name:"",
        task:"",
        date:"",
        time:"",
        catogry:"",
    })
  }



  // remove task function 

  const handlerRemove = (IndexItem) =>{
    const remove = task.filter((_,index)=>index !== IndexItem)
    settask(remove)
    alert("remove task")
  }



  // edit task function 
  const [editIndex,seteditIndex] = useState(null)
  const HandlerEdit = (indexItem) => {
    setformData({
      name:task[indexItem].name,
        task:task[indexItem].task,
        date:task[indexItem].date,
        time:task[indexItem].time,
        catogry:task[indexItem].catogry,
    })
    seteditIndex(indexItem)
  }


  // save task function
 
  const handlerSave = ()=>{
    if(editIndex !== null) {
      const updetTask = [...task]
      updetTask[editIndex] = {...updetTask[editIndex] , ...formData}
      settask(updetTask)
      seteditIndex(null)
      alert("save task")
    }
  }
  return (
    <div className="App">
      <div className="contaner">

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/add" element={<Add formData={formData} setformData={setformData} handlerAdd={handlerAdd} handlerSave={handlerSave} />}/>
            <Route path="/list" element={<List task={task} handlerRemove={handlerRemove} HandlerEdit={HandlerEdit}/>}/>
          </Route>
        </Routes>
     


      </div>

    </div>
  );
}

export default App;
