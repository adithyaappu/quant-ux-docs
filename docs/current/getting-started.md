# Getting Started

Quant-UX is a prototyping tool to design, test and analyse your visual designs. To learn more, use the navigation on the right side.

## Overview

A prototype consists out of the screens in which you can place widgets. Widgets are the basic building blocks of your design, but in contrast to most other prototyping tools, they are fully functional. This means users can toggle a checkbox or enter data into a text field.

Quant-UX canvas has three main views on a prototype.

1. The Design view allows you to create the visual aspect of your prototype. You can add screens and widgets and change the appearance.
2. The Prototype view defines the interaction between the screens and elements. In the prototype view, you can see and create the links between the screens. You can also customize certain dynamic properties of input element, e.g. form validation and data binding.
3. In the Low Code view, you can define properties that are important for turning the prototype into a working application.

You can define screen transitions that link the screens together. A transition is triggered when the user performs a certain action, for instance, clicks on a button or performs a screen gesture.

## Screens

To create a screen, press S or click the icon <vp-icon name="addScreen" />. You can place the screen freely on the canvas.
Once you have placed the screen, click on it to select it. On the right property panel, you can now configure the screen name, the background (color or image).
You can also set a screen to be an overlay. This means, that the screen will be rendered on top of another screens. This is for instance useful if you want to build modal dialogs.

## Widgets

Quant-UX comes with a rich selection of functional widgets. You can create a widget by pressing W or selecting icon. To create the most common widgets, you can also use the R (Rectangle), T (Text) or H (Hotspot) shortcuts.
To select a widget, simply click on it. The property panel will show up, and you can configure the visual appearance of the widget. In addition, you can configure certain properties, for instance the entries in a dropdown box.

## Links

To create a screen transition, you have to link a source (widget or screen) to a target screen. Change to the Prototype view and select the widget (or screen) and press the L or click on the Add Action button in the properties panel. Now you can select the target screen.
Once you have created a link the Add Action button will disappear in the properties panel, and you can configure certain properties of the link, for instance the animation and the user event that should trigger the screen transition. For screens, you can also create timed transitions to create splash screens.
Hint: To clean up the design, you can also place waypoints, by clicking on the canvas.
