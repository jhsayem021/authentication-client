
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Allusers.css';
import Navber from './Navber';
const Allusers = () => {

    const users = useLoaderData();

    const [displayUsers, setDisplayUsers] = useState(users);
 
         
       

    
    const handleDelete = user =>{
        console.log('delete user ', user.name)
        const agree = window.confirm(`Are you sure delete user: ${user.name}`)
        if(agree){
            fetch(`https://mongo-server-iota.vercel.app/delete/${user._id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert('delete successfully')
                const remainUsers = displayUsers.filter(usr => usr._id !== user._id);
                setDisplayUsers(remainUsers);
            }
        })
        }
    }
    
    console.log(users)
    return (
       <>
       <Navber/>
        <div className='mx-auto w-3/5  '>
            
            <h3 className='pt-5 text-3xl'>User List</h3>
            <ul className='grid grid-cols-1 sm:grid-cols-3   gap-y-7 justify-evenly users '>
            {
                displayUsers.map( user =><>
                <li className='relative w-80 m-2 bg-slate-200 rounded-lg p-4 pb-12 user-bg'>
                <button onClick={()=>handleDelete(user)} type="button" className=" btn-hide text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 absolute left-2 bottom-0">Delete</button>
                <button type="button" className=" btn-hide text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 absolute right-2 bottom-0">Edit</button>
                    <p className=' mx-auto py-4 rounded-full font-bold text-6xl text-white bg-black w-24 mb-3'> {user.name.charAt(0)}</p>
                    <p className='  text-2xl font-medium text-black mb-3'> {user.name}</p>
                    <p className='  text-2xl font-medium text-black mb-3'> {user.email}</p>


                </li>
                
                </>)
            }
            </ul>
        </div>
       </>
    );
};

export default Allusers;