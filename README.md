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
Identyczne zasady jak przy dodawniu obrazów.
(Ściąganie plików będzie działać dopiero na `nowickilab.science`)

Przykład:
```markdown
[CV-FULL-jan2020.pdf](./CV-FULL-Jan2020.pdf)
```