import { RecentlyViewedStored } from "../../types";
import './RecentlyView.css'

interface valueProps {
  WatchedValue: RecentlyViewedStored[];
}

export default function RecentlyView({ WatchedValue }: valueProps) {
  return (
    <div className="RecentlyView-container">
      <div className="section">
        <span>Recently Viewed Store</span>
        <div className="product-items">
          {WatchedValue.map((item) => (
            <div className="items-list">
              <img src={item.img} alt="Image" />
              <div className="item-name">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
