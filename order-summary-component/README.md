# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

:information_source: We were given a task to create mobile and desktop layout, but I also wanted to add a tablet layout 
because in tablet mode I had switched my layout from being a flexbox container to the grid one. 
For more information on this, please head to the section [Continued development](#continued-development)

### Screenshots

##### MOBILE

![](order-summary-component/images/card-mobile.png)

##### TABLET

![](order-summary-component/images/card-tablet.png)

##### DESKTOP

![](order-summary-component/images/card-desktop.png)


### Links

- Solution URL: [go to](https://git.io/J1Czb)
- Live Demo: [tba](tba) 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

:small_orange_diamond: In this project I recalled how to work with `background` property shorthand, I also gained a deeper understanding
of how the element's width is calculated. 

:small_orange_diamond: In the beginning I forgot to reset my margins and paddings and created everything
with wrong dimensions and then was really surprised how my layout shifted while I was positioning the header image and buttons. :hurtrealbad:

:small_orange_diamond: Another important thing I'd like to remember is that not every element can inherit properties from the ancestors and 
you should be really careful when working with input elements for instance.

### :fast_forward: Continued development

I'd like to focus more on grid layout in the future, because it requires less time to create it. 
At first I was thinking that I should have used it for mobile version and lay out things using template areas, but then
I realized this is too much work for just a single column. That's why I switched to flexbox for mobile.
Things got tricky when I had to manipulate sections in both directions and the amount of flex containers
started to seem overflowing. Maybe I will refactor mobile version into the grid layout and also add media queries
for horizontal orientation.

## Author

Frontend Mentor Profile - [@olesiakissa](https://www.frontendmentor.io/profile/olesiakissa)
