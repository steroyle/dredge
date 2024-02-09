import './App.css'
import { fishes } from './data';

function App() {

  return (
    <>
      <h1>Dredge Fish Finder</h1>
      <div className="card">
        {fishes.map((fish) => {
          return (
            <>
              <h2>{`#${fish.id} ${fish.name}`}</h2>
            </>
          );
        })}
      </div>
    </>
  )
}

export default App
