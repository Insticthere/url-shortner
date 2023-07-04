const NotFoundPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900">
        <div className="container max-w-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start py-5 justify-center">
            <div className="text-center md:text-start my-3">
              <h1 className="font-bold text-white text-6xl mb-1">404</h1>
              <p className="text-white text-lg mb-4">The link might be deleted by admin or does not exist...</p>
              <a
                href="/"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="12" x2="9" y2="16" />
                  <line x1="5" y1="12" x2="9" y2="8" />
                </svg>
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;