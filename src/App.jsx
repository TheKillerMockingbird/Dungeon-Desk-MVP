import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function MonstersList() {
  return <h1>Monsters List (coming soon)</h1>;
}
function SpellsList() {
  return <h1>Spells List (coming soon)</h1>;
}
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
          <Route path="spells" element={<SpellsList />} />
          <Route path="equipment" element={<EquipmentList />} />
          {/* Dynamic routes will go here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;