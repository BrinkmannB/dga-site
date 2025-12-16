function calculateImpact() {
  const orgType = document.getElementById("orgType").value;
  const aiCount = parseInt(document.getElementById("aiCount").value) || 0;
  const highRisk = document.getElementById("highRisk").value;
  const governanceLevel = document.getElementById("governanceLevel").value;

  // Validatie
  if (!orgType || !highRisk || !governanceLevel) {
    alert("Vul alle verplichte velden in om de berekening uit te voeren.");
    return;
  }

  let score = 0;

  // 1. Type organisatie
  switch (orgType) {
    case "municipality": score += 20; break;
    case "zbo": score += 25; break;
    case "ministry": score += 30; break;
    case "ngo": score += 15; break;
  }

  // 2. Aantal AI-systemen
  if (aiCount <= 3) score += 10;
  else if (aiCount <= 10) score += 20;
  else score += 30;

  // 3. Hoog-risico AI
  if (highRisk === "yes") score += 40;
  if (highRisk === "unknown") score += 25;

  // 4. Governance volwassenheid
  if (governanceLevel === "low") score += 30;
  if (governanceLevel === "medium") score += 15;

  // 5. Interpretatie
  let riskLevel = "laag";
  if (score >= 80) riskLevel = "hoog";
  else if (score >= 40) riskLevel = "middel";

  // 6. Opslaan voor resultaatpagina
  localStorage.setItem("ai_act_score", score);
  localStorage.setItem("ai_act_risk_level", riskLevel);

  // 7. Doorsturen
  window.location.href = "resultaat.html";
}
