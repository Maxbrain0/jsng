// import the parent theme style
import '../theme-styles/jsng-theme.scss';

//import font-awesomestyles
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleDown, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// import reframe for making embed videos full column width
import noframe from 'reframe.js/dist/noframe.js';

// Add all icons to the library so you can use it in your page
library.add(faChevronCircleDown, faChevronCircleRight, faChevronCircleLeft, 
  faFacebookSquare, faTwitterSquare, faLinkedin, faGithub);
dom.watch();

// for toggling navigation
import './navToggles';

// reframe embeds
noframe('iframe','figure');