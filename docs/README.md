# Step Navigation

## Overview

This is a responsive step navigation bar that shows the progress of a user through multi-step process. One of its most common usecases is a checkout process like in this example but it can be often seen in tutorials as well.

## Design

The design is responsive and supports mobile, tablet and desktop screen sizes as well. Each of these menu/navigation items represent one step in the checkout process.
The hovered steps are highlighted, while the active steps and previously completed steps are marked with a check icon. The CSS is designed to be mobile-first, which means the base styles are for mobile view, and media queries are used to adjust the layout for larger screens.

## CSS Structure

The CSS is divided into separate files in order to achieve maintainability

- `reset.css`: resets all the basic HTML elements
- `variables.css`: contains all CSS variables, color definitions and measurements
- `global.css`: contains global styles which are applied across the entire app
- `header.css`: contains styles which refer to the navigation bar
- `menu-item.css`: contains styles which refer to the menu items
- `media-queres.css`: contains all media queries for responsive design

## Breakpoints

There are three responsive breakpoints:

- The mobile view which is applied until 499px,
- The tablet view is applied from 500px to 1023px,
- The desktop view starts from 1024px and above.

## Colors

The color scheme consists of the following hexadecimal color codes:

- `#F3F3F3` for the header background
- `#012C3B` for the menu item text
- `#E2DFDF` for the menu item border
- `#2D9C2B` for the active step checkbox background
- `#087436` for the active step bottom border
- `#E5E8EC` for the hover effect background

## JavaScript

Javascript is used to provide better user experience and more interaction to the navigation system. We are adding an event listener to every menu item. When the user clicks on a menu item (step), it becomes marked as active step and all other steps are deactivated as we can have only one active step. Also, when the user selects a menu item (step), it is marked as finished and its status is represented with replacing the step number with a check icon.

## Project Structure

In order to achieve scalability in the future, the project follows the following structure

step-navigation-task/
├── docs/
│ └── README.md
├── instructions/
│ └── design.png
| └── instructions.md
| └── spielregeln.md
└── src/
├── assets/
│ └── img/
│ └── check-2x.png
│ └── check.png
│ └── check.svg
│ └── icon-checked-green-2x.png
│ └── icon-checked-green.png
├── css/
│ ├── base/
│ │ ├── reset.css
│ │ └── variables.css
│ ├── components/
│ │ ├── menu-item.css
│ │ └── header.css
├── html/
│ └── components/
│ └── step-navigation.html
└── js/
└── components/
└── step-navigation.js

## Note

Please keep in mind that this is just a representational implementation. It doesn't contain any deeper logic like step selection order.
The idea and the actual implementation can always be discussed in more dept.
