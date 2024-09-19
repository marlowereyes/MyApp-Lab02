import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {
  return (
    <div className="app">
      <h1>Best-selling music artists</h1>
      <ArtistDetails artists={artists} />
    </div>
  );
}

export default App;
