function calculateImpact() {
  const orgType = (document.getElementById("orgType")?.value || "").trim();
  const aiCountRaw = document.getElementById("aiCount")?.value;
  const aiCount = Number.isFinite(parseInt(aiCountRaw, 10)) ? parseInt(aiCountRaw, 10) : 0;

  const highRisk = (document.getElementById("highRisk")?.value || "").trim();
  const governanceLevel = (document.getElementById("governanceLevel")?.value || "").trim();

  // Validatie (verplichte velden)
  if (!orgType || !highRisk || !governanceLevel) {
    alert("Vul alle verplichte velden in om de berekening uit te voeren.");
    return;
  }

  let score = 0;

  // 1) Type organisatie (context weegt mee)
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
    default:
      // Onbekend type: geen extra punten, maar blijft indicatief
      score += 0;
      break;
  }

  // 2) Aantal AI-systemen (0 = 0 punten)
  if (aiCount === 0) {
    score += 0;
  } else if (aiCount <= 3) {
    score += 10;
  } else if (aiCount <= 10) {
    score += 20;
  } else {
    score += 30;
  }

  // 3) (Potentieel) hoog-risico AI
  if (highRisk === "yes") {
    score += 40;
  } else if (highRisk === "unknown") {
    score += 25;
  } else {
    score += 0; // "no"
  }

  // 4) Governance volwassenheid (hoe lager, hoe meer risico)
  if (governanceLevel === "low") {
    score += 30;
  } else if (governanceLevel === "medium") {
    score += 15;
  } else {
    score += 0; // "high"
  }

  // 5) Interpretatie (conservatief: geen paniek, wel richting)
  let riskLevel = "laag";
  if (score >= 80) {
    riskLevel = "hoog";
  } else if (score >= 40) {
    riskLevel = "middel";
  }

  // 6) Opslaan voor resultaatpagina
  localStorage.setItem("ai_act_score", String(score));
  localStorage.setItem("ai_act_risk_level", riskLevel);

  // 7) Doorsturen naar resultaatpagina
  // Let op: dit pad moet kloppen met waar resultaat.html staat.
  window.location.href = "resultaat.html";
}
