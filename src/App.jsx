import './App.css';
import User from './features/declarative/User';
import Customer from './features/hooks/Customer';

function App() {
  return (
    <div className="App">
      {/* <User /> */}
      <Customer />
    </div>
  );
}

export default App;
