# IDEA

Checklista prowadzenia projektu od pomyslu do wdrozenia.

## 1. Cel i zakres
- [ ] Okreslic, do czego sluzy strona
- [ ] Zdefiniowac glownego uzytkownika
- [ ] Spisac funkcje MVP
- [ ] Spisac, czego nie robimy w pierwszej wersji

## 2. Struktura i layout
- [ ] Rozpisac widoki / podstrony
- [ ] Ustalic nawigacje
- [ ] Przyjac podejscie mobile-first
- [ ] Ustalic breakpointy dla mobile / tablet / desktop
- [ ] Zdefiniowac zasady progresywnego layoutu zalezne od szerokosci ekranu
- [ ] Zaplanowac layout desktop
- [ ] Zaplanowac layout tablet
- [ ] Zaplanowac layout mobile
- [ ] Wypisac glowne komponenty

## 3. Model danych
- [ ] Spisac potrzebne encje
- [ ] Okreslic pola dla kazdej encji
- [ ] Ustalic relacje miedzy danymi
- [ ] Okreslic, ktore dane sa statyczne, a ktore z bazy

## 4. Frontend na mockach
- [ ] Zbudowac podstawowy layout
- [ ] Podpiac mock data
- [ ] Przejsc glowne flow uzytkownika
- [ ] Sprawdzic responsywnosc

## 5. Backend i baza danych
- [ ] Wybrac backend / usluge danych
- [ ] Zaprojektowac schemat danych
- [ ] Przygotowac integracje API
- [ ] Podlaczyc frontend do prawdziwych danych

## 6. Testy i dopracowanie
- [ ] Sprawdzic podstawowe scenariusze
- [ ] Poprawic UX i bledy
- [ ] Uporzadkowac tresci, nazwy i CTA
- [ ] Zweryfikowac wersje mobilna i desktopowa

## 7. Deployment i domena
- [ ] Wybrac hosting
- [ ] Ustawic zmienne srodowiskowe
- [ ] Wystawic aplikacje na produkcje
- [ ] Podpiac domene
- [ ] Wlaczyc SSL
- [ ] Sprawdzic wersje produkcyjna

## Decyzje projektowe
- Nazwa projektu:
- Grupa docelowa:
- Glowny problem, ktory rozwiazujemy:
- Frontend: React + Vite
- Styling: SCSS
- Routing:
- Backend:
- Baza danych:
- Hosting:
- Domena:
- Layout: progresywny, zalezny od szerokosci ekranu
- Strategia RWD: mobile-first
- Breakpointy wstepne: mobile < 768px, tablet 768-1023px, desktop >= 1024px

## MVP
- [ ]

## Pomysly na pozniej
- [ ]

## Notatki
- Layout ma byc progresywny i reagowac na szerokosc ekranu.
- Web / desktop: szeroki uklad z pelna kompozycja sekcji.
- Tablet: uklad posredni, wiecej oddechu, czesciowo 2-kolumnowy.
- Telefon: waski uklad, priorytet tresci i pionowy flow.
- Sekcje maja zmieniac hierarchie, gestosc i uklad zamiast byc projektowane jako osobne strony dla urzadzen.
