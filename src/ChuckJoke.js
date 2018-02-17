import React from "react";
import Chuck from "chucknorris-io";
const chuckApi = new Chuck();

const folder_id = '5a7fae846983f300134ff0d0';
let variables = { id: '5a7fae846983f300134ff0d0' };
const makeQuery = ({ queryString = '', details}) => {
  const query = Object.assign({}, queryString, {
    details
  });
}

let query = `
query {
    allBlogPosts {
      postBody,
      _meta {
          id
      }
  }
}
`;

export default class ChuckJoke extends React.Component {
  state = { tipeIOData: null, joke: null, loading: false, url: null, blocks: null };
    headers = {
        'Content-Type': 'application/json',
        'Authorization': `${process.env.REACT_APP_TIPE_API_KEY}`,
        'Tipe-Id': `${process.env.REACT_APP_TIPE_API_SECRET}`
    };
    apiDetails = {
        query: 'allBlogPosts'
    }
    restApi = async headers => {
        const resp = await fetch(`${process.env.REACT_APP_TIPE_REST_URL}folder/5a7fae846983f300134ff0d0`, {
            method: 'get',
            headers: headers
          });
        const data = await resp.json();
        const parsed = await data;
          console.log(parsed)
    }
    gqlQuery  = async (headers) => {
       const resp = await fetch('https://api.tipe.io/graphql', {
            method: 'post',
            headers: headers,
            body: JSON.stringify({ 
                query: query, 
                variables: variables })
          });
          
          const response = await resp.json();
          const data = await response.data;
     
          this.setState({data})
          console.log(this.state);
        }
        
  fetchJoke = async ({category}) => {
    console.log(this.headers) 
    category === 'graphql' ? this.gqlQuery(this.headers) : this.restApi(this.headers);

    const res = await chuckApi.getRandomJoke(category);
    this.setState({ joke: res.value, url: res.sourceUrl, loading: false });
  };

  fetchApi = async (apiType) => {
      console.log('fetchAPi is goin')
      console.log(apiType)
  }

  componentDidMount() {
    this.fetchJoke({ 
        category: this.props.category,
    });
    console.log(this.props)
    this.fetchApi(this.props.apiType);
  }

  render() {
    return this.props.children({
    blocks: this.state.blocks,
    fetchApi: this.fetchApi,
      fetchJoke: this.fetchJoke,
      loading: this.state.loading,
      joke: this.state.joke,
      url: this.state.url,
      data: this.state.data
    });
  }
}
