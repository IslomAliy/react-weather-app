import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';

// api.openweathermap.org/data/2.5/weather?q={city name}
const API_KEY = "26901649b35efc546dff0f82dde13fe6";

class App extends React.Component {
  state = {}
  render(){
    return();
  }
}

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
