import './App.scss'
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Footer from './components/Footer/Footer'
import DesignedForFuture from './components/DesignedForFuture/DesignedForFuture'
import StateOfArtInfrastructure from './components/StateOfArt/StateOfArtInfrastructure'
import DesignedForFuture2 from './components/DesignedForFuture2/DesignedForFuture2'

function App() {

  return (
   <div className="App">
    <Header />
      {/* <MainSection /> */}
      <DesignedForFuture />
      <StateOfArtInfrastructure />
       <DesignedForFuture2 />
      <Footer />
   </div>
  )
}

export default App
