
export interface FlipkartData {
    categoriesMobile: string[]
    imageSlideMobile: ImageSlideMobile[]
    recentlyViewedStored: RecentlyViewedStored[]
    sponsored: Sponsored[]
    additionSponsored: AdditionSponsored[]
    campusItem: CampusItem[]
    bestsellers: Bestseller[]
    mansoonDeals: MansoonDeal[]
    notification: Notification
    exclusiveOffer: ExclusiveOffer
    paylater: Paylater[]
    grabOrGone: GrabOrGone[]
    flightFurniture: FlightFurniture[]
    fan: Fan
    mobiles: Mobile[]
    navItems: NavItem[]
    slideShow: SlideShow[]
    electronics: Electronic[]
    campusDeals: CampusDeal[]
    monsoonEssential: MonsoonEssential[]
  }
  

  export type CategoriesMobile =string
  
  export type ImageSlideMobile = string

  
  export interface RecentlyViewedStored {
    img: string
    name: string
  } 
  
  export type Sponsored = string
  
  export interface AdditionSponsored {
    imgName: string
  }
  
  export interface CampusItem {
    img: string
    name: string
    priceOffer: string
  }
  
  export interface Bestseller {
    img: string
    name: string
    priceOffer: string
  }
  
  export interface MansoonDeal {
    imgName: string
  }
  
  export interface Notification {
    img: string
    enableNotification: string
    button: string
  }
  
  export interface ExclusiveOffer {
    img: string
    offerReward: string
    button: string
  }
  
  export interface Paylater {
    imgText: string
  }
  
  export interface GrabOrGone {
    img: string
    name: string
    priceOffer: string
  }
  
  export interface FlightFurniture {
    imgName: string
  }
  
  export interface Fan {
    img: string
  }
  
  export interface Mobile {
    img: string
  }
  
  export interface NavItem {
    image: string
    name: string
    downArrow: boolean
  }
  
  export type SlideShow = string
  
  export interface Electronic {
    img: string
    name: string
    offer: string
    brands: string
  }
  
  export interface CampusDeal {
    image: string
    ProductNames: string
    text: string
  }
  
  export interface MonsoonEssential {
    imgages: string
    names: string
    offers: string
  }

  export interface ProductCard {
    image: string 
    ProductNames: string
    text: string
    brand: string
  }

  export interface SideDetailsCard {
    name: string
    allText: string
    image: string
  }
  
