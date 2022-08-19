import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = (props) => {
let text ='white'
let btntext ='white'
let btncolor ='success'
if(props.theme==='dark'){
  text='white'
 btntext ='white'
btncolor ='danger'


}
else{
  text='black'
  btntext ='Dark'
btncolor ='success'


}
  return (
    <>
    <nav  className={`navbar  bg-${props.theme}`} >
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/trial" style={{color:`${text}`}}>{props.title}</Link>

    
    
  
  


    
    
    <button className={`btn btn-${btncolor}`}onClick={props.toggle    } >
      Enable {btntext} Mode
    </button>
    </div>
  
</nav>
    
    </>
  )
}

export default Navbar
