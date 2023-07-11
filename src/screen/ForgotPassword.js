import { useNavigate } from "react-router-dom";


export default function ForgotPassword() {
    const navigate = useNavigate();
    const handleForgotPassword = () => {
        navigate("/reset-password");
    }
    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div>
                    <img
                        className='mx-auto h-12 w-auto'
                        src="/icons/logo.png"
                        alt='Your Company'
                    />
                    <h2 className='my-6 text-center text-3xl font-bold tracking-tight'>
                        Forgot Password?
                    </h2>

                    <div className='flex justify-center container mx-auto mt-6 text-sm'>
                        <div className='flex '>
                            Remember your password?
                            <a
                                href='login'
                                className='font-medium text-red-600 hover:text-red-500 pl-1'
                            >
                                Login Here
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                onClick={handleForgotPassword}>
                                Reset Your Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
