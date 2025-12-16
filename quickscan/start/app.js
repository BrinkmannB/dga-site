function calculateImpact() {
  const orgType = document.getElementById("orgType").value;
  const aiCount = parseInt(document.getElementById("aiCount").value) || 0;
  const highRisk = document.getElementById("highRisk").value;
  const governanceLevel = document.getElementById("governanceLevel").value;

  // Basisvalidatie
  if (!orgType || !highRisk || !governanceLevel) {
    alert("Vul alle verplichte velden in om de berekening uit te voeren.");
    return;
  }

  let score = 0;

  /* =========================
     1. Type organisatie
  ========================= */

  switch (orgType) {
    case "municipality":
      score += 20;
      break;
    case "zbo":
      score += 25;
      break;
    case "ministry":
      score += 30;
      break;
    case "ngo":
      score += 15;
      break;
  }

  /* =========================
     2. Aantal AI-systemen
  ========================= */

  if (aiCount === 0) {
    score += 0;
  } else if (aiCount <= 3) {
    score += 10;
  } else if (aiCount <= 10) {
    score += 20;
  } else {
    score += 30;
  }

  /* =========================
     3. Hoog-risico AI
  ========================= */

  if (highRisk === "yes") score += 40;
  if (highRisk === "unknown") score += 25;

  /* =========================
     4. Governance volwassenheid
  ========================= */

  if (governanceLevel === "low") score += 30;
  if (governanceLevel === "medium") score += 15;
  if (governanceLevel === "high") score += 0;

  /* =========================
     5. Interpretatie
  ========================= */

  let riskLevel = "";
  let message = "";

  if (score < 40) {
    riskLevel = "Laag";
    message = `
      De huidige indicatie wijst op een beperkte AI Act-impact.
      Dit betekent niet dat er geen verplichtingen zijn, maar dat
      de risico’s op dit moment beheersbaar lijken.
    `;
  } else if (score < 80) {
    riskLevel = "Middel";
    message = `
      De AI Act kan voor jouw organisatie tot aanvullende verplichtingen
      leiden, met name op het gebied van governance, documentatie en toezicht.
      Verdere verdieping is aan te raden.
    `;
  } else {
    riskLevel = "Hoog";
    message = `
      Op basis van deze invoer is de AI Act-impact waarschijnlijk aanzienlijk.
      Er is een verhoogde kans op hoog-risico AI, aanvullende zorgplichten
      en toezichtvereisten.
    `;
  }

  /* =========================
     6. Resultaat tonen
  ========================= */

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = `
    <h2>Indicatieve AI Act-risicoscore</h2>

    <p class="score">
      <strong>${riskLevel} risico</strong> (score: ${score})
    </p>

    <p>${message}</p>

    <p>
      Deze inschatting is indicatief en gebaseerd op beperkte invoer.
      Voor concrete verplichtingen, verantwoordelijkheden en governance-maatregelen
      is nadere analyse noodzakelijk.
    </p>

    <a href="resultaat.html" class="cta secondary">
      Bekijk nadere toelichting
    </a>
  `;

  resultEl.classList.remove("hidden");
}
localStorage.setItem("ai_act_risk_level", "hoog");
window.location.href = "resultaat.html";
