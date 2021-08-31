import React, {useState} from 'react';
import styles from './app.module.scss';
import beers from './data/beers';
import NavBar from './components/NavBar';
import Main from './components/Main';


const App = () => {
  const [beerList, setBeerList] = useState(beers)

  const searchBeers = (searchTerm) => {
    let searchResults = beers.filter((beer) => beer.name.toLowerCase().includes(searchTerm))
    console.log(searchResults)
    setBeerList(searchResults)
  }

  // searchBeers()

  return (
    <>
    {/* {beers.forEach((beer) => console.log(beer.name.toLowerCase().includes("b")))} */}
    <nav className={styles.navBar}>
      <NavBar searchBeers={searchBeers}/>
    </nav>
    <main beers={beerList} className={styles.main}>
      <Main beers={beerList}/>
    </main>
    </>
  )
}

export default App

