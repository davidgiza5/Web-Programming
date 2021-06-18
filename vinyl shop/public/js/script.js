function genereaza(){
    const albume = [
        'De La Soul-3 feet high and rising', 'A Tribe Called Quest-The Low End Theory', 'Nas-Illmatic', 'MF-DOOM-MM FOOD', 'AL GREEN-Greatest Hits', 'Kendrick Lamar-To Pimp A Butterfly',
        'Chilidsh Gambino-Awaken, My Love!', 'DURAND JONES-Private Space', 'AL GREEN-Still In Love With You', 'MILES DAVIS-Sketches Of Spain', 'BON IVER-22, A Million',
        'TAME IMPALA-Innerspeaker', 'METALLICA-S&M2', 'NIRVANA-Bleach', 'THE BEATLES-Abbey Road', 'FKA-TWIGSM3LL155X', 'APHEX TWIN-Collapse', 'GORILLAZ-Plastic Beach', 
        'M. TAKADA-Through The Looking Glass', 'DANNY BROWN-uknowhatimsayin'
    ];

    const total = albume.length;
    const nr = Math.floor(Math.random() * total);
    document.getElementById("vinil2").innerHTML = albume[nr];
   
}


  function cumpara(i) {    
      document.getElementById("total").innerHTML=parseInt(document.getElementById("total").innerHTML)+parseInt(document.getElementById(i).innerHTML);
  }

  
  
  function porneste(){
    
    var audio = document.getElementById('audio');
    var butonM = document.getElementById('butonM');
    var nr = 0;
    
      if(nr == 0){
          
          nr=1;
          audio.play();
         
          
      }
      else
      {
          nr = 0;
          audio.pause();
          
      }
    
  }
  
  function stop(){
    var audio = document.getElementById('audio');
    var butonM = document.getElementById('butonM');
    
      porneste()
      audio.pause();
     
      
  }






  
