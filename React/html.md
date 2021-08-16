HTML
> HTML is a standard markup language for web pages.
> A markup language is a computer language that uses "tags" to define elements within a document.
> <head>, <body>, and <div> define sections of the page
> <table>, <form>, <image>, and <a> define elements within the page.
> While HTML documents use predefined tags

BASIC EXAMPLE 
<!DOCTYPE html>  // declaration defines that this document is an HTML5 document
<html> // element is the root element of an HTML page
<head> element contains meta information about the HTML page
MY TODO APP
<title> Todo tasks</title> // element specifies a title for the HTML page (shown in the browser's title bar or in the page's tab)
</head>
<body> // element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables,links etc
<h1> Here are some of my todo tasks</h1> //element defines a large heading
<p> This is a paragraph</p> //defines a paragraph
</body>
</html>


XML -> EXTENSIBLE MARKUP LANGUAGE
> XML is used for storing structured data, rather than formatting information on a page.
> XML files use custom tags to define elements.

BACIX EXAMPLE FOR XML
<computer>
  <manufacturer>Dell</manufacturer>
  <model>XPS 17</model>
  <components>
    <processor>2.00 GHz Intel Core i7</processor>
    <ram>6GB</ram>
    <storage>1TB</storage>
  </components>
</computer>

HTML ELEMENT
> An HTML element is defined by a start tag, some content, and an end tag:
<tagname>Content goes here...</tagname>

UTF-8
> It is the preferred encoding for HTML files.

THE <!DOCTYPE> DECLARATION - <!DOCTYPE html>
> represents the document type, and helps browsers to display web pages correctly.
> It must only appear once, at the top of the page.

HTML HEADINGS / PARAGRAPHS 
> HTML headings are defined with the <h1> to <h6> tags.
> <h1> defines the most important heading. <h6> defines the least important heading.
> paragraphs are defined with <p> tag

HTML LINKS
> HTML links are defined with the <a> tag:
> Example -> <a href="https://www.w3schools.com">This is a link</a>
> The link's destination is specified in the href attribute. 
> Attributes are used to provide additional information about HTML elements.

HTML IMAGES
> defined with <img> tag
> The source file (src), alternative text (alt), width, and height are provided as attributes:
> Example -> <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">

EMPTY HTML ELEMENTS - <br>
> defines a line break, and is an empty element without a closing tag

HTML ATTRIBUTES
> Attributes provide additional information about elements.
> always specified in the start tag.
> Attributes usually come in name/value pairs like: name="value"

Examples -
1) The href Attribute
The <a> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:
Example - <a href="https://www.w3schools.com">Visit W3Schools</a>

2) The src Attribute
> The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:
> Example - <img src="img_girl.jpg">

3) The width and height Attributes\
>  The <img> tag should also contain the width and height attributes, which specifies the width and height of the image (in pixels):
> Example - <img src="img_girl.jpg" width="500" height="600">

4) The alt Attribute 
> The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. 
> Example - <img src="img_girl.jpg" alt="Girl with a jacket">

5) The style Attribute
> The style attribute is used to add styles to an element, such as color, font, size, and more.

Example
<p style="color:red;">This is a red paragraph.</p>

6) The lang Attribute
>  declare the language of the Web page
> Example - <html lang="en">
<html lang="en-US">

7) The title Attribute
> defines some extra information about an element.
> The value of the title attribute will be displayed as a tooltip when you mouse over the element.
> Example - <p title="I'm a tooltip">This is a paragraph.</p>

HTML HORIZONTAL RULES
> The <hr> tag defines a thematic break in an HTML page
> The <hr> element is used to separate content (or define a change) in an HTML page
> The <hr> tag is an empty tag, which means that it has no end tag.

HTML LINE BREAKS
> The HTML <br> element defines a line break.
> Use <br> if you want a line break (a new line) without starting a new paragraph
> It is an empty tag.

HTML <pre> ELEMENT
> It defines preformatted text.
> The text inside a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

The RENDER FUNCTION
> The ReactDOM.render() function takes two arguments, HTML code and an HTML element.
> The purpose of the function is to display the specified HTML code inside the specified HTML element.



