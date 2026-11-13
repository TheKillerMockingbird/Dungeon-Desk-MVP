import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MonstersList from './pages/MonstersList';
import MonsterDetail from './pages/MonsterDetail';
import SpellsList from './pages/SpellsList';
import SpellDetail from './pages/SpellDetail';

function EquipmentList() {
  return <h1>Equipment List (coming soon)</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="monsters" element={<MonstersList />} />
          <Route path="monsters/:index" element={<MonsterDetail />} />
          <Route path="spells" element={<SpellsList />} />
          <Route path="spells/:index" element={<SpellDetail />} />
          <Route path="equipment" element={<EquipmentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;