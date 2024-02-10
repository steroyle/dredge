import './App.css';
import FishCard from './components/Fish/FishCard';
import FishGrid from './components/Fish/FishGrid';
import WaterTypeList from './components/WaterTypeList';
import {fishes} from './data';

function App() {
  return (
    <>
      <h1>Dredge Encyclopedia</h1>

      <FishGrid>
        {fishes.map((fish) => {
          return <FishCard fish={fish} />;
        })}
      </FishGrid>

      <WaterTypeList />
    </>
  );
}

export default App;
