import React from 'react';
import Vehicle from '../Vehicle/Vehicle';
import byke from '../../images/1.png';
import car from '../../images/2.png';
import bus from '../../images/3.png';
import train from '../../images/4.png';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const vehicles = [
        {
            name: 'Byke',
            vehicleType: 'Byke',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgUrl: byke,
            capacity: 1,
            price: 100
        },
        {
            name: 'Car',
            vehicleType: 'Car',
            description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: car,
            capacity: 4,
            price: 400
        },
        {
            name: 'Bus',
            vehicleType: 'Bus',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: bus,
            capacity: 40,
            price: 4000
        },
        {
            name: 'Train',
            vehicleType: 'Train',
            description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: train,
            capacity: 150,
            price: 15000
        }
    ]
    
    return (
        <div>
            <div style={style}>
            {
                vehicles.map(vehicle => <Vehicle key={vehicle.vehicleType} vehicle={vehicle}></Vehicle>)
            }
            </div>
        </div>
    );
};

export default Home;