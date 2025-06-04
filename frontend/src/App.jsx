import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl mb-4">LG Custody Platform</h1>
      <Link to="/login" className="text-blue-500 underline">
        Login
      </Link>
    </div>
  );
}

export default App;