import React from 'react'



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
    <a className="navbar-brand" href="/" style={{color:`${text}`}}>{props.title}</a>

    
    
  
  


    
    
    <button className={`btn btn-${btncolor}`}onClick={props.toggle    } >
      Enable {btntext} Mode
    </button>
    </div>
  
</nav>
    
    </>
  )
}

export default Navbar
