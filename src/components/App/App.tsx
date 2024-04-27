// === REACT ROUTER DOM === //
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// === COMPONENTS === //
import Home from './Home';
import Slider from '../../pages/Slider';
import Weather from '../../pages/Weather';

function App() {
  return (
    <BrowserRouter>
      <div
        className="relative flex flex-col w-screen h-screen overflow-x-hidden overflow-y-auto"
        role="application"
      >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/slider" element={<Slider />} />
            <Route path="/weather" element={<Weather />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
