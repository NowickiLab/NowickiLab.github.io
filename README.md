# NowickiLab.github.io

(`Artykuł` to nazwa pomocniczna dla pojedynczego `news`, `person`, `project` albo `publication`)

## Dostępne komendy
Git (wszystkie komendy z `git *` można wyklikać w Visual Studio Code)

  - `git pull` - Ściąga najnowsze pliki z GitHuba
  - `git add .` - Dodaje wszystkie nowe/zmienione pliki do commita
  - `git commit -m "commit message"` - Tworzy commita
  - `git push` - Wysyła commity na GitHuba

npm
  - `npm run dev` - Startuje stronę w wersji dewepolerskiej pod adresem [locahost:8080](http://localhost:8080)
  - `npm run deploy` - Buduje stronę z aktualnych plików na komputerze i wysyła ją na serwer


## Struktura bazy danych

- Baza podzielona jest na 4 sekcje:
  - news
  - people
  - projcets
  - publications

- Każda sekcja podzielona jest na lata:
  - 2019
  - 2020
  - ...
  - 20XX


## Dodawanie artykułu

### Bez zdjęć

Jeśli artykuł **nie posiada zdjęć**, należy umieścić go bezposednio w folderze z danym rokiem.
<br>(na przykład `news/2020/news-bez-zdjecia.md`)

### Ze zdjęciami

Jeśli artykuł **posiada zdjęcia**, należy stworzyć folder dla tego artykułu
<br>(na przykład `projcets/2021/projekt-ze-zdjeciami/projekt.md`).

Zdjęcia do artykułu należy umieścić w nowo powstałym folderze obok pliku `.md`
<br>(na przykład `projcets/2021/projekt-ze-zdjeciami/image-1.jpg`)

## Meta informacje
- `title` - Tytuł artykułu bez znaczników HTML i markdownu
- `slug` - Nazwa artykułu w adresie URL. **Slug nie może zawierać wielkich liter ani spacji!**
- `date` - Data w formacie `YYYY-MM-DD`
- `summary` - Krótki opis artykułu - może zawierać znaczniki HTML. Powinien zawierać więcej niż 120 znaków
- `tags` - Słowa kluczowe, po których można wyszukać dany artykuł. **Tag nie może zawierać wielkich liter ani spacji!**
- `img` - Obraz do artykułu. Będzie wyświetlany przy wstawianiu linku w mediach społecznościowych i komunikatorach. Należy podać względny adres obrazu względem danego dokumentu. Aby pominąć obraz należy wstawić pustą wartość. 

Dla podstrony `project` pojawiają się dodatkowe pola:
- `agency` - Krótki teskst bez znaczników HTML i markdownu
- `startDate` - Data w formacie `YYYY-MM-DD`
- `endDate` -  Data w formacie `YYYY-MM-DD`. Aby nie wyświetlać daty końcowej, należy ustawić jej wartość na `null`
- ~`date`~ - Znika pole `date`

### Wzory meta inforamcji
News / Person / Publication:
```yaml
---
title: Title
slug: some-slug-without-spaces
date: 2019-08-07
summary: This is <strong>example</strong> descrition!
tags: [przykladowy-tag, bez-wielkich-liter-i-bez-spacji]
img: ./preview-image.jpg
---
```

Project:
```yaml
---
title: Project title
slug: example-project
startDate: 2020-08-01
endDate: 0
agency:
summary: This is <strong>example</strong> descrition!
tags: [przykladowy-tag, bez-wielkich-liter-i-bez-spacji]
img:
---
```

## Pisanie artykułu

### Przydatne linki:
 - [Sciągawka do markdowna](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
 - [Opisywanie obrazów](https://moz.com/learn/seo/alt-text)
 
### Linkowanie do artykułów
1. Wejdź na stronę `nowickilab.science` lub `localhost:8080`
2. Skopiuj link do wybranego artykułu
3. Usuń z linku protokół i domenę: `https://nowickilab.science/` lub `http://localhost:8080/`

Przykład:
```md
[Redbud haplotyping](/news/trinity-cpdna-seminar/)
```

### Dodawanie obrazów
- Elementy ścieżki rozdzielane są znakiem `/`
- Należy podać względną ścieżkę do obrazu względem danego dokumentu

Przykład
```markdown
![Trinity in lab](./trigiano32.jpg)
```

### Dodawanie plików
Identyczne zasady jak przy dodawniu obrazów (ściąganie plików będzie działać dopiero na `nowickilab.science`)

Przykład:
```markdown
[CV-FULL-jan2020.pdf](./CV-FULL-Jan2020.pdf)
```

### Dodawanie wykresów
Do rysowania wykresów używana jest biblioteka [Chart.js][https://www.chartjs.org/docs/latest/]. Tworzenie wykresów na stronie `nowickilab` nieznacznie różni się od dokumentacji.

Elementem na którym będzie rysowany wykres jest `canvas`, któremu należy nadać `id` (może składać się tylko z małych liter, cyfr i myślników - musi zaczynać się literą)
```html
<canvas id="unikalna-nazwa"></canvas>
```

Konfiguracja wykresu umieszczana jest w tagu `script`. W atrybucie `data-canvas` należy podać wcześniejsze `id` 
```html
<script data-canvas="unikalna-nazwa">
({
  type: 'line',
  datasets: [],
  options: {}
})
</script>
```
(tag `script` można umieścić w dowolnym miejscu - na przykład na samym dole - żeby nie przeszkadzał wizualnie podczas pisania artykułu)

Przykładowy wykres:
```html
<canvas id="chart-1"></canvas>
<script data-canvas="chart-1">
({
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
</script>
```