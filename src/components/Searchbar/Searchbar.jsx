import { Component } from 'react'
import { Header } from './SearchbarStyled';

import SearchForm from './SearchForm.jsx/SearchForm';

export default class Searchbar extends Component {

  state = {
    items: [],
    loading: false,
    error: null,
    searchName: "",
    page: 1,
  }  

  render() {
    const { items, loading, error } = this.state;
    return (
        <Header>
            <SearchForm />
        </Header>
    )
  }
}
