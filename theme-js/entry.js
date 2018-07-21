// import the parent theme style
import '../theme-styles/jsng-theme.scss';

//import font-awesomestyles
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so you can use it in your page
library.add(faChevronCircleDown, faFacebookSquare, faTwitterSquare, faLinkedin, faGithub);
dom.watch();

// for toggling navigation
import './navToggles';