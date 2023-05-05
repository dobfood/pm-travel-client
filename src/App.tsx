import Layout from './components/layout';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <div className='app'>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </div>
  );
}

export default App;
