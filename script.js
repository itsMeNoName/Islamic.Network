$(function(){
    
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
    if(this.readyState == 4 && this.status == 200){
    var myObj= JSON.parse(this.responseText);
     verseLength=myObj.verses.length;
    $("#title").html(`${myObj.name} <br />`);
    $("#ayat").html("");
    for(i=0;i< verseLength ;i++){
    
   $("#ayat").append( `${myObj.verses[i].text} (${i+1}) `);
   }
   
   
   
   // translation part
      
        $("#translated-title").html(`${myObj.transliteration_en} <br />`);
        $("#translated").html("");
        for(m=0;m< verseLength ;m++){
    
   $("#translated").append( `${myObj.verses[m].translation_en} (${m+1}) `);
   }
   
  }
};
xmlhttp.open("GET", "https://unpkg.com/quran-json@1.0.1/json/surahs/1.json", true);
xmlhttp.send();
//_________________________________________

var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange=function() {
    if(this.readyState == 4 && this.status == 200){
    var myObj2= JSON.parse(this.responseText);
     listLength=myObj2.length;
    for(j=0;j< listLength ;j++){
    
   $("ul").append( `<a href="#" id="ay${j}"><li>${myObj2[j].number} - ${myObj2[j].name} - ${myObj2[j].transliteration_en}</li> </a>`);
   }
   
  }
  
  $("ul a").click(function(){
     var idAttr= $(this).attr('id');
     var x = idAttr.toString();
     var regexp =/\d+/g;
     var match= parseInt(x.match(regexp))+1;
     
     xmlhttp.open("GET", "https://unpkg.com/quran-json@1.0.1/json/surahs/"+match+".json", true);
xmlhttp.send();
    // check if works
    
  });
  
  
};

xmlhttp2.open("GET", "https://unpkg.com/quran-json@1.0.1/json/surahs.pretty.json", true);
xmlhttp2.send();


    //____________________________________
    /*
    translate button toggle
    */
    var click=1;
    
    $(".translate").click(function(){
    
    $(".arabic").hide(1000);
    $(".trTxt").show(1000);
    $(".translate").html("Original Arabic Text");
     $(".menuAr").html("Choose Sorah");
    
    if(click < 0){
            $(".trTxt").hide(1000);
    $(".arabic").show(1000);
    $(".translate").html("English Translation");
    $(".menuAr").html("اختر السورة");
         //   click *=-1;
        }
        click *=-1;
    });
    

});
