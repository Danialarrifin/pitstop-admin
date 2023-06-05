import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'


export default function User() {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    checkAccessToken();
    getAllUser();
  }, []);

  const checkAccessToken = async () => {
    const token = localStorage.getItem('token');
    console.log('token', token);

    // no token in local storage, assume user not logged in, kick to login screen
    if (!token)
      navigate('/login');
      else
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } 
  
  const getAllUser = async () => {
    try {
      const response = await axios.get(
        "/Users",
      );
      console.log('response user', response.data);
      if (response.data.length > 0)
        setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            <h1 className='text-xl mb-2 font-bold'>Users</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 w-10  text-sm font-semibold tracking-wide text-left'>NAME</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>EMAIL</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>ROLE </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {user.map(item => (
                    <tr className='bg-white'>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.name}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'> {item.email}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.role}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.created_at}</td>
                      <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.updated_at}</td>
                    </tr>
                     ))}
                  </tbody>
                </table>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 md:hidden'>
                {user.map(item =>(
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>{item.name}</div>                   
                  </div>
                  <div>{item.email}</div>
                  <div>{item.role}</div>
                  <div className='text-gray-500'>{item.created_at}</div>
                  <div className='text-gray-500'>{item.updated_at}</div>
                </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>

    </>
  )
}
