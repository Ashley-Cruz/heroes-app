import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from './../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg'; //rescurso estático
// import { heroImages } from './../../helpers/heroImages';
const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({history}) => { //Este history lo desestrutura apenas en este componente, es decir, no se mandó de ningún otro

    const {heroeId} = useParams();
    // console.log(heroeId);

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    // const hero = getHeroById(heroeId);
    // console.log(hero);

    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if(history.length <=2){
            history.push('/');
        }else{
            history.goBack();
        }
    }

    const {
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters
    } = hero;

    return (
        <div className="container-hero">
            <div className="container-div container-img-h">
                <img
                    // src={`../assets/heroes/${heroeId}.jpg`} //desde public/assets
                    // src={batman}
                    src={heroImages(`./${heroeId}.jpg`).default}
                    alt={superhero}
                    className="img-cont animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="container-div container-text-h animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <p><b>Alter ego: </b>{alter_ego}</p>
                <p><b>Publisher: </b>{publisher}</p>
                <p><b>First appearance: </b>{first_appearance}</p>
                <h5>Characters:</h5>
                <p>{characters}</p>
                <button 
                    className="btn-h"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
        // <div className="row mt-5">
        //     <div className="col-4">
        //         <img
        //             src={`../assets/heroes/${heroeId}.jpg`}
        //             alt={superhero}
        //             className="img-thumbnail"
        //         />
        //     </div>
        //     <div className="col-8">
        //         <h3>{superhero}</h3>
        //         <ul className="list-group list-group-flush">
        //             <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
        //             <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
        //             <li className="list-group-item"><b>First appearance: </b>{first_appearance}</li>
        //         </ul>
        //         <h5>Characters</h5>
        //         <p>{characters}</p>
        //         <button 
        //             className="btn btn-outline-info"
        //             onClick={handleReturn}
        //         >
        //             Return
        //         </button>
        //     </div>
        // </div>
    )
}
