function saveAnswer(step, value) {
    localStorage.setItem(step, value);
}

function get(step) {
    return localStorage.getItem(step);
}

function go(page) {
    window.location = page;
}

function calculateRisk() {
    const a1 = get("step1");
    const a2 = get("step2");
    const a3 = get("step3");
    const a4 = get("step4");
    const a5 = get("step5");
    const a6 = get("step6");
    const a7 = get("step7");
    const a8 = get("step8");
    const a9 = get("step9");
    const a10 = get("step10");

    if (a1 === "yes") return "Verboden AI";
    if (a2 === "yes") return "Hoog risico AI";
    if (a3 === "high") return "Hoog risico AI";
    if (a4 === "strong") return "Hoog risico AI";
    if (a10 === "gpa") return "Foundation Model / GPAI — aparte verplichtingen";

    return "Laag risico / Niet-hoog risico AI";
}

function showResult() {
    document.getElementById("risk-output").innerText = calculateRisk();
}

function downloadPDF() {
    const result = calculateRisk();

    const txt = `
EU AI Act — Resultaat
---------------------

Risicocategorie:
${result}

Verstrekte antwoorden:
1: ${get("step1")}
2: ${get("step2")}
3: ${get("step3")}
4: ${get("step4")}
5: ${get("step5")}
6: ${get("step6")}
7: ${get("step7")}
8: ${get("step8")}
9: ${get("step9")}
10: ${get("step10")}
`;

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ai-act-resultaat.txt";
    a.click();
}

