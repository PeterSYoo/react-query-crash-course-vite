import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Character from './character.components';

const Characters = () => {
  const [page, setPage] = useState(42);

  const fetchCharacters = async ({ queryKey }: any) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  // status of the fetch, error messages etc.
  const { data, status, isPreviousData, isLoading, isError } = useQuery(
    ['characters', page],
    fetchCharacters,
    {
      keepPreviousData: true, //keepPreviousData displays the old data that's cached until we fetch the new data
    }
  );

  console.log(isPreviousData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="characters">
        {data.results.map((character: any) => (
          <Character character={character} />
        ))}
      </div>
      <div>
        <button disabled={page === 1} onClick={() => setPage((old) => old - 1)}>
          Prev
        </button>
        <button
          disabled={isPreviousData || !data.info.next}
          onClick={() => setPage((old) => old + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Characters;
