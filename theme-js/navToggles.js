//provides script for dropdown of navigation

function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  
  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';
  
  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we 
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;
    
    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 0 + 'px';
    });
  });
  
  // mark the section as "currently collapsed"
  element.setAttribute('data-expanded', 'false');
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function(e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', arguments.callee);
    
    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = 'auto';
  });
  
  // mark the section as "currently not collapsed"
  element.setAttribute('data-expanded', 'true');
}


// list to menu-toggle click. Then expand or contract navbar

// grab the section to be initialized, then initialize to data-expanded=false
var section = document.querySelector('#j-navbar');
section.setAttribute('data-expanded', false);

//grab the array next to menu to give it a nice lil' flip-a-roo
var toggleArrow = document.querySelector('#j-toggle-arrow');

document.querySelector('#j-menu-toggle').addEventListener('click', function(e) {
  var isExpanded = section.getAttribute('data-expanded') === 'true';
  if(!isExpanded) {
    expandSection(section)
    section.setAttribute('data-expanded', 'true')
    toggleArrow.style.transform = "rotate(180deg)"
  } else {
    collapseSection(section)
    toggleArrow.style.transform = "rotate(0deg)"
  }
});