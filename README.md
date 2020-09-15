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

1. `insertNav()` function:
the function creates a vurtual dom at first using `document.createDocumentFragment()` so it can be used later
the function simply can reach the navbar (`ul` list) and it loops through every section in document using a for (of) loop making for each section (except the video glance) the following:
a list item `li` element then setting its textContent depending on the section id (prefixed with 'the')
the list item is then appended to the document fragment we created
after the loop ends the virtual dom we created holds every dynamically created list item, then it's appended as is to the `nav` element

2. `popup()` function: 
it might appear as a small one with a small mission (which is poping up the to-top button when the page is scrolled down)
but it has many trickpoints: 
  1. it's called immediatly when the whole documented is loaded (via `window.onload` event), however it adds another event to the window in its body function calling itself (recursion) but this time the event fires when scrolling occurs.
  2. it's invoked when the page scrolled checking every time the coordinates to decide whether or not to show the top up button and to call the function `mark()` any way that checks what section is active and darken it (as a sign of focus).
  
#### you can visit the website via this link [https://ali-khaled-13.github.io/13-sins-landing-page/]


### precautions:
- some inconsistentcies might appear specially in the `mark()` function effect, cause it depends on a property that defnes the window width `document.documentElement.offsetWidt` to set a facotor that manage the marking system via different devices widths. 
however, this property is inconsistant inhertily and doesn't always reflect the actual width (other window width defining properties have the same case)
- the video glance doesn't play till it is marked by the `mark()`, so it may or may not play depeneding on the broweser, browser setting, etc. adding to that some intercompatibility issues some browsers show of disabling videos/audios being played by a script, and some mobile browsers inconsistant scroll event may result that as well. however if everything went smoooth as I tried on many devices the video should be played once it got focus, once with full volume then loops with 1% volume to keep the design aesthitic (moving picture at least).
