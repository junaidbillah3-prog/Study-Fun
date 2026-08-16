import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Trophy, RotateCcw } from 'lucide-react';
import { getRandomMeme } from '../data/memeAssets';


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
  
    {
      id: 1,
      prompt: 'Derivative from First Principles',
      answer: '\\(f\'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}\\)'
    },
    {
      id: 2,
      prompt: 'Quadratic Formula',
      answer: '\\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)'
    },
    {
      id: 3,
      prompt: 'Effective Interest Rate Formula',
      answer: '\\(1 + i_{\\text{eff}} = \\left(1 + \\frac{i^{(m)}}{m}\\right)^m\\)'
    },
    {
      id: 4,
      prompt: 'Compound Growth Formula',
      answer: '\\(A = P(1 + i)^n\\)'
    },
    {
      id: 5,
      prompt: 'Sum to Infinity of a Geometric Series',
      answer: '\\(S_\\infty = \\frac{a}{1 - r} \\text{ where } |r| < 1\\)'
    },
    {
      id: 6,
      prompt: 'Sine Rule',
      answer: '\\(\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}\\)'
    },
    {
      id: 7,
      prompt: 'Cosine Rule',
      answer: '\\(a^2 = b^2 + c^2 - 2bc \\cos A\\)'
    },
    {
      id: 8,
      prompt: 'Gradient Formula',
      answer: '\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\)'
    },
    {
    id: 9,
    prompt: 'Convergent Series',
    answer: 'A geometric series that approaches a finite sum because \\(-1 < r < 1\\)'
  },
  {
    id: 10,
    prompt: 'Stationary Point',
    answer: 'A point on a curve where the first derivative equals zero (\\(f\'(x) = 0\\))'
  },
  {
    id: 11,
    prompt: 'Point of Inflection',
    answer: 'A point where the concavity of a curve changes and \\(f\'\'(x) = 0\\)'
  },
  {
    id: 12,
    prompt: 'Arithmetic Sequence',
    answer: 'A sequence with a constant difference \\(d\\) between consecutive terms'
  },
  {
    id: 13,
    prompt: 'Geometric Sequence',
    answer: 'A sequence with a constant ratio \\(r\\) between consecutive terms'
  },
  {
    id: 14,
    prompt: 'Mutually Exclusive Events',
    answer: 'Events that cannot occur simultaneously, such that \\(P(A \\text{ and } B) = 0\\)'
  },
  {
    id: 15,
    prompt: 'Independent Events',
    answer: 'Events where the outcome of one does not affect the probability of the other'
  },
  {
    id: 16,
    prompt: 'Average Gradient',
    answer: 'The gradient of the straight line joining two distinct points on a curve'
  },
  {
    id: 17,
    prompt: 'Perpendicular Lines',
    answer: 'Lines whose gradients have a product of \\(-1\\)'
  },
  {
    id: 18,
    prompt: 'Nominal Interest Rate',
    answer: 'The stated annual interest rate before accounting for the frequency of compounding'
  },
  {
    id: 19,
    prompt: 'Discriminant',
    answer: 'The expression \\(b^2 - 4ac\\) which determines the nature of roots for a quadratic equation'
  },
  {
    id: 20,
    prompt: 'Factor Theorem',
    answer: 'States that if \\(f(a) = 0\\), then \\((x - a)\\) is a factor of the polynomial \\(f(x)\\)'
  },
  {
    id: 21,
    prompt: 'Angle of Inclination',
    answer: 'The acute angle \\(\\theta\\) a straight line makes with the positive x-axis, where \\(\\tan \\theta = m\\)'
  },
  {
    id: 22,
    prompt: 'Equation of a Circle',
    answer: '\\((x - a)^2 + (y - b)^2 = r^2\\) for a circle centered at \\((a, b)\\) with radius \\(r\\)'
  },
  {
    id: 23,
    prompt: 'Double Angle Identity for Sine',
    answer: '\\(\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta\\)'
  },
  {
    id: 24,
    prompt: 'Compound Angle Identity for Cosine',
    answer: '\\(\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta\\)'
  },
  {
    id: 25,
    prompt: 'Future Value Annuity Formula',
    answer: '\\(F = \\frac{x[(1 + i)^n - 1]}{i}\\)'
  },
  {
    id: 26,
    prompt: 'Present Value Annuity Formula',
    answer: '\\(P = \\frac{x[1 - (1 + i)^{-n}]}{i}\\)'
  },
  {
    id: 27,
    prompt: 'Conditional Probability',
    answer: '\\(P(A|B) = \\frac{P(A \\text{ and } B)}{P(B)}\\)'
  },
  {
    id: 28,
    prompt: 'Second Derivative Test',
    answer: 'Determines a local maximum when \\(f\'\'(x) < 0\\) or a local minimum when \\(f\'\'(x) > 0\\)'
  },
  {
    id: 29,
    prompt: 'Standard Deviation',
    answer: 'A statistical measure of the dispersion or spread of a dataset around its mean'
  },
  {
    id: 30,
    prompt: 'Least Squares Regression Line',
    answer: 'The line of best fit of the form \\(y = A + Bx\\) that minimizes squared residuals'
  },
  
  {
    id: 31,
    prompt: 'Logarithmic Law (Power Rule)',
    answer: '\\(\\log_a(x^n) = n \\log_a x\\)'
  },
  {
    id: 32,
    prompt: 'Inverse Function Reflection',
    answer: 'Functions and their inverses are reflections of each other across the line \\(y = x\\)'
  },
  {
    id: 33,
    prompt: 'Fundamental Counting Principle',
    answer: 'If an event can occur in \\(m\\) ways and a second independent event in \\(n\\) ways, both can occur in \\(m \\times n\\) ways'
  },
  {
    id: 34,
    prompt: 'Standard Deviation Interpretation',
    answer: 'A higher standard deviation indicates greater spread or dispersion of data around the mean'
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