import './App.css'; 

import Home from './Pages/Home';

const App = ()=>{ 

  return (
      <div>
        <Home name="John" age={34} email="john.cena@mail.com"  />
      </div>
  )
}

export default App
