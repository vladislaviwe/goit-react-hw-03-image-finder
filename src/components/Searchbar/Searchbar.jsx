import { Header } from './SearchbarStyled';

import SearchForm from './SearchForm.jsx/SearchForm';

const Searchbar = ({onSearch}) => {
    return (
      <div>
        <Header>
            <SearchForm onSubmit={onSearch}/>
        </Header>
      </div>
    )
  }

  export default Searchbar;