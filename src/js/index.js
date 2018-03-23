import Reveal from 'reveal.js';
import 'reveal.js/lib/js/head.min.js';

import Notes from 'reveal.js/plugin/notes/notes.js';
import 'reveal.js/plugin/notes/notes.html';

import '../style/main.less';

if (module.hot) {
  module.hot.accept();
  //clear console on hot reload
  window.addEventListener('message', console.clear());
}

window.Reveal = Reveal;

Reveal.initialize({
  controls: false,
  history: true,
  center: true,
  transition: 'slide',
  showNotes: false,
  backgroundTransition: 'slide',
  dependencies: [
    { src: Notes, async: true  }
  ]
});
