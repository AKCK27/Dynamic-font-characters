//  We declared  our  variables here 
 let title = document.getElementById('title');
 let paragraph = document.querySelector('p');
 let changeButton = document.getElementById('button');

//  Now We created the function that send our data 
changeButton.onclick = function(e) {
    e.preventDefault();
    changeType();
    changeFont(title, paragraph);
    displayTextBold(title, paragraph);
    displayTextItalic(paragraph);
    displayFonSizes(title);


}

// We created the function that change the title type  without argument
 function changeType(){
    //    const typedTitle =  title.style.fontFamily = "Arial";
    //    const typedParagraph = paragraph.style.fontFamily = "Georgia"
    //      return typed ;
 }

//  This function change  the font ours texts , title and paragraph. 
// This time we need the argument 
  function changeFont(txt1, txt2){
       const fontTitle = txt1.style.fontFamily ="math";
       const fontParagraph = txt2.style.fontFamily = "monospace"
         return  fontTitle + fontParagraph;
    
  }
   function displayTextBold(txt1, txt2){
     const fontTitle = txt1.style.fontWeight = "bolder";
     const fontParagraph = txt2.style.fontWeight = "bolder";
      return fontTitle + fontParagraph
   }
    function displayTextItalic(txt){
           const fontStyle = txt.style.fontStyle = "italic";
           return  fontStyle;
    }

    function displayFonSizes(arg){
          const  fontSize = arg.style.fontSize = "20px"
          return fontSize;
         
    }
 




