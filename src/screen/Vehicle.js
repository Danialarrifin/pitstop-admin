import React, { useEffect, useState } from 'react';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'

export default function Vehicle() {
  const [vehicle, setVehicle] = useState([]);

  const getAllVehicle = async () => {
    try {
      const response = await axios.get(
        "/vehicles",
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      );
      console.log('response vehicle', response.data);
      if (response.data.length > 0)
        setVehicle(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getAllVehicle();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            <h1 className='text-xl mb-2 font-bold'>Vehicles</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 w-10  text-sm font-semibold tracking-wide text-left'>MANUFACTURER</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>MODEL</th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>PLATE NUMBER </th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>IMAGE PATH </th>
                      <th className='p-3  text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3  text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                      <th className='p-3 text-sm font-semibold tracking-wide text-left'>EDIT & DELETE</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {vehicle.map(item => (
                      <tr>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.manufacturer}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.model}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.plate_num}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.image_path}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.created_at}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.updated_at}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><button class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded mr-3">
                          Edit
                        </button><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                          </button></td>
                      </tr>
                    ))
                    }
                  </tbody>
                </table>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 md:hidden'>
                {vehicle.map(item => (
                  <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                    <div className='flex items-center space-x-2 text-sm'>
                      <div>{item.manufacturer}</div>
                      <div>{item.model}</div>
                    </div>
                    <div>{item.plate_num}</div>
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
