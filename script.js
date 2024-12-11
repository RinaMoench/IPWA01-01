
// Sidebar-Funktion

  // Holen des Elements mit der ID 'sidebar', welches das Sidebar-Menü repräsentiert
  const sidebar = document.getElementById('sidebar');
  
  // Holen des Elements mit der ID 'hamburgerMenu', welches das Hamburger-Menü darstellt
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  
  // Holen des Elements mit der ID 'closeSidebar', welches der Button zum Schließen des Sidebars ist
  const closeSidebar = document.getElementById('closeSidebar');
  
  // Event-Listener für das Klicken auf das Hamburger-Menü
  // Wenn auf das Hamburger-Menü geklickt wird, wird die Klasse 'show' zur Sidebar hinzugefügt,
  // was dazu führt, dass das Sidebar-Menü angezeigt wird.
  hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.add('show');
  });
  
  // Event-Listener für das Klicken auf den Close-Button (Schließen des Sidebars)
  // Wenn auf den Close-Button geklickt wird, wird die Klasse 'show' von der Sidebar entfernt,
  // was dazu führt, dass das Sidebar-Menü wieder verschwindet.
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });


   // Hole das Formular-Element mit der ID 'spendenForm'
const form = document.getElementById('spendenForm');

// Hole das Eingabefeld für die Abholadresse mit der ID 'abholadresse'
const abholadresse = document.getElementById('abholadresse');

// Hole das Element, das für die Bestätigung der eingegebenen Daten zuständig ist, mit der ID 'confirmation'
const confirmation = document.getElementById('confirmation');

// Event-Listener für alle Optionen im Formular (z.B. Übergabe an Geschäftsstelle oder Abholung)
form.option.forEach(option => {
    // Wenn eine Option geändert wird (z.B. von 'abholung' zu 'geschäftsstelle')
    option.addEventListener('change', () => {
        // Wenn 'abholung' ausgewählt wurde, wird das Abholadressfeld angezeigt
        // Ansonsten wird es ausgeblendet
        abholadresse.style.display = option.value === 'abholung' ? 'block' : 'none';
    });
});

// Formular-Funktion

// Event-Listener für das Absenden des Formulars
form.addEventListener('submit', function (event) {
    // Verhindere, dass das Formular tatsächlich abgeschickt wird (damit wir die Validierung durchführen können)
    event.preventDefault();

    // Hole die Eingabewerte des Formulars
    const anrede = document.getElementById('anrede').value;
    const vorname = document.getElementById('vorname').value;
    const nachname = document.getElementById('nachname').value;
    const kleidung = document.getElementById('kleidung').value;
    const krisengebiet = document.getElementById('krisengebiet').value;
    const option = document.querySelector('input[name="option"]:checked').value;

    // Wenn 'abholung' ausgewählt wurde, prüfe die Abholadresse
    if (option === 'abholung') {
        const strasse = document.getElementById('strasse').value;
        const plz = document.getElementById('plz').value;
        const ort = document.getElementById('ort').value;

        // Validierung der Postleitzahl: Die ersten zwei Ziffern müssen mit '53' übereinstimmen (z.B. für eine bestimmte Region)
        if (plz.substring(0, 2) !== '53') {
            alert('Die ersten beiden Ziffern der Postleitzahl müssen mit denen der Geschäftsstelle übereinstimmen.');
            return; // Wenn die Validierung fehlschlägt, wird der Code hier abgebrochen und das Formular nicht abgesendet
        }
    }

    // Erstelle eine neue Instanz von Date, um das aktuelle Datum und die Uhrzeit zu erhalten
    const date = new Date();

    // Generiere den Bestätigungstext mit den eingegebenen Daten
    const confirmationText = `
        <p><strong>Anrede:</strong> ${anrede}</p>
        <p><strong>Vorname:</strong> ${vorname}</p>
        <p><strong>Nachname:</strong> ${nachname}</p>
        <p><strong>Art der Kleidung:</strong> ${kleidung}</p>
        <p><strong>Aktuelles Krisengebiet:</strong> ${krisengebiet}</p>
        <p><strong>Datum:</strong> ${date.toLocaleDateString()}</p>
        <p><strong>Uhrzeit:</strong> ${date.toLocaleTimeString()}</p>
        <p><strong>Ort:</strong> ${option === 'abholung' ? document.getElementById('ort').value : 'Geschäftsstelle'}</p>
    `;

    // Setze den generierten Bestätigungstext in das 'confirmation'-Element ein
    confirmation.innerHTML = confirmationText;

    // Zeige das Bestätigungs-Element an, nachdem das Formular abgeschickt wurde
    confirmation.style.display = 'block';
});







