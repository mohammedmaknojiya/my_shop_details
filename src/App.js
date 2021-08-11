import './App.css';
import Layout from './Components/Layout';
import { Provider } from 'react-redux';
import store from './redux_files/Store';


function App() {
  return (
    <>
    <Provider store={store}>
      <div className="App">
        <Layout/>
      </div>
     
    </Provider>

    </>
  );
}

export default App;
