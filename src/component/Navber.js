import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navber = () => {

    const [users, setUsers] = useState({});
    const navigate = useNavigate();

      // Fetch data from user //
    useEffect(() => {
        const items =  localStorage.getItem("user");
        console.log(JSON.parse(items));
        
         setUsers(JSON.parse(items));
         
       
      },[]);
    
   
      
   
    // Sign Out
    // remove user from local storage
    const handleSignOut = () =>{

       
            const items = localStorage.removeItem("user");
            console.log(items)
            
             setUsers(items);
             navigate('/');
        
    }
    


    return (

       
        <div className='flex justify-between items-start  px-5 py-3'>
         <div>
            <ul className='inline items-center  justify-evenly sm:flex'>
                
                
                
                
                
                {users?.role === 'admin' ? <li className='mr-3 ' > <NavLink className='me-3 bg-black text-white px-2 py-1 rounded ' to='/allusers' >All users</NavLink></li> : <></> }
                <li className='mr-3 ' > <NavLink className='me-3 bg-black text-white px-2 py-1 rounded' to='/' >Home</NavLink></li>
            </ul>
         </div>
         <div>
         <ul  className='grid justify-items-end'>
                
                
                {users ? <li ><button onClick={handleSignOut} className=' bg-black text-white px-2 py-1 rounded mb-4 justify-self-end '>Log out</button> </li> :<ul className='flex  items-center justify-evenly '>
                <li  > <NavLink className='mr-3 bg-black text-white px-2 py-1 rounded' to='/user/login' >login</NavLink></li> <li className='mr-3 '>or</li> <li className='mr-3 '  > <NavLink className='bg-black text-white px-2 py-1 rounded' to='/user/add' >Sign up</NavLink></li>
                </ul> }

                <li>  {users ? 
                <ul role="list" className="  divide-y divide-slate-200">
               
                  
                  <li className="flex py-4 first:pt-0 last:pb-0">
                  <h1 className=" py-2 px-3 rounded-full font-bold text-3xl text-white bg-black ms-3">{users?.name?.charAt(0)}</h1>
                    <div className="ml-3 overflow-hidden">
                      <p className="text-sm font-medium text-slate-900">{users?.name}</p>
                      <p className="text-sm text-slate-500 truncate">{users?.email}</p>
                    </div>
                  </li>
                
              </ul>
                
                : <></>}</li>
            </ul>
          
         </div>
        </div>
    );
};

export default Navber;