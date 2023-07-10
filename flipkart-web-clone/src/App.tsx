import "./App.css";
import "./Main.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import { CampusItem, CategoriesMobile } from "./types"
import { NavItem } from "./types";
import DeskCategorie from "./components/Categories/DeskCategorie";
import ImgSlider from "./components/ImageSlider/ImgSlider";
import DesktopSlider from "./components/DesktopSlider/DesktopSlider";
import RecentlyView from "./components/RecentlyView/RecentlyView";
import Sponsored from "./components/Sponsored/Sponsored";
import CampusItems from "./components/CampusItems/CampusItems";
import Bestseller from "./components/Bestseller/BestsellerM";
import BestsellerM from "./components/Bestseller/BestsellerM";
import Mansoon from "./components/mansoonDeals/Mansoon";
import GraborGone from "./components/GraborGone/GraborGone";
import Electronics from "./components/ElectronicsItems/Electronics";
import ToysandMore from "./components/ToysandMore/ToysandMore";


function App() {
  const[categoriesData, setCategoriesData] = useState<CategoriesMobile[]>([]);
  const[desktopCategoriesData, setDesktopCategoriesData] = useState< NavItem[]>([]);
  const[imageSlider, setImageSlider] = useState([]);
  const[desktopSlider, setDesktopSlider] = useState([]);
  const[recentlyItem, setRecentlyItem] = useState([]);
  const[sponsoredData, setSponsoredData] = useState([]);
  const[campusItemData, setCampusItem] = useState([]);
  const[bestsellerData, setBestseller] = useState([]);
  const[mansoonDealsData,setmansoonDeals] = useState([]);
  const[grabOrgoneData, setgrabOrgone] = useState([]);
  const[electronicData, setElectronicData] = useState([]);
  const[toysAndData, setToysAndData] = useState([]);

  const fetchData = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json() 
      })
      .then((data) => {
        setCategoriesData(data.categoriesMobile);
        setDesktopCategoriesData(data.navItems);
        setImageSlider(data.imageSlideMobile);
        setDesktopSlider(data.slideShow);
        setRecentlyItem(data.recentlyViewedStored);
        setSponsoredData(data.sponsored);
        setCampusItem(data.campusItem);
        setBestseller(data.bestsellers);
        setmansoonDeals(data.mansoonDeals);
        setgrabOrgone(data.grabOrGone);
        setElectronicData(data.electronics);
        setToysAndData(data.toysMore)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <Header />
      <Categories MobileValue={categoriesData}/>
      <DeskCategorie desktopValue={desktopCategoriesData}/>
      <div className="Main">
      <ImgSlider sliderValue={imageSlider}/>
      <DesktopSlider desktopValue={desktopSlider} />
      <RecentlyView WatchedValue={recentlyItem} />
      <Sponsored sponseredValue={sponsoredData}/>
      <CampusItems campusValue={campusItemData} />
      <BestsellerM sellerValue={bestsellerData}/>
      <Mansoon mansoonValue={mansoonDealsData}/>
      <GraborGone grabOrGoneValue={grabOrgoneData} />
      <Electronics electronicValue={electronicData}/>
      <ToysandMore toysValue={toysAndData}/>
      </div>
    </div>
  );
}

export default App;
