import { CategoriesMobile } from "../../types";
import "./Categories.css";

interface imgList {
  MobileValue: CategoriesMobile[]
  
}


export default function Categories({ MobileValue}: imgList) {
  return (
    <>
    <nav>
      <div className="nav-categories">
        {MobileValue.map((item) => (
          <img src={item} alt="item-pictures" />
        ))}
      </div>
    </nav>
    </>
  );
}

