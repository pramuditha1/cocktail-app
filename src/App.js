import { useState } from 'react'
import Header from './components/Layout/Header';
import Favourites from './components/FavouritesItems/Favourites'
import './App.css';
import Cocktails from './components/Cocktails/Cocktails';

function App() {
  const [showModal, setShowModal] = useState(false)

  const showFavourites = () => {
    setShowModal(true)
  }

  const hideFavourites = () => {
    setShowModal(false)
  }
  return (
    <>
    {
      showModal && <Favourites onClose={hideFavourites}/>
    }
      <Header onShowFavourites={showFavourites}/>
      <Cocktails/>
    </>
  );
}

export default App;
