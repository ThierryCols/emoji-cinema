import React from 'react';
import ReactDOM from 'react-dom';
import EmojiCinema from '../EmojiCinema';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmojiCinema />, div);
});
