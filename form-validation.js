
    const form = document.getElementById('spendenForm');
    const abholadresse = document.getElementById('abholadresse');
    const confirmation = document.getElementById('confirmation');

    form.option.forEach(option => {
        option.addEventListener('change', () => {
            abholadresse.style.display = option.value === 'abholung' ? 'block' : 'none';
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const anrede = document.getElementById('anrede').value;
        const vorname = document.getElementById('vorname').value;
        const nachname = document.getElementById('nachname').value;
        const kleidung = document.getElementById('kleidung').value;
        const krisengebiet = document.getElementById('krisengebiet').value;
        const option = document.querySelector('input[name="option"]:checked').value;

        if (option === 'abholung') {
            const strasse = document.getElementById('strasse').value;
            const plz = document.getElementById('plz').value;
            const ort = document.getElementById('ort').value;

            if (plz.substring(0, 2) !== '53') {
                alert('Die ersten beiden Ziffern der Postleitzahl müssen mit denen der Geschäftsstelle übereinstimmen.');
                return;
            }
        }

        const date = new Date();
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
        
        confirmation.innerHTML = confirmationText;
        confirmation.style.display = 'block';
    });







