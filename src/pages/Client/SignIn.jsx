import React, { useEffect } from 'react';
import EmailSignIn from '../../Components/Client/Auth/EmailSignIn';
import GoogleSignIn from '../../Components/Client/Auth/GoogleSignIn';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-violet-500 via-indigo-500 to-violet-500">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* Left side content */}
                    <div className="hidden lg:flex flex-col text-white space-y-6 p-8">
                        <h1 className="text-5xl font-bold">Bienvenido !</h1>
                        <p className="text-xl opacity-90">
                            Accede a tu cuenta y continua tu viaje con nosotros.
                        </p>
                        <div className="relative mt-12">
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-8" />
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-12 translate-y-8" />
                            <div className="relative z-10">
                                <img
                                    src="/placeholder.svg?height=300&width=400"
                                    alt="Login illustration"
                                    className="w-full max-w-md mx-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="w-full max-w-md mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Accede a tu cuenta</h2>
                            <EmailSignIn />
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                </div>
                            </div>
                            <GoogleSignIn />
                            <div className="text-center space-y-2 mt-4">
                                <a href="#" className="text-sm text-gray-600 hover:text-purple-600">
                                    Olvidaste tu clave / contraseña?
                                </a>
                                <div className="border-t border-gray-100 pt-4">
                                    <a href="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
                                        Crea tu cuenta →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
