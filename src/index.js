import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmojiCinema from './EmojiCinema';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EmojiCinema />, document.getElementById('root'));
registerServiceWorker();
