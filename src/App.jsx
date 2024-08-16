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
import ScheduleVisitInitial from './ScheduleVisit/ScheduleVisitInitial'
import ScheduleVisitSecond from './ScheduleVisit/ScheduleVisitSecond'
import MorningDiv from './ScheduleVisit/MorningDiv'
import SecondPage from './SecondPage'
import PhotoUploadGallery from './PostPropertyUI/PhotoUploadGalley'
import SchedulePage from './PostPropertyUI/SchedulePage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='' element=""/>
      </Routes>
      {/* <ScheduleVisitSecond/> */}
     
      {/* <ScheduleVisitSecond/>  */}
      {/* <ChakraProvider>
     <CustomPopover/>
     </ChakraProvider> */}
    {/* <FirstHome/> */}
    {/* <SecondPage/> */}
    {/* <NavigationBarExtended/> */}
    {/* <PropertyListMap/> */}
    {/* <SearchBar/>
    <PropertyOverlayCard/> */}
    {/* <PropertyDetails/> */}
    {/* <PropertyListMap/> */}
    {/* <ScheduleVisitInitial/> */}
    {/* <ScheduleVisitSecond/>
    <MorningDiv/> */}
    {/* <PhotoUploadGallery/> */}
    <SchedulePage/>
    </div>
    
  )
}

export default App