import './index.css'

const DestinationItem =(props)=>{

    const {destinationDetails}=props

   const  {imgUrl,name}=destinationDetails

    return (
        <li className="destination-item">
            <img src={imgUrl} alt={name} className="image"/>
            <p className="place">{name}</p>
        </li>
    )

}

export default DestinationItem