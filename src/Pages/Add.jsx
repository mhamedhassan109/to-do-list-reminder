import FormAdd from "../Componens/FormAdd/FormAdd"

function ADD({formData,setformData,handlerAdd,handlerSave}) {
  return (
    <div className='ADD'>
      <FormAdd formData={formData} setformData={setformData} handlerAdd={handlerAdd} handlerSave={handlerSave}/>
    </div>
  )
}

export default ADD