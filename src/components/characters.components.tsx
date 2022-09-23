import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

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
      {data.results.map((character: any) => (
        <div>{character.name}</div>
      ))}
    </>
  );
};

export default Characters;
