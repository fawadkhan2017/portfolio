class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard Error</h1>
            <p className="text-gray-600 mb-4">Something went wrong in the admin panel.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AdminApp() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(sessionStorage.getItem('fawad_admin_logged_in') === 'true');

  const handleLogin = () => {
    sessionStorage.setItem('fawad_admin_logged_in', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('fawad_admin_logged_in');
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50" data-name="admin-app" data-file="admin-app.js">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="index.html" className="flex items-center text-gray-500 hover:text-gray-900 transition-colors mr-4">
                <div className="icon-arrow-left mr-2"></div>
                Back to Site
              </a>
              <span className="text-xl font-bold text-gray-900 border-l border-gray-300 pl-4">Admin Dashboard</span>
            </div>
            {isLoggedIn && (
              <div className="flex items-center">
                <button onClick={handleLogout} className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors flex items-center">
                  <div className="icon-log-out mr-2"></div> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="flex-grow w-full py-8">
        {isLoggedIn ? <AdminDashboard /> : <AdminLogin onLogin={handleLogin} />}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <AdminApp />
  </ErrorBoundary>
);