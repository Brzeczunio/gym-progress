GYM PROGRESS V20 — PLAN A/B ZWERYFIKOWANY

PLAN A:
1. Wyciskanie hantli na ławce płaskiej, chwyt półneutralny — 3x8-12
2. Rozpiętki na wyciągu na wysokości klatki — 2x12-15
3. Wiosłowanie hantlem z podparciem — 3x8-12/strona
4. Martwy ciąg rumuński z hantlami — 3x8-10
5. Prostowanie nóg na maszynie — lekko — 2x12-15
6. Unoszenie ramienia bokiem na wyciągu — 3x12-20
7. Prostowanie ramion z liną — 2x10-15

PLAN B:
1. High-to-low cable fly — 2x12-15
2. Ściąganie uchwytu neutralnego do klatki — 3x8-12
3. Hip thrust — 4x8-12
4. Prostowanie nóg na maszynie — obie nogi — 3x12-15
5. Odwrotne rozpiętki z klatką opartą o ławkę — 3x12-20
6. Uginanie młotkowe — 3x10-15
7. Prostowanie ramion z liną — 2x10-15

WAŻNE:
- B8 / chest press został usunięty z planu bazowego.
- Dzień B usuwa stare błędne leg curl / uginanie nóg zapisane przez wcześniejsze wersje.
- W B pozostaje tylko jedno prostowanie nóg.
- Historia i dane pozostają w tym samym localStorage.


Wersja v20: komplet ciemnych grafik dla wszystkich ćwiczeń z planu A/B/C, gotowe do GitHub Pages.


Wersja v20: wszystkie ćwiczenia dostępne w aplikacji mają spójne, wygenerowane grafiki w ciemnym stylu.


Wersja v20: grafiki z arkuszy zostały wycięte do osobnych plików PNG i bezpośrednio podpięte pod ćwiczenia w aplikacji.


V26: poprawna grafika prostowania nóg na maszynie i twarde usuwanie wszystkich duplikatów prostowania nóg z Planu B. Paczka jest kompletna (grafiki, manifest, SW).
Wersja v36: usunięto ręczny przycisk naprawy z Opcji; automatyczne twarde odświeżanie planu i grafik przy starcie pozostaje aktywne.

Wersja v36: dodano .gitignore dla repozytorium GitHub Pages.

Wersja v36: .gitignore rozszerzony o Visual Studio (.vs), Rider/JetBrains oraz pliki build .NET.

Wersja v36: naprawiony błąd JS blokujący kliknięcia; przy każdym starcie twardo przywracany aktualny bazowy plan A/B/C i mapowanie grafik, z zachowaniem historii/pomiarów i własnych dodatkowych ćwiczeń.

Wersja v36: historia wagi i obwodów z usuwaniem wpisów; usunięto automatyczne wymuszanie planu/grafik. Grafiki używają cache-bustingu ?v=32, a service worker pobiera obrazy i nawigację network-first. Własne ćwiczenia i ich imageSrc nie są nadpisywane.

Wersja v36: czyste wydanie bez migracji historycznych danych. Grafiki używają wyłącznie wersjonowania URL i cache service workera.

Wersja v36: poprawiony plan C pod klatkę/barki/pośladki oraz nowa prawidłowa grafika ściągania uchwytu neutralnego do klatki.

Wersja v36: czyste pierwsze wydanie z nowym planem jako DEFAULT_PLAN; bez migracji i napraw starych planów. Cache-busting pozostaje tylko dla grafik.
