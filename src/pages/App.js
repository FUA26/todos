import { Provider } from 'react-redux'
import { store } from '../config/redux';
import Routes from '../routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store} >
          <Routes></Routes>
    </Provider>
  );
}

export default App;
