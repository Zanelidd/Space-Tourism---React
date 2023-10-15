import { useParams } from 'react-router-dom';
import datas from '../datas/data.json'
import Destination from '../components/Destination';

const Destinations = () => {
    const { id } = useParams();
    return (

        datas.destinations.map((destination) => {
            if (destination.name.toLowerCase() === id)
                return (

                    <Destination
                        name={destination.name.toUpperCase()}
                        image={destination.images.png}
                        description={destination.description}
                        distance={destination.distance}
                        travel={destination.travel}
                    />


                )
        }
        )
    )
}








export default Destinations;