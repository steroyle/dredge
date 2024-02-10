import {Box} from '@mantine/core';
import './App.css';
import FishCard from './components/Fish/FishCard';
import FishGrid from './components/Fish/FishGrid';
import {fishes} from './data';

function App() {
  return (
    <Box className="container">
      <h1>Dredge Encyclopedia</h1>

      <FishGrid>
        {fishes.map((fish) => {
          return <FishCard fish={fish} />;
        })}
      </FishGrid>
    </Box>
  );
}

export default App;
