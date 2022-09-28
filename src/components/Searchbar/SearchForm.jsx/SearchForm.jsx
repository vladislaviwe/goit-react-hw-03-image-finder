import { Component } from 'react'

import { Form, FormButton, FormButtonLabel, FormInput } from './SearchFormStyled';

export default class SearchForm extends Component {
  state = {
    searchName: "",
  }

  handleChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({...this.state});
    this.reset()
  }

  reset() {
    this.setState({
      searchName: ""
    })
  }
  
  render() {
    const { searchName } = this.state;
    const { handleSubmit, handleChange } = this;


    return (
        <Form onSubmit={handleSubmit}>
            <FormButton type="submit">
                <FormButtonLabel onClick={handleSubmit}>Search</FormButtonLabel>
            </FormButton>

            <FormInput
                value={searchName}
                onChange={handleChange}
                name="searchName"
                type="text"
                autocomplete="off"
                autoFocus
                placeholder="Search images and photos"
                required
            />
        </Form>
    )
  }
}
