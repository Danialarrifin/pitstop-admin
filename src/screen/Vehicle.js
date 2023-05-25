import React, { useEffect, useState } from 'react';
import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import axios from 'utils/axios'

export default function Vehicle() {
  const [showModal, setShowModal] = useState(false);
  const [vehicle, setVehicle] = useState([]);
  const [viewMode, setViewMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [plateNum, setPlateNum] = useState(null);
  const [model, setModel] = useState(null);
  const [manufacturer, setManufacturer] = useState(null);
  const [imagePath, setImagePath] = useState(null);


  const handleEventChange = (event) => {
    console.log('event', event.target.name);
    switch (event.target.name) {
      case 'plate_num':
        setPlateNum(event.target.value);
        break;

      case 'model':
        setModel(event.target.value);
        break;

      case 'manufacturer':
        setManufacturer(event.target.value);
        break;

      case 'image_path':
        setImagePath(event.target.value);
        break;

      default:
        break;
    }
  };
  const resetForm = () => {
    console.log('resetForm');
    setPlateNum(null);
    setModel(null);
    setManufacturer(null);
    setImagePath(null);
    setSelectedItem(null);
    setShowModal(false);
    setViewMode(false);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const data = {
      plate_num: plateNum,
      model,
      manufacturer,
      image_path: imagePath,
    };

    console.log('data', data);
    if (selectedItem) {
      // TODO: call update api
      await updateVehicle(selectedItem?.id, data);
    }
    else {
      // TODO: call add api
      await addVehicle(selectedItem?.id, data);
    }
    setShowModal(false);
    // await getAllVehicle();
  };

  const submitVehicleDeletion = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `/vehicles/delete?vehicleId=${id}`,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      );
      console.log('response appointment', response.data);
      setShowDeleteModal(false);
      setSelectedItem();
      await getAllVehicle();
    } catch (err) {
      console.log(err);
      setShowDeleteModal(false);
      setSelectedItem();
    }
  };

  const updateVehicle = async (id, data) => {
    try {
      const response = await axios.post(
        `/vehicles/update?vehicleId=${id}`,
        data,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          },
        },
      );
      console.log('response vehicle', response.data);
      setSelectedItem();
      await getAllVehicle();
    } catch (err) {
      console.log(err);
      setSelectedItem();
    }
  }

  const addVehicle = async (id, data) => {
    try {
      const response = await axios.post(
        `/vehicles`,
        data,
        {
          headers: {
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          },
        },
      );
      console.log('response vehicle', response.data);

      await getAllVehicle();
    } catch (err) {
      console.log(err);

    }
  }

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
          <div className='flex justify-between'>
              <h1 className='text-xl mb-2 font-bold'>Vehicles</h1>
              <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mb-5 "
                 onClick={() => {
                  setShowModal(true);
                }}>
                Add Vehicles
              </button>
            </div>
            <div className='overlow-auto rounded-lg shadow'>

            {showModal ? (
                <>
                  <div className='flex justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                    <div className='relative w-full mx-6 md:mx-0 md:w-4/5 lg:w-3/5 my-6 mx-auto max-w-6xl h-5/6 overflow-y-auto'>
                      <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                        <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                          <h3 className='text-3xl font-semibold'>
                            {viewMode
                              ? 'Vehicle Detail'
                              : selectedItem
                                ? 'Edit Vehicle'
                                : 'Add Vehicle'}
                          </h3>
                          <button
                            className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                            onClick={() => setShowModal(false)}
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='w-6 h-6'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </button>
                        </div>

                        <div className='relative p-6 flex-auto'>
                          <label
                            htmlFor='price'
                            className='block text-sm font-medium text-gray-700 mb-2'
                          >
                            Model
                          </label>
                          <input
                            type='text'
                            name='model'
                            id='model'
                            disabled={viewMode}
                            className='relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm text-gray-700'
                            placeholder='Enter Model'
                            onChange={handleEventChange}
                            value={model}
                          />
                        </div>

                        <div className='relative px-6 pb-6 flex-auto'>
                          <label
                            htmlFor='price'
                            className='block text-sm font-medium text-gray-700 mb-2'
                          >
                            Manufacturer
                          </label>
                          <input
                            type='text'
                            name='manufacturer'
                            id='manufacturer'
                            disabled={viewMode}
                            className='relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm text-gray-700'
                            placeholder='Enter Manufacturer'
                            onChange={handleEventChange}
                            value={manufacturer}
                          />
                        </div>

                        <div className='relative px-6 pb-6 flex-auto'>
                          <label
                            htmlFor='price'
                            className='block text-sm font-medium text-gray-700 mb-2'
                          >
                            Plate Number
                          </label>
                          <input
                            type='text'
                            name='plate_num'
                            id='plate_num'
                            disabled={viewMode}
                            className='relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm text-gray-700'
                            placeholder='Enter Plate Number'
                            onChange={handleEventChange}
                            value={plateNum}
                          />
                        </div>

                        <div className='relative px-6 pb-6 flex-auto'>
                          <label
                            htmlFor='price'
                            className='block text-sm font-medium text-gray-700 mb-2'
                          >
                            Image
                          </label>
                          <input
                            type='text'
                            name='image_path'
                            id='service'
                            disabled={viewMode}
                            className='relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm text-gray-700'
                            placeholder='Enter Image'
                            onChange={handleEventChange}
                            value={imagePath}
                          />
                        </div>

                        <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                          <button
                            className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                            type='button'
                            onClick={() => resetForm()}
                          >
                            Close
                          </button>
                          {!viewMode ? (
                            <button
                              className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                              type='button'
                              onClick={submitForm}
                            >

                              {selectedItem ? (
                                'Update'
                              ) : (
                                'Create'
                              )}

                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
                </>
              ) : null}

              {showDeleteModal ? (
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
                              Delete Vehicle ?
                            </h4>
                            <p className='mt-2 text-[15px] leading-relaxed text-gray-500'>
                              Are you sure you want to delete this appointment?
                            </p>
                            <div className='items-center gap-2 mt-3 sm:flex'>
                              <button
                                className='w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2'
                                onClick={() =>
                                  submitVehicleDeletion(selectedItem?.id)
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
                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><button class="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded mr-3"
                           onClick={() => {
                            setShowModal(true);
                            setSelectedItem(item);
                            setManufacturer(item.manufacturer);
                            setModel(item.model);
                            setPlateNum(item.plate_num);
                            setImagePath(item.image_path);
                          }}>
                          Edit
                        </button><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            setShowDeleteModal(true);
                            setSelectedItem(item);
                          }}>
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
