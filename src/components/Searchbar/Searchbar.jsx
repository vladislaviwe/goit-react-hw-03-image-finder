import { Header } from './SearchbarStyled';

import SearchForm from './SearchForm.jsx/SearchForm';

const Searchbar = ({onSearch}) => {
    return (
        <Header>
            <SearchForm onSubmit={onSearch}/>
        </Header>
    )
  }

  export default Searchbar;