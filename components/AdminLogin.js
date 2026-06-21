function AdminLogin({ onLogin }) {
    try {
        const [password, setPassword] = React.useState('');
        const [error, setError] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            // Using a simple hardcoded password for demonstration purposes
            if (password === 'admin') {
                onLogin();
            } else {
                setError('Invalid password. (Hint: use "admin")');
            }
        };

        return (
            <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow-sm border border-gray-200" data-name="admin-login" data-file="components/AdminLogin.js">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 text-[var(--primary-color)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="icon-lock text-3xl"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
                    <p className="text-gray-500 mt-2">Please enter your password to access the dashboard.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]'} rounded-md outline-none transition-colors`}
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2 flex items-center"><div className="icon-circle-alert mr-1"></div>{error}</p>}
                    </div>
                    <button type="submit" className="w-full btn-primary py-3 text-lg font-semibold">
                        Login
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        console.error('AdminLogin component error:', error);
        return null;
    }
}