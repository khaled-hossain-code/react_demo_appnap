/* eslint-disable no-unused-vars */
import "./App.css";
import Hello from "./features/declarative/hello/Hello";
import Promotion from "./features/declarative/promotion/Promotion";
import Customer from "./features/customer/Customer";
import Users from "./features/users/Users";

function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      <Promotion />

      {/* <Customer /> */}

      {/* loading from api */}
      {/* <Users />  */}
    </div>
  );
}

export default App;
