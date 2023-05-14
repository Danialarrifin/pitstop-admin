import { AiFillCalendar, AiFillCar } from 'react-icons/ai'
import { CgProfile } from "react-icons/cg";
import { HiCog, HiUsers } from "react-icons/hi";
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'


export default function Profile() {
    return (
        <>
            <Navbar />
            <main>
                <div className="flex">
                    <Sidebar />
                    <header className="bg-white shadow w-screen">
                        <div className="mx-auto  overlow-auto max-w-7xl w-full px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Profile</h1>
                            <div className="flex justify-center bg-gray-500 items-center w-full px-4 py-5 bg-white rounded-lg shadow">
                                <CgProfile className='w-28 h-28' />
                                <div className='ml-5'>
                                    <div className="text-sm font-medium text-gray-500 truncate">
                                        Admin
                                    </div>
                                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                                        Danial Arrifin
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Prior to this role, I completed a two-year internship with Mobile First, where I honed my mobile app development skills. Ideally, I would like to continue to specialize in mobile software engineering, an area where I know your firm excels.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-wrap">
                            <div className="w-full sm:w-1/3 px-2">
                                <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
                                    <img
                                        className="w-full"
                                        src="/img/card-image.jpg"
                                        alt="card"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Card Title</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus cursus elit vitae justo gravida, sed semper eros
                                            tincidunt. Donec at lorem vel dolor consectetur laoreet sit
                                            amet a augue. Sed ut magna felis.
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 px-2">
                                <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
                                    <img
                                        className="w-full"
                                        src="/img/card-image.jpg"
                                        alt="card"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Card Title</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus cursus elit vitae justo gravida, sed semper eros
                                            tincidunt. Donec at lorem vel dolor consectetur laoreet sit
                                            amet a augue. Sed ut magna felis.
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 px-2">
                                <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
                                    <img
                                        className="w-full"
                                        src="/img/card-image.jpg"
                                        alt="card"
                                    />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Card Title</div>
                                        <p className="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus cursus elit vitae justo gravida, sed semper eros
                                            tincidunt. Donec at lorem vel dolor consectetur laoreet sit
                                            amet a augue. Sed ut magna felis.
                                        </p>
                                    </div>
                                    <div className="px-6 py-4">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Danial</div>
                                    <p className="text-gray-700 text-base mb-2">admin</p>
                                    <p className="text-gray-700 text-base">testing</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="mx-auto overlow-auto max-w-7xl w-full px-4 py-6 sm:px-6 lg:px-8">
                            <div className='flex bg-gray-500 justify-center items-center px-4 py-5 bg-white rounded-lg shadow'>
                                <form className='w-full'>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="name"
                                                name="name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <hr className="border-1 border-gray-300 my-4" />
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <hr className="border-1 border-gray-300 my-4" />
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone_number"
                                            name="phone_number"
                                            type="phone_number"
                                            autoComplete="phone_number"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </header>
                </div>
                <Footer />
            </main>

        </>
    )
}
