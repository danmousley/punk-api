import React, {useState, useEffect} from 'react';
import styles from './app.module.scss';
import beers from './data/beers';
import NavBar from './components/NavBar';
import Main from './components/Main';
import getBeers from './services/beers.service'


const App = () => {
  const [beerList, setBeerList] = useState([])
  const [hasAbvFilter, setHasAbvFilter] = useState(false)
  const [hasClassicFilter, setHasClassicFilter] = useState(false)
  const [hasAcidityFilter, setHasAcidityFilter] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(async () => {
    let beers = await getBeers(hasAbvFilter, hasClassicFilter, hasAcidityFilter, searchTerm)
    if (hasAcidityFilter) {
      beers = beers.filter((beer) => beer.ph < 4.0)
    }
    setBeerList(beers)
  }, [searchTerm, hasAbvFilter, hasAcidityFilter, hasClassicFilter])


  const searchBeers = (searchText) => {
    setSearchTerm(searchText)
  }

  const filterBeers = (filter) => {
    if (filter === "abv") {
      console.log(hasAbvFilter)
      setHasAbvFilter(!hasAbvFilter)
      console.log(hasAbvFilter)
    } else if (filter === "classic") {
      setHasClassicFilter(!hasClassicFilter)
    } else if (filter === "acidity") {
      setHasAcidityFilter(!hasAcidityFilter)
    } else {
      console.log("failed")
    }
  }

  return (
    <>
    <nav className={styles.navBar}>
      <NavBar searchBeers={searchBeers} filterBeers={filterBeers}/>
    </nav>
    <main beers={beerList} className={styles.main}>
      <Main beers={beerList}/>
    </main>
    </>
  )
}

export default App

