# PROCESS OF COMPLETING MISSION


THIS DOCUMENT WILL TALK ABOUT THE PROCESS OF COMPLETING THE MISSION.

# Implementing The Design
Overall design followed the requirements. During my time creating this markup, I decided to include bootstrap to make columns as easy as possible. Taking advantage of bootstraps columns, allowed me to center all the content how I wanted to. This made it easy follow the design requirements. 

Media queries were used to make the application as responsive as possible. Design stays the same from desktop view all the way to mid/small size screens such as tablets.For smaller screens such as phones, design and coloring were kept mostly the same. However, css rules were changed to match the requirements of the project. 


## Constructing the HTML Document
The HTML document was pretty straight forward. Nothing too complex. It mostly consists of empty tags that are filled out by javascript code. In this UI, an input tag was used to enter a certain date. There is also a submit button to submit the desired date. 

## JAVASCRIPT AND jQuery LOGIC
This is where most of the work is done. Jquery was used to import and create a calendar that allows users to select 2 dates. Javascript is then used to get that input to execute the search of emails. In this UI, an 'email' object was used to store the information as object properties. Creating this email object allowed for easy access throughout the development. 

A for loop was used to loop through the email object and find all the emails that had matching date property values. Once it found a match, HTML code was used to create the content.The same logic of adding the emails to the display list was used when sorting from older to new emails. I assigned an id to each row of email so that i would be able to click on it to view the contents. Once a div was clicked on, it would get the contents of that email and put them on a div. This could be done for any email that was clicked. This was done by putting the selected emails sender information into an array. The array would be called and javascript will be used to loop through it, while the emails object gets looped as well. Once the array element matches the email object's sender value, I got all the information and included it on the Div. This will repeat until the Id array is finished. 

I used a button, which when clicked on, would display all the selected emails. Javascript styling allowed me to display the information only when the button is clicked. 

jQuery was used again to set the background color of the email list back to its original color so that it no longer shows a highlight over the selected emails for reading. 

In case there were no emails found, Javascript would be used to display back the main logo and show that 0 results were found. 

