// riskModel.js — v1.0 (AI Act Quickscan DGA)

// Haal alle antwoorden op en bepaal risico + uitleg
export function calculateRisk() {

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

    // === 1. Forbidden AI (Art. 5) ===
    if (a[1] === "yes") {
        return {
            category: "forbidden",
            title: "Verboden AI",
            reason: "Het systeem valt onder artikel 5 van de EU AI Act omdat het kenmerken van verboden AI bevat.",
            steps: [
                "Stop de implementatie van het systeem (verboden AI mag niet worden gebruikt in de EU).",
                "Onderzoek alternatieven die wel binnen de wetgeving passen.",
                "Laat een volledige AI-governance analyse uitvoeren voor risico’s en opties."
            ]
        };
    }

    // === 2. High Risk (Annex III triggers) ===
    if (
        a[2] === "yes" ||         // biometrie
        a[4] === "high" ||        // grote impact
        a[5] === "auto" ||        // automatische besluiten
        a[7] === "yes"            // overheid
    ) {
        return {
            category: "high",
            title: "Hoog risico AI",
            reason: "Het systeem bevat kenmerken uit Annex III van de EU AI Act, zoals biometrie, hoge impact of publieke inzet.",
            steps: [
                "Start een verplichte AI Risk Assessment (risicobeheerproces).",
                "Documenteer technische documentatie conform Annex IV.",
                "Zorg voor menselijk toezicht en datakwaliteit.",
                "Bereid een conformiteitsbeoordeling voor."
            ]
        };
    }

    // === 3. GPAI/Foundation Model ===
    if (a[10] === "gpa") {
        return {
            category: "gpa",
            title: "Generatief / Foundation Model",
            reason: "Het systeem valt onder de verplichtingen voor GPAI volgens de AI Act.",
            steps: [
                "Documenteer trainingsdata, beperkingen en risico’s.",
                "Voer technische evaluaties en benchmarks uit.",
                "Zorg voor duidelijke downstream-instructies voor gebruikers."
            ]
        };
    }

    // === 4. Limited / Transparantie ===
    if (a[10] === "application") {
        return {
            category: "limited",
            title: "Beperkt risico AI",
            reason: "Dit systeem valt onder transparantievereisten van de AI Act.",
            steps: [
                "Informeer gebruikers dat AI wordt toegepast.",
                "Zorg voor menselijk toezicht (‘human-in-the-loop’).",
                "Documenteer doel, context en beperkingen."
            ]
        };
    }

    // === 5. Low Risk ===
    return {
        category: "low",
        title: "Laag risico AI",
        reason: "Het systeem valt buiten gereguleerde categorieën van de EU AI Act.",
        steps: [
            "Houd basisdocumentatie en beslisregels bij.",
            "Herzie bij updates of er nieuwe risico’s ontstaan.",
            "Overweeg vrijwillige governance voor betrouwbaarheid."
        ]
    };
}
