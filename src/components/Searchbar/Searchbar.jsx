import { IconSearch } from 'icons';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
    // console.log(this.props.onSubmit);
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  render() {
    
    const { input } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            < IconSearch/>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
