import React from 'react';
import { Link , NavLink, useNavigate} from 'react-router-dom';




export default function Navbar() {

  const Navigate = useNavigate();
  function GoBack() {
    Navigate(-1);
  }
  
  return(
  <>
  
    <ul className="nav nav-tabs bg-warning ">
  <li className="nav-item">

  {/* NavLink adds active class where Link Not */}
    <NavLink className="nav-link " aria-current="page" to='/'>Home</NavLink>
  </li>
  <li className="nav-item ">
  {/* toLink also work for without / */}
    <NavLink className="nav-link " to='/Regs'>Regs</NavLink>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/favs'>Favs</Link>
  </li>
  <li className="nav-item  ">
    <Link className="nav-link " to= 'dtime'>Dtime</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to= 'carda'>CardA</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link " to= 'hooksrev/Mukesh/kumar'>Hooksrev</Link>
  </li>
 
<button className="btn btn-primary  " type="button" onClick={GoBack}>GoBack</button>

</ul>

</>
)}