import { Routes} from 'react-router-dom'
import './App.css'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" />
        <Route path="/auth" />
        <Route path="/checkout" />
      </Routes> 
    </div>
    );
}

export default App
