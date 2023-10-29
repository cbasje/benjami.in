---
title: "Kompano"
description: "Herontwerp van de Kompano control app"
excerpt: "Voor het vak 'Project Usability and User eXperience Assessment in Design' (UXAD) is een redesign gemaakt voor de Kompano app van Priva. Deze Kompano app wordt gebruikt om de Kompano robot aan te sturen. De robot snijdt de bladeren van tomatenplanten in kassen. Operators gebruiken de Kompano robot app om de robot te starten en eventuele problemen te verhelpen. Een operator bestuurt dagelijks meerdere Kompano's met de app."
headerImage:
    url: "/images/kompano.webp"
    caption: "De operator kan de app in de kas gebruiken terwijl hij een veilige afstand bewaart."
    alt: "Een hand die een telefoon vasthoudt met de Kompano control app. De achtergrond toont een kas met daarin een Kompano robot."
hue: 0
categories:
    - "nl/prototyping"
    - "nl/ux"
company:
    title: "Priva"
    url: "https://www.priva.com/"
publishedAt: 2022-06-30
seo:
    metaTitle: "Kompano"
    isArticle: true
---

Het project was verdeeld in twee hoofdfasen. In de eerste fase werd gekeken naar het huidige product en de context. De door Priva gemaakte app was vooral bedoeld om te testen en was in de loop der tijd niet geëvolueerd met het toenemend aantal toegevoegde functies.

![Een hand die een telefoon vasthoudt met de oude Kompano control app. De achtergrond toont een kas met een Kompano robot erin.](/images/kompano-1.png)
_De oude app liet de belangrijkste informatie niet goed genoeg zien en de bediening was verwarrend._

De belangrijkste gebruiker van de Kompano-app zijn de bestaande ploegleiders in de kassen. Zij hebben veel taken zoals het coördineren van hun ploeg, delevelen, snoeien. Om de kas efficiënt te houden is het **belangrijk dat de app ook voor hen efficiënt werkt**.

![De eigenschappen van de hoofdgebruiker van de Kompano control app met op de achtergrond een afbeelding van een typische kasmedewerker. Het vertelt je dat de hoofdgebruiker 20-25 jaar oud is, de Nederlandse of Poolse nationaliteit heeft, een middelbare schooldiploma heeft en verantwoordelijk en ervaren is.](/images/kompano-2.png)
_De kenmerken van de hoofdgebruiker van de Kompano control app._

De vier belangrijkste use cases van de app zijn:

-   Verbinding maken met een Kompano robot en het starten van deleafing
-   Een probleem rapporteren
-   Onderhoud uitvoeren
-   De Kompano robot opladen

Om de belangrijkste probleempunten van de huidige app te beoordelen, werd deze geanalyseerd op interactie en opbouw. Vervolgens werden deze vier belangrijkste use cases getest met potentiële gebruikers in kassen op hun werkbelasting en algemene bruikbaarheid. Op basis van deze bevindingen van dit onderzoek werden een probleemstelling en ontwerpdoel gevormd.

## Problem statement

> "De ingewikkelde taakworkflow van de app zorgt ervoor dat deelnemers gemakkelijk verdwalen in de app. Om taken uit te voeren, moeten veel stappen worden genomen en het is voor deelnemers niet duidelijk waar ze zich in de workflow bevinden. Daarnaast is het gebrek aan feedback na stappen in meerdere situaties verwarrend en frustrerend. Ook slechte visualisaties van knoppen en iconen maken het onduidelijk om het verschil te zien. Ook is de app niet gemaakt om meerdere Kompano's gedurende de dag aan te sturen. Dit alles zorgt voor een hoge werkbelasting voor de gebruiker en maakt het moeilijk voor hem om meerdere Kompano's te bedienen en andere taken uit te voeren. Dit leidt tot inefficiëntie en lagere winstmarges.”

## Ontwerpdoel

> "Door de werklast te verminderen, willen we een efficiëntere app maken. We willen dat ons ontwerp een eenvoudige en consistente workflow heeft. De workflow moet een minimaal aantal stappen voor elke taak bevatten, zodat het gemakkelijk is om met de app te werken. Deelnemers moeten zich door de app geleid voelen doordat ze duidelijke feedback krijgen voor hun acties. Ook de visualisaties moeten informatief en duidelijk zijn. De operator moet het gevoel hebben dat hij de controle heeft bij het verwerken van informatie over de Kompano robot en de app moet een begrijpelijk overzicht geven van alle Kompano's waarmee een operator moet werken."

---

## Herontwerp

De volgende stap was het maken van een concept redesign. De oorspronkelijke app had een ingewikkelde workflow waarin deelnemers gemakkelijk verdwaalden. Daarom was een verandering in de paginastructuur van de app nodig. Door te veranderen waar dingen zich in de app bevinden, kan het minimum aantal stappen om taken uit te voeren worden verminderd. Daarnaast werd er nagedacht over kleuren, iconen, labels en datavisualisatie, omdat het een belangrijke rol speelt om visualisaties te maken die informatief en duidelijk zijn en de gebruiker het gevoel geven dat hij of zij alles onder controle heeft.

Een manier om gebruikers meer controle te geven was het creëren van een duidelijk kleurensysteem voor meldingen om direct de huidige status van een Kompano te herkennen. Ook was een inzicht uit het onderzoek dat het afhandelen van fouten die je niet zelf kunt oplossen veel tijd kostte en de operators en het kasbedrijf uit het lood sloeg. Dit werd opgelost door een chatbot te maken met Priva Support om snel feedback te krijgen en de geschiedenis van eerdere gesprekken te kunnen zien.

Dit herontwerp werd opnieuw getest met potentiële gebruikers in kassen op dezelfde belangrijkste use cases. Over het algemeen kan worden geconcludeerd dat het herontwerp een verbetering is ten opzichte van de oorspronkelijke app. De werklast voor deelnemers nam af en ze leken meer zelfvertrouwen te hebben door de betere feedback die de app gaf. Deelnemers begrepen de taken gemakkelijk en liepen niet tegen ernstige problemen aan.

---

## Mijn rol(len)

Vanaf het begin van de cursus was het team gericht op taakverdeling om zo efficiënt mogelijk te werken. Elk teamlid kreeg zijn eigen taken en er was elke week een teamvergadering om hun werk te bespreken en voor sommige onderdelen samen te werken. Elk teamlid maakte bijvoorbeeld zijn eigen concept van het herontwerp om functies/nieuwe ideeën te vergelijken en te combineren tot het uiteindelijke herontwerpconcept. Functies uit mijn concept zijn het kleurensysteem voor meldingen en de chatbot voor het afhandelen van fouten met Priva Support.

Tijdens de gebruikerstests was mijn belangrijkste taak het documenteren van audio- en video-opnamen en het achteraf leveren van transcripties, aangezien een deel van het team geen Engels sprak. Daarnaast heb ik één gebruikerstest zelf uitgevoerd met behulp van ons geschreven script vanwege ziekte van de gebruikelijke moderator.

Mijn belangrijkste taak was echter het maken van een prototype om te gebruiken in de gebruikerstestsessies. De ontwerpen werden eerst gemaakt in Figma, waar alle teamleden konden samenwerken. Daarna besloten we om het prototype te importeren in Framer om een meer realistische versie van het prototype te krijgen, omdat je met Framer normale React-code kunt toevoegen aan prototypes, maar de visuele interface gelijk houdt aan die van Figma. Dit maakte het bijvoorbeeld mogelijk om de status van een Kompano bij te werken, die dan overal bijgewerkt zou worden. Ook kon het verbonden worden met een laptop aan de zijkant waar ik bepaalde waarden kon instellen voor de gebruikerstests waar de deelnemers mee konden werken, zoals een bepaalde foutmelding of een lage batterijstatus. De deelnemer kon ook in realtime met de laptop chatten en berichten van het team ontvangen.

[Bekijk het prototype](https://framer.com/embed/Kompano-Final-Redesign--8yThemIu0F84D6qE7DBa/EtmYk_avt?highlights=0)

<iframe is="ui-prototype" src="https://framer.com/embed/Kompano-Final-Redesign--8yThemIu0F84D6qE7DBa/EtmYk_avt?highlights=0" data-provider="Framer"/>
