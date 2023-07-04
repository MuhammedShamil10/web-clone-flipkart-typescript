import './Sponsored.css'

interface sponseredProps {
    sponseredValue: string[]
}

export default function Sponsored({sponseredValue}: sponseredProps) {
  return (
    <>
    <div className='sponser-container'>
        <div className="sponser-product">
          {sponseredValue.map((item) => (
            <img src={item} alt="" />
          ))}
        </div>
    </div>
    </>
  )
}
