// import the parent theme style
import '../theme-styles/jsng-theme.scss';

//import font-awesomestyles
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


// Add all icons to the library so you can use it in your page
library.add(faAngleDown);
dom.watch();

// for toggling navigation
import './navToggles';