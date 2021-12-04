/*This changes the initial heading text to Hello world! using JavaScript*/

/*const myHeading = document.querySelector('h1');
You did this by using a function called 
querySelector() to grab a reference to your heading
and then store it in a variable called myHeading.
(This is similar to what we did using CSS selectors. 
When you want to do something to an element, you 
need to select it first)*/

/*myHeading.textContent = 'Hello world!';
Then, the code set the value of the myHeading variable's 
    textContent property (which represents the content of the 
    heading) to Hello world! (Note that initially the heading
    read"A Step-by-step CSS Detailed Description")*/

    /*document.querySelector('html').onclick = function() 
    {
    alert('Ouch! Stop poking me!');
    }*/

    let myImage = document.querySelector('img');
    myImage.onclick = function() 
    {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/firefox-icon.png') 
        {
          myImage.setAttribute('src','images/firefox2.png');
        } 
        else {
          myImage.setAttribute('src','images/firefox-icon.png');
            }
    }