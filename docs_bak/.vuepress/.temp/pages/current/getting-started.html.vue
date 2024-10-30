<template><div><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1>
<p>Quant-UX is a prototyping tool to design, test and analyse your visual designs. To learn more, use the navigation on the right side.</p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>A prototype consists out of the screens in which you can place widgets. Widgets are the basic building blocks of your design, but in contrast to most other prototyping tools, they are fully functional. This means users can toggle a checkbox or enter data into a text field.</p>
<p>Quant-UX canvas has three main views on a prototype.</p>
<ol>
<li>The <strong>Design</strong> view allows you to create the visual aspect of your prototype. You can add screens and widgets and change the appearance.</li>
<li>The <strong>Prototype</strong> view defines the interaction between the screens and elements. In the prototype view, you can see and create the links between the screens. You can also customize certain dynamic properties of input element, e.g. form validation and data binding.</li>
<li>In the <strong>Low Code</strong> view, you can define properties that are important for turning the prototype into a working application.</li>
</ol>
<p>You can define screen transitions that link the screens together. A transition is triggered when the user performs a certain action, for instance, clicks on a button or performs a screen gesture.</p>
<h2 id="screens" tabindex="-1"><a class="header-anchor" href="#screens"><span>Screens</span></a></h2>
<p>To create a screen, press S or click the icon <HopeIcon icon="cloud" color="red" />. You can place the screen freely on the canvas.
Once you have placed the screen, click on it to select it. On the right property panel, you can now configure the screen name, the background (color or image).
You can also set a screen to be an overlay. This means, that the screen will be rendered on top of another screens. This is for instance useful if you want to build modal dialogs.</p>
<h2 id="widgets" tabindex="-1"><a class="header-anchor" href="#widgets"><span>Widgets</span></a></h2>
<p>Quant-UX comes with a rich selection of functional widgets. You can create a widget by pressing W or selecting icon. To create the most common widgets, you can also use the R (Rectangle), T (Text) or H (Hotspot) shortcuts.
To select a widget, simply click on it. The property panel will show up, and you can configure the visual appearance of the widget. In addition, you can configure certain properties, for instance the entries in a dropdown box.</p>
<h2 id="links" tabindex="-1"><a class="header-anchor" href="#links"><span>Links</span></a></h2>
<p>To create a screen transition, you have to link a source (widget or screen) to a target screen. Change to the Prototype view and select the widget (or screen) and press the L or click on the <code v-pre>Add Action</code> button in the properties panel. Now you can select the target screen.
Once you have created a link the Add Action button will disappear in the properties panel, and you can configure certain properties of the link, for instance the animation and the user event that should trigger the screen transition. For screens, you can also create timed transitions to create splash screens.
Hint: To clean up the design, you can also place waypoints, by clicking on the canvas.</p>
</div></template>


