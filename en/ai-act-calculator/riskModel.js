// riskModel.js — v1.0 (AI Act Quickscan DGA - EN version)

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

    // === Forbidden AI (Art. 5) ===
    if (a[1] === "yes") {
        return {
            category: "forbidden",
            title: "Prohibited AI",
            reason: "Your system contains features that fall under Article 5 of the EU AI Act and may not be deployed within the EU.",
            steps: [
                "Stop deployment immediately — prohibited AI cannot be used under any circumstance.",
                "Evaluate alternative, compliant methods or redesigned system components.",
                "Conduct a complete AI governance assessment to explore safe alternatives."
            ]
        };
    }

    // === High Risk triggers (Annex III) ===
    if (
        a[2] === "yes" ||       // biometric systems
        a[4] === "high" ||      // high impact
        a[5] === "auto" ||      // automated decisions
        a[7] === "yes"          // government
    ) {
        return {
            category: "high",
            title: "High-Risk AI",
            reason: "Your system contains characteristics listed in Annex III of the EU AI Act.",
            steps: [
                "Perform an AI Risk Assessment according to the AI Act’s risk management requirements.",
                "Prepare full technical documentation (Annex IV).",
                "Implement human oversight measures.",
                "Perform or prepare for a conformity assessment."
            ]
        };
    }

    // === GPAI / Foundation Model ===
    if (a[10] === "gpa") {
        return {
            category: "gpa",
            title: "GPAI / Foundation Model",
            reason: "Your system falls under the new obligations for GPAI and foundation models.",
            steps: [
                "Document training data, limitations, risks and evaluation results.",
                "Conduct technical benchmarks and safety tests.",
                "Provide clear downstream usage instructions for developers and end users."
            ]
        };
    }

    // === Limited Risk (transparency) ===
    if (a[10] === "application") {
        return {
            category: "limited",
            title: "Limited-Risk AI",
            reason: "The system falls under transparency requirements of the EU AI Act.",
            steps: [
                "Inform users that they are interacting with AI.",
                "Ensure human oversight is available where relevant.",
                "Document the system’s intended purpose and limitations."
            ]
        };
    }

    // === Low Risk ===
    return {
        category: "low",
        title: "Low-Risk AI",
        reason: "This system does not fall under the regulated risk categories of the EU AI Act.",
        steps: [
            "Maintain basic documentation.",
            "Monitor system updates for emerging risks.",
            "Consider optional governance guidelines to ensure quality and trust."
        ]
    };
}

