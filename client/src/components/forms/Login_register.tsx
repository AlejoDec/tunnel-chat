import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [formView, setFormView] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        formView === 'login' ? (
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Login</button>
                </form>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Don't have an account? <a onClick={() => setFormView('register')} className="text-blue-600 hover:underline cursor-pointer">Register</a></p>
                </div>
            </div>
        ) : (
            <div className="w-full max-w-md mx-auto bg-white p-8 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Register</button>
                </form>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Already have an account? <a onClick={() => setFormView('login')} className="text-blue-600 hover:underline cursor-pointer">Login</a></p> 
                </div>
            </div>
        )
    )
}

export default LoginForm;