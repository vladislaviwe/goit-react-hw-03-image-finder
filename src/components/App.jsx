import { Component } from 'react'

import axios from 'axios';
import { getImages } from 'api/api';

import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {

  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
  }  

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { page } = this.state;
    this.setState({
        loading: true,
    });

    try {
      const data = await getImages(page)
      this.setState(({items}) => {
        if (page === 1) {
          return {
            items: [...data.hits]
          }
        }
        return {
            items: [...items, ...data.hits]
        }
    })
    } catch (error) {
      this.setState({
        error
      })
    }
    finally {
      this.setState({
        loading: false
      })
    }
  }

  // fetchImages() {
  //   const { page, perPage } = this.state;
  //   this.setState({
  //       loading: true,
  //   });

  //   axios.get(`https://pixabay.com/api/?key=29393857-621a457e4e6b44715a66c2c62&page=${page}&per_page=${perPage}&q=cat`)
  //   .then(({data}) => {
  //       console.log(data);
  //       this.setState(({items}) => {
  //           if (page === 1) {
  //             return {
  //               items: [...data.hits]
  //             }
  //           }
  //           return {
  //               items: [...items, ...data.hits]
  //           }
  //       })
  //   })
  //   .catch(error => {
  //       this.setState({
  //           error
  //       })
  //   })
  //   .finally(() => this.setState({loading: false}))
  // }

  loadMore = () => {
    this.setState(({page}) => {
      return {
        page: page + 1
      }
    })
  }

  render() {
    const { items, loading, error } = this.state;
    const { loadMore } = this;
    const isImages = Boolean(items.length);

    return (
      <div>
        <Searchbar />
        {loading && <Loader />}
        {error && <h2>Oops, something went wrong. Please try to reload the page</h2>}
        {isImages && <ImageGallery items={items}/>}
        {isImages && <Button loadMore={loadMore}/>}
      </div>
    )
  }
}

