import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Character from './character.components';

const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return response.json();
  };

  // status of the fetch, error messages etc.
  const { data, status } = useQuery('characters', fetchCharacters);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="characters">
        {data.results.map((character: any) => (
          <Character character={character} />
        ))}
      </div>
    </>
  );
};

export default Characters;
