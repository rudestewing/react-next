import {useState, useEffect} from 'react';

import Link from 'next/link';

import Layout from '../../comps/Layout';

export default () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCharacters([
                {id: 1, name: 'name 1', str: 20, agi: 16, int: 16},
                {id: 2, name: 'name 2', str: 22, agi: 10, int: 23},
                {id: 3, name: 'name 3', str: 20, agi: 25, int: 15},
                {id: 4, name: 'name 4', str: 24, agi: 10, int: 26},
                {id: 5, name: 'name 5', str: 19, agi: 39, int: 15},
                {id: 6, name: 'name 6', str: 17, agi: 10, int: 30}
            ]);
        }, 500);   

        return () => {

        }
    }, [])

    return (
        <Layout>
            <h1> Characters </h1>
            <p> select character </p>
            <ul>
                {characters.length > 0 ? characters.map((item, index) => {
                    return (
                        <li key={index}> 
                            <Link 
                                href={`/characters/character-detail?id=${item.id}`} 
                                as={`/characters/character-detail/${item.id}`} >
                                <a> {item.name} </a>
                            </Link> 
                        </li>
                    )
                }) : (
                    <div> loading characters... </div>
                )}
            </ul>
        </Layout>
    )
}