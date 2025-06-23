import { useEffect, useState } from 'react'
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
import { Route, Routes, useNavigate } from 'react-router-dom'
import CustomTimePicker from './PostPropertyUI/CustomTimePicker'
import PopUp from './PostPropertyUI/TimePickerPopUp'
import RentalDetails from './PostPropertyUI/RentalDetails'
import AminetesPage from './PostPropertyUI/AminetesPage'
import LocationDetailsPage from './PostPropertyUI/LocalityDetailsPage'
import MapsComponent from './PostPropertyUI/MapComponent'

function App() {
  const routes = [{"/" : FirstHome} , {"/home": ScheduleVisitSecond } , {"/second-page" : SecondPage}, 
    { "/navextended": NavigationBarExtended}, {"/property-list" : PropertyListMap }, {"/search": SearchBar},
    {"/property-overlay": PropertyOverlayCard}, {"/property-details": PropertyDetails }, {"/scheduled-visit-initial": ScheduleVisitInitial},
    {"/scheduled-morning" : MorningDiv}, {"/photo-gallary": PhotoUploadGallery}, {"/schedule": SchedulePage},
     {"/timepicker" : CustomTimePicker}, {"/popup": PopUp}, {"/rental": RentalDetails},{"/amenities" : AminetesPage},
    {"/location" : LocationDetailsPage}, {"/property-item": PropertyListItem}, {"/map-component": MapsComponent},
    {"/quickview-property-item" : QuickViewPropertyItem}, {"/property-listing" : PropertyListingPage}
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

     useEffect(() => {
     // On mount: navigate to the first route
    const initialPath = Object.keys(routes[0])[0];
    navigate(initialPath);

      const interval = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % routes.length;
        const nextPath = Object.keys(routes[nextIndex])[0];
        navigate(nextPath); // 🔁 change the URL
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval); // Clean up on unmount
}, [])


   let path ="";
   let Component = null;
    for (let i = 0; i < routes.length; i++) {
        if (i === activeIndex) {
        const obj = routes[i];
        path = Object.keys(obj)[0];
        Component = obj[path]; 
        break;
    }
  }
  console.log(3333, activeIndex)

  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<FirstHome/>}/>
        <Route path='/scheduled_visit' element={<ScheduleVisitSecond/>}/> */}
        {/* <Route path='/custom_popover' element={<CustomPopover/>}/> */}
         {/* <Route path='/home' element={<FirstHome/>}/>
          <Route path='/second_page' element={<SecondPage/>}/>
          <Route path='/navextended' element={<NavigationBarExtended/>}/>
          <Route path='/property-list' element={<PropertyListMap/>}/>
          <Route path='/search' element={<SearchBar/>}/>
          <Route path='/property-overlay' element={<PropertyOverlayCard/>}/>
          <Route path='/property-details' element={<PropertyDetails/>}/>
          <Route path='/scheduled-visit-initial' element={<ScheduleVisitInitial/>}/>
          <Route path='/scheduled-morning' element={<MorningDiv/>}/>
          <Route path='/photo-gallary' element={<PhotoUploadGallery/>}/>
          <Route path='/schedule' element={<SchedulePage/>}/>
          <Route path='/timepicker' element={<CustomTimePicker/>}/>
          <Route path='/popup' element={<PopUp/>}/>
          <Route path='/rental' element={<RentalDetails/>}/>
          <Route path='/amenities' element={<AminetesPage/>}/>
          <Route path='/location' element={<LocationDetailsPage/>}/>
          <Route path='/property-item' element={<PropertyListItem/>}/>
          <Route path='/map-component' element={<MapsComponent/>}/>
          <Route path='/quickview-property-item' element={<QuickViewPropertyItem/>}/>
          <Route path='/property-listing' element={<PropertyListingPage/>}/> */}
          <Route path={path} element={<Component />} />
      </Routes>
      {/* <ScheduleVisitSecond/> */}
     
      {/* <ScheduleVisitSecond/>  */}
      {/* <ChakraProvider> */}
    {/*  <CustomPopover/>
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
    {/* <SchedulePage/> */}
    {/* <ScheduleVisitSecond/> */}
    {/* <CustomTimePicker/> */}
    {/* <PopUp/> */}
    {/* <RentalDetails/> */}
    {/* <AminetesPage/> */}
    {/* <LocationDetailsPage/> */}
    {/* <PropertyListItem/> */}
     {/* <AminetesPage/> */}
     {/* <ScheduleVisitSecond/> */}
     {/* </ChakraProvider> */}
    </div>
    
  )
}

export default App