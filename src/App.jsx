import React from 'react';
import styles from './app.module.scss';
import beers from './data/beers';
import NavBar from './components/NavBar';
import Main from './components/Main';


const App = () => {
  return (
    <>
    {console.log(beers)}
    <nav className={styles.navBar}>
      <NavBar />
    </nav>
    <main className={styles.main}>
      <Main beers={beers}/>
    </main>
    </>
  )
}

export default App

