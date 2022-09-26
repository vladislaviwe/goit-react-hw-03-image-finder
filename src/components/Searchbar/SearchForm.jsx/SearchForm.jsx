import { Component } from 'react'

import { Form, FormButton, FormButtonLabel, FormInput } from './SearchFormStyled';

export default class SearchForm extends Component {
  state = {
    searchName: "",
  }
  
  render() {
    const { searchName } = this.state;
    const { handleSubmit } = this;

    return (
        <Form onSubmit={handleSubmit}>
            <FormButton type="submit">
                <FormButtonLabel>Search</FormButtonLabel>
            </FormButton>

            <FormInput
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
            />
        </Form>
    )
  }
}
