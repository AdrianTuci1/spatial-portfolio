# Tucean.dev - Site de Portofoliu Interactiv

Un site de portofoliu cu navigare spațială, construit cu React. Site-ul prezintă serviciile și portofoliul într-un mod interactiv și vizual captivant.

## Caracteristici

- **Navigare Spațială**: Interfață inovativă cu navigare între pagini în spațiu 2D
- **Design Imersiv**: Interfață utilizator modernă și captivantă
- **Interactivitate**: Tranziții fluide între pagini
- **Responsive**: Se adaptează la diferite dimensiuni ale ecranului

## Tehnologii Utilizate

- React.js
- CSS3 cu animații avansate
- HTML5 Canvas pentru efecte de fundal

## Instalare

1. Clonează repository-ul
   ```
   git clone https://github.com/tucian/tucean.dev.git
   ```

2. Navighează în directorul proiectului
   ```
   cd tucean.dev
   ```

3. Instalează dependențele
   ```
   npm install
   ```

4. Pornește serverul de dezvoltare
   ```
   npm start
   ```

5. Deschide [http://localhost:3000](http://localhost:3000) pentru a vedea aplicația în browser

## Structura Proiectului

```
tucean.dev/
├── public/             # Fișiere publice și statice
├── src/                # Codul sursă
│   ├── components/     # Componente React pentru fiecare pagină
│   ├── assets/         # Imagini și resurse
│   ├── App.js          # Componenta principală cu logica de navigare
│   ├── App.css         # Stiluri pentru întreaga aplicație
│   └── index.js        # Punctul de intrare
└── README.md           # Documentația proiectului
```

## Organizarea Paginilor

Site-ul folosește un model de navigare spațială cu următoarea structură:
- **Servicii** - poziționată în stânga paginii principale
- **Acasă** - pagina centrală/principală
- **Portofoliu** - poziționată în dreapta paginii principale
- **Contact** - poziționată sub pagina principală

Navigarea se face prin săgeți directionale sau prin meniul principal.

## Personalizare

- Logica de navigare se află în `src/App.js`
- Stilurile generale în `src/App.css`
- Componentele pentru fiecare pagină în `src/components/`

## Deployment

Pentru a face build pentru producție:

```
npm run build
```

Această comandă va crea un director `build` cu fișierele optimizate pentru producție.

## Licență

[MIT](LICENSE)

## Contact

Pentru întrebări sau colaborări, contactați-mă la adresa: contact@tucean.dev
