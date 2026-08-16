import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Trophy, RotateCcw } from 'lucide-react';
import { getRandomMeme } from '../data/memeAssets';

// Sample meme matching pairs per subject
const SAMPLE_PAIRS = {
  'life-sciences-p1': [
    { id: 1, prompt: 'Mitochondria', answer: 'Powerhouse of the cell' },
  { id: 2, prompt: 'Chloroplast', answer: 'Site of photosynthesis' },
  { id: 3, prompt: 'Substance bringing about seed dormancy', answer: 'Abscisic acid (ABA)' },
  { id: 4, prompt: 'Inhibition of lateral buds by apical buds', answer: 'Apical dominance' },
  { id: 5, prompt: 'Hormone causing stem and root bending', answer: 'Auxins' },
  { id: 6, prompt: 'Plant growth response to gravity', answer: 'Gravitropism (Geotropism)' },
  { id: 7, prompt: 'Substance elongating plant internodes', answer: 'Gibberellins' },
  { id: 8, prompt: 'Plant growth response to light', answer: 'Phototropism' },
  { id: 9, prompt: 'Plant bending response to a stimulus', answer: 'Tropism' },
  { id: 10, prompt: 'Hollow ball of cells from fertilised ovum', answer: 'Blastocyst' },
  { id: 11, prompt: 'Tube attaching embryo to placenta', answer: 'Umbilical cord' },
  { id: 12, prompt: 'Another name for pregnancy period', answer: 'Gestation' },
  { id: 13, prompt: 'Coiled tube outside testis storing sperm', answer: 'Epididymis' },
  { id: 14, prompt: 'Maternal/embryonic tissue for exchange', answer: 'Placenta' },
  { id: 15, prompt: 'Brain gland producing FSH and LH', answer: 'Pituitary gland' },
  { id: 16, prompt: 'Hormone for male secondary characteristics', answer: 'Testosterone' },
  { id: 17, prompt: 'Hormone that maintains pregnancy', answer: 'Progesterone' },
  { id: 18, prompt: 'Release of ovum from the ovary', answer: 'Ovulation' },
  { id: 19, prompt: 'Production of ova by meiosis', answer: 'Oogenesis' },
  { id: 20, prompt: 'Production of sperm by meiosis', answer: 'Spermatogenesis' },
  { id: 21, prompt: 'Sperm enzyme cap to penetrate ovum', answer: 'Acrosome' },
  { id: 22, prompt: 'Tearing away of uterine lining with blood loss', answer: 'Menstruation' },
  { id: 23, prompt: '28-day female reproductive cycle', answer: 'Menstrual cycle' },
  { id: 24, prompt: 'Vessel carrying waste from foetus to placenta', answer: 'Umbilical artery' },
  { id: 25, prompt: 'Vessel carrying oxygenated blood to foetus', answer: 'Umbilical vein' },
  { id: 26, prompt: 'Cell division making zygote multicellular', answer: 'Mitosis' },
  { id: 27, prompt: 'The formation of gametes by meiosis', answer: 'Gametogenesis' },
  { id: 28, prompt: 'Pituitary hormone controlling follicle growth', answer: 'Follicle-Stimulating Hormone (FSH)' },
  { id: 29, prompt: 'Hormone converting follicle to corpus luteum', answer: 'Luteinizing Hormone (LH)' },
  { id: 30, prompt: 'Hormone starting uterine lining preparation', answer: 'Oestrogen' },
  { id: 31, prompt: 'Uterine lining richly supplied with blood', answer: 'Endometrium' }

  ],
  'life-sciences-p2': [
    { id: 1, prompt: 'Ribosome', answer: 'Protein synthesis factory' },
  { id: 2, prompt: 'Bond formed between two amino acids', answer: 'Peptide bond' },
  { id: 3, prompt: 'Bonds linking base pairs in DNA', answer: 'Hydrogen bonds' },
  { id: 4, prompt: 'Sugar + phosphate + nitrogenous base', answer: 'Nucleotide' },
  { id: 5, prompt: 'Molecule with anti-codons', answer: 'tRNA' },
  { id: 6, prompt: 'Molecule with codons', answer: 'mRNA' },
  { id: 7, prompt: 'Natural shape of a DNA molecule', answer: 'Double helix' },
  { id: 8, prompt: 'Nucleic acid constituent of chromosomes', answer: 'DNA' },
  { id: 9, prompt: 'Assembly of amino acids into sequence', answer: 'Translation' },
  { id: 10, prompt: 'Cell cycle phase for DNA replication', answer: 'Interphase' },
  { id: 11, prompt: 'Production of identical DNA copies', answer: 'DNA replication' },
  { id: 12, prompt: 'Chromosome segment coding for a protein', answer: 'Gene' },
  { id: 13, prompt: 'Single stranded nucleic acid', answer: 'RNA' },
  { id: 14, prompt: 'Site of DNA replication & transcription', answer: 'Nucleus' },
  { id: 15, prompt: 'DNA strand used to form mRNA', answer: 'Template strand' },
  { id: 16, prompt: 'Tangled chromosomes in the nucleus', answer: 'Chromatin network' },
  { id: 17, prompt: 'Base that pairs with adenine in DNA', answer: 'Thymine' },
  { id: 18, prompt: 'Base that pairs with guanine', answer: 'Cytosine' },
  { id: 19, prompt: 'Base found in RNA but not in DNA', answer: 'Uracil' },
  { id: 20, prompt: 'Triplet of bases on tRNA', answer: 'Anticodon' },
  { id: 21, prompt: 'Triplet of consecutive bases on mRNA', answer: 'Codon' },
  { id: 22, prompt: 'Message transfer from DNA to mRNA', answer: 'Transcription' },
  { id: 23, prompt: 'Cross involving a single characteristic', answer: 'Monohybrid cross' },
  { id: 24, prompt: 'Cross involving two characteristics', answer: 'Dihybrid cross' },
  { id: 25, prompt: 'Diagram tracing family trait transmission', answer: 'Pedigree diagram' },
  { id: 26, prompt: 'Allele expressed only when homozygous', answer: 'Recessive allele' },
  { id: 27, prompt: 'Allele expressed in homo or heterozygous state', answer: 'Dominant allele' },
  { id: 28, prompt: 'Alternative forms of a gene at a locus', answer: 'Alleles' },
  { id: 29, prompt: 'Traits controlled by sex chromosome genes', answer: 'Sex-linked characteristics' },
  { id: 30, prompt: 'Cross with equally dominant alleles (both shown)', answer: 'Co-dominance' },
  { id: 31, prompt: 'Cross with neither dominant allele (blend)', answer: 'Incomplete dominance' },
  { id: 32, prompt: 'Cross controlled by dominant/recessive alleles', answer: 'Complete dominance' },
  { id: 33, prompt: 'Point mutation causing banana-shaped cells', answer: 'Sickle-cell anaemia' },
  { id: 34, prompt: 'Disorder from extra chromosome 21', answer: 'Down syndrome' },
  { id: 35, prompt: 'Genetic disorder with zero melanin pigment', answer: 'Albinism' },
  { id: 36, prompt: 'Individual with two identical alleles', answer: 'Homozygous' },
  { id: 37, prompt: 'Individual with two different alleles', answer: 'Heterozygous' },
  { id: 38, prompt: 'Manipulation of genotype for traits', answer: 'Genetic engineering' },
  { id: 39, prompt: 'More than two alleles for a single trait', answer: 'Multiple alleles' },
  { id: 40, prompt: 'Sex-linked disorder lacking clotting factors', answer: 'Haemophilia' },
  { id: 41, prompt: 'Sudden change in gene structure', answer: 'Mutation' },
  { id: 42, prompt: 'The allele makeup of an organism', answer: 'Genotype' },
  { id: 43, prompt: 'The external appearance of an organism', answer: 'Phenotype' },
  { id: 44, prompt: 'Alleles sorting independently into gametes', answer: 'Principle of Independent Assortment' },
  { id: 45, prompt: 'Production of genetically identical offspring', answer: 'Cloning' },
  { id: 46, prompt: 'Undifferentiated cells forming other cell types', answer: 'Stem cells' },
  { id: 47, prompt: 'Land feature separating a population', answer: 'Geographical barrier' },
  { id: 48, prompt: 'Range of different phenotypes exists', answer: 'Continuous variation' },
  { id: 49, prompt: 'Phenotype is strictly present or absent', answer: 'Discontinuous variation' },
  { id: 50, prompt: 'Testable statement to accept/reject', answer: 'Hypothesis' },
  { id: 51, prompt: 'Based on hypotheses and laws', answer: 'Theory' },
  { id: 52, prompt: 'Elimination of species from Earth', answer: 'Extinction' },
  { id: 53, prompt: 'Rapid change after long periods of no change', answer: 'Punctuated equilibrium' },
  { id: 54, prompt: 'Same species occupying same habitat', answer: 'Population' },
  { id: 55, prompt: 'Survival due to suited characteristics', answer: 'Natural selection' },
  { id: 56, prompt: 'Age of fossil via radioactive decay', answer: 'Radiometric dating' },
  { id: 57, prompt: 'Order organisms appeared on Earth', answer: 'Relative dating' },
  { id: 58, prompt: 'Remains of past organisms', answer: 'Fossils' },
  { id: 59, prompt: 'Organisms that interbreed for fertile offspring', answer: 'Species' },
  { id: 60, prompt: 'Study of organism locations globally', answer: 'Biogeography' },
  { id: 61, prompt: 'Speciation due to geographical barrier', answer: 'Allopatric speciation' },
  { id: 62, prompt: 'Similar function, no common origin', answer: 'Analogous structures' },
  { id: 63, prompt: 'Similar function, with a common origin', answer: 'Homologous structures' },
  { id: 64, prompt: 'The formation of a new species', answer: 'Speciation' },
  { id: 65, prompt: 'Human intervention in breeding', answer: 'Artificial selection' },
  { id: 66, prompt: 'Range of life forms on Earth', answer: 'Biodiversity' },
  { id: 67, prompt: 'Separation of population by a barrier', answer: 'Geographic isolation' },
  { id: 68, prompt: 'The study of fossils', answer: 'Palaeontology' },
  { id: 69, prompt: 'Thumb working in opposite direction', answer: 'Opposable thumb' },
  { id: 70, prompt: 'Arrangement of teeth on a jaw', answer: 'Dentition' },
  { id: 71, prompt: 'Diagram of evolutionary relationships', answer: 'Phylogenetic tree' },
  { id: 72, prompt: 'Fossil with ancestral & descendant traits', answer: 'Transitional fossil' },
  { id: 73, prompt: 'Genetic material tracing female ancestry', answer: 'Mitochondrial DNA (mtDNA)' },
  { id: 74, prompt: 'Pointed face from projecting jaws', answer: 'Prognathous' },
  { id: 75, prompt: 'Modern humans and immediate ancestors', answer: 'Hominins' },
  { id: 76, prompt: 'Skull opening for the spinal cord', answer: 'Foramen magnum' },
  { id: 77, prompt: 'Order including humans, apes, lemurs', answer: 'Primates' },
  { id: 78, prompt: 'The act of walking on all four limbs', answer: 'Quadrupedalism' },
  { id: 79, prompt: 'The act of walking on two feet', answer: 'Bipedalism' }
  ],
  'physics': [

  { id: 1, prompt: 'Newton 1st Law', answer: 'Inertia / Law of Rest' },
  { id: 2, prompt: 'F = ma', answer: 'Newton 2nd Law equation' },
  { id: 3, prompt: 'Newton 3rd Law', answer: 'Equal and opposite action-reaction pairs' },
  { id: 4, prompt: 'Max Static Friction', answer: 'fs max = μs N' },
  { id: 5, prompt: 'Kinetic Friction', answer: 'fk = μk N' },
  { id: 6, prompt: 'Universal Gravitation', answer: 'F = G(m1 m2) / r^2' },
  { id: 7, prompt: 'Linear Momentum', answer: 'p = mv' },
  { id: 8, prompt: 'Impulse', answer: 'F × Δt = Δp' },
  { id: 9, prompt: 'Conservation of Momentum', answer: 'Total momentum of an isolated system remains constant' },
  { id: 10, prompt: 'Elastic Collision', answer: 'Kinetic energy is conserved' },
  { id: 11, prompt: 'Inelastic Collision', answer: 'Kinetic energy is not conserved' },
  { id: 12, prompt: 'Free Fall', answer: 'Motion under the sole influence of gravity' },
  { id: 13, prompt: 'Projectile Acceleration', answer: '9.8 m·s⁻² downwards' },
  { id: 14, prompt: 'Work Done Formula', answer: 'W = F Δx cos(θ)' },
  { id: 15, prompt: 'Work-Energy Theorem', answer: 'Net work equals change in kinetic energy' },
  { id: 16, prompt: 'Mechanical Energy Conservation', answer: 'Only conservative forces do work' },
  { id: 17, prompt: 'Power Formula', answer: 'P = W / Δt or Fv' },
  { id: 18, prompt: 'Doppler Effect', answer: 'Frequency shift due to relative motion' },
  { id: 19, prompt: 'Coulomb\'s Law', answer: 'F = k(q1 q2) / r^2' },
  { id: 20, prompt: 'Electric Field Definition', answer: 'Force per unit positive test charge (E = F/q)' },
  { id: 21, prompt: 'Ohm\'s Law', answer: 'V = IR' },
  { id: 22, prompt: 'Electromotive Force (emf)', answer: 'Total work done per unit charge in a complete circuit' },
  { id: 23, prompt: 'Terminal Potential Difference', answer: 'V = emf - Ir' },
  { id: 24, prompt: 'Electrical Power Formulas', answer: 'P = VI = I^2R = V^2/R' },
  { id: 25, prompt: 'Electromagnetic Induction', answer: 'EMF induced by a changing magnetic flux' },
  { id: 26, prompt: 'Faraday\'s Law of Induction', answer: 'Induced emf equals rate of change of magnetic flux linkage' },
  { id: 27, prompt: 'RMS Voltage', answer: 'AC voltage matching DC heating effect' },
  { id: 28, prompt: 'Work Function', answer: 'Minimum energy needed to eject photoelectrons' },
  { id: 29, prompt: 'Threshold Frequency', answer: 'Minimum frequency required for photoelectric emission' },
  { id: 30, prompt: 'Photoelectric Equation', answer: 'hf = W0 + Kmax' }

  ],
  'chemistry': [
    { id: 1, prompt: 'Rate of reaction', answer: 'Change in concentration of reactants or products per unit time' },
    { id: 2, prompt: 'Activation energy (Ea)', answer: 'Minimum energy needed for a reaction to take place' },
    { id: 3, prompt: 'Activated complex', answer: 'Unstable transition state at the peak of potential energy' },
    { id: 4, prompt: 'Catalyst role', answer: 'Lowers activation energy by providing an alternative pathway' },
    { id: 5, prompt: 'Dynamic chemical equilibrium', answer: 'Rate of forward reaction equals rate of reverse reaction' },
    { id: 6, prompt: 'Le Chatelier\'s principle', answer: 'System responds to counteract a disturbance/stress' },
    { id: 7, prompt: 'Equilibrium constant (Kc)', answer: 'Ratio of product concentrations to reactant concentrations raised to coefficients' },
    { id: 8, prompt: 'Bronsted-Lowry acid', answer: 'Proton (H+) donor' },
    { id: 9, prompt: 'Bronsted-Lowry base', answer: 'Proton (H+) acceptor' },
    { id: 10, prompt: 'Conjugate acid-base pair', answer: 'Two species differing by a single proton' },
    { id: 11, prompt: 'Strong acid ionization', answer: 'Complete ionization in water' },
    { id: 12, prompt: 'Weak acid ionization', answer: 'Incomplete/shallow ionization in water' },
    { id: 13, prompt: 'Salt hydrolysis', answer: 'Reaction of salt ions with water resulting in acidic or basic solutions' },
    { id: 14, prompt: 'Galvanic cell energy conversion', answer: 'Chemical energy to electrical energy' },
    { id: 15, prompt: 'Electrolytic cell energy conversion', answer: 'Electrical energy to chemical energy' },
    { id: 16, prompt: 'Standard Hydrogen Electrode (SHE)', answer: 'Reference half-cell with a standard potential of 0.0V' },
    { id: 17, prompt: 'Galvanic cell cathode', answer: 'Positive electrode where reduction occurs' },
    { id: 18, prompt: 'Electrolytic cell anode', answer: 'Positive electrode connected to positive terminal where oxidation occurs' },
    { id: 19, prompt: 'Cell notation convention', answer: 'Anode oxidation on left, cathode reduction on right separated by salt bridge' },
    { id: 20, prompt: 'Homologous series', answer: 'Series of organic compounds with same functional group and general formula' },
    { id: 21, prompt: 'Esterification reaction', answer: 'Carboxylic acid + alcohol yields ester + water' },
    { id: 22, prompt: 'Cracking of hydrocarbons', answer: 'Breaking large alkane chains into smaller, more useful alkenes and alkanes' },
    { id: 23, prompt: 'Haber process conditions', answer: 'Iron catalyst, 450°C, 200 atm' },
    { id: 24, prompt: 'Contact process key step', answer: 'Catalytic oxidation of SO2 to SO3 using V2O5' },
    { id: 25, prompt: 'Primary plant nutrients in fertilizers', answer: 'Nitrogen (N), Phosphorus (P), Potassium (K)' },
    { id: 26, prompt: 'Chain isomers', answer: 'Same molecular formula, different carbon chain arrangements' },
    { id: 27, prompt: 'Position isomers', answer: 'Same carbon skeleton, different position of functional group' },
    { id: 28, prompt: 'Functional isomers', answer: 'Same molecular formula, different functional groups' },
    { id: 29, prompt: 'Vapour pressure vs intermolecular forces', answer: 'Stronger intermolecular forces result in lower vapour pressure' },
    { id: 30, prompt: 'Maxwell-Boltzmann distribution curve', answer: 'Shows distribution of molecular kinetic energies at a given temperature' },

  ],
  'mathematics': [
    // --- SEQUENCES & SERIES (1 - 10) ---
  {
    id: 1,
    question: "What is the common difference \\(d\\) of the arithmetic sequence \\(5, 11, 17, 23, \\dots\\)?",
    options: ["\\(d = 5\\)", "\\(d = 6\\)", "\\(d = 11\\)", "\\(d = -6\\)"],
    answer: "\\(d = 6\\)",
    explanation: "The common difference is calculated as \\(d = T_2 - T_1 = 11 - 5 = 6\\)."
  },
  {
    id: 2,
    question: "Calculate the sum of the first 20 terms of the arithmetic series \\(3 + 7 + 11 + 15 + \\dots\\)",
    options: ["\\(820\\)", "\\(780\\)", "\\(840\\)", "\\(410\\)"],
    answer: "\\(820\\)",
    explanation: "Using \\(S_n = \\frac{n}{2}[2a + (n-1)d]\\) with \\(a=3\\), \\(d=4\\), and \\(n=20\\): \\(S_{20} = 10[2(3) + 19(4)] = 10[6 + 76] = 820\\)."
  },
  {
    id: 3,
    question: "Find the common ratio \\(r\\) of the geometric sequence \\(16, -8, 4, -2, \\dots\\)",
    options: ["\\(r = 2\\)", "\\(r = -2\\)", "\\(r = -\\frac{1}{2}\\)", "\\(r = \\frac{1}{2}\\)"],
    answer: "\\(r = -\\frac{1}{2}\\)",
    explanation: "The common ratio is \\(r = \\frac{T_2}{T_1} = \\frac{-8}{16} = -\\frac{1}{2}\\)."
  },
  {
    id: 4,
    question: "Determine the \\(7^{\\text{th}}\\) term of the geometric sequence \\(2, 6, 18, 54, \\dots\\)",
    options: ["\\(486\\)", "\\(1458\\)", "\\(4374\\)", "\\(729\\)"],
    answer: "\\(1458\\)",
    explanation: "Here \\(a = 2\\) and \\(r = 3\\). Using \\(T_n = a \\cdot r^{n-1}\\): \\(T_7 = 2 \\cdot 3^{6} = 2 \\cdot 729 = 1458\\)."
  },
  {
    id: 5,
    question: "For what range of values of the common ratio \\(r\\) will an infinite geometric series converge?",
    options: ["\\(r > 1\\)", "\\(-1 < r < 1\\)", "\\(r \\le -1\\)", "\\(-1 \\le r \\le 1\\)"],
    answer: "\\(-1 < r < 1\\)",
    explanation: "An infinite geometric series converges if and only if \\(|r| < 1\\), which means \\(-1 < r < 1\\)."
  },
  {
    id: 6,
    question: "Calculate the sum to infinity (\\(S_\\infty\\)) of the series \\(12 + 4 + \\frac{4}{3} + \\dots\\)",
    options: ["\\(16\\)", "\\(18\\)", "\\(24\\)", "\\(12\\)"],
    answer: "\\(18\\)",
    explanation: "First term \\(a = 12\\), common ratio \\(r = \\frac{1}{3}\\). Using \\(S_\\infty = \\frac{a}{1 - r} = \\frac{12}{1 - \\frac{1}{3}} = \\frac{12}{\\frac{2}{3}} = 18\\)."
  },
  {
    id: 7,
    question: "Evaluate the sigma notation expression: \\(\\sum_{k=1}^{5} (2k - 1)\\)",
    options: ["\\(25\\)", "\\(20\\)", "\\(30\\)", "\\(15\\)"],
    answer: "\\(25\\)",
    explanation: "Expanding terms for \\(k=1\\) to \\(5\\): \\(1 + 3 + 5 + 7 + 9 = 25\\)."
  },
  {
    id: 8,
    question: "In a quadratic sequence with general term \\(T_n = an^2 + bn + c\\), the constant second difference is equal to:",
    options: ["\\(a\\)", "\\(2a\\)", "\\(3a + b\\)", "\\(a + b + c\\)"],
    answer: "\\(2a\\)",
    explanation: "For any quadratic sequence, the constant second difference is always equal to \\(2a\\)."
  },
  {
    id: 9,
    question: "What is the general term \\(T_n\\) of the sequence \\(4, 9, 16, 25, \\dots\\)?",
    options: ["\\(T_n = n^2\\)", "\\(T_n = (n + 1)^2\\)", "\\(T_n = n^2 + 3\\)", "\\(T_n = 2n + 2\\)"],
    answer: "\\(T_n = (n + 1)^2\\)",
    explanation: "For \\(n=1, T_1 = 2^2 = 4\\); for \\(n=2, T_2 = 3^2 = 9\\); for \\(n=3, T_3 = 4^2 = 16\\). Thus \\(T_n = (n + 1)^2\\)."
  },
  {
    id: 10,
    question: "Calculate \\(\\sum_{k=1}^{\\infty} 5 \\cdot (0,2)^{k-1}\\)",
    options: ["\\(6,25\\)", "\\(5,25\\)", "\\(6,0\\)", "\\(25\\)"],
    answer: "\\(6,25\\)",
    explanation: "\\(a = 5\\) and \\(r = 0,2 = \\frac{1}{5}\\). Using \\(S_\\infty = \\frac{a}{1 - r} = \\frac{5}{1 - 0,2} = \\frac{5}{0,8} = 6,25\\)."
  },

  // --- FUNCTIONS & INVERSES (11 - 20) ---
  {
    id: 11,
    question: "What is the inverse function \\(f^{-1}(x)\\) of \\(f(x) = 3x - 6\\)?",
    options: [
      "\\(f^{-1}(x) = \\frac{1}{3}x + 2\\)",
      "\\(f^{-1}(x) = 3x + 6\\)",
      "\\(f^{-1}(x) = \\frac{x - 6}{3}\\)",
      "\\(f^{-1}(x) = -3x + 6\\)"
    ],
    answer: "\\(f^{-1}(x) = \\frac{1}{3}x + 2\\)",
    explanation: "Swap \\(x\\) and \\(y\\): \\(x = 3y - 6 \\implies 3y = x + 6 \\implies y = \\frac{x}{3} + 2\\)."
  },
  {
    id: 12,
    question: "What is the domain of the function \\(f(x) = \\log_2(x - 3)\\)?",
    options: ["\\(x > 3\\)", "\\(x \\ge 3\\)", "\\(x > 0\\)", "\\(x \\in \\mathbb{R}\\)"],
    answer: "\\(x > 3\\)",
    explanation: "The argument of a logarithm must be strictly positive, so \\(x - 3 > 0 \\implies x > 3\\)."
  },
  {
    id: 13,
    question: "Find the inverse function \\(f^{-1}(x)\\) of the exponential function \\(f(x) = 2^x\\).",
    options: ["\\(f^{-1}(x) = \\log_2(x)\\)", "\\(f^{-1}(x) = x^2\\)", "\\(f^{-1}(x) = 2^{-x}\\)", "\\(f^{-1}(x) = \\log_x(2)\\)"],
    answer: "\\(f^{-1}(x) = \\log_2(x)\\)",
    explanation: "Swapping variables gives \\(x = 2^y\\), which in logarithmic form is \\(y = \\log_2(x)\\)."
  },
  {
    id: 14,
    question: "What is the axis of symmetry of the parabola \\(f(x) = 2(x - 3)^2 + 4\\)?",
    options: ["\\(x = 3\\)", "\\(x = -3\\)", "\\(y = 4\\)", "\\(x = 2\\)"],
    answer: "\\(x = 3\\)",
    explanation: "For a parabola in vertex form \\(f(x) = a(x - p)^2 + q\\), the axis of symmetry is the vertical line \\(x = p = 3\\)."
  },
  {
    id: 15,
    question: "Determine the range of the function \\(f(x) = -x^2 + 9\\).",
    options: ["\\(y \\le 9\\)", "\\(y \\ge 9\\)", "\\(y \\in \\mathbb{R}\\)", "\\(0 \\le y \\le 9\\)"],
    answer: "\\(y \\le 9\\)",
    explanation: "The maximum value of \\(-x^2 + 9\\) is \\(9\\) (occurring at \\(x = 0\\)), and it opens downwards. So \\(y \\le 9\\)."
  },
  {
    id: 16,
    question: "Identify the asymptotes of the hyperbola \\(f(x) = \\frac{3}{x - 2} + 1\\).",
    options: [
      "\\(x = 2\\) and \\(y = 1\\)",
      "\\(x = -2\\) and \\(y = 1\\)",
      "\\(x = 1\\) and \\(y = 2\\)",
      "\\(x = 2\\) and \\(y = -1\\)"
    ],
    answer: "\\(x = 2\\) and \\(y = 1\\)",
    explanation: "The vertical asymptote is where the denominator is zero (\\(x = 2\\)), and the horizontal asymptote is \\(y = 1\\)."
  },
  {
    id: 17,
    question: "The graph of \\(g(x)\\) is formed by reflecting \\(f(x) = 3^x\\) across the x-axis. What is the equation of \\(g(x)\\)?",
    options: ["\\(g(x) = -3^x\\)", "\\(g(x) = 3^{-x}\\)", "\\(g(x) = -3^{-x}\\)", "\\(g(x) = (\\frac{1}{3})^x\\)"],
    answer: "\\(g(x) = -3^x\\)",
    explanation: "Reflection across the x-axis negates the output: \\(g(x) = -f(x) = -3^x\\)."
  },
  {
    id: 18,
    question: "The graph of \\(h(x)\\) is formed by reflecting \\(f(x) = 3^x\\) across the y-axis. What is the equation of \\(h(x)\\)?",
    options: ["\\(h(x) = 3^{-x}\\)", "\\(h(x) = -3^x\\)", "\\(h(x) = \\log_3(x)\\)", "\\(h(x) = 3^x - 1\\)"],
    answer: "\\(h(x) = 3^{-x}\\)",
    explanation: "Reflection across the y-axis replaces \\(x\\) with \\(-x\\): \\(h(x) = f(-x) = 3^{-x}\\)."
  },
  {
    id: 19,
    question: "Find the coordinates of the turning point of \\(f(x) = x^2 - 6x + 5\\).",
    options: ["\\((3; -4)\\)", "\\((-3; 32)\\)", "\\((3; 4)\\)", "\\((6; 5)\\)"],
    answer: "\\((3; -4)\\)",
    explanation: "\\(x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3\\). Substituting \\(x = 3\\): \\(f(3) = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4\\)."
  },
  {
    id: 20,
    question: "How must the domain of \\(f(x) = x^2\\) be restricted so that its inverse \\(f^{-1}\\) is also a function?",
    options: ["\\(x \\ge 0\\)", "\\(x \\in \\mathbb{R}\\)", "\\(x \\neq 0\\)", "\\(-1 \\le x \\le 1\\)"],
    answer: "\\(x \\ge 0\\)",
    explanation: "Restricting the domain to \\(x \\ge 0\\) (or \\(x \\le 0\\)) makes \\(f(x)\\) one-to-one, ensuring its inverse passes the vertical line test."
  },

  // --- FINANCE, GROWTH & DECAY (21 - 30) ---
  {
    id: 21,
    question: "Which formula is used to calculate compound growth over \\(n\\) time periods?",
    options: [
      "\\(A = P(1 + i)^n\\)",
      "\\(A = P(1 - i)^n\\)",
      "\\(A = P(1 + i \\cdot n)\\)",
      "\\(A = P(1 - d \\cdot n)\\)"
    ],
    answer: "\\(A = P(1 + i)^n\\)",
    explanation: "\\(A = P(1 + i)^n\\) is the standard formula for compound growth/interest."
  },
  {
    id: 22,
    question: "Which formula correctly links effective interest rate \\(i_{\\text{eff}}\\)$ and nominal interest rate \\(i^{(m)}\\)?",
    options: [
      "\\(1 + i_{\\text{eff}} = \\left(1 + \\frac{i^{(m)}}{m}\\right)^m\\)",
      "\\(i_{\\text{eff}} = m \\cdot i^{(m)}\\)",
      "\\(1 + i_{\\text{eff}} = (1 + i^{(m)})^m\\)",
      "\\(i_{\\text{eff}} = (1 + m)^i - 1\\)"
    ],
    answer: "\\(1 + i_{\\text{eff}} = \\left(1 + \\frac{i^{(m)}}{m}\\right)^m\\)",
    explanation: "This is the standard Grade 12 CAPS nominal-to-effective conversion formula."
  },
  {
    id: 23,
    question: "What is the formula for straight-line (linear) depreciation?",
    options: [
      "\\(A = P(1 - i \\cdot n)\\)",
      "\\(A = P(1 - i)^n\\)",
      "\\(A = P(1 + i \\cdot n)\\)",
      "\\(A = P(1 + i)^n\\)"
    ],
    answer: "\\(A = P(1 - i \\cdot n)\\)",
    explanation: "Straight-line depreciation loses a fixed amount each year, represented by \\(A = P(1 - i \\cdot n)\\)."
  },
  {
    id: 24,
    question: "What is the formula for reducing-balance (diminishing value) depreciation?",
    options: [
      "\\(A = P(1 - i)^n\\)",
      "\\(A = P(1 - i \\cdot n)\\)",
      "\\(A = P(1 + i)^n\\)",
      "\\(A = P(1 + i \\cdot n)\\)"
    ],
    answer: "\\(A = P(1 - i)^n\\)",
    explanation: "Reducing-balance depreciation applies the rate \\(i\\) to the remaining book value each year."
  },
  {
    id: 25,
    question: "Which annuity formula is used to calculate regular payments made into a savings plan to accumulate a target amount in the future?",
    options: [
      "\\(F = \\frac{x[(1 + i)^n - 1]}{i}\\)",
      "\\(P = \\frac{x[1 - (1 + i)^{-n}]}{i}\\)",
      "\\(A = P(1 + i)^n\\)",
      "\\(F = x(1 + i)^n\\)"
    ],
    answer: "\\(F = \\frac{x[(1 + i)^n - 1]}{i}\\)",
    explanation: "The Future Value Annuity formula \\(F\\) is used for accumulating future savings."
  },
  {
    id: 26,
    question: "Which annuity formula calculates the initial loan amount \\(P\\) based on regular monthly repayments \\(x\\)?",
    options: [
      "\\(P = \\frac{x[1 - (1 + i)^{-n}]}{i}\\)",
      "\\(F = \\frac{x[(1 + i)^n - 1]}{i}\\)",
      "\\(P = A(1 + i)^{-n}\\)",
      "\\(P = \\frac{x(1 + i)^n}{i}\\)"
    ],
    answer: "\\(P = \\frac{x[1 - (1 + i)^{-n}]}{i}\\)",
    explanation: "The Present Value Annuity formula \\(P\\) is used for loans and mortgages."
  },
  {
    id: 27,
    question: "If an investment doubles in value under compound interest, which equation must be solved for \\(n\\)?",
    options: [
      "\\((1 + i)^n = 2\\)",
      "\\((1 + i)^n = 0,5\\)",
      "\\(1 + i \\cdot n = 2\\)",
      "\\(2(1 + i)^n = 1\\)"
    ],
    answer: "\\((1 + i)^n = 2\\)",
    explanation: "If \\(A = 2P\\), then \\(2P = P(1+i)^n \\implies (1+i)^n = 2\\)."
  },
  {
    id: 28,
    question: "A capital reserve fund established by a company to replace future equipment is known as a:",
    options: ["Sinking fund", "Amortisation loan", "Present value annuity", "Nominal reserve"],
    answer: "Sinking fund",
    explanation: "A sinking fund is set up to accumulate money over time to buy replacement assets in the future."
  },
  {
    id: 29,
    question: "Calculate the effective annual interest rate corresponding to a nominal rate of \\(12\\%\\) p.a. compounded monthly.",
    options: ["\\(12,68\\%\\)", "\\(12,00\\%\\)", "\\(12,40\\%\\)", "\\(13,00\\%\\)"],
    answer: "\\(12,68\\%\\)",
    explanation: "\\(i_{\\text{eff}} = \\left(1 + \\frac{0,12}{12}\\right)^{12} - 1 = (1,01)^{12} - 1 \\approx 0,1268 = 12,68\\%\\)."
  },
  {
    id: 30,
    question: "What does the variable \\(n\\) represent in the Present Value annuity formula \\(P = \\frac{x[1 - (1 + i)^{-n}]}{i}\\)?",
    options: [
      "The total number of payment periods",
      "The duration of the loan in years",
      "The nominal annual interest rate",
      "The compounding frequency per year"
    ],
    answer: "The total number of payment periods",
    explanation: "\\(n\\) is the total number of payments/periods (e.g., years \\(\\times\\) 12 for monthly payments)."
  },

  // --- DIFFERENTIAL CALCULUS (31 - 40) ---
  {
    id: 31,
    question: "Which expression represents the definition of the derivative \\(f'(x)\\) from first principles?",
    options: [
      "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\)",
      "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x) - f(h)}{h}\\)",
      "\\(f'(x) = \\frac{f(x+h) + f(x)}{h}\\)",
      "\\(f'(x) = \\lim_{h \\to 1} \\frac{f(x+h) - f(x)}{h}\\)"
    ],
    answer: "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\)",
    explanation: "This is the fundamental definition of the derivative from first principles."
  },
  {
    id: 32,
    question: "What is the derivative \\(\\frac{d}{dx}[k]\\) where \\(k\\) is a constant?",
    options: ["\\(0\\)", "\\(1\\)", "\\(k\\)", "\\(x\\)"],
    answer: "\\(0\\)",
    explanation: "The rate of change of a constant value is zero."
  },
  {
    id: 33,
    question: "Find the derivative of \\(f(x) = 4x^3 - 5x^2 + 2x - 7\\).",
    options: [
      "\\(f'(x) = 12x^2 - 10x + 2\\)",
      "\\(f'(x) = 12x^2 - 10x\\)",
      "\\(f'(x) = 4x^2 - 5x + 2\\)",
      "\\(f'(x) = 12x^3 - 10x^2 + 2x\\)"
    ],
    answer: "\\(f'(x) = 12x^2 - 10x + 2\\)",
    explanation: "Apply power rule term by term: \\(3(4)x^2 - 2(5)x + 1(2) - 0 = 12x^2 - 10x + 2\\)."
  },
  {
    id: 34,
    question: "Determine the gradient of the tangent to the curve \\(f(x) = x^2 + 3x\\) at \\(x = 2\\).",
    options: ["\\(7\\)", "\\(10\\)", "\\(5\\)", "\\(4\\)"],
    answer: "\\(7\\)",
    explanation: "\\(f'(x) = 2x + 3\\). Evaluating at \\(x = 2\\): \\(f'(2) = 2(2) + 3 = 7\\)."
  },
  {
    id: 35,
    question: "Find the x-coordinates of the stationary points of \\(f(x) = x^3 - 3x\\).",
    options: ["\\(x = 1\\) and \\(x = -1\\)", "\\(x = 0\\) and \\(x = 3\\)", "\\(x = 3\\) and \\(x = -3\\)", "\\(x = 0\\) only"],
    answer: "\\(x = 1\\) and \\(x = -1\\)",
    explanation: "Set \\(f'(x) = 0 \\implies 3x^2 - 3 = 0 \\implies 3(x^2 - 1) = 0 \\implies x = \\pm 1\\)."
  },
  {
    id: 36,
    question: "A point on a curve where concavity changes and \\(f''(x) = 0\\) is called a:",
    options: ["Point of inflection", "Stationary point", "Local maximum", "Y-intercept"],
    answer: "Point of inflection",
    explanation: "A point of inflection occurs where the second derivative \\(f''(x) = 0\\) (or undefined) and concavity changes."
  },
  {
    id: 37,
    question: "What is the derivative of \\(f(x) = \\frac{1}{x}\\)?",
    options: ["\\(-\\frac{1}{x^2}\\)", "\\(\\frac{1}{x^2}\\)", "\\(\\ln(x)\\)", "\\(-x\\)"],
    answer: "\\(-\\frac{1}{x^2}\\)",
    explanation: "Rewrite \\(f(x) = x^{-1}\\). By power rule: \\(f'(x) = -1 \\cdot x^{-2} = -\\frac{1}{x^2}\\)."
  },
  {
    id: 38,
    question: "Differentiate \\(f(x) = \\sqrt{x}\\) with respect to \\(x\\).",
    options: ["\\(\\frac{1}{2\\sqrt{x}}\\)", "\\(\\frac{1}{\\sqrt{x}}\\)", "\\(\\frac{2}{\\sqrt{x}}\\)", "\\(\\frac{1}{2}x\\)"],
    answer: "\\(\\frac{1}{2\\sqrt{x}}\\)",
    explanation: "\\(f(x) = x^{\\frac{1}{2}} \\implies f'(x) = \\frac{1}{2}x^{-\\frac{1}{2}} = \\frac{1}{2\\sqrt{x}}\\)."
  },
  {
    id: 39,
    question: "If \\(f'(c) = 0\\) and \\(f''(c) < 0\\), then the point \\((c; f(c))\\) is a:",
    options: ["Local maximum", "Local minimum", "Point of inflection", "Asymptote"],
    answer: "Local maximum",
    explanation: "A negative second derivative (\\(f''(c) < 0\\)) indicates concave down, so the stationary point is a local maximum."
  },
  {
    id: 40,
    question: "Find \\(\\frac{dy}{dx}\\) for \\(y = (2x - 1)(x + 3)\\).",
    options: ["\\(4x + 5\\)", "\\(2x + 5\\)", "\\(4x - 3\\)", "\\(2\\)"],
    answer: "\\(4x + 5\\)",
    explanation: "Expand first: \\(y = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3\\). Thus \\(\\frac{dy}{dx} = 4x + 5\\)."
  },

  // --- ANALYTICAL GEOMETRY (41 - 50) ---
  {
    id: 41,
    question: "Calculate the distance between points \\(A(1; 2)\\) and \\(B(4; 6)\\).",
    options: ["\\(5\\)", "\\(25\\)", "\\(\\sqrt{7}\\)", "\\(7\\)"],
    answer: "\\(5\\)",
    explanation: "\\(d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\)."
  },
  {
    id: 42,
    question: "What is the gradient of a line perpendicular to a line with gradient \\(m = -\\frac{2}{3}\\)?",
    options: ["\\(\\frac{3}{2}\\)", "\\(-\\frac{3}{2}\\)", "\\(\\frac{2}{3}\\)", "\\(-\\frac{2}{3}\\)"],
    answer: "\\(\\frac{3}{2}\\)",
    explanation: "Perpendicular gradients satisfy \\(m_1 \\cdot m_2 = -1\\). So \\(m_2 = -\\frac{1}{-\\frac{2}{3}} = \\frac{3}{2}\\)."
  },
  {
    id: 43,
    question: "What is the equation of a circle centered at the origin with radius \\(r = 5\\)?",
    options: ["\\(x^2 + y^2 = 25\\)", "\\(x^2 + y^2 = 5\\)", "\\((x-5)^2 + (y-5)^2 = 0\\)", "\\(x + y = 25\\)"],
    answer: "\\(x^2 + y^2 = 25\\)",
    explanation: "Standard circle at origin: \\(x^2 + y^2 = r^2 = 5^2 = 25\\)."
  },
  {
    id: 44,
    question: "Find the center and radius of the circle \\((x - 3)^2 + (y + 4)^2 = 16\\).",
    options: [
      "Center: \\((3; -4)\\), Radius: \\(4\\)",
      "Center: \\((-3; 4)\\), Radius: \\(16\\)",
      "Center: \\((3; -4)\\), Radius: \\(16\\)",
      "Center: \\((-3; 4)\\), Radius: \\(4\\)"
    ],
    answer: "Center: \\((3; -4)\\), Radius: \\(4\\)",
    explanation: "Equation form \\((x-a)^2 + (y-b)^2 = r^2\\) gives center \\((a; b) = (3; -4)\\) and radius \\(r = \\sqrt{16} = 4\\)."
  },
  {
    id: 45,
    question: "Find the midpoint of the line segment joining \\((-2; 6)\\) and \\((4; -2)\\).",
    options: ["\\((1; 2)\\)", "\\((2; 4)\\)", "\\((-1; 2)\\)", "\\((1; 4)\\)"],
    answer: "\\((1; 2)\\)",
    explanation: "Midpoint \\(M = \\left(\\frac{x_1 + x_2}{2}; \\frac{y_1 + y_2}{2}\\right) = \\left(\\frac{-2 + 4}{2}; \\frac{6 + (-2)}{2}\\right) = (1; 2)\\)."
  },
  {
    id: 46,
    question: "What is the angle of inclination \\(\\theta\\) of a line with gradient \\(m = 1\\)?",
    options: ["\\(45^\\circ\\)", "\\(30^\\circ\\)", "\\(60^\\circ\\)", "\\(135^\\circ\\)"],
    answer: "\\(45^\\circ\\)",
    explanation: "\\(\\tan\\theta = m = 1 \\implies \\theta = \\tan^{-1}(1) = 45^\\circ\\)."
  },
  {
    id: 47,
    question: "What is the angle between a tangent to a circle and the radius drawn to the point of contact?",
    options: ["\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)"],
    answer: "\\(90^\\circ\\)",
    explanation: "A tangent to a circle is always perpendicular (\\(90^\\circ\\)) to the radius at the point of contact."
  },
  {
    id: 48,
    question: "Which formula calculates the gradient \\(m\\) between two points \\((x_1; y_1)\\) and \\((x_2; y_2)\\)?",
    options: [
      "\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)",
      "\\(m = \\frac{x_2 - x_1}{y_2 - y_1}\\)",
      "\\(m = \\frac{y_2 + y_1}{x_2 + x_1}\\)",
      "\\(m = (x_2 - x_1)(y_2 - y_1)\\)"
    ],
    answer: "\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)",
    explanation: "Gradient is vertical change divided by horizontal change: \\(\\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}\\)."
  },
  {
    id: 49,
    question: "Find the angle of inclination \\(\\theta\\) of a line with gradient \\(m = -1\\).",
    options: ["\\(135^\\circ\\)", "\\(45^\\circ\\)", "\\(-45^\\circ\\)", "\\(225^\\circ\\)"],
    answer: "\\(135^\\circ\\)",
    explanation: "For a negative gradient, \\(\\theta = 180^\\circ - \\tan^{-1}(|m|) = 180^\\circ - 45^\\circ = 135^\\circ\\)."
  },
  {
    id: 50,
    question: "Find the equation of the line passing through \\((2; 5)\\) with gradient \\(m = 3\\).",
    options: [
      "\\(y = 3x - 1\\)",
      "\\(y = 3x + 1\\)",
      "\\(y = 3x - 5\\)",
      "\\(y = 5x + 3\\)"
    ],
    answer: "\\(y = 3x - 1\\)",
    explanation: "\\(y - y_1 = m(x - x_1) \\implies y - 5 = 3(x - 2) \\implies y = 3x - 6 + 5 = 3x - 1\\)."
  },
  // --- TRIGONOMETRY (51 - 70) ---
  {
    id: 51,
    question: "What is the value of the fundamental trigonometric identity \\(\\sin^2\\theta + \\cos^2\\theta\\)?",
    options: ["\\(1\\)", "\\(0\\)", "\\(-1\\)", "\\(\\tan\\theta\\)"],
    answer: "\\(1\\)",
    explanation: "For any angle \\(\\theta\\), \\(\\sin^2\\theta + \\cos^2\\theta = 1\\) by the Pythagorean identity."
  },
  {
    id: 52,
    question: "Simplify the expression: \\(\\sin(180^\\circ - \\theta)\\)",
    options: ["\\(\\sin\\theta\\)", "\\(-\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\cos\\theta\\)"],
    answer: "\\(\\sin\\theta\\)",
    explanation: "In the second quadrant (\\(180^\\circ - \\theta\\)), sine is positive, so \\(\\sin(180^\\circ - \\theta) = \\sin\\theta\\)."
  },
  {
    id: 53,
    question: "Simplify the expression: \\(\\cos(180^\\circ + \\theta)\\)",
    options: ["\\(-\\cos\\theta\\)", "\\(\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(-\\sin\\theta\\)"],
    answer: "\\(-\\cos\\theta\\)",
    explanation: "In the third quadrant (\\(180^\\circ + \\theta\\)), cosine is negative, so \\(\\cos(180^\\circ + \\theta) = -\\cos\\theta\\)."
  },
  {
    id: 54,
    question: "What is the expansion for the compound angle \\(\\cos(\\alpha - \\beta)\\)?",
    options: [
      "\\(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\\)"
    ],
    answer: "\\(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)",
    explanation: "The compound angle identity for cosine subtraction is \\(\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)."
  },
  {
    id: 55,
    question: "Simplify the double angle expression \\(\\sin(2\\theta)\\).",
    options: [
      "\\(2\\sin\\theta\\cos\\theta\\)",
      "\\(\\cos^2\\theta - \\sin^2\\theta\\)",
      "\\(2\\sin\\theta\\)",
      "\\(\\sin^2\\theta\\)"
    ],
    answer: "\\(2\\sin\\theta\\cos\\theta\\)",
    explanation: "The double-angle expansion for sine is \\(\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta\\)."
  },
  {
    id: 56,
    question: "Which of the following is NOT an equivalent form for \\(\\cos(2\\theta)\\)?",
    options: [
      "\\(\\cos^2\\theta - \\sin^2\\theta\\)",
      "\\(2\\cos^2\\theta - 1\\)",
      "\\(1 - 2\\sin^2\\theta\\)",
      "\\(1 - 2\\cos^2\\theta\\)"
    ],
    answer: "\\(1 - 2\\cos^2\\theta\\)",
    explanation: "\\(\\cos(2\\theta)\\) equals \\(\\cos^2\\theta - \\sin^2\\theta\\), \\(2\\cos^2\\theta - 1\\), or \\(1 - 2\\sin^2\\theta\\). The expression \\(1 - 2\\cos^2\\theta\\) equals \\(-\\cos(2\\theta)\\)."
  },
  {
    id: 57,
    question: "Simplify using co-functions: \\(\\sin(90^\\circ - \\theta)\\)",
    options: ["\\(\\cos\\theta\\)", "\\(-\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(-\\sin\\theta\\)"],
    answer: "\\(\\cos\\theta\\)",
    explanation: "By co-function reduction, \\(\\sin(90^\\circ - \\theta) = \\cos\\theta\\)."
  },
  {
    id: 58,
    question: "Find the general solution for \\(\\sin x = 0,5\\).",
    options: [
      "\\(x = 30^\\circ + k \\cdot 360^\\circ\\) or \\(x = 150^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 60^\\circ + k \\cdot 360^\\circ\\) or \\(x = 120^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 30^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 45^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)"
    ],
    answer: "\\(x = 30^\\circ + k \\cdot 360^\\circ\\) or \\(x = 150^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
    explanation: "Reference angle is \\(\\arcsin(0,5) = 30^\\circ\\). Sine is positive in Quadrants 1 and 2: \\(x = 30^\\circ + k \\cdot 360^\\circ\\) or \\(x = 180^\\circ - 30^\\circ + k \\cdot 360^\\circ = 150^\\circ + k \\cdot 360^\\circ\\)."
  },
  {
    id: 59,
    question: "What is the period of the tangent function \\(f(x) = \\tan(x)\\)?",
    options: ["\\(180^\\circ\\)", "\\(360^\\circ\\)", "\\(90^\\circ\\)", "\\(720^\\circ\\)"],
    answer: "\\(180^\\circ\\)",
    explanation: "The tangent function repeats its cycle every \\(180^\\circ\\)."
  },
  {
    id: 60,
    question: "What is the amplitude of the function \\(f(x) = 3\\sin(2x)\\)?",
    options: ["\\(3\\)", "\\(2\\)", "\\(6\\)", "\\(1,5\\)"],
    answer: "\\(3\\)",
    explanation: "The amplitude is the absolute value of coefficient \\(a\\) in \\(y = a\\sin(bx)\\), which is \\(3\\)."
  },
  {
    id: 61,
    question: "Calculate the area of \\(\\triangle ABC\\) if \\(a = 8\\text{ cm}\\), \\(b = 10\\text{ cm}\\), and \\(\\hat{C} = 30^\\circ\\).",
    options: ["\\(20\\text{ cm}^2\\)", "\\(40\\text{ cm}^2\\)", "\\(20\\sqrt{3}\\text{ cm}^2\\)", "\\(10\\text{ cm}^2\\)"],
    answer: "\\(20\\text{ cm}^2\\)",
    explanation: "\\(\\text{Area} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(8)(10)\\sin(30^\\circ) = 40 \\times 0,5 = 20\\text{ cm}^2\\)."
  },
  {
    id: 62,
    question: "State the Cosine Rule formula used to calculate side \\(a\\) in \\(\\triangle ABC\\).",
    options: [
      "\\(a^2 = b^2 + c^2 - 2bc\\cos A\\)",
      "\\(a^2 = b^2 + c^2 + 2bc\\cos A\\)",
      "\\(a = b + c - 2bc\\cos A\\)",
      "\\(a^2 = b^2 - c^2 - 2bc\\cos A\\)"
    ],
    answer: "\\(a^2 = b^2 + c^2 - 2bc\\cos A\\)",
    explanation: "The Cosine Rule relating side \\(a\\) to sides \\(b\\), \\(c\\) and included angle \\(A\\) is \\(a^2 = b^2 + c^2 - 2bc\\cos A\\)."
  },
  {
    id: 63,
    question: "Under which condition is the Sine Rule \\(\\frac{\\sin A}{a} = \\frac{\\sin B}{b}\\) applicable?",
    options: [
      "When two sides and an angle opposite one of them are known",
      "When only three side lengths are known",
      "Only in right-angled triangles",
      "When two sides and the included angle are known"
    ],
    answer: "When two sides and an angle opposite one of them are known",
    explanation: "The Sine Rule requires an opposite angle-side pair ratio to solve the triangle."
  },
  {
    id: 64,
    question: "Simplify: \\(\\tan(180^\\circ - \\theta)\\)",
    options: ["\\(-\\tan\\theta\\)", "\\(\\tan\\theta\\)", "\\(\\frac{1}{\\tan\\theta}\\)", "\\(-\\frac{1}{\\tan\\theta}\\)"],
    answer: "\\(-\\tan\\theta\\)",
    explanation: "Tangent is negative in the 2nd quadrant (\\(180^\\circ - \\theta\\)), giving \\(-\\tan\\theta\\)."
  },
  {
    id: 65,
    question: "Evaluate \\(\\cos(75^\\circ)\\) using the compound angle identity for \\(45^\\circ + 30^\\circ\\).",
    options: [
      "\\(\\frac{\\sqrt{6} - \\sqrt{2}}{4}\\)",
      "\\(\\frac{\\sqrt{6} + \\sqrt{2}}{4}\\)",
      "\\(\\frac{\\sqrt{3} - 1}{2}\\)",
      "\\(\\frac{\\sqrt{2} - \\sqrt{6}}{4}\\)"
    ],
    answer: "\\(\\frac{\\sqrt{6} - \\sqrt{2}}{4}\\)",
    explanation: "\\(\\cos(45^\\circ+30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ = \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{\\sqrt{3}}{2}\\right) - \\left(\\frac{\\sqrt{2}}{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{\\sqrt{6}-\\sqrt{2}}{4}\\)."
  },
  {
    id: 66,
    question: "What is the maximum value of the function \\(g(x) = 2\\cos(x) - 1\\)?",
    options: ["\\(1\\)", "\\(2\\)", "\\(3\\)", "\\(0\\)"],
    answer: "\\(1\\)",
    explanation: "Since the maximum value of \\(\\cos(x)\\) is \\(1\\), \\(g(x)_{\\text{max}} = 2(1) - 1 = 1\\)."
  },
  {
    id: 67,
    question: "Simplify the trigonometric quotient: \\(\\frac{\\sin(2\\theta)}{\\cos\\theta}\\)",
    options: ["\\(2\\sin\\theta\\)", "\\(2\\cos\\theta\\)", "\\(\\tan\\theta\\)", "\\(\\sin\\theta\\)"],
    answer: "\\(2\\sin\\theta\\)",
    explanation: "Substitute \\(\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta\\): \\(\\frac{2\\sin\\theta\\cos\\theta}{\\cos\\theta} = 2\\sin\\theta\\)."
  },
  {
    id: 68,
    question: "Find the general solution for \\(\\tan x = 1\\).",
    options: [
      "\\(x = 45^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 45^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 135^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 225^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)"
    ],
    answer: "\\(x = 45^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
    explanation: "Reference angle is \\(\\arctan(1) = 45^\\circ\\). The period of tangent is \\(180^\\circ\\), so \\(x = 45^\\circ + k \\cdot 180^\\circ\\)."
  },
  {
    id: 69,
    question: "Simplify the numeric expression: \\(\\cos^2(15^\\circ) - \\sin^2(15^\\circ)\\)",
    options: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "\\(1\\)"],
    answer: "\\(\\frac{\\sqrt{3}}{2}\\)",
    explanation: "Using \\(\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta\\): \\(\\cos^2(15^\\circ) - \\sin^2(15^\\circ) = \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}\\)."
  },
  {
    id: 70,
    question: "Simplify: \\(\\cos(360^\\circ - \\theta)\\)",
    options: ["\\(\\cos\\theta\\)", "\\(-\\cos\\theta\\)", "\\(\\sin\\theta\\)", "\\(-\\sin\\theta\\)"],
    answer: "\\(\\cos\\theta\\)",
    explanation: "In the fourth quadrant (\\(360^\\circ - \\theta\\)), cosine is positive."
  },

  // --- EUCLIDEAN GEOMETRY (71 - 90) ---
  {
    id: 71,
    question: "In circle geometry, a line drawn from the center of a circle perpendicular to a chord:",
    options: ["Bisects the chord", "Is equal to the radius", "Is parallel to the chord", "Trisects the chord"],
    answer: "Bisects the chord",
    explanation: "Theorem: The line segment drawn from the center of a circle perpendicular to a chord bisects the chord."
  },
  {
    id: 72,
    question: "The angle subtended by an arc at the center of a circle is:",
    options: [
      "Double the angle subtended by the same arc at the circumference",
      "Equal to the angle subtended at the circumference",
      "Half the angle subtended at the circumference",
      "Always equal to \\(90^\\circ\\)"
    ],
    answer: "Double the angle subtended by the same arc at the circumference",
    explanation: "Theorem: The angle subtended by an arc at the center of a circle is double the angle subtended by the same arc at any point on the circumference."
  },
  {
    id: 73,
    question: "An angle subtended by a diameter at the circumference of a circle is always:",
    options: ["\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)"],
    answer: "\\(90^\\circ\\)",
    explanation: "Theorem: The angle in a semi-circle is a right angle (\\(90^\\circ\\))."
  },
  {
    id: 74,
    question: "The opposite angles of a cyclic quadrilateral are always:",
    options: ["Supplementary (sum to \\(180^\\circ\\))", "Equal in size", "Complementary (sum to \\(90^\\circ\\))", "Acute"],
    answer: "Supplementary (sum to \\(180^\\circ\\))",
    explanation: "Theorem: The opposite angles of a cyclic quadrilateral add up to \\(180^\\circ\\)."
  },
  {
    id: 75,
    question: "The exterior angle of a cyclic quadrilateral is equal to:",
    options: [
      "The interior opposite angle",
      "The interior adjacent angle",
      "\\(180^\\circ\\) minus the interior adjacent angle",
      "\\(90^\\circ\\)"
    ],
    answer: "The interior opposite angle",
    explanation: "Theorem: The exterior angle of a cyclic quadrilateral is equal to the interior opposite angle."
  },
  {
    id: 76,
    question: "According to the Tan-Chord Theorem:",
    options: [
      "The angle between a tangent and a chord is equal to the angle in the alternate segment",
      "The tangent is always perpendicular to the chord",
      "The angle between a tangent and a chord is \\(90^\\circ\\)",
      "The chord bisects the angle formed by two tangents"
    ],
    answer: "The angle between a tangent and a chord is equal to the angle in the alternate segment",
    explanation: "The Tan-Chord Theorem states that the angle between a tangent to a circle and a chord drawn through the point of contact is equal to the angle subtended by the chord in the alternate segment."
  },
  {
    id: 77,
    question: "If two tangents are drawn to a circle from the same external point, then:",
    options: [
      "The tangent segments are equal in length",
      "The tangent segments are perpendicular to each other",
      "One tangent is twice the length of the other",
      "They form an equilateral triangle with the chord"
    ],
    answer: "The tangent segments are equal in length",
    explanation: "Theorem: Tangents drawn to a circle from the same external point are equal in length."
  },
  {
    id: 78,
    question: "A line drawn parallel to one side of a triangle divides the other two sides:",
    options: ["Proportionally", "Equally", "In a \\(2:1\\) ratio", "Perpendicularly"],
    answer: "Proportionally",
    explanation: "Proportionality Theorem: A line drawn parallel to one side of a triangle divides the other two sides proportionally."
  },
  {
    id: 79,
    question: "If two triangles are equiangular, then their corresponding sides are:",
    options: ["In proportion", "Equal in length", "Perpendicular", "Reciprocally related"],
    answer: "In proportion",
    explanation: "Similarity Theorem: If two triangles have corresponding angles equal (equiangular), their corresponding sides are in proportion, making them similar."
  },
  {
    id: 80,
    question: "Which condition guarantees that quadrilateral \\(ABCD\\) is a cyclic quadrilateral?",
    options: [
      "An exterior angle is equal to the interior opposite angle",
      "Opposite angles are equal",
      "Diagonals bisect each other at right angles",
      "Adjacent angles sum to \\(180^\\circ\\)"
    ],
    answer: "An exterior angle is equal to the interior opposite angle",
    explanation: "A quadrilateral is cyclic if: 1) opposite angles are supplementary, 2) an exterior angle equals the interior opposite angle, or 3) a side subtends equal angles at two other vertices."
  },
  {
    id: 81,
    question: "In \\(\\triangle ABC\\), \\(D\\) lies on \\(AB\\) and \\(E\\) on \\(AC\\) such that \\(DE \\parallel BC\\). If \\(AD = 3\\), \\(DB = 6\\), and \\(AE = 4\\), find \\(EC\\).",
    options: ["\\(8\\)", "\\(6\\)", "\\(12\\)", "\\(2\\)"],
    answer: "\\(8\\)",
    explanation: "By Proportionality Theorem: \\(\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{3}{6} = \\frac{4}{EC} \\implies \\frac{1}{2} = \\frac{4}{EC} \\implies EC = 8\\)."
  },
  {
    id: 82,
    question: "Angles subtended by a chord at the circumference in the same segment of a circle are:",
    options: ["Equal", "Supplementary", "Complementary", "Doubled"],
    answer: "Equal",
    explanation: "Theorem: Angles subtended by a chord (or arc) in the same segment of a circle are equal."
  },
  {
    id: 83,
    question: "The angle between a tangent to a circle and the radius drawn to the point of contact is:",
    options: ["\\(90^\\circ\\)", "\\(45^\\circ\\)", "\\(180^\\circ\\)", "\\(60^\\circ\\)"],
    answer: "\\(90^\\circ\\)",
    explanation: "Theorem: A tangent to a circle is perpendicular to the radius at the point of contact."
  },
  {
    id: 84,
    question: "In \\(\\triangle ABC\\) and \\(\\triangle DEF\\), if \\(\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}\\), then the two triangles are:",
    options: ["Similar", "Congruent", "Right-angled", "Equal in area"],
    answer: "Similar",
    explanation: "If the corresponding sides of two triangles are in proportion, the triangles are similar."
  },
  {
    id: 85,
    question: "A chord of length \\(16\\text{ cm}\\) is at a perpendicular distance of \\(6\\text{ cm}\\) from the center of a circle. What is the radius of the circle?",
    options: ["\\(10\\text{ cm}\\)", "\\(8\\text{ cm}\\)", "\\(12\\text{ cm}\\)", "\\(14\\text{ cm}\\)"],
    answer: "\\(10\\text{ cm}\\)",
    explanation: "Perpendicular from center bisects the chord into two \\(8\\text{ cm}\\) segments. By Pythagoras in the right triangle: \\(r^2 = 6^2 + 8^2 = 36 + 64 = 100 \\implies r = 10\\text{ cm}\\)."
  },
  {
    id: 86,
    question: "Points \\(A, B, C, D\\) lie on a circle. If \\(\\hat{A} = 75^\\circ\\), what is the size of the opposite angle \\(\\hat{C}\\)?",
    options: ["\\(105^\\circ\\)", "\\(75^\\circ\\)", "\\(150^\\circ\\)", "\\(15^\\circ\\)"],
    answer: "\\(105^\\circ\\)",
    explanation: "\\(ABCD\\) is a cyclic quad, so opposite angles are supplementary: \\(\\hat{C} = 180^\\circ - 75^\\circ = 105^\\circ\\)."
  },
  {
    id: 87,
    question: "Which statement expresses the Converse of the Midpoint Theorem in triangles?",
    options: [
      "A line drawn through the midpoint of one side parallel to another side bisects the third side",
      "The line segment joining the midpoints of two sides is parallel to the third side",
      "The line joining two midpoints is equal to the third side",
      "A line parallel to one side bisects the perimeter of the triangle"
    ],
    answer: "A line drawn through the midpoint of one side parallel to another side bisects the third side",
    explanation: "Converse of Midpoint Theorem: A line drawn through the midpoint of one side of a triangle, parallel to a second side, bisects the third side."
  },
  {
    id: 88,
    question: "If \\(TP\\) is a tangent to a circle at \\(P\\), and \\(PQ\\) is a chord such that \\(\\hat{TPQ} = 55^\\circ\\), what is the angle subtended by \\(PQ\\) in the alternate segment?",
    options: ["\\(55^\\circ\\)", "\\(125^\\circ\\)", "\\(110^\\circ\\)", "\\(35^\\circ\\)"],
    answer: "\\(55^\\circ\\)",
    explanation: "By the Tan-Chord Theorem, the angle in the alternate segment equals the angle between the tangent and chord (\\(55^\\circ\\))."
  },
  {
    id: 89,
    question: "Which abbreviation represents the formal reason for proving two triangles similar using equal angles?",
    options: [
      "\\((\\angle, \\angle, \\angle)\\) or \\(\\text{equiangular } \\triangle\\text{s}\\)",
      "\\((\\text{SSS})\\)",
      "\\((\\text{RHS})\\)",
      "\\((\\text{SAS})\\)"
    ],
    answer: "\\((\\angle, \\angle, \\angle)\\) or \\(\\text{equiangular } \\triangle\\text{s}\\)",
    explanation: "Equiangular triangles are similar, abbreviated in CAPS as \\((\\angle, \\angle, \\angle)\\) or \\(\\text{equiangular } \\triangle\\text{s}\\)."
  },
  {
    id: 90,
    question: "If diameter \\(AB\\) subtends angle \\(\\hat{C}\\) at the circumference of a circle, what is the size of \\(\\hat{C}\\)?",
    options: ["\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)"],
    answer: "\\(90^\\circ\\)",
    explanation: "Reason: \\(\\angle\\) in semi-circle \\(= 90^\\circ\\)."
  },

  // --- PROBABILITY & STATISTICS (91 - 100) ---
  {
    id: 91,
    question: "If events \\(A\\) and \\(B\\) are mutually exclusive, what is \\(P(A \\cap B)\\)?",
    options: ["\\(0\\)", "\\(1\\)", "\\(P(A) \\cdot P(B)\\)", "\\(P(A) + P(B)\\)"],
    answer: "\\(0\\)",
    explanation: "Mutually exclusive events cannot occur simultaneously, so their intersection probability is zero."
  },
  {
    id: 92,
    question: "For two independent events \\(A\\) and \\(B\\), which statement is always true?",
    options: [
      "\\(P(A \\cap B) = P(A) \\cdot P(B)\\)",
      "\\(P(A \\cap B) = P(A) + P(B)\\)",
      "\\(P(A \\cup B) = P(A) \\cdot P(B)\\)",
      "\\(P(A \\mid B) = 0\\)"
    ],
    answer: "\\(P(A \\cap B) = P(A) \\cdot P(B)\\)",
    explanation: "By definition of statistical independence, \\(P(A \\cap B) = P(A) \\cdot P(B)\\)."
  },
  {
    id: 93,
    question: "What is the general Addition Rule formula of probability for any two events \\(A\\) and \\(B\\)?",
    options: [
      "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)",
      "\\(P(A \\cup B) = P(A) + P(B)\\)",
      "\\(P(A \\cup B) = P(A) \\cdot P(B)\\)",
      "\\(P(A \\cup B) = P(A) - P(B) + P(A \\cap B)\\)"
    ],
    answer: "\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)",
    explanation: "The addition rule adjusts for double counting by subtracting the intersection \\(P(A \\cap B)\\)."
  },
  {
    id: 94,
    question: "How many distinct 5-letter arrangements can be formed using all letters of the word 'SMART' without repetition?",
    options: ["\\(120\\)", "\\(25\\)", "\\(60\\)", "\\(720\\)"],
    answer: "\\(120\\)",
    explanation: "The number of permutations of 5 distinct letters is \\(5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120\\)."
  },
  {
    id: 95,
    question: "How many unique arrangements can be made using all letters in the word 'APPLE'?",
    options: ["\\(60\\)", "\\(120\\)", "\\(24\\)", "\\(30\\)"],
    answer: "\\(60\\)",
    explanation: "'APPLE' has 5 letters with 2 repeating 'P's. Number of distinct arrangements is \\(\\frac{5!}{2!} = \\frac{120}{2} = 60\\)."
  },
  {
    id: 96,
    question: "If the correlation coefficient for a scatter plot is \\(r = 0,95\\), the relationship between variables is classified as:",
    options: [
      "Strong positive linear correlation",
      "Weak positive linear correlation",
      "Strong negative linear correlation",
      "No linear correlation"
    ],
    answer: "Strong positive linear correlation",
    explanation: "An \\(r\\)-value close to \\(+1\\) indicates a strong positive linear correlation."
  },
  {
    id: 97,
    question: "What is the form of the least-squares regression line equation used in CAPS mathematics?",
    options: [
      "\\(\\hat{y} = a + bx\\)",
      "\\(y = ax^2 + bx + c\\)",
      "\\(y = a \\cdot b^x\\)",
      "\\(\\hat{y} = a - b^2\\)"
    ],
    answer: "\\(\\hat{y} = a + bx\\)",
    explanation: "In Grade 12 CAPS, the linear regression line is expressed as \\(\\hat{y} = a + bx\\)."
  },
  {
    id: 98,
    question: "The mean point \\((\\bar{x}; \\bar{y})\\) of a bivariate dataset always lies on:",
    options: [
      "The least-squares regression line",
      "The x-axis",
      "The y-axis",
      "The upper quartile line"
    ],
    answer: "The least-squares regression line",
    explanation: "The least-squares regression line \\(\\hat{y} = a + bx\\) always passes through the mean point \\((\\bar{x}; \\bar{y})\\)."
  },
  {
    id: 99,
    question: "In data analysis, an outlier is formally defined as any value lying outside which interval?",
    options: [
      "\\([Q_1 - 1,5 \\times IQR; \\, Q_3 + 1,5 \\times IQR]\\)",
      "\\([Q_1 - IQR; \\, Q_3 + IQR]\\)",
      "\\([\\bar{x} - \\sigma; \\, \\bar{x} + \\sigma]\\)",
      "\\([Q_1; \\, Q_3]\\)"
    ],
    answer: "\\([Q_1 - 1,5 \\times IQR; \\, Q_3 + 1,5 \\times IQR]\\)",
    explanation: "Outliers are defined as values smaller than \\(Q_1 - 1,5(IQR)\\) or greater than \\(Q_3 + 1,5(IQR)\\)."
  },
  {
    id: 100,
    question: "If a dataset has a standard deviation \\(\\sigma = 0\\), what does this reveal about the data?",
    options: [
      "All data values in the set are identical",
      "The mean of the dataset is zero",
      "The data follows a standard normal distribution",
      "There are no positive numbers in the dataset"
    ],
    answer: "All data values in the set are identical",
    explanation: "Standard deviation measures dispersion around the mean. A value of zero indicates zero dispersion, meaning every value equals the mean."
  },
  // --- FUNCTIONS & INVERSES (101 - 115) ---
  {
    id: 101,
    question: "What is the equation of the inverse of the linear function \\(f(x) = 2x + 3\\)?",
    options: [
      "\\(f^{-1}(x) = \\frac{x - 3}{2}\\)",
      "\\(f^{-1}(x) = \\frac{x + 3}{2}\\)",
      "\\(f^{-1}(x) = 2x - 3\\)",
      "\\(f^{-1}(x) = -2x - 3\\)"
    ],
    answer: "\\(f^{-1}(x) = \\frac{x - 3}{2}\\)",
    explanation: "Swap \\(x\\) and \\(y\\): \\(x = 2y + 3 \\implies x - 3 = 2y \\implies y = \\frac{x - 3}{2}\\)."
  },
  {
    id: 102,
    question: "Given \\(f(x) = x^2\\) for \\(x \\ge 0\\), what is the domain of its inverse function \\(f^{-1}(x)\\)?",
    options: ["\\(x \\ge 0\\)", "\\(x \\in \\mathbb{R}\\)", "\\(x \\le 0\\)", "\\(x > 0\\)"],
    answer: "\\(x \\ge 0\\)",
    explanation: "The range of \\(f(x)\\) for \\(x \\ge 0\\) is \\(y \\ge 0\\). Since the domain of \\(f^{-1}\\) equals the range of \\(f\\), the domain is \\(x \\ge 0\\)."
  },
  {
    id: 103,
    question: "Reflecting the graph of \\(y = 2^x\\) across the line \\(y = x\\) yields which function?",
    options: [
      "\\(y = \\log_2 x\\)",
      "\\(y = 2^{-x}\\)",
      "\\(y = -2^x\\)",
      "\\(y = \\left(\\frac{1}{2}\\right)^x\\)"
    ],
    answer: "\\(y = \\log_2 x\\)",
    explanation: "Reflection across \\(y = x\\) produces the inverse function. The inverse of \\(y = 2^x\\) is \\(y = \\log_2 x\\)."
  },
  {
    id: 104,
    question: "Identify the vertical asymptote of the hyperbola \\(f(x) = \\frac{3}{x - 2} + 1\\).",
    options: ["\\(x = 2\\)", "\\(y = 1\\)", "\\(x = -2\\)", "\\(y = 2\\)"],
    answer: "\\(x = 2\\)",
    explanation: "Setting the denominator to zero gives \\(x - 2 = 0 \\implies x = 2\\)."
  },
  {
    id: 105,
    question: "Identify the horizontal asymptote of the hyperbola \\(f(x) = \\frac{3}{x - 2} + 1\\).",
    options: ["\\(y = 1\\)", "\\(x = 2\\)", "\\(y = -1\\)", "\\(y = 3\\)"],
    answer: "\\(y = 1\\)",
    explanation: "The horizontal asymptote is given by the vertical shift constant \\(q\\), so \\(y = 1\\)."
  },
  {
    id: 106,
    question: "What is the range of the parabola \\(f(x) = -2(x - 1)^2 + 8\\)?",
    options: ["\\(y \\le 8\\)", "\\(y \\ge 8\\)", "\\(y \\le 1\\)", "\\(y \\in \\mathbb{R}\\)"],
    answer: "\\(y \\le 8\\)",
    explanation: "The parabola turns downward (\\(a = -2 < 0\\)) at maximum value \\(y = 8\\), giving range \\(y \\le 8\\)."
  },
  {
    id: 107,
    question: "What is the axis of symmetry of \\(f(x) = -2(x - 1)^2 + 8\\)?",
    options: ["\\(x = 1\\)", "\\(x = -1\\)", "\\(y = 8\\)", "\\(x = 8\\)"],
    answer: "\\(x = 1\\)",
    explanation: "The axis of symmetry passes through the $x$-coordinate of the turning point, \\(x = 1\\)."
  },
  {
    id: 108,
    question: "What is the range of the exponential function \\(f(x) = 3^x + 2\\)?",
    options: ["\\(y > 2\\)", "\\(y \\ge 2\\)", "\\(y > 0\\)", "\\(y \\in \\mathbb{R}\\)"],
    answer: "\\(y > 2\\)",
    explanation: "Since \\(3^x > 0\\) for all real \\(x\\), \\(f(x) = 3^x + 2 > 2\\)."
  },
  {
    id: 109,
    question: "How must the domain of $f(x) = x^2$ be restricted so that its inverse $f^{-1}$ is a function?",
    options: [
      "\\(x \\ge 0\\) or \\(x \\le 0\\)",
      "\\(x > 1\\)",
      "\\(x \\in \\mathbb{R}\\)",
      "\\(x \\neq 0\\)"
    ],
    answer: "\\(x \\ge 0\\) or \\(x \\le 0\\)",
    explanation: "Restricting the domain to a one-to-one region (either \\(x \\ge 0\\) or \\(x \\le 0\\)) ensures the inverse passes the vertical line test."
  },
  {
    id: 110,
    question: "Find the $y$-intercept of the logarithmic function \\(f(x) = \\log_3(x + 1)\\).",
    options: ["\\((0; 0)\\)", "\\((0; 1)\\)", "\\((1; 0)\\)", "\\((0; 3)\\)"],
    answer: "\\((0; 0)\\)",
    explanation: "Set \\(x = 0\\): \\(f(0) = \\log_3(0 + 1) = \\log_3(1) = 0\\). The intercept is \\((0; 0)\\)."
  },
  {
    id: 111,
    question: "The graph of \\(f(x) = 3^x\\) is reflected across the $y$-axis. What is the equation of the new graph?",
    options: [
      "\\(g(x) = \\left(\\frac{1}{3}\\right)^x\\)",
      "\\(g(x) = -3^x\\)",
      "\\(g(x) = \\log_3 x\\)",
      "\\(g(x) = 3^{-x} + 1\\)"
    ],
    answer: "\\(g(x) = \\left(\\frac{1}{3}\\right)^x\\)",
    explanation: "Reflection across the $y$-axis replaces \\(x\\) with \\(-x\\): \\(g(x) = 3^{-x} = \\left(\\frac{1}{3}\\right)^x\\)."
  },
  {
    id: 112,
    question: "Find the $x$-intercept of \\(f(x) = 2^{x+1} - 8\\).",
    options: ["\\((2; 0)\\)", "\\((3; 0)\\)", "\\((1; 0)\\)", "\\((4; 0)\\)"],
    answer: "\\((2; 0)\\)",
    explanation: "Set \\(f(x) = 0 \\implies 2^{x+1} = 8 = 2^3 \\implies x + 1 = 3 \\implies x = 2\\)."
  },
  {
    id: 113,
    question: "What is the equation of the inverse of \\(y = \\log_a x\\) (where \\(a > 0, a \\neq 1\\))?",
    options: ["\\(y = a^x\\)", "\\(y = x^a\\)", "\\(y = \\log_x a\\)", "\\(y = a^{-x}\\)"],
    answer: "\\(y = a^x\\)",
    explanation: "Swap \\(x\\) and \\(y\\): \\(x = \\log_a y \\implies y = a^x\\)."
  },
  {
    id: 114,
    question: "If the point \\((2; 9)\\) lies on the graph of \\(f(x) = a^x\\), what is the value of \\(a\\)?",
    options: ["\\(3\\)", "\\(9\\)", "\\(4,5\\)", "\\(\\sqrt{3}\\)"],
    answer: "\\(3\\)",
    explanation: "Substitute \\((2; 9)\\): \\(9 = a^2 \\implies a = 3\\) (since base \\(a > 0\\))."
  },
  {
    id: 115,
    question: "Which line is an axis of symmetry with a positive gradient for the hyperbola \\(y = \\frac{a}{x-p} + q\\)?",
    options: [
      "\\(y = (x - p) + q\\)",
      "\\(y = -(x - p) + q\\)",
      "\\(y = x + p + q\\)",
      "\\(y = -x + p - q\\)"
    ],
    answer: "\\(y = (x - p) + q\\)",
    explanation: "The axis of symmetry with gradient \\(m = +1\\) passing through intersection point \\((p; q)\\) is \\(y - q = 1(x - p) \\implies y = (x - p) + q\\)."
  },

  // --- FINANCE, GROWTH & DECAY (116 - 130) ---
  {
    id: 116,
    question: "Which formula converts a nominal interest rate compounded \\(m\\) times per year to an effective annual rate?",
    options: [
      "\\(1 + i_{\\text{eff}} = \\left(1 + \\frac{i^{(m)}}{m}\\right)^m\\)",
      "\\(i_{\\text{eff}} = (1 + i)^n - 1\\)",
      "\\(i_{\\text{eff}} = \\frac{i^{(m)}}{m}\\)",
      "\\(1 + i_{\\text{eff}} = (1 + m \\cdot i)^m\\)"
    ],
    answer: "\\(1 + i_{\\text{eff}} = \\left(1 + \\frac{i^{(m)}}{m}\\right)^m\\)",
    explanation: "The effective interest rate conversion identity is \\(1 + i_{\\text{eff}} = \\left(1 + \\frac{i^{(m)}}{m}\\right)^m\\)."
  },
  {
    id: 117,
    question: "Which formula calculates the Present Value of an annuity with equal regular payments \\(x\\)?",
    options: [
      "\\(PV = \\frac{x[1 - (1+i)^{-n}]}{i}\\)",
      "\\(PV = \\frac{x[(1+i)^n - 1]}{i}\\)",
      "\\(PV = P(1 - i)^n\\)",
      "\\(PV = \\frac{x(1+i)^{-n}}{i}\\)"
    ],
    answer: "\\(PV = \\frac{x[1 - (1+i)^{-n}]}{i}\\)",
    explanation: "The present value annuity formula is \\(PV = \\frac{x[1 - (1+i)^{-n}]}{i}\\)."
  },
  {
    id: 118,
    question: "Which formula calculates the Future Value of an annuity with equal regular payments \\(x\\)?",
    options: [
      "\\(FV = \\frac{x[(1+i)^n - 1]}{i}\\)",
      "\\(FV = \\frac{x[1 - (1+i)^{-n}]}{i}\\)",
      "\\(FV = P(1+i)^n\\)",
      "\\(FV = \\frac{x[(1-i)^n + 1]}{i}\\)"
    ],
    answer: "\\(FV = \\frac{x[(1+i)^n - 1]}{i}\\)",
    explanation: "The future value annuity formula is \\(FV = \\frac{x[(1+i)^n - 1]}{i}\\)."
  },
  {
    id: 119,
    question: "What is the formula for reducing-balance depreciation?",
    options: [
      "\\(A = P(1 - i)^n\\)",
      "\\(A = P(1 - i \\cdot n)\\)",
      "\\(A = P(1 + i)^n\\)",
      "\\(A = P(1 + i \\cdot n)\\)"
    ],
    answer: "\\(A = P(1 - i)^n\\)",
    explanation: "Reducing-balance depreciation uses compound decay: \\(A = P(1 - i)^n\\)."
  },
  {
    id: 120,
    question: "If an interest rate is quoted as 12% per annum compounded monthly, what monthly rate \\(i\\) should be used in calculations?",
    options: ["\\(0,01\\)", "\\(0,12\\)", "\\(0,001\\)", "\\(1,2\\)"],
    answer: "\\(0,01\\)",
    explanation: "\\(i = \\frac{0,12}{12} = 0,01\\) per month."
  },
  {
    id: 121,
    question: "In financial mathematics, how is the required value of a sinking fund calculated?",
    options: [
      "\\(\\text{Replacement Cost} - \\text{Trade-in Value}\\)",
      "\\(\\text{Replacement Cost} + \\text{Trade-in Value}\\)",
      "\\(\\text{Present Value of Loan} - \\text{Interest}\\)",
      "\\(\\text{Original Price} \\times (1 + i)^n\\)"
    ],
    answer: "\\(\\text{Replacement Cost} - \\text{Trade-in Value}\\)",
    explanation: "The sinking fund must cover the net cost to replace equipment: \\(\\text{Future Replacement Cost} - \\text{Scrap/Trade-in Value}\\)."
  },
  {
    id: 122,
    question: "What is the straight-line depreciation formula?",
    options: [
      "\\(A = P(1 - i \\cdot n)\\)",
      "\\(A = P(1 - i)^n\\)",
      "\\(A = P(1 + i \\cdot n)\\)",
      "\\(A = P(1 + i)^{-n}\\)"
    ],
    answer: "\\(A = P(1 - i \\cdot n)\\)",
    explanation: "Straight-line depreciation loses a fixed amount each year: \\(A = P(1 - i \\cdot n)\\)."
  },
  {
    id: 123,
    question: "Convert a nominal interest rate of 12% p.a. compounded monthly to an effective annual rate.",
    options: ["\\(12,68\\%\\)", "\\(12,00\\%\\)", "\\(12,36\\%\\)", "\\(13,00\\%\\)"],
    answer: "\\(12,68\\%\\)",
    explanation: "\\(i_{\\text{eff}} = (1 + 0,01)^{12} - 1 = 1,01^{12} - 1 \\approx 0,1268 = 12,68\\%\\)."
  },
  {
    id: 124,
    question: "How is the outstanding balance on a loan calculated immediately after making the \\(k\\)-th payment of \\(n\\) total payments?",
    options: [
      "Present Value of the remaining \\(n - k\\) payments",
      "Future Value of all \\(n\\) payments minus \\(k\\)",
      "Present Value of the first \\(k\\) payments",
      "Original principal divided by \\(n - k\\)"
    ],
    answer: "Present Value of the remaining \\(n - k\\) payments",
    explanation: "The balance outstanding on a loan equals the present value of all unmade remaining payments (\\(n - k\\))."
  },
  {
    id: 125,
    question: "Solving for the time period \\(n\\) in the compound growth equation \\(A = P(1+i)^n\\) requires using:",
    options: ["Logarithms", "Derivatives", "Quadratic formula", "Binomial expansion"],
    answer: "Logarithms",
    explanation: "Taking logarithms on both sides: \\(n = \\frac{\\log(A/P)}{\\log(1+i)}\\)."
  },
  {
    id: 126,
    question: "A loan of R100 000 is repaid with monthly payments. If the first payment is deferred to month 4 (\\(t_4\\)), how many months of interest accumulate on the initial principal before payments start?",
    options: ["\\(3\\) months", "\\(4\\) months", "\\(1\\) month", "\\(2\\) months"],
    answer: "\\(3\\) months",
    explanation: "If the first payment occurs at \\(t_4\\), interest accrues over 3 full periods (\\(t_1, t_2, t_3\\))."
  },
  {
    id: 127,
    question: "If R10 000 is invested at 8% per annum compounded quarterly for 5 years, what are the values of \\(i\\) and \\(n\\)?",
    options: [
      "\\(i = 0,02\\) and \\(n = 20\\)",
      "\\(i = 0,08\\) and \\(n = 5\\)",
      "\\(i = 0,02\\) and \\(n = 5\\)",
      "\\(i = 0,08\\) and \\(n = 20\\)"
    ],
    answer: "\\(i = 0,02\\) and \\(n = 20\\)",
    explanation: "\\(i = \\frac{0,08}{4} = 0,02\\) per quarter; \\(n = 5 \\times 4 = 20\\) quarterly periods."
  },
  {
    id: 128,
    question: "To calculate the future cost of an item inflated at rate \\(i\\) over \\(n\\) years, which model is applied?",
    options: [
      "Compound growth: \\(A = P(1 + i)^n\\)",
      "Simple interest: \\(A = P(1 + i \\cdot n)\\)",
      "Reducing balance: \\(A = P(1 - i)^n\\)",
      "Present value annuity"
    ],
    answer: "Compound growth: \\(A = P(1 + i)^n\\)",
    explanation: "Inflation compounds annually, modeled by \\(A = P(1 + i)^n\\)."
  },
  {
    id: 129,
    question: "What does the variable \\(x\\) represent in the standard Grade 12 annuity formulas?",
    options: [
      "The regular equal payment amount",
      "The total interest accumulated",
      "The initial principal amount",
      "The final accumulated amount"
    ],
    answer: "The regular equal payment amount",
    explanation: "In annuity calculations, \\(x\\) represents the recurring payment amount deposited or repaid per period."
  },
  {
    id: 130,
    question: "An investment doubles in value in 6 years under compound growth. What is the annual compound growth rate?",
    options: ["\\(12,25\\%\\)", "\\(16,67\\%\\)", "\\(10,00\\%\\)", "\\(8,33\\%\\)"],
    answer: "\\(12,25\\%\\)",
    explanation: "\\((1 + i)^6 = 2 \\implies 1 + i = 2^{1/6} \\approx 1,12246 \\implies i \\approx 12,25\\%\\)."
  },

  // --- CALCULUS (131 - 145) ---
  {
    id: 131,
    question: "What is the formal definition of the derivative \\(f'(x)\\) from first principles?",
    options: [
      "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\)",
      "\\(f'(x) = \\frac{f(x+h) - f(x)}{h}\\)",
      "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x) - f(h)}{h}\\)",
      "\\(f'(x) = \\lim_{x \\to 0} \\frac{f(x+h) + f(x)}{h}\\)"
    ],
    answer: "\\(f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}\\)",
    explanation: "The limit of the difference quotient as \\(h \\to 0\\) defines the derivative from first principles."
  },
  {
    id: 132,
    question: "Determine the derivative of \\(f(x) = 3x^4 - 2x^2 + 5\\).",
    options: [
      "\\(f'(x) = 12x^3 - 4x\\)",
      "\\(f'(x) = 12x^3 - 4x + 5\\)",
      "\\(f'(x) = 7x^3 - 4x\\)",
      "\\(f'(x) = 12x^4 - 4x^2\\)"
    ],
    answer: "\\(f'(x) = 12x^3 - 4x\\)",
    explanation: "Using the power rule: \\(\\frac{d}{dx}(3x^4) - \\frac{d}{dx}(2x^2) + \\frac{d}{dx}(5) = 12x^3 - 4x + 0\\)."
  },
  {
    id: 133,
    question: "Differentiate \\(g(x) = \\frac{1}{x}\\) with respect to \\(x\\).",
    options: [
      "\\(-\\frac{1}{x^2}\\)",
      "\\(\\frac{1}{x^2}\\)",
      "\\(\\ln x\\)",
      "\\(-x\\)"
    ],
    answer: "\\(-\\frac{1}{x^2}\\)",
    explanation: "Rewrite \\(g(x) = x^{-1}\\). By power rule: \\(g'(x) = -1 \\cdot x^{-2} = -\\frac{1}{x^2}\\)."
  },
  {
    id: 134,
    question: "Differentiate \\(h(x) = \\sqrt{x}\\) with respect to \\(x\\).",
    options: [
      "\\(\\frac{1}{2\\sqrt{x}}\\)",
      "\\(\\frac{1}{\\sqrt{x}}\\)",
      "\\(2\\sqrt{x}\\)",
      "\\(-\\frac{1}{2\\sqrt{x}}\\)"
    ],
    answer: "\\(\\frac{1}{2\\sqrt{x}}\\)",
    explanation: "Rewrite \\(h(x) = x^{1/2}\\). Derivative is \\(\\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}\\)."
  },
  {
    id: 135,
    question: "Find the gradient of the tangent to the curve \\(y = x^2 - 3x\\) at \\(x = 2\\).",
    options: ["\\(1\\)", "\\(-1\\)", "\\(2\\)", "\\(-2\\)"],
    answer: "\\(1\\)",
    explanation: "\\(y' = 2x - 3\\). At \\(x = 2\\), \\(m = 2(2) - 3 = 1\\)."
  },
  {
    id: 136,
    question: "At turning points on a differentiable curve \\(y = f(x)\\), what is the value of \\(f'(x)\\)?",
    options: ["\\(0\\)", "\\(1\\)", "\\(-1\\)", "Undefined"],
    answer: "\\(0\\)",
    explanation: "The tangent line is horizontal at stationary/turning points, so \\(f'(x) = 0\\)."
  },
  {
    id: 137,
    question: "For a cubic function \\(f(x) = ax^3 + bx^2 + cx + d\\), at what $x$-value does the point of inflection occur?",
    options: [
      "\\(x = -\\frac{b}{3a}\\)",
      "\\(x = -\\frac{b}{2a}\\)",
      "\\(x = \\frac{c}{3a}\\)",
      "\\(x = -\\frac{d}{a}\\)"
    ],
    answer: "\\(x = -\\frac{b}{3a}\\)",
    explanation: "Point of inflection occurs where \\(f''(x) = 6ax + 2b = 0 \\implies x = -\\frac{b}{3a}\\)."
  },
  {
    id: 138,
    question: "If \\(f'(x) > 0\\) for all \\(x \\in (a; b)\\), what can be concluded about \\(f(x)\\) on that interval?",
    options: [
      "\\(f(x)\\) is strictly increasing",
      "\\(f(x)\\) is strictly decreasing",
      "\\(f(x)\\) is constant",
      "\\(f(x)\\) has a local maximum"
    ],
    answer: "\\(f(x)\\) is strictly increasing",
    explanation: "A positive derivative means the slope is positive, so the function is strictly increasing."
  },
  {
    id: 139,
    question: "If \\(f''(x) < 0\\) for all \\(x\\) in an interval, what is the concavity of \\(f(x)\\)?",
    options: ["Concave down", "Concave up", "Linear", "Point of inflection"],
    answer: "Concave down",
    explanation: "A negative second derivative indicates the graph is concave downward."
  },
  {
    id: 140,
    question: "A local maximum of a function \\(f(x)\\) occurs at \\(x = c\\) if:",
    options: [
      "\\(f'(c) = 0\\) and \\(f''(c) < 0\\)",
      "\\(f'(c) = 0\\) and \\(f''(c) > 0\\)",
      "\\(f'(c) > 0\\) and \\(f''(c) = 0\\)",
      "\\(f'(c) = 0\\) and \\(f''(c) = 0\\)"
    ],
    answer: "\\(f'(c) = 0\\) and \\(f''(c) < 0\\)",
    explanation: "Second derivative test for local maximum requires a stationary point (\\(f'(c) = 0\\)) and concave downward shape (\\(f''(c) < 0\\))."
  },
  {
    id: 141,
    question: "What is the derivative of any constant \\(c\\) with respect to \\(x\\)?",
    options: ["\\(0\\)", "\\(1\\)", "\\(c\\)", "\\(x\\)"],
    answer: "\\(0\\)",
    explanation: "The rate of change of a constant value is zero."
  },
  {
    id: 142,
    question: "Find the equation of the tangent line to \\(y = x^3\\) at the point \\((2; 8)\\).",
    options: [
      "\\(y = 12x - 16\\)",
      "\\(y = 6x - 4\\)",
      "\\(y = 12x + 8\\)",
      "\\(y = 3x + 2\\)"
    ],
    answer: "\\(y = 12x - 16\\)",
    explanation: "\\(y' = 3x^2\\). At \\(x = 2\\), \\(m = 12\\). Tangent equation: \\(y - 8 = 12(x - 2) \\implies y = 12x - 16\\)."
  },
  {
    id: 143,
    question: "Find the $x$-coordinates of the turning points of \\(f(x) = x^3 - 3x\\).",
    options: [
      "\\(x = 1\\) and \\(x = -1\\)",
      "\\(x = 0\\) and \\(x = 3\\)",
      "\\(x = \\sqrt{3}\\) and \\(x = -\\sqrt{3}\\)",
      "\\(x = 2\\) and \\(x = -2\\)"
    ],
    answer: "\\(x = 1\\) and \\(x = -1\\)",
    explanation: "Set \\(f'(x) = 3x^2 - 3 = 0 \\implies 3(x^2 - 1) = 0 \\implies x = 1\\) or \\(x = -1\\)."
  },
  {
    id: 144,
    question: "In an optimization problem, how do you find the value of \\(x\\) that maximizes volume \\(V(x)\\)?",
    options: [
      "Set \\(\\frac{dV}{dx} = 0\\) and solve for \\(x\\)",
      "Set \\(V(x) = 0\\) and solve for \\(x\\)",
      "Set \\(\\frac{d^2V}{dx^2} = 0\\) and solve for \\(x\\)",
      "Evaluate \\(V(0)\\)"
    ],
    answer: "Set \\(\\frac{dV}{dx} = 0\\) and solve for \\(x\\)",
    explanation: "Maxima occur at critical points where the first derivative equals zero."
  },
  {
    id: 145,
    question: "According to the Remainder Theorem, when polynomial \\(f(x)\\) is divided by \\((ax - b)\\), the remainder is:",
    options: [
      "\\(f\\left(\\frac{b}{a}\\right)\\)",
      "\\(f\\left(-\\frac{b}{a}\\right)\\)",
      "\\(f\\left(\\frac{a}{b}\\right)\\)",
      "\\(f(b)\\)"
    ],
    answer: "\\(f\\left(\\frac{b}{a}\\right)\\)",
    explanation: "Setting \\(ax - b = 0 \\implies x = \\frac{b}{a}\\). The remainder is \\(R = f\\left(\\frac{b}{a}\\right)\\)."
  },

  // --- ANALYTICAL GEOMETRY & PROBABILITY (146 - 150) ---
  {
    id: 146,
    question: "What is the distance formula between points \\((x_1; y_1)\\) and \\((x_2; y_2)\\)?",
    options: [
      "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
      "\\(d = (x_2 - x_1)^2 + (y_2 - y_1)^2\\)",
      "\\(d = \\sqrt{(x_2 + x_1)^2 + (y_2 + y_1)^2}\\)",
      "\\(d = \\frac{y_2 - y_1}{x_2 - x_1}\\)"
    ],
    answer: "\\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)",
    explanation: "Derived from Pythagoras: distance \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\)."
  },
  {
    id: 147,
    question: "If a line has a gradient \\(m = \\frac{3}{4}\\), what is the gradient of any line perpendicular to it?",
    options: ["\\(-\\frac{4}{3}\\)", "\\(\\frac{4}{3}\\)", "\\(-\\frac{3}{4}\\)", "\\(\\frac{3}{4}\\)"],
    answer: "\\(-\\frac{4}{3}\\)",
    explanation: "Perpendicular gradients satisfy \\(m_1 \\cdot m_2 = -1 \\implies m_2 = -\\frac{1}{3/4} = -\\frac{4}{3}\\)."
  },
  {
    id: 148,
    question: "What is the standard equation of a circle centered at \\((h; k)\\) with radius \\(r\\)?",
    options: [
      "\\((x - h)^2 + (y - k)^2 = r^2\\)",
      "\\((x + h)^2 + (y + k)^2 = r^2\\)",
      "\\((x - h)^2 - (y - k)^2 = r^2\\)",
      "\\(x^2 + y^2 = r\\)"
    ],
    answer: "\\((x - h)^2 + (y - k)^2 = r^2\\)",
    explanation: "The general equation for a circle centered at \\((h; k)\\) with radius \\(r\\) is \\((x - h)^2 + (y - k)^2 = r^2\\)."
  },
  {
    id: 149,
    question: "According to the Fundamental Counting Principle, if Event A has \\(m\\) outcomes and Event B has \\(n\\) outcomes, how many total combined outcomes exist?",
    options: ["\\(m \\times n\\)", "\\(m + n\\)", "\\(m^n\\)", "\\(\\frac{m}{n}\\)"],
    answer: "\\(m \\times n\\)",
    explanation: "The total number of combined outcomes for successive independent events is the product \\(m \\times n\\)."
  },
  {
    id: 150,
    question: "What is the formula for the theoretical probability of event \\(E\\) in sample space \\(S\\)?",
    options: [
      "\\(P(E) = \\frac{n(E)}{n(S)}\\)",
      "\\(P(E) = \\frac{n(S)}{n(E)}\\)",
      "\\(P(E) = n(E) \\times n(S)\\)",
      "\\(P(E) = 1 - n(E)\\)"
    ],
    answer: "\\(P(E) = \\frac{n(E)}{n(S)}\\)",
    explanation: "Probability is defined as the number of favorable outcomes divided by total sample space outcomes: \\(P(E) = \\frac{n(E)}{n(S)}\\)."
  },
  // --- TRIGONOMETRY (151 - 165) ---
  {
    id: 151,
    question: "Which expression is the correct expansion for the compound angle formula \\(\\cos(\\alpha - \\beta)\\)?",
    options: [
      "\\(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\\)"
    ],
    answer: "\\(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)",
    explanation: "The cosine difference identity expands to \\(\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)."
  },
  {
    id: 152,
    question: "Which expression is equivalent to \\(\\sin(\\alpha + \\beta)\\)?",
    options: [
      "\\(\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta - \\cos\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta\\)"
    ],
    answer: "\\(\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\\)",
    explanation: "The sine sum identity expands to \\(\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta\\)."
  },
  {
    id: 153,
    question: "Which of the following is NOT an equivalent double-angle identity for \\(\\cos(2x)\\)?",
    options: [
      "\\(1 + 2\\sin^2 x\\)",
      "\\(\\cos^2 x - \\sin^2 x\\)",
      "\\(2\\cos^2 x - 1\\)",
      "\\(1 - 2\\sin^2 x\\)"
    ],
    answer: "\\(1 + 2\\sin^2 x\\)",
    explanation: "The correct identity with sine is \\(\\cos(2x) = 1 - 2\\sin^2 x\\), not \\(1 + 2\\sin^2 x\\)."
  },
  {
    id: 154,
    question: "Simplify the expression \\(\\sin(180^\\circ - \\theta)\\).",
    options: ["\\(\\sin\\theta\\)", "\\(-\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\cos\\theta\\)"],
    answer: "\\(\\sin\\theta\\)",
    explanation: "In Quadrant II (\\(180^\\circ - \\theta\\)), sine is positive, so \\(\\sin(180^\\circ - \\theta) = \\sin\\theta\\)."
  },
  {
    id: 155,
    question: "Simplify the expression \\(\\cos(180^\\circ + \\theta)\\).",
    options: ["\\(-\\cos\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\sin\\theta\\)", "\\(\\sin\\theta\\)"],
    answer: "\\(-\\cos\\theta\\)",
    explanation: "In Quadrant III (\\(180^\\circ + \\theta\\)), cosine is negative, so \\(\\cos(180^\\circ + \\theta) = -\\cos\\theta\\)."
  },
  {
    id: 156,
    question: "Simplify \\(\\frac{\\sin(2x)}{2\\sin x}\\) for \\(\\sin x \\neq 0\\).",
    options: ["\\(\\cos x\\)", "\\(\\sin x\\)", "\\(2\\cos x\\)", "\\(\\frac{1}{2}\\cos x\\)"],
    answer: "\\(\\cos x\\)",
    explanation: "Substitute double angle \\(\\sin(2x) = 2\\sin x\\cos x\\): \\(\\frac{2\\sin x\\cos x}{2\\sin x} = \\cos x\\)."
  },
  {
    id: 157,
    question: "What is the general solution to the equation \\(\\sin x = 0,5\\)?",
    options: [
      "\\(x = 30^\\circ + k \\cdot 360^\\circ\\) or \\(x = 150^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 30^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 60^\\circ + k \\cdot 360^\\circ\\) or \\(x = 120^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 30^\\circ + k \\cdot 360^\\circ\\) or \\(x = -30^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)"
    ],
    answer: "\\(x = 30^\\circ + k \\cdot 360^\\circ\\) or \\(x = 150^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
    explanation: "Reference angle is \\(30^\\circ\\). Sine is positive in Q1 (\\(30^\\circ\\)) and Q2 (\\(180^\\circ - 30^\\circ = 150^\\circ\\)). Add period \\(k \\cdot 360^\\circ\\)."
  },
  {
    id: 158,
    question: "What is the general solution for \\(\\cos x = 0\\)?",
    options: [
      "\\(x = 90^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 0^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 180^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 45^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)"
    ],
    answer: "\\(x = 90^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
    explanation: "\\(\\cos x = 0\\) at odd multiples of \\(90^\\circ\\), summarized by \\(x = 90^\\circ + k \\cdot 180^\\circ\\)."
  },
  {
    id: 159,
    question: "Simplify \\(\\cos^2(15^\\circ) + \\sin^2(15^\\circ)\\).",
    options: ["\\(1\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(0\\)"],
    answer: "\\(1\\)",
    explanation: "By the Pythagorean square identity, \\(\\cos^2\\theta + \\sin^2\\theta = 1\\) for any angle \\(\\theta\\)."
  },
  {
    id: 160,
    question: "Simplify \\(\\frac{\\sin(90^\\circ - \\theta)}{\\cos\\theta}\\) where \\(\\cos\\theta \\neq 0\\).",
    options: ["\\(1\\)", "\\(\\tan\\theta\\)", "\\(-1\\)", "\\(\\cot\\theta\\)"],
    answer: "\\(1\\)",
    explanation: "Using co-function reduction: \\(\\sin(90^\\circ - \\theta) = \\cos\\theta\\). Thus \\(\\frac{\\cos\\theta}{\\cos\\theta} = 1\\)."
  },
  {
    id: 161,
    question: "Which formula calculates the area of non-right-angled \\(\\triangle ABC\\)?",
    options: [
      "\\(\\text{Area} = \\frac{1}{2}ab\\sin C\\)",
      "\\(\\text{Area} = \\frac{1}{2}ab\\cos C\\)",
      "\\(\\text{Area} = ab\\sin C\\)",
      "\\(\\text{Area} = \\frac{1}{2}(a + b)\\sin C\\)"
    ],
    answer: "\\(\\text{Area} = \\frac{1}{2}ab\\sin C\\)",
    explanation: "The area rule states \\(\\text{Area} = \\frac{1}{2}ab\\sin C\\) for any triangle."
  },
  {
    id: 162,
    question: "What is the correct form of the Sine Rule for \\(\\triangle ABC\\)?",
    options: [
      "\\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)",
      "\\(\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C}\\)",
      "\\(a\\sin A = b\\sin B = c\\sin C\\)",
      "\\(\\frac{\\sin A}{a} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)"
    ],
    answer: "\\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)",
    explanation: "The Sine Rule relates sides and opposite angle sines: \\(\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}\\)."
  },
  {
    id: 163,
    question: "Which formula expresses side $c$ using the Cosine Rule?",
    options: [
      "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\)",
      "\\(c^2 = a^2 + b^2 + 2ab\\cos C\\)",
      "\\(c^2 = a^2 - b^2 - 2ab\\sin C\\)",
      "\\(c = a + b - 2ab\\cos C\\)"
    ],
    answer: "\\(c^2 = a^2 + b^2 - 2ab\\cos C\\)",
    explanation: "The Cosine Rule for side $c$ is \\(c^2 = a^2 + b^2 - 2ab\\cos C\\)."
  },
  {
    id: 164,
    question: "What is the period of the tangent function \\(y = \\tan x\\)?",
    options: ["\\(180^\\circ\\)", "\\(360^\\circ\\)", "\\(90^\\circ\\)", "\\(720^\\circ\\)"],
    answer: "\\(180^\\circ\\)",
    explanation: "The basic tangent graph repeats every \\(180^\\circ\\) (or \\(\\pi\\) radians)."
  },
  {
    id: 165,
    question: "What is the period of the function \\(y = \\sin(2x)\\)?",
    options: ["\\(180^\\circ\\)", "\\(360^\\circ\\)", "\\(90^\\circ\\)", "\\(720^\\circ\\)"],
    answer: "\\(180^\\circ\\)",
    explanation: "Period of \\(\\sin(kx)\\) is \\(\\frac{360^\\circ}{k}\\). Here, \\(\\frac{360^\\circ}{2} = 180^\\circ\\)."
  },

  // --- EUCLIDEAN GEOMETRY (166 - 180) ---
  {
    id: 166,
    question: "What is the measure of an angle subtended at the circumference by a diameter of a circle?",
    options: ["\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)"],
    answer: "\\(90^\\circ\\)",
    explanation: "An angle subtended by a diameter at the circumference is a right angle (\\(90^\\circ\\))."
  },
  {
    id: 167,
    question: "Complete the theorem: The angle subtended by an arc at the centre of a circle is...",
    options: [
      "double the angle subtended by the same arc at the circumference",
      "equal to the angle subtended at the circumference",
      "half the angle subtended by the same arc at the circumference",
      "supplementary to the angle at the circumference"
    ],
    answer: "double the angle subtended by the same arc at the circumference",
    explanation: "The central angle theorem states the angle at the centre is twice the angle at the circumference on the same arc."
  },
  {
    id: 168,
    question: "What is the relationship between the opposite angles of a cyclic quadrilateral?",
    options: ["They are supplementary", "They are equal", "They are complementary", "Their sum is 90 degrees"],
    answer: "They are supplementary",
    explanation: "Opposite angles of a cyclic quad add up to \\(180^\\circ\\) (supplementary)."
  },
  {
    id: 169,
    question: "The exterior angle of a cyclic quadrilateral is equal to:",
    options: [
      "the interior opposite angle",
      "the adjacent interior angle",
      "half the central angle",
      "\\(90^\\circ\\)"
    ],
    answer: "the interior opposite angle",
    explanation: "By the exterior angle theorem of a cyclic quad, it equals the interior opposite angle."
  },
  {
    id: 170,
    question: "According to the Tan-Chord Theorem, the angle between a tangent to a circle and a chord drawn from the point of contact is equal to:",
    options: [
      "the angle subtended by the chord in the alternate segment",
      "the angle at the centre subtended by the chord",
      "\\(90^\\circ\\)",
      "half the opposite interior angle"
    ],
    answer: "the angle subtended by the chord in the alternate segment",
    explanation: "The angle between a tangent and a chord equals the angle subtended by the chord in the alternate segment."
  },
  {
    id: 171,
    question: "A line drawn from the centre of a circle perpendicular to a chord...",
    options: ["bisects the chord", "doubles the chord length", "is tangent to the circle", "equals the radius"],
    answer: "bisects the chord",
    explanation: "The perpendicular line from the centre to a chord bisects that chord."
  },
  {
    id: 172,
    question: "A line segment drawn from the centre of a circle to the midpoint of a chord is...",
    options: [
      "perpendicular to the chord",
      "parallel to the tangent",
      "equal to half the radius",
      "tangent to the circle"
    ],
    answer: "perpendicular to the chord",
    explanation: "The line joining the centre to the midpoint of a chord is perpendicular to the chord."
  },
  {
    id: 173,
    question: "What angle does a tangent to a circle make with the radius at the point of contact?",
    options: ["\\(90^\\circ\\)", "\\(45^\\circ\\)", "\\(180^\\circ\\)", "\\(60^\\circ\\)"],
    answer: "\\(90^\\circ\\)",
    explanation: "A tangent is always perpendicular to the radius at its point of contact (\\(90^\\circ\\))."
  },
  {
    id: 174,
    question: "If two tangents are drawn to a circle from the same external point, what can be stated about their lengths?",
    options: ["They are equal in length", "One is double the other", "Their product is equal to $r^2$", "They are perpendicular"],
    answer: "They are equal in length",
    explanation: "Tangents drawn to a circle from a common exterior point are equal in length."
  },
  {
    id: 175,
    question: "A line drawn parallel to one side of a triangle divides the other two sides...",
    options: ["proportionally", "equally", "in a $1:2$ ratio", "perpendicularly"],
    answer: "proportionally",
    explanation: "The Proportionality Theorem states a line parallel to one side of a triangle divides the remaining sides proportionally."
  },
  {
    id: 176,
    question: "According to the Midpoint Theorem, the line joining the midpoints of two sides of a triangle is parallel to the third side and its length is:",
    options: [
      "half the length of the third side",
      "equal to the third side",
      "double the third side",
      "one-third of the third side"
    ],
    answer: "half the length of the third side",
    explanation: "The segment connecting midpoints is parallel to the 3rd side and half as long."
  },
  {
    id: 177,
    question: "If two triangles are equiangular, then the triangles are:",
    options: ["Similar", "Congruent", "Right-angled", "Isosceles"],
    answer: "Similar",
    explanation: "Triangles with corresponding angles equal (equiangular) are similar."
  },
  {
    id: 178,
    question: "When two triangles are similar, their corresponding sides are:",
    options: ["In proportion", "Equal", "Perpendicular", "Add to 180"],
    answer: "In proportion",
    explanation: "Similarity implies equal corresponding angles and proportional corresponding side lengths."
  },
  {
    id: 179,
    question: "If two similar triangles have corresponding sides in scale ratio \\(k\\), what is the ratio of their areas?",
    options: ["\\(k^2\\)", "\\(k\\)", "\\(2k\\)", "\\(\\sqrt{k}\\)"],
    answer: "\\(k^2\\)",
    explanation: "The ratio of the areas of two similar figures equals the square of the linear scale factor (\\(k^2\\))."
  },
  {
    id: 180,
    question: "Angles subtended by the same arc at the circumference in the same segment of a circle are:",
    options: ["Equal", "Supplementary", "Complementary", "Sum to 360 degrees"],
    answer: "Equal",
    explanation: "Angles in the same segment of a circle are equal."
  },

  // --- STATISTICS (181 - 190) ---
  {
    id: 181,
    question: "The least squares regression line for a bivariate dataset always passes through which mean point?",
    options: [
      "\\((\\bar{x}; \\bar{y})\\)",
      "\\((0; 0)\\)",
      "\\((x_{\\min}; y_{\\min})\\)",
      "\\((Q_1; Q_3)\\)"
    ],
    answer: "\\((\\bar{x}; \\bar{y})\\)",
    explanation: "The line of best fit always passes through the mean point \\((\\bar{x}; \\bar{y})\\)."
  },
  {
    id: 182,
    question: "Which value of the correlation coefficient \\(r\\) represents a perfect positive linear correlation?",
    options: ["\\(r = 1\\)", "\\(r = 0\\)", "\\(r = -1\\)", "\\(r = 0,5\\)"],
    answer: "\\(r = 1\\)",
    explanation: "A correlation coefficient \\(r = 1\\) indicates perfect positive linear association."
  },
  {
    id: 183,
    question: "A correlation coefficient \\(r = 0\\) indicates:",
    options: [
      "No linear correlation",
      "Perfect negative correlation",
      "Strong positive correlation",
      "A quadratic relationship"
    ],
    answer: "No linear correlation",
    explanation: "\\(r = 0\\) implies no linear relationship exists between the variables."
  },
  {
    id: 184,
    question: "In the linear regression equation \\(\\hat{y} = a + bx\\), what does parameter \\(b\\) represent?",
    options: [
      "The slope (gradient) of the line",
      "The $y$-intercept",
      "The correlation coefficient",
      "The mean of $x$"
    ],
    answer: "The slope (gradient) of the line",
    explanation: "In standard CAPS notation \\(\\hat{y} = a + bx\\), \\(b\\) represents the gradient/slope and \\(a\\) the $y$-intercept."
  },
  {
    id: 185,
    question: "In the linear regression equation \\(\\hat{y} = a + bx\\), what does parameter \\(a\\) represent?",
    options: [
      "The $y$-intercept",
      "The slope of the line",
      "The standard deviation",
      "The sample variance"
    ],
    answer: "The $y$-intercept",
    explanation: "\\(a\\) is the constant term representing the $y$-intercept where \\(x = 0\\)."
  },
  {
    id: 186,
    question: "What is an outlier in a statistical dataset?",
    options: [
      "A value that lies abnormally far from other values",
      "The exact middle value of the data",
      "The value that occurs most frequently",
      "The difference between the maximum and minimum values"
    ],
    answer: "A value that lies abnormally far from other values",
    explanation: "An outlier is an extreme data point that deviates significantly from the rest of the distribution."
  },
  {
    id: 187,
    question: "What does standard deviation measure in a distribution?",
    options: [
      "The spread of data values relative to the mean",
      "The middle position of ordered data",
      "The total sum of all observations",
      "The change in $y$ divided by change in $x$"
    ],
    answer: "The spread of data values relative to the mean",
    explanation: "Standard deviation quantifies the average dispersion or variability around the mean."
  },
  {
    id: 188,
    question: "An Ogive is a graphical representation of:",
    options: [
      "Cumulative frequency",
      "Probability density",
      "Bivariate scatter plots",
      "Standard normal z-scores"
    ],
    answer: "Cumulative frequency",
    explanation: "An Ogive curves cumulative frequency against upper class boundaries."
  },
  {
    id: 189,
    question: "Which five statistics form the Five-Number Summary used to construct a Box-and-Whisker plot?",
    options: [
      "Minimum, \\(Q_1\\), Median (\\(Q_2\\)), \\(Q_3\\), Maximum",
      "Mean, Mode, Median, Range, Standard Deviation",
      "Minimum, Mean, Mode, \\(Q_3\\), Maximum",
      "\\(Q_1\\), \\(Q_2\\), \\(Q_3\\), IQR, Range"
    ],
    answer: "Minimum, \\(Q_1\\), Median (\\(Q_2\\)), \\(Q_3\\), Maximum",
    explanation: "The five-number summary consists of Min, Lower Quartile, Median, Upper Quartile, and Max."
  },
  {
    id: 190,
    question: "What is the formula for Interquartile Range (IQR)?",
    options: [
      "\\(\\text{IQR} = Q_3 - Q_1\\)",
      "\\(\\text{IQR} = Q_3 + Q_1\\)",
      "\\(\\text{IQR} = \\text{Max} - \\text{Min}\\)",
      "\\(\\text{IQR} = \\frac{Q_3 - Q_1}{2}\\)"
    ],
    answer: "\\(\\text{IQR} = Q_3 - Q_1\\)",
    explanation: "Interquartile range measures the spread of the middle 50% of data: \\(\\text{IQR} = Q_3 - Q_1\\)."
  },

  // --- SEQUENCES, SERIES & MIXED REVIEW (191 - 200) ---
  {
    id: 191,
    question: "What is the formula for the $n$-th term of an Arithmetic Sequence?",
    options: [
      "\\(T_n = a + (n - 1)d\\)",
      "\\(T_n = a \\cdot r^{n-1}\\)",
      "\\(T_n = a + nd\\)",
      "\\(T_n = \\frac{n}{2}(a + l)\\)"
    ],
    answer: "\\(T_n = a + (n - 1)d\\)",
    explanation: "An arithmetic sequence term is given by \\(T_n = a + (n - 1)d\\)."
  },
  {
    id: 192,
    question: "What is the formula for the $n$-th term of a Geometric Sequence?",
    options: [
      "\\(T_n = a \\cdot r^{n-1}\\)",
      "\\(T_n = a + (n - 1)d\\)",
      "\\(T_n = a \\cdot r^n\\)",
      "\\(T_n = \\frac{a(r^n - 1)}{r - 1}\\)"
    ],
    answer: "\\(T_n = a \\cdot r^{n-1}\\)",
    explanation: "A geometric sequence term is given by \\(T_n = a \\cdot r^{n-1}\\)."
  },
  {
    id: 193,
    question: "Which formula gives the sum of the first $n$ terms of an Arithmetic Series?",
    options: [
      "\\(S_n = \\frac{n}{2}[2a + (n - 1)d]\\)",
      "\\(S_n = \\frac{a(r^n - 1)}{r - 1}\\)",
      "\\(S_n = a + (n - 1)d\\)",
      "\\(S_n = \\frac{a}{1 - r}\\)"
    ],
    answer: "\\(S_n = \\frac{n}{2}[2a + (n - 1)d]\\)",
    explanation: "Sum of an arithmetic series is \\(S_n = \\frac{n}{2}[2a + (n - 1)d]\\) or \\(\\frac{n}{2}(a + l)\\)."
  },
  {
    id: 194,
    question: "For an infinite geometric series to converge, what condition must common ratio \\(r\\) satisfy?",
    options: ["\\(-1 < r < 1\\)", "\\(r > 1\\)", "\\(r \\le -1\\)", "\\(r = 1\\)"],
    answer: "\\(-1 < r < 1\\)",
    explanation: "Convergence requires the absolute value of the common ratio to be strictly less than 1: \\(|r| < 1\\) or \\(-1 < r < 1\\)."
  },
  {
    id: 195,
    question: "What is the sum to infinity \\(S_\\infty\\) formula for a convergent geometric series?",
    options: [
      "\\(S_\\infty = \\frac{a}{1 - r}\\)",
      "\\(S_\\infty = \\frac{a}{r - 1}\\)",
      "\\(S_\\infty = \\frac{a(1 - r^n)}{1 - r}\\)",
      "\\(S_\\infty = \\frac{1 - a}{r}\\)"
    ],
    answer: "\\(S_\\infty = \\frac{a}{1 - r}\\)",
    explanation: "For \\(|r| < 1\\), as \\(n \\to \\infty\\), \\(r^n \\to 0\\), leaving \\(S_\\infty = \\frac{a}{1 - r}\\)."
  },
  {
    id: 196,
    question: "How is the common ratio \\(r\\) calculated in a geometric sequence?",
    options: [
      "\\(r = \\frac{T_2}{T_1}\\)",
      "\\(r = T_2 - T_1\\)",
      "\\(r = T_1 \\times T_2\\)",
      "\\(r = \\frac{T_1}{T_2}\\)"
    ],
    answer: "\\(r = \\frac{T_2}{T_1}\\)",
    explanation: "The common ratio is the quotient of any term and its immediate predecessor: \\(r = \\frac{T_{k}}{T_{k-1}}\\)."
  },
  {
    id: 197,
    question: "Differentiate \\(f(x) = \\frac{1}{2}x^2 - 4x + 7\\).",
    options: [
      "\\(f'(x) = x - 4\\)",
      "\\(f'(x) = x - 4x\\)",
      "\\(f'(x) = 2x - 4\\)",
      "\\(f'(x) = \\frac{1}{2}x - 4\\)"
    ],
    answer: "\\(f'(x) = x - 4\\)",
    explanation: "Applying power rule: \\(f'(x) = 2 \\cdot \\frac{1}{2}x^{2-1} - 4 = x - 4\\)."
  },
  {
    id: 198,
    question: "If two events $A$ and $B$ are independent, how is \\(P(A \\cap B)\\) calculated?",
    options: [
      "\\(P(A) \\times P(B)\\)",
      "\\(P(A) + P(B)\\)",
      "\\(P(A) + P(B) - P(A \\cup B)\\)",
      "\\(\\frac{P(A)}{P(B)}\\)"
    ],
    answer: "\\(P(A) \\times P(B)\\)",
    explanation: "By definition, independent events satisfy \\(P(A \\cap B) = P(A) \\cdot P(B)\\)."
  },
  {
    id: 199,
    question: "If two events $A$ and $B$ are mutually exclusive, what is \\(P(A \\cap B)\\)?",
    options: ["\\(0\\)", "\\(1\\)", "\\(P(A) \\times P(B)\\)", "\\(0,5\\)"],
    answer: "\\(0\\)",
    explanation: "Mutually exclusive events cannot happen simultaneously, so \\(P(A \\cap B) = 0\\)."
  },
  {
    id: 200,
    question: "What is the distance from the origin \\((0; 0)\\) to the centre of the circle \\((x - 3)^2 + (y - 4)^2 = 25\\)?",
    options: ["\\(5\\) units", "\\(25\\) units", "\\(7\\) units", "\\(12\\) units"],
    answer: "\\(5\\) units",
    explanation: "The centre of the circle is \\((3; 4)\\). Distance from origin is \\(d = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\) units."
  },
  // --- FUNCTIONS & GRAPH TRANSFORMATIONS (201 - 215) ---
  {
    id: 201,
    question: "Given \\(f(x) = \\log_{\\frac{1}{2}} x\\), what is the value of \\(f(4)\\)?",
    options: ["\\(-2\\)", "\\(2\\)", "\\(\\frac{1}{2}\\)", "\\(-4\\)"],
    answer: "\\(-2\\)",
    explanation: "Solve \\(\\log_{\\frac{1}{2}} 4 = y \\implies (2^{-1})^y = 2^2 \\implies -y = 2 \\implies y = -2\\)."
  },
  {
    id: 202,
    question: "What is the asymptote of the exponential function \\(f(x) = 2^{x-1} - 4\\)?",
    options: ["\\(y = -4\\)", "\\(x = 1\\)", "\\(y = 0\\)", "\\(x = 4\\)"],
    answer: "\\(y = -4\\)",
    explanation: "The horizontal asymptote of \\(y = a \\cdot b^{x-p} + q\\) is defined by \\(y = q\\). Here, \\(q = -4\\)."
  },
  {
    id: 203,
    question: "If \\(f(x) = 3x^2\\), what is the equation of \\(g(x)\\) obtained by reflecting \\(f(x)\\) across the $x$-axis?",
    options: [
      "\\(g(x) = -3x^2\\)",
      "\\(g(x) = 3(-x)^2\\)",
      "\\(g(x) = \\frac{1}{3}x^2\\)",
      "\\(g(x) = -3(-x)^2\\)"
    ],
    answer: "\\(g(x) = -3x^2\\)",
    explanation: "Reflection across the $x$-axis maps \\(y \\to -y\\), giving \\(g(x) = -f(x) = -3x^2\\)."
  },
  {
    id: 204,
    question: "For what values of \\(x\\) is the function \\(f(x) = \\frac{2}{x + 3} - 1\\) undefined?",
    options: ["\\(x = -3\\)", "\\(x = 3\\)", "\\(x = -1\\)", "\\(x = 1\\)"],
    answer: "\\(x = -3\\)",
    explanation: "The function is undefined where the denominator equals zero: \\(x + 3 = 0 \\implies x = -3\\)."
  },
  {
    id: 205,
    question: "What is the domain of the function \\(f(x) = \\sqrt{5 - x}\\)?",
    options: ["\\(x \\le 5\\)", "\\(x \\ge 5\\)", "\\(x < 5\\)", "\\(x \\in \\mathbb{R}\\)"],
    answer: "\\(x \\le 5\\)",
    explanation: "For the square root to yield real values, \\(5 - x \\ge 0 \\implies x \\le 5\\)."
  },
  {
    id: 206,
    question: "Find the coordinates of the $y$-intercept of \\(f(x) = -2(x + 1)^2 + 18\\).",
    options: ["\\((0; 16)\\)", "\\((0; 18)\\)", "\\((0; 14)\\)", "\\((0; -2)\\)"],
    answer: "\\((0; 16)\\)",
    explanation: "Set \\(x = 0\\): \\(f(0) = -2(0 + 1)^2 + 18 = -2(1) + 18 = 16\\)."
  },
  {
    id: 207,
    question: "If \\(f(x) = 2^x\\), what is the equation of \\(f^{-1}(x)\\)?",
    options: [
      "\\(f^{-1}(x) = \\log_2 x\\)",
      "\\(f^{-1}(x) = x^2\\)",
      "\\(f^{-1}(x) = 2^{-x}\\)",
      "\\(f^{-1}(x) = \\log_x 2\\)"
    ],
    answer: "\\(f^{-1}(x) = \\log_2 x\\)",
    explanation: "To find the inverse, swap $x$ and $y$: \\(x = 2^y \\implies y = \\log_2 x\\)."
  },
  {
    id: 208,
    question: "Find the coordinates of the turning point of \\(y = x^2 - 6x + 5\\).",
    options: ["\\((3; -4)\\)", "\\((-3; 32)\\)", "\\((3; 4)\\)", "\\((-3; -4)\\)"],
    answer: "\\((3; -4)\\)",
    explanation: "\\(x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3\\). Substituting \\(x = 3\\) yields \\(y = (3)^2 - 6(3) + 5 = -4\\)."
  },
  {
    id: 209,
    question: "What is the range of the logarithmic function \\(f(x) = \\log_3 x\\)?",
    options: [
      "\\(y \\in \\mathbb{R}\\)",
      "\\(y > 0\\)",
      "\\(y \\ge 0\\)",
      "\\(y \\neq 0\\)"
    ],
    answer: "\\(y \\in \\mathbb{R}\\)",
    explanation: "The output of a basic logarithmic function spans all real numbers, so the range is \\(y \\in \\mathbb{R}\\)."
  },
  {
    id: 210,
    question: "Determining the point of intersection of \\(f(x) = 2x + 1\\) and \\(g(x) = x^2 + 1\\) requires solving:",
    options: [
      "\\(x^2 - 2x = 0\\)",
      "\\(x^2 + 2x + 2 = 0\\)",
      "\\(x^2 - 2x - 2 = 0\\)",
      "\\(x^2 + 2x = 0\\)"
    ],
    answer: "\\(x^2 - 2x = 0\\)",
    explanation: "Equating functions: \\(x^2 + 1 = 2x + 1 \\implies x^2 - 2x = 0\\)."
  },
  {
    id: 211,
    question: "If \\(f(x) = a x^2 + q\\) passes through \\((0; -4)\\) and \\((2; 0)\\), what is the value of $a$?",
    options: ["\\(1\\)", "\\(2\\)", "\\(-1\\)", "\\(4\\)"],
    answer: "\\(1\\)",
    explanation: "The $y$-intercept gives \\(q = -4\\). Substitute \\((2; 0)\\): \\(0 = a(2)^2 - 4 \\implies 4a = 4 \\implies a = 1\\)."
  },
  {
    id: 212,
    question: "What is the domain of \\(f(x) = \\frac{1}{x - 4}\\)?",
    options: [
      "\\(x \\in \\mathbb{R}, x \\neq 4\\)",
      "\\(x > 4\\)",
      "\\(x < 4\\)",
      "\\(x \\in \\mathbb{R}, x \\neq 0\\)"
    ],
    answer: "\\(x \\in \\mathbb{R}, x \\neq 4\\)",
    explanation: "The function is defined for all real numbers except where the denominator is zero (\\(x = 4\\))."
  },
  {
    id: 213,
    question: "Which transformation shifts the graph of \\(y = f(x)\\) 3 units to the left?",
    options: [
      "\\(y = f(x + 3)\\)",
      "\\(y = f(x - 3)\\)",
      "\\(y = f(x) + 3\\)",
      "\\(y = f(x) - 3\\)"
    ],
    answer: "\\(y = f(x + 3)\\)",
    explanation: "Replacing $x$ with \\(x + h\\) (where \\(h > 0\\)) translates the graph $h$ units to the left."
  },
  {
    id: 214,
    question: "If \\(f(x) = 3^x\\), evaluate \\(f(-2)\\).",
    options: ["\\(\\frac{1}{9}\\)", "\\(-9\\)", "\\(-6\\)", "\\(\\frac{1}{6}\\)"],
    answer: "\\(\\frac{1}{9}\\)",
    explanation: "\\(f(-2) = 3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}\\)."
  },
  {
    id: 215,
    question: "The graph of \\(f(x) = \\frac{a}{x}\\) is reflected across the line \\(y = -x\\). What is the resulting equation?",
    options: [
      "\\(y = \\frac{a}{x}\\)",
      "\\(y = -\\frac{a}{x}\\)",
      "\\(y = a x\\)",
      "\\(y = -a x\\)"
    ],
    answer: "\\(y = \\frac{a}{x}\\)",
    explanation: "Replacing $x$ with $-y$ and $y$ with $-x$ gives \\(-x = \\frac{a}{-y} \\implies x = \\frac{a}{y} \\implies y = \\frac{a}{x}\\)."
  },

  // --- ADVANCED FINANCIAL MATHEMATICS (216 - 230) ---
  {
    id: 216,
    question: "A capital asset costing R500 000 depreciates at 15% p.a. on a reducing balance. What is its value after 4 years?",
    options: ["R261 003,13", "R200 000,00", "R280 000,00", "R231 000,00"],
    answer: "R261 003,13",
    explanation: "\\(A = P(1-i)^n = 500000(1 - 0,15)^4 = 500000(0,85)^4 = R261 003,125\\)."
  },
  {
    id: 217,
    question: "What quarterly interest rate $i$ corresponds to an annual nominal rate of 10% p.a. compounded quarterly?",
    options: ["\\(0,025\\)", "\\(0,10\\)", "\\(0,0025\\)", "\\(0,05\\)"],
    answer: "\\(0,025\\)",
    explanation: "\\(i = \\frac{0,10}{4} = 0,025\\) per quarter."
  },
  {
    id: 218,
    question: "An investor deposits R2 000 at the end of every month into an account earning 9% p.a. compounded monthly. Which formula gives the total after 5 years?",
    options: [
      "\\(FV = \\frac{2000[(1 + 0,0075)^{60} - 1]}{0,0075}\\)",
      "\\(PV = \\frac{2000[1 - (1 + 0,0075)^{-60}]}{0,0075}\\)",
      "\\(A = 2000(1 + 0,09)^5\\)",
      "\\(FV = \\frac{2000[(1 + 0,09)^{60} - 1]}{0,09}\\)"
    ],
    answer: "\\(FV = \\frac{2000[(1 + 0,0075)^{60} - 1]}{0,0075}\\)",
    explanation: "Use Future Value annuity with \\(x = 2000\\), \\(i = \\frac{0,09}{12} = 0,0075\\), and \\(n = 5 \\times 12 = 60\\)."
  },
  {
    id: 219,
    question: "How long (in years) will it take for an investment to double at 10% p.a. simple interest?",
    options: ["\\(10\\) years", "\\(7,2\\) years", "\\(5\\) years", "\\(20\\) years"],
    answer: "\\(10\\) years",
    explanation: "\\(2P = P(1 + 0,10n) \\implies 2 = 1 + 0,10n \\implies 0,10n = 1 \\implies n = 10\\) years."
  },
  {
    id: 220,
    question: "A loan of R150 000 is taken at 12% p.a. compounded monthly and amortised over 10 years. What is $n$ in the present value formula?",
    options: ["\\(120\\)", "\\(10\\)", "\\(100\\)", "\\(360\\)"],
    answer: "\\(120\\)",
    explanation: "\\(n = 10 \\text{ years} \\times 12 = 120\\) monthly payment periods."
  },
  {
    id: 221,
    question: "Equipment is purchased for R80 000 and depreciates to R20 000 over 5 years using straight-line depreciation. What is the annual depreciation rate?",
    options: ["\\(15\\%\\)", "\\(25\\%\\)", "\\(20\\%\\)", "\\(12,5\\%\\)"],
    answer: "\\(15\\%\\)",
    explanation: "\\(20000 = 80000(1 - 5i) \\implies 0,25 = 1 - 5i \\implies 5i = 0,75 \\implies i = 0,15 = 15\\%\\)."
  },
  {
    id: 222,
    question: "A company sets up a sinking fund to replace machinery in 6 years. If the replacement cost is R400 000 and trade-in value is R100 000, what amount must the sinking fund accumulate?",
    options: ["R300 000", "R400 000", "R500 000", "R100 000"],
    answer: "R300 000",
    explanation: "Sinking Fund required amount = \\(\\text{Replacement Cost} - \\text{Trade-in Value} = 400000 - 100000 = 300000\\)."
  },
  {
    id: 223,
    question: "Convert an effective annual rate of 8,3% to a nominal rate per annum compounded monthly.",
    options: ["\\(8,00\\%\\)", "\\(8,30\\%\\)", "\\(8,63\\%\\)", "\\(7,95\\%\\)"],
    answer: "\\(8,00\\%\\)",
    explanation: "\\(1 + 0,083 = \\left(1 + \\frac{i^{(12)}}{12}\\right)^{12} \\implies 1,083^{1/12} = 1 + \\frac{i^{(12)}}{12} \\implies i^{(12)} \\approx 0,0800 = 8,00\\%\\)."
  },
  {
    id: 224,
    question: "If a payment of R3 000 is made into an annuity at the beginning of each month for 3 years, how many total payments are made?",
    options: ["\\(36\\)", "\\(37\\)", "\\(35\\)", "\\(12\\)"],
    answer: "\\(36\\)",
    explanation: "Over 3 years with monthly payments, the number of payment periods is \\(3 \\times 12 = 36\\)."
  },
  {
    id: 225,
    question: "In calculating the final payment on a loan where the calculated regular payment is rounded up, the final payment will be:",
    options: [
      "Slightly smaller than the regular payment",
      "Slightly larger than the regular payment",
      "Equal to the original loan amount",
      "Zero"
    ],
    answer: "Slightly smaller than the regular payment",
    explanation: "Rounding payments up reduces the principal faster, making the final clearing payment smaller than the rest."
  },
  {
    id: 226,
    question: "Calculate the effective rate if the nominal rate is 14% p.a. compounded semi-annually.",
    options: ["\\(14,49\\%\\)", "\\(14,00\\%\\)", "\\(14,28\\%\\)", "\\(15,00\\%\\)"],
    answer: "\\(14,49\\%\\)",
    explanation: "\\(i_{\\text{eff}} = (1 + 0,07)^2 - 1 = 1,07^2 - 1 = 1,1449 - 1 = 0,1449 = 14,49\\%\\)."
  },
  {
    id: 227,
    question: "Which of the following describes nominal interest rate?",
    options: [
      "An quoted annual rate that does not account for intra-year compounding",
      "The actual annual rate achieved after compounding",
      "Interest calculated solely on the original principal",
      "The rate applied exclusively to simple decay"
    ],
    answer: "An quoted annual rate that does not account for intra-year compounding",
    explanation: "Nominal interest rate is the stated annual rate before accounting for the effect of compounding periods within the year."
  },
  {
    id: 228,
    question: "A home loan of R800 000 at 9% p.a. compounded monthly is repaid over 20 years. If payments are deferred for 6 months, interest for these 6 months is:",
    options: [
      "Capitalised and added to the principal balance",
      "Waived completely by the lender",
      "Deducted from the final installment",
      "Paid as a lump sum at $t_0$"
    ],
    answer: "Capitalised and added to the principal balance",
    explanation: "During a repayment deferral period, interest continues to accrue and is added to the total loan balance."
  },
  {
    id: 229,
    question: "What is the present value of a single payment of R50 000 due in 3 years at 6% p.a. compounded annually?",
    options: ["R41 981,00", "R59 550,80", "R42 000,00", "R45 000,00"],
    answer: "R41 981,00",
    explanation: "\\(PV = \\frac{A}{(1+i)^n} = \\frac{50000}{(1,06)^3} = \\frac{50000}{1,191016} \\approx R41 981,00\\)."
  },
  {
    id: 230,
    question: "If inflation averages 5% p.a., what will an item currently costing R250 cost in 10 years?",
    options: ["R407,22", "R375,00", "R350,00", "R425,10"],
    answer: "R407,22",
    explanation: "\\(A = P(1+i)^n = 250(1 + 0,05)^{10} = 250(1,62889) \\approx R407,22\\)."
  },

  // --- DIFFERENTIAL CALCULUS (231 - 245) ---
  {
    id: 231,
    question: "Differentiate \\(f(x) = 5x^3 - \\frac{2}{x}\\) with respect to $x$.",
    options: [
      "\\(f'(x) = 15x^2 + \\frac{2}{x^2}\\)",
      "\\(f'(x) = 15x^2 - \\frac{2}{x^2}\\)",
      "\\(f'(x) = 15x^2 + 2x\\)",
      "\\(f'(x) = 5x^2 - 2\\)"
    ],
    answer: "\\(f'(x) = 15x^2 + \\frac{2}{x^2}\\)",
    explanation: "Rewrite \\(f(x) = 5x^3 - 2x^{-1}\\). By power rule: \\(f'(x) = 15x^2 - 2(-1)x^{-2} = 15x^2 + \\frac{2}{x^2}\\)."
  },
  {
    id: 232,
    question: "Find \\(\\frac{dy}{dx}\\) if \\(y = (2x - 1)^2\\).",
    options: ["\\(8x - 4\\)", "\\(4x - 2\\)", "\\(4x^2 + 1\\)", "\\(2(2x - 1)\\)"],
    answer: "\\(8x - 4\\)",
    explanation: "Expand \\(y = 4x^2 - 4x + 1 \\implies \\frac{dy}{dx} = 8x - 4\\)."
  },
  {
    id: 233,
    question: "Calculate the average gradient of \\(f(x) = x^2 + 2x\\) between \\(x = 1\\) and \\(x = 3\\).",
    options: ["\\(6\\)", "\\(5\\)", "\\(4\\)", "\\(8\\)"],
    answer: "\\(6\\)",
    explanation: "\\(f(1) = 3\\) and \\(f(3) = 15\\). \\(\\text{Average gradient} = \\frac{15 - 3}{3 - 1} = \\frac{12}{2} = 6\\)."
  },
  {
    id: 234,
    question: "Find the local minimum value of \\(f(x) = x^2 - 4x + 7\\).",
    options: ["\\(3\\)", "\\(2\\)", "\\(7\\)", "\\(-1\\)"],
    answer: "\\(3\\)",
    explanation: "\\(f'(x) = 2x - 4 = 0 \\implies x = 2\\). Minimum value is \\(f(2) = (2)^2 - 4(2) + 7 = 3\\)."
  },
  {
    id: 235,
    question: "If the position of a particle at time $t$ is given by \\(s(t) = 2t^3 - 9t^2 + 12t\\), at what time $t$ is the particle at rest?",
    options: [
      "\\(t = 1\\) and \\(t = 2\\)",
      "\\(t = 3\\)",
      "\\(t = 0\\) and \\(t = 2\\)",
      "\\(t = 1,5\\)"
    ],
    answer: "\\(t = 1\\) and \\(t = 2\\)",
    explanation: "Velocity \\(v(t) = s'(t) = 6t^2 - 18t + 12 = 0 \\implies 6(t^2 - 3t + 2) = 0 \\implies t = 1\\) or \\(t = 2\\)."
  },
  {
    id: 236,
    question: "Determine the $x$-coordinate of the point of inflection for \\(f(x) = x^3 - 6x^2 + 9x - 2\\).",
    options: ["\\(x = 2\\)", "\\(x = 3\\)", "\\(x = 1\\)", "\\(x = 0\\)"],
    answer: "\\(x = 2\\)",
    explanation: "\\(f'(x) = 3x^2 - 12x + 9 \\implies f''(x) = 6x - 12 = 0 \\implies x = 2\\)."
  },
  {
    id: 237,
    question: "What is the derivative of \\(f(x) = 4\\sqrt{x^3}\\) with respect to $x$?",
    options: ["\\(6\\sqrt{x}\\)", "\\(12x^2\\)", "\\(6x^2\\)", "\\(\\frac{6}{\\sqrt{x}}\\)"],
    answer: "\\(6\\sqrt{x}\\)",
    explanation: "Rewrite \\(f(x) = 4 x^{3/2} \\implies f'(x) = 4 \\left(\\frac{3}{2}\\right) x^{1/2} = 6x^{1/2} = 6\\sqrt{x}\\)."
  },
  {
    id: 238,
    question: "Find the equation of the tangent line to \\(y = 2x^2 - 3\\) at the point \\((1; -1)\\).",
    options: [
      "\\(y = 4x - 5\\)",
      "\\(y = 4x + 3\\)",
      "\\(y = 2x - 3\\)",
      "\\(y = 4x - 1\\)"
    ],
    answer: "\\(y = 4x - 5\\)",
    explanation: "\\(y' = 4x\\). At \\(x = 1\\), gradient \\(m = 4\\). Equation: \\(y - (-1) = 4(x - 1) \\implies y + 1 = 4x - 4 \\implies y = 4x - 5\\)."
  },
  {
    id: 239,
    question: "For a cubic function \\(f(x)\\), if \\(f'(2) = 0\\) and \\(f''(2) = 6\\), then at \\(x = 2\\) the graph has a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Point of inflection",
      "Vertical asymptote"
    ],
    answer: "Local minimum",
    explanation: "Since \\(f'(2) = 0\\) and second derivative \\(f''(2) > 0\\) (concave up), \\(x = 2\\) is a local minimum."
  },
  {
    id: 240,
    question: "Differentiate \\(y = \\frac{x^3 + 2x}{x}\\) for \\(x \\neq 0\\).",
    options: ["\\(2x\\)", "\\(3x^2 + 2\\)", "\\(2x + 2\\)", "\\(x^2 + 2\\)"],
    answer: "\\(2x\\)",
    explanation: "Simplify first: \\(y = x^2 + 2 \\implies \\frac{dy}{dx} = 2x\\)."
  },
  {
    id: 241,
    question: "Find \\(D_x \\left[ \\frac{3}{x^4} \\right]\\).",
    options: [
      "\\(-\\frac{12}{x^5}\\)",
      "\\(\\frac{12}{x^3}\\)",
      "\\(-\\frac{12}{x^3}\\)",
      "\\(\\frac{3}{4x^3}\\)"
    ],
    answer: "\\(-\\frac{12}{x^5}\\)",
    explanation: "\\(D_x[3x^{-4}] = 3(-4)x^{-5} = -12x^{-5} = -\\frac{12}{x^5}\\)."
  },
  {
    id: 242,
    question: "If \\(f(x) = -x^3 + 3x^2 + 9x - 5\\), on which interval is \\(f\\) strictly increasing?",
    options: [
      "\\((-1; 3)\\)",
      "\\((-\\infty; -1)\\)",
      "\\((3; \\infty)\\)",
      "\\((-3; 1)\\)"
    ],
    answer: "\\((-1; 3)\\)",
    explanation: "\\(f'(x) = -3x^2 + 6x + 9 > 0 \\implies x^2 - 2x - 3 < 0 \\implies (x - 3)(x + 1) < 0 \\implies -1 < x < 3\\)."
  },
  {
    id: 243,
    question: "The displacement of an object is \\(s(t) = t^2 - 4t + 3\\). What is its acceleration at time $t$?",
    options: ["\\(2\\)", "\\(2t - 4\\)", "\\(4\\)", "\\(0\\)"],
    answer: "\\(2\\)",
    explanation: "Velocity \\(v(t) = s'(t) = 2t - 4\\). Acceleration \\(a(t) = v'(t) = s''(t) = 2\\)."
  },
  {
    id: 244,
    question: "Evaluate \\(\\lim_{h \\to 0} \\frac{(2 + h)^2 - 4}{h}\\).",
    options: ["\\(4\\)", "\\(2\\)", "\\(0\\)", "Undefined"],
    answer: "\\(4\\)",
    explanation: "This limit represents the derivative of \\(f(x) = x^2\\) at \\(x = 2\\): \\(f'(2) = 2(2) = 4\\)."
  },
  {
    id: 245,
    question: "A rectangular garden is bounded on one side by a wall and by $100\\text{ m}$ of fencing on the other three sides. What maximum area can be enclosed?",
    options: [
      "\\(1250\\text{ m}^2\\)",
      "\\(2500\\text{ m}^2\\)",
      "\\(625\\text{ m}^2\\)",
      "\\(1000\\text{ m}^2\\)"
    ],
    answer: "\\(1250\\text{ m}^2\\)",
    explanation: "Let sides perpendicular to wall be $x$. Parallel side is \\(100 - 2x\\). Area \\(A(x) = x(100 - 2x) = 100x - 2x^2\\). \\(A'(x) = 100 - 4x = 0 \\implies x = 25\\). Max Area \\(= 25(50) = 1250\\text{ m}^2\\)."
  },

  // --- EUCLIDEAN GEOMETRY & PROPORTIONALITY (246 - 250) ---
  {
    id: 246,
    question: "In \\(\\triangle ABC\\), $D$ lies on $AB$ and $E$ on $AC$ such that \\(DE \\parallel BC\\). If \\(AD = 3\\), \\(DB = 6\\), and \\(AE = 2\\), find $EC$.",
    options: ["\\(4\\)", "\\(5\\)", "\\(6\\)", "\\(3\\)"],
    answer: "\\(4\\)",
    explanation: "By Proportionality Theorem: \\(\\frac{AD}{DB} = \\frac{AE}{EC} \\implies \\frac{3}{6} = \\frac{2}{EC} \\implies \\frac{1}{2} = \\frac{2}{EC} \\implies EC = 4\\)."
  },
  {
    id: 247,
    question: "Quadrilateral $ABCD$ is inscribed in a circle. If \\(\\hat{A} = 2x + 10^\\circ\\) and \\(\\hat{C} = 3x - 20^\\circ\\), find $x$.",
    options: ["\\(38^\\circ\\)", "\\(30^\\circ\\)", "\\(40^\\circ\\)", "\\(35^\\circ\\)"],
    answer: "\\(38^\\circ\\)",
    explanation: "Opposite angles of a cyclic quad are supplementary: \\((2x + 10^\\circ) + (3x - 20^\\circ) = 180^\\circ \\implies 5x - 10^\\circ = 180^\\circ \\implies 5x = 190^\\circ \\implies x = 38^\\circ\\)."
  },
  {
    id: 248,
    question: "Tangent $TP$ touches a circle at $P$. A chord $PQ$ subtends angle \\(\\hat{R} = 65^\\circ\\) in the alternate segment. What is the measure of angle \\(T\\hat{P}Q\\)?",
    options: ["\\(65^\\circ\\)", "\\(115^\\circ\\)", "\\(130^\\circ\\)", "\\(25^\\circ\\)"],
    answer: "\\(65^\\circ\\)",
    explanation: "By the Tan-Chord Theorem, the angle between tangent $TP$ and chord $PQ$ equals the angle subtended in the alternate segment (\\(65^\\circ\\))."
  },
  {
    id: 249,
    question: "If \\(\\triangle ABC \\III \\triangle DEF\\) with \\(AB = 4\\text{ cm}\\) and \\(DE = 12\\text{ cm}\\), what is the ratio of \\(\\text{Area}(\\triangle ABC)\\) to \\(\\text{Area}(\\triangle DEF)\\)?",
    options: [
      "\\(1 : 9\\)",
      "\\(1 : 3\\)",
      "\\(1 : 6\\)",
      "\\(1 : 16\\)"
    ],
    answer: "\\(1 : 9\\)",
    explanation: "Linear scale ratio \\(k = \\frac{4}{12} = \\frac{1}{3}\\). Area ratio \\(= k^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}\\) or \\(1 : 9\\)."
  },
  {
    id: 250,
    question: "Chords $AB$ and $CD$ intersect at point $E$ inside a circle. Which relationship holds true for the segments?",
    options: [
      "\\(AE \\cdot EB = CE \\cdot ED\\)",
      "\\(AE + EB = CE + ED\\)",
      "\\(\\frac{AE}{EB} = \\frac{CE}{ED}\\)",
      "\\(AE \\cdot CE = EB \\cdot ED\\)"
    ],
    answer: "\\(AE \\cdot EB = CE \\cdot ED\\)",
    explanation: "By the Intersecting Chords Theorem (derived from similar triangles), \\(AE \\cdot EB = CE \\cdot ED\\)."
  },
  // --- TRIGONOMETRY (251 - 265) ---
  {
    id: 251,
    question: "Simplify to a single trigonometric term: \\(\\cos(2x)\\cos x + \\sin(2x)\\sin x\\).",
    options: ["\\(\\cos x\\)", "\\(\\cos(3x)\\)", "\\(\\sin x\\)", "\\(\\sin(3x)\\)"],
    answer: "\\(\\cos x\\)",
    explanation: "Apply cosine compound angle difference identity: \\(\\cos(A - B) = \\cos(2x - x) = \\cos x\\)."
  },
  {
    id: 252,
    question: "If \\(\\sin 20^\\circ = p\\), express \\(\\sin 200^\\circ\\) in terms of $p$.",
    options: ["\\(-p\\)", "\\(p\\)", "\\(\\sqrt{1 - p^2}\\)", "\\(-\\sqrt{1 - p^2}\\)"],
    answer: "\\(-p\\)",
    explanation: "\\(\\sin 200^\\circ = \\sin(180^\\circ + 20^\\circ) = -\\sin 20^\\circ = -p\\)."
  },
  {
    id: 253,
    question: "If \\(\\sin 20^\\circ = p\\), express \\(\\cos 20^\\circ\\) in terms of $p$.",
    options: ["\\(\\sqrt{1 - p^2}\\)", "\\(1 - p\\)", "\\(p^2 - 1\\)", "\\(-\\sqrt{1 - p^2}\\)"],
    answer: "\\(\\sqrt{1 - p^2}\\)",
    explanation: "Since \\(\\cos^2 20^\\circ = 1 - \\sin^2 20^\\circ = 1 - p^2\\) and $20^\circ$ is in Q1, \\(\\cos 20^\\circ = \\sqrt{1 - p^2}\\)."
  },
  {
    id: 254,
    question: "Express \\(\\sin(2\\theta)\\) in terms of \\(\\sin\\theta\\) and \\(\\cos\\theta\\).",
    options: [
      "\\(2\\sin\\theta\\cos\\theta\\)",
      "\\(\\sin^2\\theta - \\cos^2\\theta\\)",
      "\\(2\\sin\\theta\\)",
      "\\(\\cos^2\\theta - \\sin^2\\theta\\)"
    ],
    answer: "\\(2\\sin\\theta\\cos\\theta\\)",
    explanation: "The double-angle identity for sine states \\(\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta\\)."
  },
  {
    id: 255,
    question: "Determine the general solution for \\(\\tan x = -1\\).",
    options: [
      "\\(x = 135^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = -45^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 45^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
      "\\(x = 135^\\circ + k \\cdot 360^\\circ, k \\in \\mathbb{Z}\\)"
    ],
    answer: "\\(x = 135^\\circ + k \\cdot 180^\\circ, k \\in \\mathbb{Z}\\)",
    explanation: "Ref angle is \\(45^\\circ\\). Tangent is negative in Q2: \\(180^\\circ - 45^\\circ = 135^\\circ\\). Period of tan is \\(180^\\circ\\)."
  },
  {
    id: 256,
    question: "Simplify: \\(\\cos(360^\\circ - x) \\cdot \\tan(180^\\circ + x) + \\sin(180^\\circ - x)\\).",
    options: ["\\(2\\sin x\\)", "\\(0\\)", "\\(\\cos x\\)", "\\(2\\cos x\\)"],
    answer: "\\(2\\sin x\\)",
    explanation: "\\(\\cos(360^\\circ - x) = \\cos x\\), \\(\\tan(180^\\circ + x) = \\tan x = \\frac{\\sin x}{\\cos x}\\), \\(\\sin(180^\\circ - x) = \\sin x\\). Expression becomes \\(\\cos x \\cdot \\frac{\\sin x}{\\cos x} + \\sin x = 2\\sin x\\)."
  },
  {
    id: 257,
    question: "In \\(\\triangle PQR\\), \\(p = 7\\), \\(q = 8\\), and \\(r = 9\\). Which rule is best suited to find angle $P$?",
    options: ["Cosine Rule", "Sine Rule", "Area Rule", "Pythagoras Theorem"],
    answer: "Cosine Rule",
    explanation: "When all three sides of a non-right-angled triangle are known (SSS), use the Cosine Rule to calculate an angle."
  },
  {
    id: 258,
    question: "What is the maximum value of the function \\(f(x) = 3\\sin(2x) - 1\\)?",
    options: ["\\(2\\)", "\\(3\\)", "\\(4\\)", "\\(1\\)"],
    answer: "\\(2\\)",
    explanation: "The maximum value of \\(\\sin(2x)\\) is $1$. Maximum \\(f(x) = 3(1) - 1 = 2\\)."
  },
  {
    id: 259,
    question: "Simplify \\(\\frac{\\cos(-x)}{\\sin(90^\\circ + x)}\\) where defined.",
    options: ["\\(1\\)", "\\(-1\\)", "\\(\\tan x\\)", "\\(-\\tan x\\)"],
    answer: "\\(1\\)",
    explanation: "\\(\\cos(-x) = \\cos x\\) and \\(\\sin(90^\\circ + x) = \\cos x\\). Ratio equals \\(\\frac{\\cos x}{\\cos x} = 1\\)."
  },
  {
    id: 260,
    question: "What is the amplitude of the trigonometric function \\(g(x) = -2\\cos(x + 30^\\circ)\\)?",
    options: ["\\(2\\)", "\\(-2\\)", "\\(1\\)", "\\(30\\)"],
    answer: "\\(2\\)",
    explanation: "Amplitude is defined as the absolute value of the leading multiplier: \\(|-2| = 2\\)."
  },
  {
    id: 261,
    question: "Evaluate \\(\\cos 75^\\circ\\cos 15^\\circ - \\sin 75^\\circ\\sin 15^\\circ\\) without a calculator.",
    options: ["\\(0\\)", "\\(1\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)"],
    answer: "\\(0\\)",
    explanation: "Apply compound angle identity: \\(\\cos(75^\\circ + 15^\\circ) = \\cos(90^\\circ) = 0\\)."
  },
  {
    id: 262,
    question: "Solve for \\(x \\in [0^\\circ; 180^\\circ]\\) if \\(2\\cos x + 1 = 0\\).",
    options: ["\\(120^\\circ\\)", "\\(60^\\circ\\)", "\\(150^\\circ\\)", "\\(135^\\circ\\)"],
    answer: "\\(120^\\circ\\)",
    explanation: "\\(\\cos x = -\\frac{1}{2}\\). Ref angle is \\(60^\\circ\\). In Q2: \\(x = 180^\\circ - 60^\\circ = 120^\\circ\\)."
  },
  {
    id: 263,
    question: "Transform \\(1 - 2\\sin^2(15^\\circ)\\) using a double-angle identity and evaluate.",
    options: [
      "\\(\\frac{\\sqrt{3}}{2}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{1}{\\sqrt{2}}\\)",
      "\\(1\\)"
    ],
    answer: "\\(\\frac{\\sqrt{3}}{2}\\)",
    explanation: "\\(1 - 2\\sin^2(15^\\circ) = \\cos(2 \\cdot 15^\\circ) = \\cos(30^\\circ) = \\frac{\\sqrt{3}}{2}\\)."
  },
  {
    id: 264,
    question: "Which of the following identities is correct for all valid $x$?",
    options: [
      "\\(1 + \\tan^2 x = \\frac{1}{\\cos^2 x}\\)",
      "\\(\\sin^2 x - \\cos^2 x = 1\\)",
      "\\(\\tan x = \\frac{\\cos x}{\\sin x}\\)",
      "\\(\\sin(2x) = 2\\sin x\\)"
    ],
    answer: "\\(1 + \\tan^2 x = \\frac{1}{\\cos^2 x}\\)",
    explanation: "Divide \\(\\sin^2 x + \\cos^2 x = 1\\) by \\(\\cos^2 x\\) to yield \\(\\tan^2 x + 1 = \\frac{1}{\\cos^2 x}\\)."
  },
  {
    id: 265,
    question: "The expression \\(\\frac{\\sin x}{1 + \\cos x} + \\frac{1 + \\cos x}{\\sin x}\\) simplifies to:",
    options: [
      "\\(\\frac{2}{\\sin x}\\)",
      "\\(2\\cos x\\)",
      "\\(\\frac{2}{\\cos x}\\)",
      "\\(1\\)"
    ],
    answer: "\\(\\frac{2}{\\sin x}\\)",
    explanation: "Combined fraction: \\(\\frac{\\sin^2 x + (1 + \\cos x)^2}{\\sin x(1 + \\cos x)} = \\frac{\\sin^2 x + 1 + 2\\cos x + \\cos^2 x}{\\sin x(1 + \\cos x)} = \\frac{2 + 2\\cos x}{\\sin x(1 + \\cos x)} = \\frac{2(1 + \\cos x)}{\\sin x(1 + \\cos x)} = \\frac{2}{\\sin x}\\)."
  },

  // --- SEQUENCES, SERIES & PATTERNS (266 - 280) ---
  {
    id: 266,
    question: "Consider the quadratic sequence: \\(3; 8; 15; 24; \\dots\\). What is the constant second difference?",
    options: ["\\(2\\)", "\\(5\\)", "\\(3\\)", "\\(4\\)"],
    answer: "\\(2\\)",
    explanation: "First differences: \\(8-3=5\\), \\(15-8=7\\), \\(24-15=9\\). Second differences: \\(7-5=2\\), \\(9-7=2\\)."
  },
  {
    id: 267,
    question: "For a quadratic pattern \\(T_n = an^2 + bn + c\\), how is constant second difference $d_2$ related to coefficient $a$?",
    options: [
      "\\(2a = d_2\\)",
      "\\(a = d_2\\)",
      "\\(3a + b = d_2\\)",
      "\\(6a = d_2\\)"
    ],
    answer: "\\(2a = d_2\\)",
    explanation: "The constant second difference of a quadratic sequence equals \\(2a\\)."
  },
  {
    id: 268,
    question: "Find the 10th term of the arithmetic sequence: \\(5; 9; 13; 17; \\dots\\)",
    options: ["\\(41\\)", "\\(45\\)", "\\(37\\)", "\\(40\\)"],
    answer: "\\(41\\)",
    explanation: "\\(a = 5\\), \\(d = 4\\). \\(T_{10} = 5 + (10 - 1)(4) = 5 + 36 = 41\\)."
  },
  {
    id: 269,
    question: "Evaluate sigma notation sum: \\(\\sum_{k=1}^{5} (2k - 1)\\).",
    options: ["\\(25\\)", "\\(20\\)", "\\(30\\)", "\\(15\\)"],
    answer: "\\(25\\)",
    explanation: "Terms are odd numbers: \\(1 + 3 + 5 + 7 + 9 = 25\\)."
  },
  {
    id: 270,
    question: "Find the sum of the infinite geometric series: \\(16 + 8 + 4 + 2 + \\dots\\)",
    options: ["\\(32\\)", "\\(64\\)", "\\(24\\)", "\\(30\\)"],
    answer: "\\(32\\)",
    explanation: "\\(a = 16\\), \\(r = \\frac{1}{2}\\). \\(S_\\infty = \\frac{a}{1 - r} = \\frac{16}{1 - 0,5} = 32\\)."
  },
  {
    id: 271,
    question: "How many terms are in the series given by \\(\\sum_{k=4}^{20} (3k + 1)\\)?",
    options: ["\\(17\\)", "\\(16\\)", "\\(20\\)", "\\(15\\)"],
    answer: "\\(17\\)",
    explanation: "Number of terms \\(n = \\text{Top index} - \\text{Bottom index} + 1 = 20 - 4 + 1 = 17\\)."
  },
  {
    id: 272,
    question: "If \\(T_n = 3 \\cdot 2^{1-n}\\), calculate the common ratio $r$.",
    options: ["\\(\\frac{1}{2}\\)", "\\(2\\)", "\\(3\\)", "\\(-2\\)"],
    answer: "\\(\\frac{1}{2}\\)",
    explanation: "\\(T_1 = 3\\), \\(T_2 = 3(2^{-1}) = \\frac{3}{2}\\). Common ratio \\(r = \\frac{T_2}{T_1} = \\frac{3/2}{3} = \\frac{1}{2}\\)."
  },
  {
    id: 273,
    question: "Determine $x$ if \\(x - 2\\), \\(x + 1\\), and \\(2x + 1\\) form an arithmetic sequence.",
    options: ["\\(3\\)", "\\(2\\)", "\\(4\\)", "\\(1\\)"],
    answer: "\\(3\\)",
    explanation: "Common difference: \\((x + 1) - (x - 2) = (2x + 1) - (x + 1) \\implies 3 = x \\implies x = 3\\)."
  },
  {
    id: 274,
    question: "Calculate the value of $n$ if \\(1 + 3 + 5 + \\dots + (2n - 1) = 144\\).",
    options: ["\\(12\\)", "\\(14\\)", "\\(10\\)", "\\(16\\)"],
    answer: "\\(12\\)",
    explanation: "Sum of first $n$ odd numbers is \\(n^2\\). \\(n^2 = 144 \\implies n = 12\\)."
  },
  {
    id: 275,
    question: "For which values of $x$ does the geometric series \\(1 + (x - 1) + (x - 1)^2 + \\dots\\) converge?",
    options: [
      "\\(0 < x < 2\\)",
      "\\(-1 < x < 1\\)",
      "\\(x > 2\\)",
      "\\(x < 0\\)"
    ],
    answer: "\\(0 < x < 2\\)",
    explanation: "Convergence requires \\(|r| < 1 \\implies -1 < x - 1 < 1 \\implies 0 < x < 2\\)."
  },
  {
    id: 276,
    question: "Given \\(S_n = 2n^2 + 3n\\), find the second term \\(T_2\\) of the sequence.",
    options: ["\\(9\\)", "\\(14\\)", "\\(5\\)", "\\(7\\)"],
    answer: "\\(9\\)",
    explanation: "\\(S_1 = T_1 = 2(1)^2 + 3(1) = 5\\). \\(S_2 = 2(2)^2 + 3(2) = 14\\). \\(T_2 = S_2 - S_1 = 14 - 5 = 9\\)."
  },
  {
    id: 277,
    question: "The first term of a geometric sequence is $a = 5$ and the 4th term is $T_4 = 40$. Find common ratio $r$.",
    options: ["\\(2\\)", "\\(3\\)", "\\(4\\)", "\\(8\\)"],
    answer: "\\(2\\)",
    explanation: "\\(T_4 = a \\cdot r^3 \\implies 40 = 5 r^3 \\implies r^3 = 8 \\implies r = 2\\)."
  },
  {
    id: 278,
    question: "Find the general term \\(T_n\\) for the sequence: \\(2; 6; 18; 54; \\dots\\)",
    options: [
      "\\(T_n = 2 \\cdot 3^{n-1}\\)",
      "\\(T_n = 3 \\cdot 2^{n-1}\\)",
      "\\(T_n = 4n - 2\\)",
      "\\(T_n = 2n^2\\)"
    ],
    answer: "\\(T_n = 2 \\cdot 3^{n-1}\\)",
    explanation: "First term \\(a = 2\\), common ratio \\(r = 3\\). Formula \\(T_n = a \\cdot r^{n-1} = 2 \\cdot 3^{n-1}\\)."
  },
  {
    id: 279,
    question: "If $T_n = 4n - 1$, what type of sequence is represented?",
    options: [
      "Arithmetic sequence",
      "Geometric sequence",
      "Quadratic sequence",
      "Fibonacci sequence"
    ],
    answer: "Arithmetic sequence",
    explanation: "Linear general terms (\\(T_n = dn + c\\)) represent arithmetic sequences with constant difference $d$."
  },
  {
    id: 280,
    question: "What is the sum of the first 20 terms of the series \\(2 + 4 + 6 + \\dots + 40\\)?",
    options: ["\\(420\\)", "\\(400\\)", "\\(210\\)", "\\(440\\)"],
    answer: "\\(420\\)",
    explanation: "\\(S_n = \\frac{n}{2}(a + l) = \\frac{20}{2}(2 + 40) = 10(42) = 420\\)."
  },

  // --- ANALYTICAL GEOMETRY & CIRCLES (281 - 290) ---
  {
    id: 281,
    question: "Find the midpoint of the line segment joining \\((-2; 5)\\) and \\((4; -1)\\).",
    options: ["\\((1; 2)\\)", "\\((2; 4)\\)", "\\((3; 2)\\)", "\\((1; 3)\\)"],
    answer: "\\((1; 2)\\)",
    explanation: "\\(M = \\left(\\frac{-2 + 4}{2}; \\frac{5 + (-1)}{2}\\right) = \\left(\\frac{2}{2}; \\frac{4}{2}\\right) = (1; 2)\\)."
  },
  {
    id: 282,
    question: "What is the angle of inclination of a line with gradient \\(m = 1\\)?",
    options: ["\\(45^\\circ\\)", "\\(135^\\circ\\)", "\\(90^\\circ\\)", "\\(30^\\circ\\)"],
    answer: "\\(45^\\circ\\)",
    explanation: "\\(\\tan\\theta = m = 1 \\implies \\theta = 45^\\circ\\)."
  },
  {
    id: 283,
    question: "Calculate the angle of inclination of a line with gradient \\(m = -1\\).",
    options: ["\\(135^\\circ\\)", "\\(-45^\\circ\\)", "\\(45^\\circ\\)", "\\(120^\\circ\\)"],
    answer: "\\(135^\\circ\\)",
    explanation: "\\(\\tan\\theta = -1 \\implies \\theta = 180^\\circ - 45^\\circ = 135^\\circ\\)."
  },
  {
    id: 284,
    question: "Find the radius of the circle with equation \\(x^2 + y^2 - 6x + 8y = 0\\).",
    options: ["\\(5\\) units", "\\(25\\) units", "\\(10\\) units", "\\(7\\) units"],
    answer: "\\(5\\) units",
    explanation: "Complete squares: \\((x - 3)^2 + (y + 4)^2 = 9 + 16 = 25 = r^2 \\implies r = 5\\)."
  },
  {
    id: 285,
    question: "Determine the gradient of the line parallel to \\(2x - 3y + 6 = 0\\).",
    options: [
      "\\(\\frac{2}{3}\\)",
      "\\(-\\frac{2}{3}\\)",
      "\\(\\frac{3}{2}\\)",
      "\\(-3\\)"
    ],
    answer: "\\(\\frac{2}{3}\\)",
    explanation: "Rewrite in standard form: \\(3y = 2x + 6 \\implies y = \\frac{2}{3}x + 2\\). Parallel lines share gradient \\(m = \\frac{2}{3}\\)."
  },
  {
    id: 286,
    question: "Find the equation of the line passing through \\((0; 3)\\) and perpendicular to a line with gradient \\(m = 2\\).",
    options: [
      "\\(y = -\\frac{1}{2}x + 3\\)",
      "\\(y = 2x + 3\\)",
      "\\(y = -2x + 3\\)",
      "\\(y = \\frac{1}{2}x + 3\\)"
    ],
    answer: "\\(y = -\\frac{1}{2}x + 3\\)",
    explanation: "Perpendicular gradient \\(m_2 = -\\frac{1}{2}\\). With $y$-intercept $(0; 3)$, equation is \\(y = -\\frac{1}{2}x + 3\\)."
  },
  {
    id: 287,
    question: "If points $A(1; 2)$, $B(3; 6)$, and $C(5; k)$ are collinear, find $k$.",
    options: ["\\(10\\)", "\\(8\\)", "\\(12\\)", "\\(9\\)"],
    answer: "\\(10\\)",
    explanation: "Collinear points have equal gradients: \\(m_{AB} = \\frac{6 - 2}{3 - 1} = 2\\). \\(m_{BC} = \\frac{k - 6}{5 - 3} = \\frac{k - 6}{2} = 2 \\implies k - 6 = 4 \\implies k = 10\\)."
  },
  {
    id: 288,
    question: "A tangent touches the circle \\(x^2 + y^2 = 25\\) at point \\((3; 4)\\). What is the gradient of this tangent line?",
    options: [
      "\\(-\\frac{3}{4}\\)",
      "\\(\\frac{4}{3}\\)",
      "\\(-\\frac{4}{3}\\)",
      "\\(\\frac{3}{4}\\)"
    ],
    answer: "\\(-\\frac{3}{4}\\)",
    explanation: "Radius gradient from \\((0; 0)\\) to \\((3; 4)\\) is \\(m_r = \\frac{4}{3}\\). Tangent is perpendicular to radius: \\(m_t = -\\frac{3}{4}\\)."
  },
  {
    id: 289,
    question: "What is the distance between the centers of two non-intersecting circles \\((x - 1)^2 + (y - 2)^2 = 9\\) and \\((x - 7)^2 + (y - 10)^2 = 16\\)?",
    options: ["\\(10\\) units", "\\(100\\) units", "\\(7\\) units", "\\(12\\) units"],
    answer: "\\(10\\) units",
    explanation: "Centers are \\(C_1(1; 2)\\) and \\(C_2(7; 10)\\). Distance \\(d = \\sqrt{(7 - 1)^2 + (10 - 2)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\)."
  },
  {
    id: 290,
    question: "Which point lies inside the circle \\(x^2 + y^2 = 16\\)?",
    options: ["\\((2; 2)\\)", "\\((4; 0)\\)", "\\((3; 3)\\)", "\\((5; 0)\\)"],
    answer: "\\((2; 2)\\)",
    explanation: "Evaluate distance squared from origin: \\(2^2 + 2^2 = 8 < 16\\). Since $8 < 16$, \\((2; 2)\\) lies strictly inside the circle."
  },

  // --- PROBABILITY & COUNTING PRINCIPLES (291 - 300) ---
  {
    id: 291,
    question: "How many different 4-letter codes can be formed from the letters A, B, C, D if repetition of letters is NOT allowed?",
    options: ["\\(24\\)", "\\(256\\)", "\\(12\\)", "\\(64\\)"],
    answer: "\\(24\\)",
    explanation: "Using factorial rule: \\(4! = 4 \\times 3 \\times 2 \\times 1 = 24\\)."
  },
  {
    id: 292,
    question: "How many different 4-letter codes can be formed from the letters A, B, C, D if repetition IS allowed?",
    options: ["\\(256\\)", "\\(24\\)", "\\(64\\)", "\\(16\\)"],
    answer: "\\(256\\)",
    explanation: "By fundamental counting principle with repetition: \\(4^4 = 256\\)."
  },
  {
    id: 293,
    question: "If \\(P(A) = 0,4\\), \\(P(B) = 0,5\\), and events $A$ and $B$ are mutually exclusive, calculate \\(P(A \\cup B)\\).",
    options: ["\\(0,9\\)", "\\(0,2\\)", "\\(0,1\\)", "\\(0,0\\)"],
    answer: "\\(0,9\\)",
    explanation: "For mutually exclusive events, \\(P(A \\cup B) = P(A) + P(B) = 0,4 + 0,5 = 0,9\\)."
  },
  {
    id: 294,
    question: "If \\(P(A) = 0,3\\) and \\(P(B) = 0,6\\) for independent events $A$ and $B$, calculate \\(P(A \\cup B)\\).",
    options: ["\\(0,72\\)", "\\(0,90\\)", "\\(0,18\\)", "\\(0,42\\)"],
    answer: "\\(0,72\\)",
    explanation: "\\(P(A \\cap B) = 0,3 \\times 0,6 = 0,18\\). By addition rule: \\(P(A \\cup B) = 0,3 + 0,6 - 0,18 = 0,72\\)."
  },
  {
    id: 295,
    question: "In how many distinct ways can 6 people be arranged in a straight line?",
    options: ["\\(720\\)", "\\(120\\)", "\\(36\\)", "\\(64\\)"],
    answer: "\\(720\\)",
    explanation: "Number of linear arrangements \\(= 6! = 720\\)."
  },
  {
    id: 296,
    question: "In how many distinct ways can the letters in the word 'MATHS' be arranged?",
    options: ["\\(120\\)", "\\(24\\)", "\\(60\\)", "\\(720\\)"],
    answer: "\\(120\\)",
    explanation: "All 5 letters are distinct, so arrangements \\(= 5! = 120\\)."
  },
  {
    id: 297,
    question: "In how many distinct ways can the letters in the word 'BALL' be arranged?",
    options: ["\\(12\\)", "\\(24\\)", "\\(6\\)", "\\(4\\)"],
    answer: "\\(12\\)",
    explanation: "There are 4 letters with 'L' repeated twice: \\(\\frac{4!}{2!} = \\frac{24}{2} = 12\\)."
  },
  {
    id: 298,
    question: "A bag contains 3 red balls and 7 blue balls. Two balls are drawn successively without replacement. What is the probability that both drawn balls are red?",
    options: [
      "\\(\\frac{1}{15}\\)",
      "\\(\\frac{9}{100}\\)",
      "\\(\\frac{1}{10}\\)",
      "\\(\\frac{3}{10}\\)"
    ],
    answer: "\\(\\frac{1}{15}\\)",
    explanation: "\\(P(\\text{Red}_1 \\cap \\text{Red}_2) = \\frac{3}{10} \\times \\frac{2}{9} = \\frac{6}{90} = \\frac{1}{15}\\)."
  },
  {
    id: 299,
    question: "What is the probability of obtaining at least one Tail when tossing three fair coins?",
    options: [
      "\\(\\frac{7}{8}\\)",
      "\\(\\frac{1}{8}\\)",
      "\\(\\frac{1}{2}\\)",
      "\\(\\frac{3}{4}\\)"
    ],
    answer: "\\(\\frac{7}{8}\\)",
    explanation: "Complement rule: \\(P(\\text{at least 1 Tail}) = 1 - P(\\text{all Heads}) = 1 - \\left(\\frac{1}{2}\\right)^3 = 1 - \\frac{1}{8} = \\frac{7}{8}\\)."
  },
  {
    id: 300,
    question: "How many distinct 3-digit numbers greater than 500 can be formed using digits \\(\\{2; 4; 6; 8\\}\\) without repetition?",
    options: ["\\(12\\)", "\\(24\\)", "\\(16\\)", "\\(6\\)"],
    answer: "\\(12\\)",
    explanation: "For number $> 500$, hundreds digit must be 6 or 8 (2 choices). Remaining two positions: \\(3 \\times 2 = 6\\) choices. Total \\(= 2 \\times 3 \\times 2 = 12\\)."
  }

  ],
  'history': [
    { id: 1, prompt: 'Cold War', answer: 'US vs USSR tension without direct war' },
    { id: 2, prompt: '1994', answer: 'First democratic election in South Africa' },
  ]
};

export default function MemeMode() {
  const { subjectId } = useParams();
  const pairs = SAMPLE_PAIRS[subjectId] || SAMPLE_PAIRS['life-sciences'];

  const [prompts, setPrompts] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [connections, setConnections] = useState({}); 
  const [draggedPromptId, setDraggedPromptId] = useState(null);
  const [selectedPromptId, setSelectedPromptId] = useState(null);

  const [isCompleted, setIsCompleted] = useState(false);
  const [pointsAwarded, setPointsAwarded] = useState(false); 
  const [leaderboardScore, setLeaderboardScore] = useState(0);

  const [activeMeme, setActiveMeme] = useState(null);
  
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const resetGame = () => {
    setConnections({});
    setIsCompleted(false);
    setPointsAwarded(false);
    setSelectedPromptId(null);
    setActiveMeme(null);

    const shuffledPool = [...pairs].sort(() => Math.random() - 0.5);
    const roundPairs = shuffledPool.slice(0, 5); 

    setPrompts([...roundPairs].sort(() => Math.random() - 0.5));
    setAnswers([...roundPairs].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    resetGame();
    const savedScore = parseInt(localStorage.getItem('leaderboard_score') || '0', 10);
    setLeaderboardScore(savedScore);
  }, [subjectId]);

  // Programmatically trigger media playback when a meme is selected
  useEffect(() => {
    if (!activeMeme) return;

    if (activeMeme.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.warn('Video playback blocked:', err));
    } else if (activeMeme.type === 'audio' && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.warn('Audio playback blocked:', err));
    }
  }, [activeMeme]);

  const stopCurrentMedia = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const triggerMeme = (isCorrect) => {
    stopCurrentMedia();
    const meme = getRandomMeme(isCorrect);
    setActiveMeme(meme);
  };

  // Core Matching Logic for both Drag-and-Drop and Tap-to-Match
  const handleMatch = (promptId, answerId) => {
    const isCorrect = Number(promptId) === Number(answerId);

    const updatedConnections = {
      ...connections,
      [promptId]: answerId,
    };

    setConnections(updatedConnections);
    triggerMeme(isCorrect);
    setSelectedPromptId(null);
    setDraggedPromptId(null);

    const correctCount = Object.entries(updatedConnections).filter(
      ([pId, aId]) => Number(pId) === Number(aId)
    ).length;

    if (correctCount === prompts.length) {
      setIsCompleted(true);
      if (!pointsAwarded) {
        setPointsAwarded(true);
        const newScore = leaderboardScore + 3;
        setLeaderboardScore(newScore);
        localStorage.setItem('leaderboard_score', newScore.toString());
      }
    }
  };

  // Drag and Drop Handlers
  const handleDragStart = (e, promptId) => {
    setDraggedPromptId(promptId);
    e.dataTransfer.setData('text/plain', promptId.toString());
  };

  const handleDrop = (e, answerId) => {
    e.preventDefault();
    if (!draggedPromptId) return;
    handleMatch(draggedPromptId, answerId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Tap-to-Match Handlers for Mobile
  const handlePromptClick = (pId) => {
    if (connections[pId] !== undefined) return;
    setSelectedPromptId(selectedPromptId === pId ? null : pId);
  };

  const handleAnswerClick = (aId) => {
    if (selectedPromptId !== null) {
      handleMatch(selectedPromptId, aId);
    }
  };

  const handleDisconnect = (promptId) => {
    stopCurrentMedia();
    setActiveMeme(null);
    setIsCompleted(false);

    setConnections((prev) => {
      const copy = { ...prev };
      delete copy[promptId];
      return copy;
    });
  };

  const correctCount = Object.entries(connections).filter(
    ([pId, aId]) => Number(pId) === Number(aId)
  ).length;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 max-w-5xl mx-auto flex flex-col justify-between relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-purple-900/50 border border-purple-500/40 px-3 py-1.5 rounded-full text-purple-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-yellow-400" /> Leaderboard: {leaderboardScore} pts
          </div>
          <div className="flex items-center gap-2 text-purple-400 font-extrabold text-xl">
            <Sparkles className="w-6 h-6 animate-pulse" /> Meme Mode
          </div>
        </div>
      </div>

      {/* Dynamic Progress Indicator */}
      <div className="text-center mb-8">
        <p className="text-gray-400 mb-2">
          Drag tiles (Desktop) or <span className="text-purple-400 font-semibold">tap a question then tap an answer, CLICK DISCONNECT TO RETRY</span> (Mobile)!
        </p>
        <div className="inline-block bg-gray-800/80 px-4 py-1.5 rounded-full border border-gray-700 text-sm text-gray-300 font-medium">
          Matched: <span className="text-purple-400 font-bold">{correctCount}</span> / {prompts.length}
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/80 via-emerald-900/80 to-purple-900/80 border-2 border-emerald-400 rounded-2xl text-center shadow-2xl">
          <h2 className="text-2xl font-extrabold text-emerald-300 mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-7 h-7 text-yellow-400" /> Mode Complete! 🎉
          </h2>
          <p className="text-gray-200 text-sm mb-4">
            You matched all <span className="font-bold">{prompts.length}</span> tiles! {pointsAwarded ? <span className="text-yellow-300 font-bold">+3 Points</span> : <span className="text-gray-400 font-semibold">(Already Claimed)</span>} added to your leaderboard score.
          </p>
          <button
            onClick={resetGame}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-lg hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" /> Play Again (New Round)
          </button>
        </div>
      )}

      {/* Drag & Drop / Tap Area */}
      <div className="grid grid-cols-2 gap-3 md:gap-8 mb-12">
        {/* Prompts Column */}
        <div className="space-y-4"> 
          <h3 className="text-lg font-bold text-gray-300 mb-2">Questions</h3>
          {prompts.map((p) => {
            const isConnected = connections[p.id] !== undefined;
            const isSelected = selectedPromptId === p.id;
            return (
              <div
                key={p.id}
                draggable
                onDragStart={(e) => handleDragStart(e, p.id)}
                onClick={() => handlePromptClick(p.id)}
                className={`p-2.5 md:p-4 rounded-xl border font-bold text-xs md:text-base cursor-pointer active:cursor-grabbing transition-all touch-none flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${
                  isConnected
                    ? 'bg-purple-900/40 border-purple-500/50 text-purple-200'
                    : isSelected
                    ? 'bg-purple-800/80 border-purple-400 text-white ring-2 ring-purple-400 shadow-lg scale-[1.02]'
                    : 'bg-gray-800 border-gray-700 hover:border-gray-500 text-white'
                }`}
              >
                <span>{p.prompt}</span>
                {isConnected && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDisconnect(p.id);
                    }}
                    className="text-[10px] md:text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 md:px-2 md:py-1 rounded hover:bg-red-500/40"
                  >
                    Disconnect
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Answers Column (Drop Zones) */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-300 mb-2">Answers</h3>
          {answers.map((a) => {
            const connectedPromptId = Object.keys(connections).find(
              (pId) => connections[pId] === a.id
            );
            return (
              <div
                key={a.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, a.id)}
                onClick={() => handleAnswerClick(a.id)}
                className={`p-2.5 md:p-4 rounded-xl border font-medium text-xs md:text-base transition-all min-h-[60px] flex items-center cursor-pointer ${
                  connectedPromptId
                    ? Number(connectedPromptId) === a.id
                      ? 'bg-emerald-900/30 border-emerald-500 text-emerald-300'
                      : 'bg-red-900/30 border-red-500 text-red-300'
                    : selectedPromptId !== null
                    ? 'bg-gray-800/80 border-purple-500/70 hover:border-purple-400 animate-pulse'
                    : 'bg-gray-800/60 border-dashed border-gray-600 hover:border-purple-400'
                }`}
              >
                <span>{a.answer}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Meme Popup */}
      {activeMeme && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gray-900 border-2 border-purple-500 rounded-2xl p-1.5 md:p-2 shadow-2xl max-w-[150px] sm:max-w-[200px] md:max-w-[240px]">
          {activeMeme.type === 'video' ? (
            <video
              ref={videoRef}
              src={activeMeme.video}
              preload="auto"
              playsInline
              className="rounded-xl w-full h-auto object-cover"
              onEnded={() => setActiveMeme(null)}
            />
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={activeMeme.image}
                alt="Meme Popup"
                className="rounded-xl w-full h-auto object-cover"
              />
              <audio
                ref={audioRef}
                src={activeMeme.audio}
                preload="auto"
                onEnded={() => setActiveMeme(null)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}