import "./searchbar.css"
import SearchIcon from "./assets/search.png"

export default function SearchBar(){

    return(
    <div class="search-bar-decorator">
    <input type="text" class="search-bar-default-2" placeholder="Add More"/>
    <button class="button-sm2"><img src={SearchIcon} alt="Search"/></button>
    <div className="search-bar-default-3">
    <select value={""} onChange={()=>{onSearchChange()}} className="select-default-2">
        <option value="BHK Type">BHK Type</option>
        <option>BHK Type</option>
        <option>BHK Type</option>
        <option>BHK Type</option>
        <option>BHK Type</option>
    </select>
    <select value={""} onChange={()=>{onSearchChange()}} className="select-default-2">
        <option>Building Type</option>
        <option>Building Type</option>
        <option>Building Type</option>
        <option>Building Type</option>
        <option>Building Type</option>
    </select>
    <select value={""} onChange={()=>{onSearchChange()}} className="select-default-3">
        <option>See All Filters</option>
        <option>See All Filters</option>
        <option>See All Filters</option>
        <option>See All Filters</option>
        <option>See All Filters</option>
    </select>
    </div>
    
</div>
    )
}