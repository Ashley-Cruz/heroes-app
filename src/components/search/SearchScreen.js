import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from './../heroes/HeroCard';
import { useForm } from './../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from './../../selectors/getHeroesByName';
import '../heroes/heroes.css'

export const SearchScreen = ({history}) => {

    const location = useLocation();
    // console.log(location.search) //El .search así viene, ese nombre es fijo
    // console.log(queryString.parse(location.search))
    const {q=''} = queryString.parse(location.search); //Si no tiene nada, arroja un undefined, por lo tanto, le pongo un string vacio para que no me de un error
    // console.log(q);
    
    
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const {searchText} = formValues;
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }
    const heroesFiltered = useMemo( () => getHeroesByName(q), [q]);

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="container-search-t">
                <div className="container-search search">
                    <h4>Search Form</h4>
                    <hr/>
                    <form
                        onSubmit={handleSearch}
                    >
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={handleInputChange}
                            name="searchText"
                            value={searchText}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn-h"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="container-search result">
                    <h4>Results</h4>
                    <hr/>

                    { (q === '') 
                        && <div className="alert alert-info">Search a hero</div>
                    }

                    { (q !== '' && heroesFiltered.length === 0 ) 
                        && <div className="alert alert-danger">There is no a hero with {q}</div>
                    }
                    
                    {
                        heroesFiltered.map( hero => (
                            <div className="list-heroes" key={hero.id}>
                                <HeroCard 
                                    key={hero.id}
                                    {...hero}
                                />
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}
