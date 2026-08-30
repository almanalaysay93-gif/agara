export type EvidenceRating = 1 | 2 | 3;
export type ProductScope = "both" | "coffee" | "matcha";

export interface Ingredient {
  id: string;
  name: string;
  latin?: string;
  scope: ProductScope;
  rating: EvidenceRating;
  ratingLabel: string;
  whatItIs: string;
  whyItsHere: string;
  whatResearchSays: string;
  safetyNote?: string;
}

export const ingredients: Ingredient[] = [
  {
    id: "lions-mane",
    name: "Lion's Mane Mushroom",
    latin: "Hericium erinaceus",
    scope: "both",
    rating: 2,
    ratingLabel: "Moderate/Promising Evidence",
    whatItIs:
      "A medicinal mushroom containing bioactive compounds called hericenones and erinacines that are the subject of ongoing research into cognitive support.",
    whyItsHere:
      "Contains Lion's Mane, traditionally valued for cognitive support.",
    whatResearchSays:
      "Research in older adults with mild cognitive impairment is promising. In healthy adults, results are mixed and depend on standardization of the source (fruiting body vs. mycelium). The research continues to evolve as study designs improve.",
  },

  {
    id: "l-theanine",
    name: "L-Theanine",
    latin: "Amino acid from Camellia sinensis",
    scope: "both",
    rating: 3,
    ratingLabel: "Strong Human Clinical Evidence",
    whatItIs:
      "An amino acid naturally found in tea leaves that modulates calm neurotransmitters while caffeine promotes alertness.",
    whyItsHere:
      "L-Theanine and natural caffeine work together for calm, focused energy.",
    whatResearchSays:
      "Strong evidence from meta-analyses shows that L-Theanine paired with caffeine improves attention, reaction times, and working memory—especially during demanding tasks. This combination is described as synergistic: caffeine's alertness alongside L-Theanine's calm. Trial doses ranged from 100-400 mg L-Theanine with moderate caffeine.",
  },

  {
    id: "berberine-hcl",
    name: "Berberine HCL",
    scope: "both",
    rating: 2,
    ratingLabel: "Moderate/Promising Evidence",
    whatItIs:
      "An alkaloid compound extracted from plants like barberry, goldenseal, and Oregon grape that activates metabolic enzymes.",
    whyItsHere: "Contains Berberine HCL, which may support metabolic wellness.",
    whatResearchSays:
      "Multiple meta-analyses show promise for metabolic support, particularly for glucose regulation. Weight-loss claims remain inconsistent and appear secondary to metabolic effects rather than direct fat-burning. The evidence is most robust for general metabolic wellness.",
  },

  {
    id: "chromate-chromium",
    name: "ChromeMate® Chromium",
    scope: "both",
    rating: 1,
    ratingLabel: "Primarily Preclinical/Inconclusive",
    whatItIs:
      "A trace mineral (chromium polynicotinate) involved in how your body processes carbohydrates, fats, and proteins.",
    whyItsHere:
      "Contains ChromeMate® chromium, a trace mineral involved in metabolism.",
    whatResearchSays:
      "Chromium is essential for metabolic function, yet clinical studies have not demonstrated significant effects on body weight or body composition. While ChromeMate® is a specific form, evidence remains inconclusive for its superiority over other chromium sources.",
  },

  {
    id: "saffron",
    name: "Saffron",
    latin: "Crocus sativus",
    scope: "both",
    rating: 2,
    ratingLabel: "Moderate/Promising Evidence",
    whatItIs:
      "An extract from the stigmas (fine red threads) of saffron flowers, rich in compounds like crocin and picrocrocin that influence neurotransmitters.",
    whyItsHere:
      "Saffron extract is traditionally associated with mood balance and may help support healthy appetite habits.",
    whatResearchSays:
      "Multiple studies suggest saffron may support mood wellness, with effects most documented at 30 mg/day doses. Some research indicates efficacy comparable to certain mood-supporting approaches in mild-to-moderate settings. Satierial® (a standardized extract) has shown promise for reducing snacking frequency through serotonin modulation.",
  },

  {
    id: "lotus-leaf",
    name: "Lotus Leaf",
    latin: "Nelumbo nucifera",
    scope: "both",
    rating: 1,
    ratingLabel: "Primarily Preclinical",
    whatItIs:
      "An extract from the leaves of the lotus plant, used in traditional wellness practices for centuries across East and South Asia.",
    whyItsHere:
      "Contains lotus leaf, a botanical traditionally used in wellness practices.",
    whatResearchSays:
      "Evidence comes primarily from animal studies and laboratory research. Human clinical trials are limited, so definitive claims about effectiveness in people cannot yet be made. Traditional use is well-documented, but modern human evidence lags.",
    safetyNote:
      "May inhibit the CYP2D6 enzyme, which metabolizes many medications. If you take prescription drugs, consult a healthcare provider before use.",
  },

  {
    id: "citrus-aurantium",
    name: "Citrus Aurantium",
    latin: "Citrus aurantium (bitter orange peel)",
    scope: "both",
    rating: 1,
    ratingLabel: "Primarily Preclinical/Insufficient Evidence",
    whatItIs:
      "An extract from bitter orange peel containing p-synephrine, a compound structurally similar to certain stimulants.",
    whyItsHere: "Contains citrus aurantium, a traditional botanical.",
    whatResearchSays:
      "Despite marketing claims for metabolic effects, a 2022 meta-analysis found insufficient and contradictory evidence. Long-term use has been associated with blood pressure elevation in some users, limiting its safety profile for certain individuals.",
    safetyNote:
      "Structurally similar to ephedrine (a banned stimulant). Prolonged use is associated with blood pressure changes. Not recommended for those with hypertension or cardiovascular concerns.",
  },

  {
    id: "green-coffee-bean-extract",
    name: "Green Coffee Bean Extract",
    scope: "coffee",
    rating: 2,
    ratingLabel: "Moderate/Promising Evidence",
    whatItIs:
      "An extract from unroasted coffee beans, rich in chlorogenic acids (CGA)—a type of polyphenol antioxidant that is largely lost during roasting.",
    whyItsHere:
      "Contains green coffee bean extract, a source of chlorogenic acid antioxidants.",
    whatResearchSays:
      "Research suggests promise for antioxidant support. Some studies indicate potential cardiovascular benefits. Early weight-loss claims were based on a flawed 2012 study that was subsequently retracted; current evidence for metabolic effects is modest at best.",
  },

  {
    id: "guarana-seed",
    name: "Guarana Seed",
    latin: "Paullinia cupana",
    scope: "coffee",
    rating: 2,
    ratingLabel: "Moderate/Promising Evidence",
    whatItIs:
      "Seeds from the Amazonian guarana plant, a natural source of caffeine and theobromine with a longer absorption window than coffee alone.",
    whyItsHere: "Contains guarana seed for sustained natural energy.",
    whatResearchSays:
      "Established as an effective and sustained caffeine source. Some evidence suggests benefits for sustained mental performance and attentional tasks over longer periods compared to quick-release caffeine sources.",
  },

  {
    id: "dark-roast-arabica",
    name: "Dark Roast Arabica",
    latin: "Coffea arabica",
    scope: "coffee",
    rating: 2,
    ratingLabel: "Moderate/Promising Evidence",
    whatItIs:
      "Premium-grade coffee beans from the Arabica species, ethically sourced and small-batch roasted to a dark profile, providing natural caffeine and polyphenol antioxidants.",
    whyItsHere:
      "The foundation of Agara Cafe—a rich, full-bodied coffee base that complements the functional stack.",
    whatResearchSays:
      "Coffee is a significant source of polyphenols and antioxidants. Regular moderate consumption is associated with cardiovascular and cognitive benefits in research populations. Dark roasting alters the compound profile compared to lighter roasts, with some antioxidants increased and others reduced.",
  },

  {
    id: "ceremonial-grade-matcha",
    name: "Ceremonial-Grade Organic Matcha",
    latin: "Camellia sinensis (shade-grown)",
    scope: "matcha",
    rating: 3,
    ratingLabel: "Strong Human Clinical Evidence",
    whatItIs:
      "Stone-ground powder from shade-grown green tea leaves harvested at peak season, containing the entire leaf and delivering concentrated levels of catechins, L-Theanine, and natural caffeine.",
    whyItsHere:
      "Ceremonial-grade organic matcha is a concentrated source of antioxidants and naturally contains L-Theanine.",
    whatResearchSays:
      "Strong consensus shows ceremonial matcha contains 2–3x the antioxidants (EGCG catechins) of steeped green tea. When paired with its naturally occurring L-Theanine and caffeine, matcha delivers both robust antioxidant intake and the calm-focus benefits documented for the L-Theanine and caffeine combination.",
  },

  {
    id: "caffeine-naturally-occurring",
    name: "Caffeine (naturally occurring)",
    scope: "both",
    rating: 3,
    ratingLabel: "Strong Human Clinical Evidence",
    whatItIs:
      "A natural alkaloid present in coffee beans, matcha leaves, and guarana seeds that blocks adenosine receptors to promote alertness.",
    whyItsHere:
      "Natural caffeine paired with L-Theanine supports alert, calm energy without the abrupt swings sometimes associated with caffeine alone.",
    whatResearchSays:
      "Decades of research confirm caffeine's role in promoting alertness, reaction time, and mental performance. When combined with L-Theanine—as in both Agara products—studies show enhanced attention and reduced anxiety compared to caffeine alone, creating what researchers call 'relaxed alertness.'",
  },
];

export const fdaDisclaimer =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.";

export const evidenceKeyNote =
  "The three-star rating reflects the strength of human clinical evidence: ★★★ indicates strong studies in people; ★★ represents promising research with some limits; ★ reflects primarily preclinical or animal studies where human evidence is still developing.";
