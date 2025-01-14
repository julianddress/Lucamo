import AnimatedBackground from '@/Components/Admin/AnimatedBackground/AnimatedBackground'
import EmailSignIn from '@/Components/Admin/Auth/EmailSignIn'
import impolujos from '@/assets/img/impolujos.jpg'

export default function AdminSignIn() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
            <AnimatedBackground />
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex relative z-10">
                <div className="w-1/2 p-8 self-center">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">LUCAMO</h1>
                        <p className="text-gray-300">Panel de Administración</p>
                    </div>
                    <EmailSignIn />
                </div>
                <div className="w-1/2 relative">
                    <img
                        className='w-max'
                        src={impolujos}
                        alt="Lucamoy Admin"
                    />
                </div>
            </div>
        </div>
    )
}

