import React, { useMemo } from 'react'
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import './heroes.css';

export const HeroList = ({publisher}) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) //Que se renderice, cada que cambia el publisher
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns container-hero animate__animated animate__fadeIn">
           {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id} 
                        {...hero}
                    /> //Con el {...hero} le mando todas las propiedades por separado, que es como las estoy esperando
                ))
           } 
        </div>
    )
}
