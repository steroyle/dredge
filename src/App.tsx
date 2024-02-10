import './App.css';
import FishCard from './components/Fish/FishCard';
import WaterTypeList from './components/WaterTypeList';
import {fishes} from './data';

function App() {
  return (
    <>
      <h1>Dredge Encyclopedia</h1>

      <div className="fish-grid">
        {fishes.map((fish) => {
          return <FishCard fish={fish} />;
        })}
      </div>

      <WaterTypeList />
    </>
  );
}

export default App;
