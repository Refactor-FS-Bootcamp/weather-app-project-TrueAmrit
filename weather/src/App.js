
import "./App.css";
import { ApplicationContextProvider } from "./components/common/context/app-contest";
import AppRoute from "./Routes/app-routes";

function App() {
  
  return (
    <div className="App">
    
      <ApplicationContextProvider>
  
      <AppRoute/>
      
      </ApplicationContextProvider>
    </div>
  );
}
export default App;
