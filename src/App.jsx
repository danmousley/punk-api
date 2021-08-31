import React from 'react';
import styles from './app.module.scss';
import beers from './data/beers'
import NavBar from './components'
import Main from './components'


const App = () => {
  return (
    <>
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

