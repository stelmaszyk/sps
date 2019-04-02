var ciekawostki = [
            "Każdy pilot je inne danie! Zasada ta stworzona została dlatego, by zminimalizować ryzyko ewentualnego zatrucia",
            "Boeing 747 jest zbudowany z 6 milionów części! Królowa Przestworzy, bo tak nazywany jest Boeing 747 jest najpopularniejszym samolotem szerokokadłubowym na świecie. Najciekawsze jest to, że wszystkie 6 milionów części obsługiwane jest przez dwóch pilotów przy uzyciu parudziesięciu przełączników",
            "Ponad 80% społeczeństwa boi sie latać! Aerofobia to coś innego niż lęk wysokości. Duża odległość od ziemi (np. 9km) może wywołać naprawdę poważne konsekwencje zdrowotne!. Co ciekawe, ta osoba nie odczuje tego lęku chodząc po drabinie, czy wjeżdżając na 50 piętro drapacza chmur..." ,
            "Najbardziej zatłoczone lotnisko cywilne na świecie to Atlanta-Hartsfield Jackson! Rocznie na tym lotnisku wykonuje sie prawie milion operacji lotniczych, a dziennie obsługuje ono ponad 260 tysięcy pasażerów!",
            "Wiek samolotu to nie ilość lat! Brzmi dziwnie, prawda? Wiek samolotu oblicza się według cykli ciśnieniowych, czyli upraszczając od ilości lotów. Dlatego też 5-letni Boeing 737 należący do Ryanair, w porównaniu do 5-letniego Boeinga 777 KLMu, będzie około 6 razy starszy!",
            "1919 --- KLM, Królewskie Holenderskie Linie Lotnicze to najstarszy nieprzerwanie działający przewoźnik. ",
            "37 SEKUND - na lotnisku Chicago O'Hare (ORD/KORD) samoloty startują lub lądują średnio co 37 sekund",
            "PÓŁTORA LITRA - tyle wody traci ludzkie ciało podczas przeciętnego, 3-godzinnego lotu",
            "KAWIOR! - Lufthansa jest największym na świecie kupcem kawioru. Rocznie kupuje go ponad 10 ton!",
            "ODPRAWA ONLINE - W 1999 roku, Alaska Airlines jako pierwszy przewoźnik na świecie uruchomił system kupna biletów oraz odprawy przez Internet",
            "80 PROCENT! - Wszystkie samoloty z rodziny 747 przewiozły prawie 6 miliarów ludzi - jest to odpowiednik 80% populacji na całym świecie",
            "KLASA BIZNES - w 1979 roku Australijski przewoźnik Qantas zaprezentował pierwszą na świecie klasę Biznes",
            "iPAD TO OSZCZĘDNOŚĆ? Decyzją American Airlines, wszystkie papierowe manuale zostały przeniesione na iPady. Przyniosło to przewoźnikowi 1.2 miliona dolarów oszczędności na paliwie!",
            "SAŁATKI NISKOKALORYCZNE - W 1987 roku American Airlines oszczędziły 40 tysięcy dolarów dzięki usunięciu oliwy z sałatek podawanych w pierwszej klasie.",
            "SZERSZY NIŻ DŁUŻSZY - rozpiętość skrzydeł w Airbusie A380 wynosi 80m. Długość całego samolotu to zaledwie... 72.7m",
            "POMOCY PO FRANCUSKU - słowo MAYDAY zostało zapożyczone pochodzi z francuskiego słowa m'aidez, co oznacza 'Pomóżcie mi'",
            "ENGLISH! - język angielski to również język lotniczy. Wszyscy kontrolerzy oraz piloci, którzy latają na trasach międzynarodowych muszą go znać.",
            "NA CZAS LĄDOWANIA OŚWIETLENIE ZOSTANIE WYŁĄCZONE - nie jest to wymysł załogi. Wyłączenie oświetlenia lub jego przyciemnienie ma pomóc w odnalezieniu dróg ewakuacji, które poprowadzone są na podłodze kabiny",
            "LATAMY TANIEJ - Ryanair przewozi więcej pasażerów międzynarodowych niż każdy inny przewoźnik na świecie.",
            "JEDEN Z DZIEWIĘCIU - Emirates jest największym użytkownikiem Airbusa A380 oraz Boeinga 777 i jednym z dziewięciu przewoźników, którzy mają w swojej flocie tylko samoloty szeroko kadłubowe",
            "PIERWSZE ODRZUTOWCE - z dniem 11 lipca 1962 roku, Air India stała się pierwszym na świecie przewoźnikiem latającym przy użyciu tylko i wyłącznie samolotów odrzutowych",
            "MNIEJSZY OD SKRZYDŁA - Winglety zamontowane w Airbusie A330-200 mają tę samą wysokość, co najwyższy człowiek na świecie",
            "LEGALNE PORYWANIE - Do 1961 roku porywanie samolotów nie było w żadnen sposób obostrzone prawnie",
            "WIĘCEJ WINA! - Singapore Airlines rocznie wydają około 700 milionów dolarów na jedzenie. Drugim największym wydatkiem gastronomicznym przewoźnika jest wino, na które linia wydaje rocznie około 16 milionów dolarów",
            "KIEDYŚ TO BYŁO - w 1920 roku średnia cena biletu lotniczego wynosiła 5 dolarów",
            "WIDZIMY WSZYSTKO! - najwyższa na świecie wieża kontroli lotów znajduje się na międzynarodowym lotnisku Suvarnabhumi w Tajlandii. Ma ona wysokość 132.2 m",
            "15 STOPNI - okna wieży kontroli lotów muszą być pochylone o 15 stopni do dołu - ma to na celu zminimalizowanie odbić światła zarówno od środka, jak i od zewnątrz budynku.",
            "CZARNE ALE POMARAŃCZOWE - czarne skrzynki w samolotach zapisuja wszystkie parametry lotu. Jednak 'czarny' jest tylko w nazwie, ponieważ są one pomarańczowe",
            "JESTEM NAJWIĘKSZY! - największy samolot na świecie to obecnie Antonov An-225 Mrija. Został zbudowany z myślą o transporcie rakiet i ma 6 silników",
            "ALPHA BRAVO - w alfabecie lotniczym każda litera ma swoją nazwę, np. A-Alpha, H-Hotel, Q-Quebec. Posługując się literami, piloci podają nazwy liter - w ten sposób prawie do zera spada problem niezrozumienia się" ]

while (true) {
  function losowaciekawostka() {
    var rand = ciekawostki[Math.floor(Math.random() * ciekawostki.length)];
    var wylosowane = ciekawostki[rand];
    document.write(wylosowane);
  }
  setTimeout(losowaciekawostka, 500);
  document.innerHTML = "";
}
