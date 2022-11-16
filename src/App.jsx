import { FetchFind, FetchCounter, FetchOrder } from './components';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <FetchOrder />
      <FetchFind />
      <FetchCounter />
    </div>
  );
}

export default App;
