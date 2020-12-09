
import TaskBoard from './../taskboard/Tashboard'
import { Provider } from 'react-redux'
import configureStore from './../../redux/configureStore'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <TaskBoard/>
    </Provider>
    
  );
}

export default App;
