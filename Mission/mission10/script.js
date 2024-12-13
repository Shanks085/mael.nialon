
function calcul() {
    let sousTotal = 0;

    document.querySelectorAll('.ligne').forEach(row => {
        const qte = parseFloat(row.querySelector('.qte').value) || 0;
        const prix = parseFloat(row.querySelector('.prix').value) || 0;
        const total = qte * prix;
        row.querySelector('.totali').value = total.toFixed(2);
        sousTotal += total;
    });

    const remise = parseFloat(document.getElementById('remise').value) || 0;
    const totalRemise = sousTotal - remise;
    const tauxTaxe = parseFloat(document.getElementById('tauxTaxe').value) || 0;
    const taxeTotale = (totalRemise * tauxTaxe) / 100;
    const soldeDu = totalRemise + taxeTotale;

    document.getElementById('sousTotal').innerText = sousTotal.toFixed(2);
    document.getElementById('totalRemise').innerText = totalRemise.toFixed(2);
    document.getElementById('taxeTotale').innerText = taxeTotale.toFixed(2);
    document.getElementById('soldeDu').innerText = soldeDu.toFixed(2);
}

function ajouterLigne() {
    const table = document.querySelector('.Tableau');
    const nouvelleLigne = document.createElement('tr');
    nouvelleLigne.classList.add('ligne');
    nouvelleLigne.innerHTML = `
        <td><input type="text" class="input desc" placeholder="DESCRIPTION"></td>
        <td><input type="number" class="input qte" placeholder="0"></td>
        <td><input type="number" class="input prix" placeholder="0.00"></td>
        <td><input type="number" class="input totali" placeholder="0.00" readonly></td>
    `;
    table.appendChild(nouvelleLigne);
}

function remplirAuto() {
    document.querySelectorAll('.ligne').forEach((row, index) => {
        row.querySelector('.desc').value = `Article ${index + 1}`;
        row.querySelector('.qte').value = Math.floor(Math.random() * 10) + 1;
        row.querySelector('.prix').value = (Math.random() * 100).toFixed(2);
    });
    calcul();
}

function calculerSolde() {
    // Constantes et éléments nécessaires
    const fraisExpedition = 10.00; // Exemple de frais fixes
    const remise = 0.10; // 10% de remise
    const tauxTaxe = 0.20; // : 20% de taxe

    // Calcul du sous-total
    const sousTotal = Array.from(document.querySelectorAll('.totali')).reduce((acc, elem) => {
        return acc + parseFloat(elem.value || 0);
    }, 0);

    // Calcul des autres valeurs
    const sousTotalRemise = sousTotal - (sousTotal * remise);
    const taxeTotale = sousTotal * tauxTaxe;
    const soldeDu = sousTotalRemise + taxeTotale + fraisExpedition;

    
    document.getElementById('sousTotal').textContent = sousTotal.toFixed(2);
    document.getElementById('sousTotalRemise').textContent = sousTotalRemise.toFixed(2);
    document.getElementById('taxeTotale').textContent = taxeTotale.toFixed(2);
    document.getElementById('fraisExpedition').textContent = fraisExpedition.toFixed(2);
    document.getElementById('soldeDu').textContent = soldeDu.toFixed(2);
}



