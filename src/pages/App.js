import { Provider } from 'react-redux'
import { store } from '../config/redux';
import Routes from '../routes';

function App() {
  return (
    
    <Provider store={store} >
        <Routes></Routes>
    </Provider>
  );
}

export default App;
