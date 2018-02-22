import { GraphQLClient, request } from 'graphql-request';

const tipeApi = 'https://api.tipe.io/graphql';

const client = new GraphQLClient(tipeApi, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'ADJZHUWJGOGVWOY77QP8RQVXG',
    'Tipe-Id': 'NWE3MTQ0NGE3ZDMxZTgwMDEzNmFjOTA4'
  }
});


const query = `{
  pokemons(first: 5) {
        id 
        name
      }
  }
`;

const tipeIOQuery = `
{
  allArticleExamples {
    body
    title
    urlSlug
  } 
}
`;


/**
  could use this function to decide graphql/rest 
  {
    type: 'graphql',
    provider: 'graphql-request',
      query? ''
  endpoint: null
  }
*/
const getData = async queryArg => {
  console.log(queryArg);
  const data = await client.request(queryArg);
  console.log(data);
  const finished = await data;
  return finished;
};

const loadData = async () => await getData();

const profile = { username: 'jsmith', firstName: 'John', lastName: 'Smith' };
export const loadProfile = () => Promise.resolve(profile);

export { getData, loadData };
