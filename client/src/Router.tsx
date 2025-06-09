import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home/App';
import About from './views/About/App';
import NotFound from './views/404/App';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
