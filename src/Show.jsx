import {React , useState} from 'react'
import Button from 'react-bootstrap/Button';



function Show() {

  const[text,setText]= useState("")

  return (
    <div >
      <div className="container-fluid d-flex flex-column col-12 bg-dark align-items-center text-light justify-content-center h-100">
        <img className='col-2'
         src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYm9uMTA1ajd5ejcwb3ZmZzdnb3NycXlxYm51c2F1Z3g3amd2eDA5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/McsUx1K5XmZJfDzaoE/giphy.webp" alt="" />
        <h1 className='mt-5'>{text}</h1>
        <div className="d-flex gap-3 my-5">
          <Button onClick={()=>{setText("HELLO")}} variant="light">Show</Button>{' '}
          <Button onClick={()=>{setText("")}} variant="light">Hide</Button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Show