// import the parent theme style
import '../theme-styles/jsng-theme.scss';

//import font-awesomestyles
import { library, dom } from '@fortawesome/fontawesome-svg-core';

// importing separately since tree shaking doesn't work otherwise
import { faChevronCircleDown} from '@fortawesome/free-solid-svg-icons/faChevronCircleDown';
import { faChevronCircleRight} from '@fortawesome/free-solid-svg-icons/faChevronCircleRight';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons/faChevronCircleLeft';
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons/faFacebookSquare'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

// import reframe for making embed videos full column width
import reframe from 'reframe.js/dist/reframe.js';

// Add all icons to the library so you can use it in your page
library.add(faChevronCircleDown, faChevronCircleRight, faChevronCircleLeft, 
  faFacebookSquare, faTwitterSquare, faLinkedin, faGithub);
dom.watch();

// for toggling navigation
import './navToggles';

// reframe embeds
reframe('iframe');