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
import { Route, Routes } from 'react-router-dom'
import CalendarComponent from './ScheduleVisit/CalendarComponent'
// import DummyModal from './ScheduleVisit/DummyModal'
//import { ChakraProvider } from '@chakra-ui/react'
//import CustomPopover from './ScheduleVisit/CustomPopover'
//import SellRentOne from './PostPropertyUI/SellRentOne'
import PropertyDetailsPage from './PostPropertyUI/PropertyDetailsPage'
//import LocationDetailsPage from './PostPropertyUI/LocalityDetailsPage'
import AminetesPage from './PostPropertyUI/AminetesPage'

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
    {/* <ScheduleVisitSecond/> */}
    {/* <DummyModal/> */}
    {/* <SellRentOne/> */}
    {/* <PropertyDetailsPage/> */}
    {/* <LocationDetailsPage/> */}
    <AminetesPage/>
    </div>
    
  )
}

export default App