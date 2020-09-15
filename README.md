# 13-sins-landing-page
## a landing page to introduce the movie '13 sins'
### languages used:
  * HTML
  * css
  * JavaScript
the html file consists of a :
1. header : just showing the movie poster and some exciting words
2. navigation bar: its content depends on the number and the content of the following sections (added dynamically).
3. video glance section: section contains small clip of the movie, this section is more aesthetic; just to allow the scroll affect of nav items to be more fluid (so the plot for example can scroll downm instead of being right below the nav bar hnce no scrolling effect would be obsereved) and it's not even added in the na bar
4. movie plot section.
5. trailer video section: that is embeded from youtube
6. cast main actors section
7. links for further look / streaming.
8. simple footer.

### two main functions describtion: 

1. insertNav() function:
the function creates a vurtual dom at first using document.createDocumentFragment() so it can be used later
the function simply can reach the navbar (ul list) and it loops through every section in document using a for (of) loop making for each section (except the video glance) the following:
a list item (li) element then setting its textContent depending on the section id (prefixed with 'the')
the list item is then appended to the document fragment we created
after the loop ends the virtual dom we created holds every dynamically created list item, then it's appended as is to the nav element

2. popup() function: 
it might appear as a small one with a small mession (which is poping up the to top button when the page is scrolled down)
but it has many trickpoints: 
  1. it's called immediatly when the whole documented is loaded (via window.onload event), however it adds another event to the window in its body function calling itself (recursion) but this time the event fires when scrolling occurs.
  2. it's invoked when the page scrolled checking every time the coordinates to decide whether or not to show the top up button and to call the function mark() any way that checks what section is active and darken it (as a sign of focus).


### precautions:
- some inconsistentcies might appear specially in the mark() function, cause it depends on a property that defnes the window width 
