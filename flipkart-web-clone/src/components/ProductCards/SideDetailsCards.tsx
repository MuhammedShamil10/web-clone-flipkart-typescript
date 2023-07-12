import { SideDetailsCard } from '../../types';
import './SideDetailsCards.css';

interface SideProp {
  sideItems: SideDetailsCard
}

export default function SideDetailsCards({sideItems}: SideProp) {
  return (
  
        <div className="left-electronic-sections"> 
        <div className="left-text">
          <h2>{sideItems.name}</h2>
          <div className="button-view">
            <a href=''>{sideItems.allText}</a>
          </div>
        </div>
          <div className="image">
            <img src={sideItems.image} alt="" />
          </div>
      </div>
  )
}
