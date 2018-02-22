import { GraphQLClient, request } from 'graphql-request';
    const tipeApi = 'https://api.tipe.io/graphql';

/** 
  

*/
const client = new GraphQLClient(tipeApi, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${process.env.REACT_APP_TIPE_API_KEY}`,
    'Tipe-Id': `${process.env.REACT_APP_TIPE_API_SECRET}`,
  }
});

const query = `{
  pokemons(first: 5) {
        id 
        name
      }
  }
`;

const getData = async queryArg => {
  const data = await client.request(queryArg);
  const finished = await data;
  console.log(finished);
  return finished;
};

export { getData };
