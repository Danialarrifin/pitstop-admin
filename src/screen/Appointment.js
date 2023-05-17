import React, { useEffect, useState } from 'react';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'

export default function Appointment() {
  const [appointment, setAppointment] = useState([]);

  const getAllAppointment = async () => {
    try {
      const response = await axios.get(
        "/appointments",
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      );
      console.log('response vehicle', response.data);
      if (response.data.length > 0)
        setAppointment(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getAllAppointment();
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <div className="flex">
          <Sidebar />
          <div className='p-5 w-full'>
            {/* <AiFillCalendar className='w-15 h-15'/> */}
            <h1 className='text-xl mb-2 font-bold'>Appointments</h1>
            <div className='overlow-auto rounded-lg shadow'>
              <div className='overflow-auto rounded-lg shadow hidden md:block'>
                <table className='w-full'>
                  <thead className='bg-gray-50 border-b-2 border-gray-200'>
                    <tr>
                      <th className='p-3 w-10  text-sm font-semibold tracking-wide text-left'>DATE</th>
                      <th className='p-3 w-10 text-sm font-semibold tracking-wide text-left'>TIME SLOT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>VEHICLE </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>SERVICE </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>STATUS </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>CREATED AT</th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>UPDATED AT </th>
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>EDIT </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100'>
                    {appointment.map(item => (
                      <tr className='bg-white'>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.date}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.time_slot_id}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.vehicle_id}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.service_id}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                          <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-gray-800 bg-gray-200  rounded-lg bg-opacity-40'>{item.status}</span>
                        </td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.created_at}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{item.updated_at}</td>
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><button class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded mr-3">
                          Edit
                        </button><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                          </button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 md:hidden'>
                {appointment.map(item =>(
                <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>
                      <a href='#' className='text-lue-500 font-bold hover:underline'>1</a>
                    </div>
                    <div className='font-bold'>{item.vehicle_id}</div>
                  </div>
                  <div>{item.service_id}</div>
                  <div className='flex items-center space-x-2 text-sm'>
                    <div>{item.date} </div>
                    <div>{item.time_slot_id}</div>
                  </div>
                  <div>
                    <span className='p-1.5 text-xs font-medium uppercase tracker-wider text-green-800 bg-green-200 rounded-lg bg-opacity-40'>Accept</span>
                  </div>
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
