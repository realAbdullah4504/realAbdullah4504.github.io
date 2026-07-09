import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectDetail } from './pages/ProjectDetail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
