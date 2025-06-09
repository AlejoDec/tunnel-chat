import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <p className="mt-2 text-lg text-gray-600">Page Not Found</p>
                <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go to Home</Link>
            </div>
        </div>
    )
}

export default NotFound;