import { Provider } from 'react-redux'
import { store } from '../config/redux';

function App() {
  return (
    <Provider store={store} >
      Hahahahah
  </Provider>
  );
}

export default App;
