import React, { useEffect, useState } from 'react';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'

export default function Appointment() {
  const [appointment, setAppointment] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const submitAppointmentDeletion = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `/appointments/delete?appointmentId=${id}`,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      );
      console.log('response appointment', response.data);
      setShowDeleteModal(false);
      setSelectedItem();
      await getAllAppointment();
    } catch (err) {
      console.log(err);
      setShowDeleteModal(false);
      setSelectedItem();
    }
  };

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
      console.log('response appointment', response.data);
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

              {showDeleteModal? (

             
              <>
              <div className='fixed inset-0 z-10 overflow-y-auto'>
                  <div
                    className='fixed inset-0 w-full h-full bg-black opacity-40'
                    onClick={() => {
                      setShowDeleteModal(false);
                    }}
                  ></div>
                  <div className='flex items-center min-h-screen px-4 py-8'>
                    <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
                      <div className='mt-3 sm:flex'>
                        <div className='flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 text-red-600'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                        <div className='mt-2 text-center sm:ml-4 sm:text-left'>
                          <h4 className='text-lg font-medium text-gray-800'>
                            Delete Appointment ?
                          </h4>
                          <p className='mt-2 text-[15px] leading-relaxed text-gray-500'>
                            Are you sure you want to delete this appointment?
                          </p>
                          <div className='items-center gap-2 mt-3 sm:flex'>
                            <button
                              className='w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2'
                              onClick={() =>
                                submitAppointmentDeletion(selectedItem?.id)
                              }
                            >
                              Delete
                            </button>
                            <button
                              className='w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2'
                              onClick={() => {
                                setShowDeleteModal(false);
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              ) : null}
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
                      <th className='p-3 w-5 text-sm font-semibold tracking-wide text-left'>EDIT & DELETE </th>
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
                        </button><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                           onClick={() => {
                            setShowDeleteModal(true);
                            setSelectedItem(item);
                          }}>
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
