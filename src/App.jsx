import './App.css'
import FirstHome from './FirstHome'
import PropertyListItem from './CardComponents/PropertyListItem'
import PropertyListingPage from './PropertyListingPage'
import NavigationBarExtended from './NavigationBarExtended'
import PropertyListMap from './PropertyListMap'
import SearchBar from './SearchBar'
import PropertyOverlayCard from './PropertyOverlayCard'
import PropertyDetails from './PropertyDetails'
import QuickViewPropertyItem from './CardComponents/QuickViewPropertyItem'
import ScheduleVisitInitial from './ScheduleVisit/ScheduleVisitInitial'
import ScheduleVisitSecond from './ScheduleVisit/ScheduleVisitSecond'
import SecondPage from './SecondPage'
import PhotoUploadGallery from './PostPropertyUI/PhotoUploadGalley'
import SchedulePage from './PostPropertyUI/SchedulePage'
import { Route, Routes } from 'react-router-dom'
import CustomTimePicker from './PostPropertyUI/CustomTimePicker'
import PopUp from './PostPropertyUI/TimePickerPopUp'
import RentalDetails from './PostPropertyUI/RentalDetails'
import AminetesPage from './PostPropertyUI/AminetesPage'
import LocationDetailsPage from './PostPropertyUI/LocalityDetailsPage'
import MapsComponent from './PostPropertyUI/MapComponent'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FirstHome/>}/>
        <Route path='/home' element={<FirstHome/>}/>
        <Route path='/second-page' element={<SecondPage/>}/>
        <Route path='/navextended' element={<NavigationBarExtended/>}/>
        <Route path='/property-list' element={<PropertyListMap/>}/>
        <Route path='/search' element={<SearchBar/>}/>
        <Route path='/property-overlay' element={<PropertyOverlayCard/>}/>
        <Route path='/property-details' element={<PropertyDetails/>}/>
        <Route path='/scheduled-visit' element={<ScheduleVisitSecond/>}/>
        <Route path='/scheduled-visit-initial' element={<ScheduleVisitInitial/>}/>
        <Route path='/photo-gallery' element={<PhotoUploadGallery/>}/>
        <Route path='/schedule' element={<SchedulePage/>}/>
        <Route path='/timepicker' element={<CustomTimePicker/>}/>
        <Route path='/popup' element={<PopUp/>}/>
        <Route path='/rental' element={<RentalDetails/>}/>
        <Route path='/amenities' element={<AminetesPage/>}/>
        <Route path='/location' element={<LocationDetailsPage/>}/>
        <Route path='/property-item' element={<PropertyListItem/>}/>
        <Route path='/map-component' element={<MapsComponent/>}/>
        <Route path='/quickview-property-item' element={<QuickViewPropertyItem/>}/>
        <Route path='/property-listing' element={<PropertyListingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
