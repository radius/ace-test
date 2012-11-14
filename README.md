# ACE Editor Test

This is a simple project to show how to use the ACE Editor with a textarea. 

The Editor itself is housed in a ```DIV```. When the user clicks the Save button, an event takes the code output from ACE and puts it into a textarea. This textarea could be inside of a ```form``` element that gets saved when the user clicks to save their data.

The Editor gets its initial code from an AJAX call that pulls a text file and puts the text into the ```#editor``` DIV. Optionally, you could just write the code into the ```#editor``` DIV on the page.