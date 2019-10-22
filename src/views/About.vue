<template>
<div class="container">
  <div class="about">
    <br><br>
    <h1>Øyboerene</h1>
    <p>
      Øyboars medlemmer er oppvokst blant hav, holmer og skjær. De lengter 
      stadig hjem og skriver musikk om og til byen som fostra dem.
    </p><br>
    <p>
      Deres nyeste låt "Vi ror for livet" er en sang til Bunadsgeriljaen
      som omhandler kampen for å bevare lokale fødeavdelinger. Her har 
      Øyboar samarbeidet med komponist Kari Telstad Sundet.
      Audun Dahl Lie har tatt bildet som brukes. 
    </p><br>
 

  <div class="members">
    <div class="member-box">
    <h2>Jorunn Telstad Sundet</h2> 
    <img class="members-images" src="@/assets/jorunn_sundet.jpg" :alt="jorunn_sundet" />
    <p>Bandets produsent, tekniker, instrumentansvarlig, melodimaker, vokalist, pianist, munnspiller, ukulelist, gitarist, bassist, tekstforfatter og eier av Sundets stuestudio. Til daglig tar Jorunn en bachelor i musikk på Liverpool Institute for Performing Arts.
<br><br>
<b>Hva du bør vite om Jorunn:</b><br>
- Over gjennomsnittet begeistret for ordspill og rim.<br>
- Hun er villig til å gi hvem som helst skyss (nylig tatt sertifikatet).<br>
- Har en forkjærlighet for puslespill, modellkitt, quiz, boksen går og lignende aktiviteter.<br>
</p><br>
    </div>

<div class="member-box">
    <h2>Maja Skomsøy</h2>
    <img class="members-images" src="@/assets/maja_skomsøy.jpg" :alt="maja_skomsøy" />
    <p>Perkusjonsansvarlig, vokalist, pianist, gitarist, tekstforfatter og kredibilitetsansvarlig. Neste vår er Maja uteksaminert sykepleier fra Høgskolen i Hedmark (Elverum-rockcity).
<br><br>
<b>Ekstrainformasjon: </b><br>
- Har imponerende høy kleinhetstoleranse.<br>
- Eksepsjonell hukommelse når det gjelder sangtekster.<br>
- Prøver å integrere selvlagde ordspill i sine venners vokabular.</p><br>
</div>

<div class="member-box">
<h2>Maren Molvik</h2>
<img class="members-images" src="@/assets/maren_molvik.jpg" :alt="maren_molvik" />
<p>Hovedtekstforfatter, vokalist, gitarist, sjåfør, promotør og pådriver. Tilbringer til vanlig dagene på Blindern hvor hun prøver å fullføre lektorprogrammet i norsk og historie.
<br><br>
<b>Hva du bør vite om Maren:</b><br>
- Holder ofte panteromkonsert på Rema 1000 Løkkemyra.<br>
- Naturlig einstøing som har endt opp med altfor sosiale venner.<br>
- Bærer på en hemmelig drøm om å bli anleggsarbeider så hun kan røyke Rødmix 3 og drikke cola til frokost.</p><br>
</div>

<div class="member-box">
<h2>Silje Bjellvåg</h2>
<img class="members-images" src="@/assets/silje_bjellvåg.jpg" :alt="silje_bjellvåg" />
<p>Banjospiller, vokalist, tekstforfatter, stylist og markedsføringsansvarlig. Holder i semestertider til på NTNU Dragvoll hvor hun studerer Europavitenskap med engelsk.
<br><br>
<b>Hva du bør vite om Silje:</b><br>
- Har et ufrvillig frekt ordlag.<br>
- Har et konstant prosjekt og drøm om å få en hårfarge som er tilnærmet lik Tone Damli Aaberges.<br>
- Er i overkant flink til å imitere dialekter, noe som ofte resulterer i forvirring om hvor hun egentlig kommer fra.</p>


</div>
  </div>
   </div>
</div>
</template>

<style scoped>
.container {
  display: flex; 
  justify-content: center;
}

.about {
  flex-direction: column; 
  max-height: 400px;
}

.members {
  display: flex; 
  flex-direction: column; 
 margin-bottom: 80px; 
}
.member-box { 
  background-color: rgb(255, 236, 212);
  margin-bottom: 20px; 
  padding: 20px; 
}


.members-images {
max-height: 300px; 
}

h1, h2, p { 
  color: #2c3e50; 
  max-width: 500px;
  margin-left: 30px; 

}

</style>