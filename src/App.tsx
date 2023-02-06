
import { ContentContainer } from './components/Content/ContentContainer.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';

function App() {
  return (
    <div className="app">
      <Header />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;