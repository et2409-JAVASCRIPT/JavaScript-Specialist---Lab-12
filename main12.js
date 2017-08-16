function purpleWords()
{
    var boldWords = document.getElementsByTagName('strong');
    
    for(x = 0; x < boldWords.length; x++)
        {
            boldWords[x].style.color = "green";
        }
    
}

function returnColor()
{
    var boldWords = document.getElementsByTagName('strong');
    
    for(x = 0; x < boldWords.length; x++)
        {
            boldWords[x].style.color = "blue";
        }
    
}

