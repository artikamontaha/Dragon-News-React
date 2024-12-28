const ErrorPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page Not Found</p>
        <p className="text-gray-500 mt-2">The page youre looking for doesnt exist or has been moved.</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
