import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to My MediMate</h1>
        <p className="text-gray-600 mb-6">Your Personal Medical Assistant</p>
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          User Login
        </button>
      </div>
    </div>
  );
};

export default Home;
