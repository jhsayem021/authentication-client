import React, { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoaderData, useLocation } from 'react-router-dom';
import Navber from './Navber';

const Login = () => {

    const users = useLoaderData();
    
     const [loginuser,setLoginUser] = useState({});
     
     const navigate = useNavigate();
     
   

    const handleUserLogin = e =>{
      
        e.preventDefault();
        
        console.log(loginuser.email);
        console.log(loginuser.password);
        let n= 0;
        users.map( user =>{
          
          
            if((user.email === loginuser.email) && (user.password === loginuser.password)){
               
                console.log(user.email , user.password);
                
                localStorage.setItem('user', JSON.stringify(user) );
                n++;
                  alert('login successfully');
                  e.target.reset();
                 
                  navigate('/');
                  
                  
                  
            }
            
        })
        if(n === 0){
          alert('Sorry! Invalid email and Password , Please Sign up First')
          navigate('/user/add')
        }
   
        

    }


    const handleOnBlur = (e) =>{
        const field = e.target.name ;
        const value = e.target.value;
        // console.log(field, value);
        const newUser = {...loginuser};
        newUser[field] = value;
        setLoginUser(newUser);}


    return (
        <div>
          <Navber></Navber>
           <div>
            
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleUserLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onBlur={handleOnBlur}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                 
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onBlur={handleOnBlur}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <input
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
            
             
            </div>
          </form>
        </div>
      </div>
        </div> 
        </div>
    );
};

export default Login;