// riskModel.js — v1.0 (AI Act Quickscan DGA)
// --------------------------------------------------
// Deze module leest alle antwoorden uit localStorage
// en geeft een object terug met:
// { category: "...", title: "...", reason: "...", steps: [...] }

export function calculateRisk() {

    // 1. Alle antwoorden ophalen
    const a = {
        1: localStorage.getItem("step1"),
        2: localStorage.getItem("step2"),
        3: localStorage.getItem("step3"),
        4: localStorage.getItem("step4"),
        5: localStorage.getItem("step5"),
        6: localStorage.getItem("step6"),
        7: localStorage.getItem("step7"),
        8: localStorage.getItem("step8"),
        9: localStorage.getItem("step9"),
        10: localStorage.getItem("step10")
    };

    // 2. Forbidden AI (Artikel 5)
    const forbiddenTriggers = [
        a[1] === "manipulatie",
        a[2] === "scoring",
        a[3] === "biometrisch",
        a[4] === "context-overschrijding"
    ];

    if (forbiddenTriggers.includes(true)) {
        return {
            category: "forbidden",
            title: "Verboden AI",
            reason: "Het systeem bevat functionaliteiten die volgens artikel 5 van de EU AI Act niet zijn toegestaan.",
            steps: [
                "Stop onmiddellijk de implementatie — verboden AI mag niet worden gebruikt in de EU.",
                "Onderzoek alternatieve, wel toegestane technologische opties.",
                "Laat een volledige AI-governance analyse uitvoeren om risico’s te begrijpen."
            ]
        };
    }

    // 3. High Risk triggers (Annex III)
    const highRiskTriggers = [
        a[5] === "beslissingsondersteuning",
        a[6] === "veiligheidskritiek",
        a[7] === "biometrisch-vergelijk",
        a[8] === "opleiding-werk",
        a[9] === "publieke-taak"
    ];

    if (highRiskTriggers.includes(true)) {
        return {
            category: "high",
            title: "Hoog-risico AI",
            reason: "Onder jouw antwoorden valt het systeem onder Annex III van de EU AI Act.",
            steps: [
                "Start direct met risicobeoordeling + datakwaliteitseisen.",
                "Stel documentatie & technische logs op volgens Annex IV.",
                "Voer conformiteitsbeoordeling uit voor gebruik."
            ],
            gpa: a[10] === "gpa" ? true : false
        };
    }

    // 4. GPAI / Foundation Model zonder HR triggers
    if (a[10] === "gpa") {
        return {
            category: "gpa",
            title: "GPAI / Foundation Model",
            reason: "Het systeem valt onder de verplichtingen voor Foundation Models volgens de AI Act.",
            steps: [
                "Documenteer trainingsdata & beperkingen.",
                "Voer model-evaluaties en cybersecurity-tests uit.",
                "Beschrijf duidelijke instructies voor downstream gebruik."
            ]
        };
    }

    // 5. Limited Risk
    if (a[10] === "application") {
        return {
            category: "limited",
            title: "Beperkt risico",
            reason: "Het systeem valt onder de transparantievereisten van de EU AI Act.",
            steps: [
                "Informeer gebruikers over AI-gebruik.",
                "Zorg voor menselijke supervisie.",
                "Documenteer doel, context en beperkingen van het systeem."
            ]
        };
    }

    // 6. Low Risk
    return {
        category: "low",
        title: "Laag risico",
        reason: "Dit AI-systeem valt buiten gereguleerde categorieën volgens de EU AI Act.",
        steps: [
            "Houd basisdocumentatie bij.",
            "Controleer of toekomstige updates niet tot hogere risico’s leiden.",
            "Overweeg vrijwillige governance voor kwaliteit & betrouwbaarheid."
        ]
    };
}

