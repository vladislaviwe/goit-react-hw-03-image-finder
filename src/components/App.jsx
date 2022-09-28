import { Component } from 'react'

import { getImages, searchImages } from 'api/api';

import { Theme } from './AppStyled';

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
    searchName: ""
  }  

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(_, prevState) {
    const { page, searchName } = this.state;
    if (!searchName && prevState.page !== page) {
      this.fetchImages();
      return;
    }
    if (prevState.searchName !== searchName) {
      this.setState({
        items: [],
      })
    }
    if((searchName && prevState.searchName !== searchName) ||
    prevState.page !== page) {
      this.fetchImages(searchName, page);
    }
  }

  async fetchImages() {
    const { searchName, page } = this.state;
    this.setState({
        loading: true,
    });

    try {
      const data = await getImages(page);
      const searchData = await searchImages(searchName, page);
      this.setState(({items}) => {
        if (page === 1 && !searchName) {
          return {
            items: [...data.hits]
          }
        }
        if (page === 1 && searchName) {
          return {
            items: [...searchData.hits]
          }
        }
        if (!searchName) {
          return {
            items: [...items, ...data.hits]
          }
        }
        if (searchName) {
          return {
            items: [...items, ...searchData.hits]
          }
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

  loadMore = () => {
    this.setState(({page}) => {
      return {
        page: page + 1
      }
    })
  }

  onSearch = ({searchName}) => {
    this.setState({
      searchName,
    })
  }

  render() {
    const { items, loading, error, searchName } = this.state;
    const { loadMore, onSearch } = this;
    const isImages = Boolean(items.length);

    return (
      <Theme>
        <Searchbar onSearch={onSearch}/>
        {loading && <Loader />}
        {error && <h2>Oops, something went wrong. Please try to reload the page</h2>}
        {isImages && <ImageGallery items={items}/>}
        {!isImages && <h2>We didn't find any images for "{searchName}"</h2>}
        {isImages && <Button loadMore={loadMore}/>}
      </Theme>
    )
  }
}

