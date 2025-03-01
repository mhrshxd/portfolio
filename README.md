# portfolio
# Portfolio Login Page

This repository contains a stylish login page for my portfolio, featuring a glassmorphism design, animated effects, and form validation. Below is an explanation of each file in English and German.

---

## English

### Overview
This project is a login page designed to serve as an entry point to my portfolio. It uses HTML, CSS, and JavaScript, split into three files for better organization. The page validates a username and password, displays success/error messages with animations, and redirects to `intropage.html` upon successful login.

### Files

#### `index.html`
- **Purpose**: The main structure of the login page.
- **Description**: Contains the HTML markup for the login form, including input fields for username and password, a submit button, and divs for success/error messages. It links to `login-styles.css` for styling and `login-scripts.js` for functionality.
- **Key Elements**:
  - `<input id="username">` and `<input id="password">` for user input.
  - `<button onclick="submitForm()">` triggers the login logic.
  - `<div id="loginMessage">` and `<div id="errorMessage">` for feedback.

#### `login-styles.css`
- **Purpose**: Defines the visual design and animations.
- **Description**: Implements a glassmorphism aesthetic with a gradient background, transparent container, and animated effects (e.g., button ripple, error shake). It styles the form elements, button, and messages.
- **Key Features**:
  - `body`: Gradient background (`#1e0533` to `#00c4ff`) with particle effects.
  - `.container`: Transparent (`rgba(255, 255, 255, 0.1)`) with `backdrop-filter: blur(10px)`.
  - `button`: Gradient (`#ff00cc` to `#3333ff`), hover ripple, and scale effects.
  - Animations: `floatIn`, `shake`, `pulse`, etc.

#### `login-scripts.js`
- **Purpose**: Handles form logic and interactivity.
- **Description**: Validates the username ("user123") and password ("pass456"), shows a welcome message or error popup, and redirects to `intropage.html` on success. It also generates drifting particles for a dynamic background.
- **Key Features**:
  - `submitForm()`: Checks credentials and triggers animations/messages.
  - Enter key support via `keypress` event listener.
  - Particle effect: Creates and removes `.particle` elements every 300ms.

---

## Deutsch

### Überblick
Dieses Projekt ist eine Login-Seite, die als Einstiegspunkt für mein Portfolio dient. Es verwendet HTML, CSS und JavaScript, aufgeteilt in drei Dateien für bessere Organisation. Die Seite überprüft Benutzername und Passwort, zeigt Erfolgs-/Fehlermeldungen mit Animationen an und leitet bei erfolgreichem Login zu `intropage.html` weiter.

### Dateien

#### `index.html`
- **Zweck**: Die Hauptstruktur der Login-Seite.
- **Beschreibung**: Enthält das HTML-Markup für das Login-Formular, einschließlich Eingabefeldern für Benutzername und Passwort, einem Absende-Button und Divs für Erfolgs-/Fehlermeldungen. Verlinkt auf `login-styles.css` für Styling und `login-scripts.js` für Funktionalität.
- **Wichtige Elemente**:
  - `<input id="username">` und `<input id="password">` für Benutzereingaben.
  - `<button onclick="submitForm()">` löst die Login-Logik aus.
  - `<div id="loginMessage">` und `<div id="errorMessage">` für Rückmeldungen.

#### `login-styles.css`
- **Zweck**: Definiert das visuelle Design und Animationen.
- **Beschreibung**: Setzt eine Glassmorphism-Ästhetik mit einem Gradienten-Hintergrund, transparentem Container und animierten Effekten (z. B. Button-Ripple, Fehler-Wackeln) um. Es gestaltet die Formularelemente, den Button und die Meldungen.
- **Hauptmerkmale**:
  - `body`: Gradientenhintergrund (`#1e0533` bis `#00c4ff`) mit Partikeleffekten.
  - `.container`: Transparent (`rgba(255, 255, 255, 0.1)`) mit `backdrop-filter: blur(10px)`.
  - `button`: Gradient (`#ff00cc` bis `#3333ff`), Hover-Ripple und Skalierungseffekte.
  - Animationen: `floatIn`, `shake`, `pulse`, usw.

#### `login-scripts.js`
- **Zweck**: Verwaltet die Formularlogik und Interaktivität.
- **Beschreibung**: Überprüft den Benutzernamen ("user123") und das Passwort ("pass456"), zeigt eine Willkommensnachricht oder ein Fehler-Popup an und leitet bei Erfolg zu `intropage.html` weiter. Außerdem erzeugt es treibende Partikel für einen dynamischen Hintergrund.
- **Hauptmerkmale**:
  - `submitForm()`: Prüft Zugangsdaten und löst Animationen/Meldungen aus.
  - Unterstützung für die Eingabetaste über einen `keypress`-Event-Listener.
  - Partikeleffekt: Erzeugt und entfernt `.particle`-Elemente alle 300ms.

---

## Usage / Verwendung

### English
1. Clone the repository: `git clone https://github.com/mhrshxd/portfolio.git`
2. Open `index.html` in a browser to test locally.
3. Deploy to GitHub Pages or a server for live use.
   - Update the redirect in `login-scripts.js` to `https://mhrshxd.github.io/main/intropage.html` if linking to your portfolio page.

### Deutsch
1. Klone das Repository: `git clone https://github.com/mhrshxd/portfolio.git`
2. Öffne `index.html` in einem Browser, um es lokal zu testen.
3. Stelle es auf GitHub Pages oder einem Server bereit, um es live zu nutzen.
   - Aktualisiere die Weiterleitung in `login-scripts.js` auf `https://mhrshxd.github.io/main/intropage.html`, wenn du auf deine Portfolio-Seite verlinken möchtest.

---

## Notes / Hinweise

- **English**: Ensure all files are in the same directory. The redirect assumes `intropage.html` is accessible—adjust the path as needed for your setup.
- **Deutsch**: Stelle sicher, dass alle Dateien im selben Verzeichnis sind. Die Weiterleitung setzt voraus, dass `intropage.html` erreichbar ist—passe den Pfad bei Bedarf an deine Konfiguration an.
