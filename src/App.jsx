import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstHome from './FirstHome'
import Navigationbar from './Navigationbar'
import PropertyListItem from './CardComponents/PropertyListItem'
import NavigationLeft from './NavigationLeft'
import SubHeader from './SubHeader'
import PropertyListingPage from './PropertyListingPage'
import NavigationBarExtended from './NavigationBarExtended'
import PropertyListMap from './PropertyListMap'
import SearchBar from './SearchBar'
import PropertyOverlayCard from './PropertyOverlayCard'
import PropertyDetails from './PropertyDetails'
import QuickViewPropertyItem from './CardComponents/QuickViewPropertyItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
   
    {/* <FirstHome/> */}
     {/* <PropertyListItem/> */}
    {/*<SubHeader/> */}
    {/* <NavigationLeft/> */}
    {/* <PropertyListingPage/> */}
    {/* <NavigationBarExtended/> */}
    {/* <PropertyListMap/> */}
    {/* <SearchBar/>
    <PropertyOverlayCard/> */}
    <PropertyDetails/>
    </div>
    
    
  )
}

export default App
