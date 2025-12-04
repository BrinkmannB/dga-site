// Ophalen risicoklasse uit localStorage
const level = localStorage.getItem("aiRiskLevel") || "Onbekend";

document.getElementById("riskLevel").textContent = level;

// Dynamische contentblokken
const content = {
    "Laag risico": `
        <h3>Laag risico – beperkte verplichtingen</h3>
        <ul>
            <li>Transparantie richting gebruikers</li>
            <li>Basisdocumentatie over het systeem</li>
            <li>Monitoring op foutgedrag</li>
        </ul>
        <p>
            Hoewel de risico’s beperkt zijn, raden we aan om een QuickScan uit te voeren 
            zodat u voldoet aan toekomstige audit-eisen.
        </p>
    `,
    "Hoog risico": `
        <h3>Hoog risico – uitgebreide verplichtingen</h3>
        <ul>
            <li>Risicobeoordeling en mitigatieplan</li>
            <li>Datakwaliteit en bias-analyse</li>
            <li>Technische documentatie (Annex IV)</li>
            <li>Menselijke controle en logging</li>
            <li>Registratie in het EU AI-register</li>
        </ul>
        <p>
            Hoog-risico AI vereist structurele governance.  
            De QuickScan identificeert direct waar uw grootste gaten zitten.
        </p>
    `,
    "Onaanvaardbaar risico": `
        <h3>Onaanvaardbaar risico – verboden AI</h3>
        <p>
            Op basis van uw antwoorden valt het systeem binnen categorieën 
            die onder de EU AI Act verboden zijn. Stop het gebruik 
            en documenteer uw bevindingen onmiddellijk.
        </p>
        <p>
            De QuickScan biedt u een volledige juridische analyse en advies richting directie of bestuur.
        </p>
    `,
    "Onbekend": `
        <p>We konden uw risicoklasse niet bepalen. Probeer de test opnieuw.</p>
    `
};

document.getElementById("riskContent").innerHTML = content[level];


// Checkout button (Stripe / Rabby placeholder)
function startCheckout() {
    alert("Checkout wordt binnenkort geactiveerd. Betaalkoppeling volgt.");
}

