
import TaskBoard from './../taskboard/Tashboard'
import { Provider } from 'react-redux'
import configureStore from './../../redux/configureStore'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <TaskBoard/>
    </Provider>
    
  );
}

export default App;
