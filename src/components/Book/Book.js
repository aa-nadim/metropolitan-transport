import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import Byke from '../../images/1.png';
import Car from '../../images/2.png';
import Bus from '../../images/3.png';
import Train from '../../images/4.png';
import peopleicon from '../../images/peopleicon.png';
import { Map, GoogleApiWrapper , Marker } from 'google-maps-react';

const Book = () => {
    const {vehicleType} = useParams();
    const [newPlace, setNewPlace] = useState(false);
    const [place, setPlace] = useState({
        place1:'',
        place2:''
    });
    const handleBlur = (e) => {
        const newPlaceInfo = {...place};
        newPlaceInfo[e.target.name] = e.target.value;
        setPlace(newPlaceInfo);
    }
    const mapStyles = {
        width: '100%',
        height: '100%',
      };

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>Let's book a {vehicleType} </h1>
                <p>Want a <Link to="/home">different Vehicle?</Link> </p> 
            </div>
            <div className="row">
                <div className="col-sm-3 ml-5 pl-5" style={{border:'1px solid gray'}}>
                    <div className="p-2">
                        {
                        newPlace?
                        <form>
                            <div>
                                <h3 className="bg-primary text-white">{place.place1}</h3>
                                <p className="bg-danger text-white">To</p>
                                <h3 className="bg-primary text-white">{place.place2}</h3>
                            </div>
                            <br/><br/>
                            <div className="d-flex justify-content-between bg-white " style={{border:'1px solid green'}}>
                            {
                                vehicleType === 'Byke'? <img src={Byke} style={{height:'50px',width:'60px'}} alt=""/> :
                                vehicleType==='Car'?<img src={Car} style={{height:'50px',width:'60px'}} alt=""/> : 
                                vehicleType==='Bus'?<img src={Bus} style={{height:'50px',width:'60px'}} alt=""/> : <img src={Train} style={{height:'50px',width:'60px'}} alt=""/>
                            }
                            <p>{vehicleType}</p>
                            <img src={peopleicon} style={{height:'20px',width:'20px'}} alt=""/>
                            {
                                vehicleType === 'Byke'? <p>1</p> :
                                vehicleType==='Car'?<p>4</p>  : 
                                vehicleType==='Bus'?<p>40</p>  : <p>150</p> 
                            }
                            {
                                vehicleType === 'Byke'? <p>$100</p> :
                                vehicleType==='Car'?<p>$400</p>  : 
                                vehicleType==='Bus'?<p>$4000</p>  : <p>$15000</p> 
                            }
                            </div>
                            <br/><br/>
                            <div className="d-flex justify-content-between bg-white " style={{border:'1px solid green'}}>
                            {
                                vehicleType === 'Byke'? <img src={Byke} style={{height:'50px',width:'60px'}} alt=""/> :
                                vehicleType==='Car'?<img src={Car} style={{height:'50px',width:'60px'}} alt=""/> : 
                                vehicleType==='Bus'?<img src={Bus} style={{height:'50px',width:'60px'}} alt=""/> : <img src={Train} style={{height:'50px',width:'60px'}} alt=""/>
                            }
                            <p>{vehicleType}</p>
                            <img src={peopleicon} style={{height:'20px',width:'20px'}} alt=""/>
                            {
                                vehicleType === 'Byke'? <p>1</p> :
                                vehicleType==='Car'?<p>4</p>  : 
                                vehicleType==='Bus'?<p>40</p>  : <p>150</p> 
                            }
                            {
                                vehicleType === 'Byke'? <p>$100</p> :
                                vehicleType==='Car'?<p>$400</p>  : 
                                vehicleType==='Bus'?<p>$4000</p>  : <p>$15000</p> 
                            }
                            </div>
                            <br/><br/>
                            <div className="d-flex justify-content-between bg-white " style={{border:'1px solid green'}}>
                            {
                                vehicleType === 'Byke'? <img src={Byke} style={{height:'50px',width:'60px'}} alt=""/> :
                                vehicleType==='Car'?<img src={Car} style={{height:'50px',width:'60px'}} alt=""/> : 
                                vehicleType==='Bus'?<img src={Bus} style={{height:'50px',width:'60px'}} alt=""/> : <img src={Train} style={{height:'50px',width:'60px'}} alt=""/>
                            }
                            <p>{vehicleType}</p>
                            <img src={peopleicon} style={{height:'20px',width:'20px'}} alt=""/>
                            {
                                vehicleType === 'Byke'? <p>1</p> :
                                vehicleType==='Car'?<p>4</p>  : 
                                vehicleType==='Bus'?<p>40</p>  : <p>150</p> 
                            }
                            {
                                vehicleType === 'Byke'? <p>$100</p> :
                                vehicleType==='Car'?<p>$400</p>  : 
                                vehicleType==='Bus'?<p>$4000</p>  : <p>$15000</p> 
                            }
                            </div>
                        </form>:
                        <form>
                            <h4 className="bg-success text-white">Pick From</h4>
                            <input type="text" name="place1" onBlur={handleBlur}  placeholder="Place name"/>
                            <br/><br/>
                            <h4 className="bg-success text-white">Pick To</h4>
                            <input type="text" name="place2" onBlur={handleBlur} placeholder="Place name" required/>
                            <br/><br/>
                            <button onClick={()=> setNewPlace(!newPlace)}>search</button>
                             <br/><br/>
                        </form>
                        }
                    </div>
                </div>
                <div className="col-sm-5 ml-5 pl-5" >
                    <div style={{border:'1px solid gray'}}>
                        <img src={map} alt="" />
                        {/* <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 47.444, lng: -122.176}}
                            >
                            <Marker position={{ lat: 48.00, lng: -122.00}} />
                        </Map> */}

                    </div>
                </div>
            </div>
        </div>
    );
     
};

export default Book;