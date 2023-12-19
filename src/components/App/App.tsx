// === REACT ROUTER DOM === //
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// === COMPONENTS === //
import Home from './Home';
import Slider from '../../pages/Slider';

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-screen h-screen overflow-x-hidden overflow-y-auto flex flex-col" role='application'>

        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/slider' element={<Slider />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
