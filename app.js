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
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] text-white">
          <div className="text-center p-8 bg-[var(--bg-card)] rounded-xl border border-gray-800">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-[var(--text-muted)] mb-6">We're sorry, but the application crashed.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
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

function App() {
  try {
    return (
      <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-main)] font-sans" data-name="App" data-file="app.js">
        <Navbar />
        <main>
            <Hero />
            <Services />
            <Portfolio />
            <Reviews />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);