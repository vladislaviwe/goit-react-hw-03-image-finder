import { Component } from 'react'

import axios from 'axios';

import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component {

  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    perPage: 12,
  }  

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    const { page, perPage } = this.state;
    this.setState({
        loading: true,
    });

    axios.get(`https://pixabay.com/api/?key=29393857-621a457e4e6b44715a66c2c62&page=${page}&per_page=${perPage}&q=cat`)
    .then(({data}) => {
        console.log(data);
        this.setState(({items}) => {
            return {
                items: [...items, ...data.hits]
            }
        })
    })
    .catch(error => {
        this.setState({
            error
        })
    })
    .finally(() => this.setState({loading: false}))
  }

  render() {
    const { items, loading, error } = this.state;
    const isImages = Boolean(items.length);

    return (
      <div>
        <h2>Gallery</h2>
        {/* {loading && <Loader />} */}
        {error && <h2>Oops, something went wrong. Please try to reload the page</h2>}
        {isImages }
      </div>
    )
  }
}

