import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* This path matches: /posts/:source/:pid/:slug 
            The ":" makes them dynamic variables for useParams()
        */}
        <Route path="/posts/:source/:pid/:slug" element={<PostDetail />} />
        
        {/* Optional: match without a slug if needed */}
        <Route path="/posts/:source/:pid" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
