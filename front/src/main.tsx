import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import XTailwindLayout from './pages/TailwindXLayout.tsx';
import Layout from './pages/tailwind/layout.tsx';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/app" element={
        <>
          app route
          <App />
        </>
      } />
      <Route path="tailwindx" element={<XTailwindLayout />}>
        <Route path="layout" element={<Layout />} />
      </Route>
    </Routes>
  </HashRouter>,
)
