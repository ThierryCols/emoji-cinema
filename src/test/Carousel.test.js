import React from 'react';
import Carousel from '../Carousel/Carousel';
import renderer from 'react-test-renderer';
import movieList from '../store'

it('renders correctly', () => {
  for (let query in ['', 'F', 'Frozen', 'Frozen 2']) {
    const tree = renderer.create(
      <Carousel
        movieList={movieList}
        query={query}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  }
});
