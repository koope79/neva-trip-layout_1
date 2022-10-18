import React from 'react';
import { TripCard } from '../TripCard/TripCard';
import "../TripCard/TripCard.scss";
import data_trips_content from "./dataTrips.content.json";

export const TripContainer = () => {
    const tripCards = data_trips_content.map(card => <TripCard key={card.id} img={card.img} title={card.title} banner={card.banner} timeIntervals={card.timeIntervals} price={card.price} isOnDock={card.isOnDock}/>)

    return (
        <div className='trip_container'>
            {tripCards}
        </div>
    );
}