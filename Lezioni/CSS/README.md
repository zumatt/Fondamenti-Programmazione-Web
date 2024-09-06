### < Fondamenti Programmazione Web 2024 >
#### Definizione CSS
Cascading Style Sheets (CSS) è un linguaggio per fogli di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML (compresi i dialetti XML come SVG, MathML o XHTML). I CSS descrivono il modo in cui gli elementi devono essere resi sullo schermo, sulla carta, nel parlato o su altri media.<br>
Il CSS è uno dei linguaggi fondamentali dell'open web ed è standardizzato tra i browser Web secondo le specifiche del W3C. In precedenza, lo sviluppo di varie parti delle specifiche CSS avveniva in modo sincrono, il che consentiva il versioning delle ultime raccomandazioni. Potreste aver sentito parlare di CSS1, CSS2.1 o anche CSS3. Non ci sarà mai un CSS3 o un CSS4; piuttosto, ora tutto è solo “CSS” e i singoli moduli CSS hanno numeri di versione.<br><br>
*Fonte: [CSS: Cascading Style Sheets - Mozilla Foundation](https://developer.mozilla.org/en-US/docs/Web/CSS)*

#### Contenuti dettagliati del modulo HTML
1. Anatomia
2. Stile in linea
3. Foglio di stile
4. Attributi tag HTML
5. Selettori
   - Per tag  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/Tag/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/Tag/))
   - Universali  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/Universali/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/Universali/))
   - Per classe  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/Classe/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/Classe/))
   - Per ID  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/ID/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/ID/))
   - Per pseudo-classi  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/Pseudo-classi/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/Pseudo-classi/))
   - Priorità  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/Priorità/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/Priorità/))
   - Concatenamento  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/Concatenamento/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/Concatenamento/))
   - Combinazioni  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Selettori/Combinazioni/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Selettori/Combinazioni/))
6. Box Model
   - Altezza e larghezza  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/Altezza-Larghezza/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/Altezza-Larghezza/))
   - Bordi  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/Bordi/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/Bordi/))
   - Padding  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/Padding/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/Padding/))
   - Margini  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/Margini/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/Margini/))
   - Auto  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/Auto/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/Auto/))
   - Min/Max Height e Width  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/MinMax-Height-Width/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/MinMax-Height-Width/))
   - Overflow  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/Overflow/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/Overflow/))
   - Visibilità  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/Visibilità/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/Visibilità/))
   - Content-Box e Border-Box  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Box%20Model/ContentBox-BorderBox/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Box%20Model/ContentBox-BorderBox/))
7. Display e Posizionamento
   - Posizione  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Display%20Posizionamento/Heading/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Display%20Posizionamento/Heading/))
   - Z-Index  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Display%20Posizionamento/Heading/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Display%20Posizionamento/Heading/))
   - Display  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Display%20Posizionamento/Heading/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Display%20Posizionamento/Heading/))
   - Layout  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Display%20Posizionamento/Heading/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Display%20Posizionamento/Heading/))
8. Colori
   - Foreground e Background Color  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Colori/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Colori/))
   - Per nome  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Colori/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Colori/))
   - Hex  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Colori/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Colori/))
   - Rgb  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Colori/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Colori/))
   - Opacità  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Colori/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Colori/))
9. Tipografia
    - Font-family  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Tipografia/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Tipografia/))
    - Font-weight  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Tipografia/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Tipografia/))
    - Font-style  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Tipografia/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Tipografia/))
    - Text-transformation  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Tipografia/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Tipografia/))
    - Text Layout  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Tipografia/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Tipografia/))
    - Web Font  ([Esempio codice](https://github.com/zumatt/Fondamenti-Programmazione-Web-24/blob/main/Lezioni/CSS/Tipografia/index.html)) ([Esempio risultato](https://zumatt.github.io/Fondamenti-Programmazione-Web-24/Lezioni/CSS/Tipografia/))

---
Ultimo aggiornamento del programma Agosto 2024
