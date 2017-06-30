import React from 'react';

import movieList from './store'
import Carousel from './Carousel/Carousel';

class EmojiCinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  updateQuery(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <h1>Emoji Cinema</h1>
        <input
          className='search-bar'
          type='text'
          value={this.state.query}
          onChange={e => this.updateQuery(e)}
        />
        <Carousel
          movieList={movieList.filter((movie) => {
            return movie.title.toLowerCase().includes(this.state.query.toLowerCase())
          })}
        />
      </div>
    );
  }
};

export default EmojiCinema;
