import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import { CategoriesMobile } from "./types"
import { NavItem } from "./types";
import DeskCategorie from "./components/Categories/DeskCategorie";

function App() {

  const [categoriesData, setCategoriesData] = useState<CategoriesMobile[]>([]);
  const [desktopCategoriesData, setDesktopCategoriesData] = useState< NavItem[]>([]);

  const fetchData = () => {
    fetch("./data.json")
      .then((response) => {
        return response.json() 
      })
      .then((data) => {
        setCategoriesData(data.categoriesMobile);
        setDesktopCategoriesData(data.navItems)
      });
  };

  console.log(desktopCategoriesData);
  

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <Header />
      <Categories MobileValue={categoriesData}/>
      <DeskCategorie desktopValue={desktopCategoriesData}/>
    </div>
  );
}

export default App;

/*  const [categoriesData, setCategoriesData] = useState([])

const fetchData = () => {
  fetch('./data.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    setCategoriesData(data.categories)
  })
}

useEffect(() => {
  fetchData()
}, [])


*/
