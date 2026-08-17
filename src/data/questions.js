export const questionsData = {
  'life-sciences-p1': [
    // --- Meiosis & General Cell Biology ---
    {
      id: 'p1-m-6',
      topic: 'p1-m',
      question: "A human somatic cell in Interphase ($G_2$ phase) has a DNA mass of 12 arbitrary units (a.u.). What will be the total DNA mass in a single nucleus at the end of Telophase I and Telophase II of meiosis, respectively?",
      options: [
        "6 a.u. at Telophase I; 3 a.u. at Telophase II",
        "12 a.u. at Telophase I; 6 a.u. at Telophase II",
        "6 a.u. at Telophase I; 6 a.u. at Telophase II",
        "3 a.u. at Telophase I; 1.5 a.u. at Telophase II"
      ],
      answer: "6 a.u. at Telophase I; 3 a.u. at Telophase II",
      explanation: "At $G_2$, DNA replication has already occurred (doubling to 12 a.u.). Meiosis I separates homologous pairs, halving the nuclear DNA mass to 6 a.u. at Telophase I. Meiosis II separates sister chromatids, halving it again to 3 a.u. per haploid gamete nucleus."
    },

    // --- HUMAN RESPONSES TO THE ENVIRONMENT: VISION & ACCOMMODATION (p1-eye) ---
    {
      id: 'p1-eye-1',
      topic: 'p1-eye',
      question: "A person sitting in a dimly lit room looks up from reading a fine-print book to focus on a bird flying high in the bright sky outside. Which combined physiological response occurs in the eye?",
      options: [
        "Ciliary muscles relax, suspensory ligaments tighten, lens flattens, circular muscles of iris contract",
        "Ciliary muscles contract, suspensory ligaments slacken, lens becomes convex, radial muscles of iris contract",
        "Ciliary muscles relax, suspensory ligaments slacken, lens flattens, circular muscles of iris contract",
        "Ciliary muscles contract, suspensory ligaments tighten, lens becomes convex, radial muscles of iris relax"
      ],
      answer: "Ciliary muscles relax, suspensory ligaments tighten, lens flattens, circular muscles of iris contract",
      explanation: "For distant vision: ciliary muscles relax $\\rightarrow$ suspensory ligaments become taut $\\rightarrow$ lens is pulled flat (less convex). For bright light (pupillary mechanism): circular muscles of the iris contract to constrict the pupil and protect the retina."
    },

    // --- HUMAN RESPONSES TO THE ENVIRONMENT: EAR & EQUILIBRIUM (p1-ear) ---
    {
      id: 'p1-ear-1',
      topic: 'p1-ear',
      question: "A gymnast performs a rapid series of somersaults and cartwheels. Which specific sensory structures in the inner ear detect this rotational motion, and where are the generated nerve impulses sent for processing?",
      options: [
        "Cristae located inside the ampullae of semicircular canals $\\rightarrow$ Cerebellum",
        "Maculae located inside the sacculus and utriculus $\\rightarrow$ Cerebrum",
        "Organ of Corti inside the cochlear duct $\\rightarrow$ Cerebellum",
        "Otolith membranes inside the tympanic cavity $\\rightarrow$ Medulla oblongata"
      ],
      answer: "Cristae located inside the ampullae of semicircular canals $\\rightarrow$ Cerebellum",
      explanation: "Dynamic equilibrium (speed and direction of rotational movement) is detected by hair cells in the cristae within the ampullae of semicircular canals. Impulses travel via the auditory/vestibular nerve to the cerebellum for involuntary muscle coordination."
    },

    // --- HOMEOSTASIS & THERMOREGULATION (p1-h) ---
    {
      id: 'p1-h-1',
      topic: 'p1-h',
      question: "During a cold winter morning in Highveld, a student's core temperature drops slightly. Which combination of negative feedback responses is coordinated by the hypothalamus to restore normal body temperature?",
      options: [
        "Vasoconstriction of surface arterioles, contraction of arrector pili muscles, increased thyroxin secretion, and shivering",
        "Vasodilation of skin arterioles, relaxation of arrector pili muscles, increased sweat gland activity, and reduced metabolic rate",
        "Vasoconstriction of skin capillaries, increased perspiration rate, and inhibition of adrenaline release",
        "Vasodilation of deep vein networks, contraction of arrector pili muscles, and reduced shivering thermogenesis"
      ],
      answer: "Vasoconstriction of surface arterioles, contraction of arrector pili muscles, increased thyroxin secretion, and shivering",
      explanation: "To retain/generate heat: vasoconstriction diverts blood away from the skin surface; arrector pili muscles contract to trap an insulating layer of warm air; shivering generates muscular friction heat; increased thyroxin/adrenaline boosts basal cellular respiration."
    },

    // --- PLANT RESPONSES: CLINOSTAT EXPERIMENTS (p1-pr) ---
    {
      id: 'p1-pr-12',
      topic: 'p1-pr',
      question: "In a plant physiology investigation, seedling A is mounted on a continuously rotating clinostat placed horizontally. Seedling B is fixed horizontally on a stationary clinostat. Both receive uniform light from above. What will be observed after 48 hours?",
      options: [
        "Seedling A grows horizontally straight out; Seedling B stem bends upward and root bends downward",
        "Seedling A stem bends upward; Seedling B grows horizontally straight out",
        "Both seedlings show upward growth of stems and downward growth of roots",
        "Seedling A root curves upward; Seedling B root grows horizontally straight out"
      ],
      answer: "Seedling A grows horizontally straight out; Seedling B stem bends upward and root bends downward",
      explanation: "Continuous rotation on a clinostat exposes all sides of Seedling A to gravitational force equally, preventing auxins from pooling on one side—so it grows straight. Seedling B experiences unilateral gravity: auxins accumulate on the lower side, causing stem upward bending (negative gravitropism) and root downward bending (positive gravitropism)."
    },

    // --- ENDOCRINE SYSTEM & NEGATIVE FEEDBACK (p1-e) ---
    {
      id: 'p1-e-1',
      topic: 'p1-e',
      question: "A clinical laboratory report for a patient experiencing lethargy, weight gain, and cold intolerance shows **abnormally high Thyroid-Stimulating Hormone (TSH)** but **extremely low Thyroxin**. What is the physiological cause of these hormone levels?",
      options: [
        "The thyroid gland is underactive/damaged, so low thyroxin removes negative feedback, causing the pituitary to continuously release high TSH",
        "An overactive pituitary gland is releasing excess TSH which inhibits thyroxin synthesis at the target tissue",
        "A hypothalamic tumor is secreting excess thyroxin-inhibiting factor while destroying the thyroid gland tissue",
        "Iodine toxicity has blocked pituitary TSH receptors, shutting down thyroxin secretion completely"
      ],
      answer: "The thyroid gland is underactive/damaged, so low thyroxin removes negative feedback, causing the pituitary to continuously release high TSH",
      explanation: "Normally, high thyroxin inhibits TSH release via negative feedback. When the thyroid fails (primary hypothyroidism), thyroxin levels stay low. The pituitary senses this deficiency and secretes elevated TSH in an unfulfilled attempt to stimulate the non-functional thyroid."
    },
    {
      id: 'p1-m-1',
      question: "Which organelle is responsible for cellular respiration and ATP production?",
      options: ["Ribosome", "Mitochondrion", "Golgi Body", "Endoplasmic Reticulum"],
      answer: "Mitochondrion",
      explanation: "Mitochondria convert glucose and oxygen into ATP during cellular respiration."
    },
    {
      id: 'p1-m-2',
      question: "During which phase of meiosis does crossing over occur?",
      options: ["Prophase I", "Metaphase I", "Anaphase II", "Telophase I"],
      answer: "Prophase I",
      explanation: "Crossing over occurs between non-sister chromatids during Prophase I to create genetic variation."
    },
    {
      id: 'p1-m-3',
      topic: 'p1-m',
      question: "During a karyotype analysis of a human fetus, 47 chromosomes are identified, including three copies of chromosome 21. Which error during meiotic division in a parent is directly responsible for this result, and during which phase did it occur?",
      options: [
        "Non-disjunction of homologous chromosomes during Anaphase I or sister chromatids during Anaphase II",
        "Failure of crossing over during Prophase I, leading to chromosome fragmentation",
        "Failure of DNA replication during Interphase prior to Meiosis I",
        "Incorrect alignment of non-homologous chromosomes along the equator during Metaphase II"
      ],
      answer: "Non-disjunction of homologous chromosomes during Anaphase I or sister chromatids during Anaphase II",
      explanation: "Trisomy 21 (Down Syndrome) occurs due to non-disjunction. Either homologous chromosomes fail to separate in Anaphase I, or sister chromatids fail to separate in Anaphase II, creating an (n + 1) gamete with 24 chromosomes."
    },
    {
      id: 'p1-m-4',
      topic: 'p1-m',
      question: "If a diploid somatic cell of an organism contains 2n = 8 chromosomes, how many individual chromatids are aligned along the equator during Metaphase I, and how many chromosomes are present at each pole by the end of Telophase I?",
      options: [
        "16 chromatids at Metaphase I; 4 chromosomes at each pole at Telophase I",
        "8 chromatids at Metaphase I; 8 chromosomes at each pole at Telophase I",
        "16 chromatids at Metaphase I; 2 chromosomes at each pole at Telophase I",
        "32 chromatids at Metaphase I; 4 chromosomes at each pole at Telophase I"
      ],
      answer: "16 chromatids at Metaphase I; 4 chromosomes at each pole at Telophase I",
      explanation: "At Metaphase I, 8 replicated chromosomes pair into 4 bivalents, totaling 16 chromatids. Because Meiosis I is a reduction division, each resulting nucleus at Telophase I receives n = 4 double-stranded chromosomes."
    },
    {
      id: 'p1-m-5',
      topic: 'p1-m',
      question: "How does crossing over during Prophase I generate new combinations of alleles on a single chromosome?",
      options: [
        "Chiasmata form, leading to the physical breakage and reciprocal exchange of genetic material between non-sister chromatids of homologous pairs",
        "Independent assortment causes maternal and paternal chromatids to fuse together permanently",
        "Random fertilization pairs non-homologous chromatids together after meiotic division finishes",
        "Sister chromatids exchange identical segments of DNA to double the mutation rate"
      ],
      answer: "Chiasmata form, leading to the physical breakage and reciprocal exchange of genetic material between non-sister chromatids of homologous pairs",
      explanation: "During Prophase I synapsis, non-sister chromatids of homologous pairs overlap at points called chiasmata. They break and swap segments, breaking linked gene combinations and producing recombinant chromatids."
    },


    // --- Human Reproduction & Endocrinology ---
    {
      id: 'p1-hr-1',
      question: "What is the hollow ball of cells into which the fertilised ovum develops called?",
      options: ["Blastocyst", "Zygote", "Morula", "Embryo"],
      answer: "Blastocyst",
      explanation: "After cleavage, the zygote forms a solid ball (morula) which then hollows out into a blastocyst before implantation in the uterus."
    },
    {
      id: 'p1-hr-2',
      question: "What is the hollow, rope-like tube that attaches the embryo to the placenta called?",
      options: ["Umbilical cord", "Fallopian tube", "Amniotic sac", "Urethra"],
      answer: "Umbilical cord",
      explanation: "The umbilical cord connects the foetus to the placenta, containing blood vessels that transport nutrients and wastes."
    },
    {
      id: 'p1-hr-3',
      question: "What is another name for the period of pregnancy?",
      options: ["Gestation", "Menstruation", "Ovulation", "Lactation"],
      answer: "Gestation",
      explanation: "Gestation is the period of development inside the womb between conception and birth (approximately 38–40 weeks in humans)."
    },
    {
      id: 'p1-hr-4',
      question: "What is the coiled tubular structure outside the testis that stores sperm called?",
      options: ["Epididymis", "Vas deferens", "Seminal vesicle", "Prostate gland"],
      answer: "Epididymis",
      explanation: "Sperm produced in the testes mature and are stored temporarily in the epididymis."
    },
    {
      id: 'p1-hr-5',
      question: "What is the combination of embryonic and maternal tissue responsible for gas exchange, nutrition, and excretion called?",
      options: ["Placenta", "Amnion", "Allantois", "Chorion"],
      answer: "Placenta",
      explanation: "The placenta acts as the physical and metabolic bridge between the mother and the developing foetus."
    },
    {
      id: 'p1-hr-6',
      question: "Which gland in the brain produces Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH)?",
      options: ["Pituitary gland", "Hypothalamus", "Pineal gland", "Adrenal gland"],
      answer: "Pituitary gland",
      explanation: "The anterior lobe of the pituitary gland secretes key reproductive hormones including FSH and LH."
    },
    {
      id: 'p1-hr-7',
      question: "Which hormone is responsible for secondary sexual characteristics in males?",
      options: ["Testosterone", "Oestrogen", "Progesterone", "FSH"],
      answer: "Testosterone",
      explanation: "Produced by the testes, testosterone drives male secondary sexual traits such as deep voice, facial hair, and muscle development."
    },
    {
      id: 'p1-hr-8',
      question: "Which hormone maintains the thickness of the uterine lining during pregnancy?",
      options: ["Progesterone", "Testosterone", "Oestrogen", "FSH"],
      answer: "Progesterone",
      explanation: "Secreted mainly by the corpus luteum and later the placenta, progesterone keeps the endometrium stable and prevents uterine contractions."
    },
    {
      id: 'p1-hr-9',
      question: "What is the process by which an ovum is released from the ovary in humans called?",
      options: ["Ovulation", "Menstruation", "Fertilisation", "Implantation"],
      answer: "Ovulation",
      explanation: "Ovulation occurs when a mature Graafian follicle ruptures, releasing the secondary oocyte into the fallopian tube."
    },
    {
      id: 'p1-hr-10',
      question: "What is the production of ova by meiosis called?",
      options: ["Oogenesis", "Spermatogenesis", "Gametogenesis", "Mitosis"],
      answer: "Oogenesis",
      explanation: "Oogenesis is the process of female gamete formation via meiotic cell division in the ovaries."
    },
    {
      id: 'p1-hr-11',
      question: "What is the production of spermatozoa by meiosis called?",
      options: ["Spermatogenesis", "Oogenesis", "Copulation", "Ejaculation"],
      answer: "Spermatogenesis",
      explanation: "Spermatogenesis takes place in the seminiferous tubules of the testes to produce functional sperm cells."
    },
    {
      id: 'p1-hr-12',
      question: "Which structure in the sperm cell contains enzymes used to penetrate the ovum?",
      options: ["Acrosome", "Flagellum", "Midpiece", "Nucleus"],
      answer: "Acrosome",
      explanation: "The acrosome cap at the head of the sperm releases hydrolytic enzymes to break through the jelly-like layers surrounding the egg."
    },
    {
      id: 'p1-hr-13',
      question: "What is the tearing away of the endometrium lining of the uterine wall accompanied by blood loss called?",
      options: ["Menstruation", "Ovulation", "Menopause", "Gestation"],
      answer: "Menstruation",
      explanation: "Menstruation marks the start of a new menstrual cycle when fertilisation has not occurred and hormone levels drop."
    },
    {
      id: 'p1-hr-14',
      question: "What is the 28-day reproductive cycle in females involving changes in the ovary and uterus called?",
      options: ["Menstrual cycle", "Cardiac cycle", "Cell cycle", "Oestrous cycle"],
      answer: "Menstrual cycle",
      explanation: "The menstrual cycle coordinates ovarian and uterine changes to prepare the body for potential pregnancy every month."
    },
    {
      id: 'p1-hr-15',
      question: "Which blood vessel carries nitrogenous waste from the foetus to the placenta?",
      options: ["Umbilical artery", "Umbilical vein", "Vena cava", "Aorta"],
      answer: "Umbilical artery",
      explanation: "Umbilical arteries carry deoxygenated blood and metabolic waste products away from the foetus toward the placenta."
    },
    {
      id: 'p1-hr-16',
      question: "Which blood vessel carries oxygenated blood from the placenta to the foetus?",
      options: ["Umbilical vein", "Umbilical artery", "Pulmonary vein", "Jugular vein"],
      answer: "Umbilical vein",
      explanation: "The umbilical vein delivers oxygen and nutrient-rich blood from the placenta straight to the foetal circulation."
    },
    {
      id: 'p1-hr-17',
      question: "What is the cell division by which the zygote becomes multicellular?",
      options: ["Mitosis", "Meiosis", "Binary fission", "Budding"],
      answer: "Mitosis",
      explanation: "After fertilisation, the zygote undergoes rapid mitotic divisions (cleavage) to increase cell count without increasing overall mass initially."
    },
    {
      id: 'p1-hr-18',
      question: "What is the general term for the formation of gametes by meiosis?",
      options: ["Gametogenesis", "Somatogenesis", "Embryogenesis", "Organogenesis"],
      answer: "Gametogenesis",
      explanation: "Gametogenesis encompasses both spermatogenesis and oogenesis, producing haploid sex cells."
    },
    {
      id: 'p1-hr-19',
      question: "Which hormone produced by the pituitary gland controls the growth of the Graafian follicle?",
      options: ["Follicle-Stimulating Hormone (FSH)", "Luteinizing Hormone (LH)", "Progesterone", "Oxytocin"],
      answer: "Follicle-Stimulating Hormone (FSH)",
      explanation: "FSH stimulates the development and maturation of ovarian follicles during the first half of the menstrual cycle."
    },
    {
      id: 'p1-hr-20',
      question: "Which hormone converts the ruptured ovarian follicle into a corpus luteum?",
      options: ["Luteinizing Hormone (LH)", "FSH", "Testosterone", "Oestrogen"],
      answer: "Luteinizing Hormone (LH)",
      explanation: "A surge in LH triggers ovulation and transforms the remaining follicular cells into the corpus luteum."
    },
    {
      id: 'p1-hr-21',
      question: "Which hormone starts the preparation (thickening) of the lining of the uterus for the attachment of the fertilised ovum?",
      options: ["Oestrogen", "Progesterone", "Relaxin", "Prolactin"],
      answer: "Oestrogen",
      explanation: "Oestrogen is secreted by developing follicles and stimulates the proliferation and repair of the endometrium."
    },
    {
      id: 'p1-hr-22',
      question: "What is the lining of the uterus which is richly supplied with blood vessels called?",
      options: ["Endometrium", "Myometrium", "Perimetrium", "Cervix"],
      answer: "Endometrium",
      explanation: "The endometrium is the inner mucosal layer of the uterus designed to nourish an implanted embryo."
    },

    // --- Plant Responses to the Environment ---

    {
      id: 'p1-pr-1',
      question: "Which plant growth substance is responsible for bringing about dormancy in seeds and buds?",
      options: ["Abscisic acid (ABA)", "Gibberellins", "Auxins", "Cytokinins"],
      answer: "Abscisic acid (ABA)",
      explanation: "Abscisic acid acts as a growth inhibitor that promotes seed dormancy and helps plants survive stress conditions like drought by closing stomata."
    },
    {
      id: 'p1-pr-8',
      topic: 'p1-pr',
      question: "A plant coleoptile tip is exposed to unilateral light. An impermeable mica sheet is inserted vertically down the exact middle of the tip, fully separating the illuminated side from the shaded side. What growth response will occur?",
      options: [
        "The coleoptile grows straight upward because auxins cannot migrate laterally to the shaded side",
        "The coleoptile bends toward the light because auxins accumulate on the illuminated side",
        "The coleoptile bends away from the light because auxins are destroyed on the shaded side",
        "Growth stops completely because the mica sheet halts auxin synthesis in the tip"
      ],
      answer: "The coleoptile grows straight upward because auxins cannot migrate laterally to the shaded side",
      explanation: "Unilateral light drives auxins laterally from the illuminated side to the shaded side. The vertical mica sheet blocks lateral diffusion, keeping auxin concentration equal on both sides and producing straight upward growth."
    },
    {
      id: 'p1-pr-9',
      topic: 'p1-pr',
      question: "A potted plant is placed horizontally in total darkness. Auxins accumulate on the lower side of both the stem and the root due to gravity. Why does the stem curve upward while the root curves downward?",
      options: [
        "High auxin concentration stimulates cell elongation in stems but inhibits cell elongation in roots",
        "High auxin concentration inhibits cell elongation in stems but stimulates cell division in roots",
        "Auxins are destroyed by gravity in the stem, but activated by gravity in the root",
        "Auxins cause rapid cell division on the upper side of the stem and cell shrinkage in the root"
      ],
      answer: "High auxin concentration stimulates cell elongation in stems but inhibits cell elongation in roots",
      explanation: "Root cells are significantly more sensitive to auxin than stem cells. High auxin concentrations on the lower side promote cell elongation in the stem (negative gravitropism), but inhibit cell elongation in the root, forcing the top side of the root to grow faster and bend down (positive gravitropism)."
    },
    {
      id: 'p1-pr-10',
      topic: 'p1-pr',
      question: "Synthetic auxins like 2,4-D are used as selective herbicides in cereal crops. Why do broad-leaved weeds die after application while cereal crop plants remain largely unaffected?",
      options: [
        "Broad-leaved plants absorb auxins rapidly, triggering uncontrolled growth and structural collapse, whereas cereal leaves absorb far less",
        "Synthetic auxins block stomatal opening in broad-leaved plants, causing immediate desiccation",
        "Synthetic auxins inhibit cell division in dicot roots while serving as a metabolic fuel for monocots",
        "Synthetic auxins trigger high abscisic acid synthesis, forcing broad-leaved weeds into premature dormancy"
      ],
      answer: "Broad-leaved plants absorb auxins rapidly, triggering uncontrolled growth and structural collapse, whereas cereal leaves absorb far less",
      explanation: "Selective auxin weedkillers force broad-leaved (dicot) weeds into extremely rapid, uncoordinated growth. Their vascular tissues become distorted and crippled under metabolic stress, while narrow-leaved monocot cereal crops do not absorb or transport the chemical in lethal doses."
    },
    {
      id: 'p1-pr-11',
      topic: 'p1-pr',
      question: "During prolonged drought, roots synthesize Abscisic Acid (ABA) and transport it to the leaves. What immediate ionic event in guard cells causes stomata to close?",
      options: [
        "Potassium ions ($K^+$) exit the guard cells, causing water to leave by osmosis and making the guard cells flaccid",
        "Potassium ions ($K^+$) actively enter the guard cells, swelling them until the pore closes shut",
        "Sodium ions ($Na^+$) rush into the guard cells, destroying the cell walls and sealing the opening",
        "Abscisic acid breaks down starch into sugar, causing maximum turgor pressure in guard cells"
      ],
      answer: "Potassium ions ($K^+$) exit the guard cells, causing water to leave by osmosis and making the guard cells flaccid",
      explanation: "ABA triggers the opening of efflux channels for potassium ions ($K^+$) in guard cell membranes. As $K^+$ leaves the cells, the water potential inside increases, causing water to flow out by osmosis. The guard cells lose turgor pressure and collapse, closing the stomatal pore to prevent water loss."
    },
    {
      id: 'p1-pr-2',
      question: "What term describes the inhibition of the growth of lateral buds by auxins produced in the apical bud?",
      options: ["Apical dominance", "Phototropism", "Gravitropism", "Thigmotropism"],
      answer: "Apical dominance",
      explanation: "Apical dominance occurs when the main apical bud produces high levels of auxins that suppress the growth of side lateral buds."
    },
    {
      id: 'p1-pr-3',
      question: "Which plant growth hormone causes bending reactions in plant stems and roots?",
      options: ["Auxins", "Gibberellins", "Abscisic acid", "Ethylene"],
      answer: "Auxins",
      explanation: "Auxins redistribute unevenly in response to light or gravity, causing differential cell elongation that results in stem or root bending."
    },
    {
      id: 'p1-pr-4',
      question: "What is the growth or bending reaction by plants in response to gravity called?",
      options: ["Gravitropism (or Geotropism)", "Phototropism", "Thigmotropism", "Hydrotropism"],
      answer: "Gravitropism (or Geotropism)",
      explanation: "Gravitropism directs plant roots to grow downward (positive) and stems to grow upward (negative) relative to the Earth's gravitational pull."
    },
    {
      id: 'p1-pr-5',
      question: "Which plant growth substance is responsible for the elongation of internodes in plants?",
      options: ["Gibberellins", "Abscisic acid", "Auxins", "Traumatic acid"],
      answer: "Gibberellins",
      explanation: "Gibberellins stimulate cell division and cell elongation, specifically leading to stem elongation and breaking seed dormancy."
    },
    {
      id: 'p1-pr-6',
      question: "What is the growth or bending reaction by plants in response to a light stimulus called?",
      options: ["Phototropism", "Gravitropism", "Chemotropism", "Nastic movement"],
      answer: "Phototropism",
      explanation: "Phototropism is the directional growth response where plant stems grow toward a light source (positive phototropism)."
    },
    {
      id: 'p1-pr-7',
      question: "What is the general term for a bending reaction of plants or plant parts in response to an external stimulus?",
      options: ["Tropism", "Taxes", "Nastic movement", "Translocation"],
      answer: "Tropism",
      explanation: "A tropism is a growth movement of a plant part in response to an external stimulus, where the direction of the response is determined by the direction of the stimulus."
    }

  ],
  'life-sciences-p2': [
    // --- DNA: Code of Life & Protein Synthesis ---
    {
      id: 'p2-dna-1',
      question: "What is the primary function of DNA replication?",
      options: [
        "To produce RNA",
        "To synthesize proteins",
        "To make an exact copy of DNA before cell division",
        "To repair damaged cell membranes"
      ],
      answer: "To make an exact copy of DNA before cell division",
      explanation: "DNA replication ensures that each daughter cell receives an identical copy of genetic information."
    },
    {
      id: 'p2-dna-2',
      question: "What type of bond is formed between two amino acids during protein synthesis?",
      options: ["Peptide bond", "Hydrogen bond", "Glycosidic bond", "Phosphodiester bond"],
      answer: "Peptide bond",
      explanation: "In translation, amino acids are linked together by peptide bonds to form a polypeptide chain."
    },
    {
      id: 'p2-dna-3',
      question: "Which weak bonds link the complementary nitrogenous base pairs in a DNA molecule?",
      options: ["Hydrogen bonds", "Peptide bonds", "Covalent bonds", "Ionic bonds"],
      answer: "Hydrogen bonds",
      explanation: "Weak hydrogen bonds hold the nitrogenous bases (A-T, C-G) together, allowing the DNA to unzip during replication."
    },
    {
      id: 'p2-dna-4',
      question: "Which molecule contains the specific information for protein synthesis in the form of anti-codons?",
      options: ["tRNA", "mRNA", "rRNA", "DNA"],
      answer: "tRNA",
      explanation: "Transfer RNA (tRNA) carries specific amino acids to the ribosome and matches its anticodon with the complementary mRNA codon."
    },
    {
      id: 'p2-dna-5',
      question: "During which phase of the cell cycle does DNA replication occur?",
      options: ["Interphase", "Prophase", "Metaphase", "Anaphase"],
      answer: "Interphase",
      explanation: "DNA replication takes place during the synthesis phase of interphase, before cell division (mitosis or meiosis) begins."
    },
    {
      id: 'p2-dna-6',
      question: "What is a segment of a chromosome that codes for a particular protein called?",
      options: ["Gene", "Chromatid", "Centromere", "Anticodon"],
      answer: "Gene",
      explanation: "A gene is a specific sequence of DNA nucleotides that carries the code for a specific characteristic or protein."
    },
    {
      id: 'p2-dna-7',
      question: "Where is the site of DNA replication and transcription in an animal cell?",
      options: ["Nucleus", "Ribosome", "Cytoplasm", "Mitochondrion"],
      answer: "Nucleus",
      explanation: "Both DNA replication and transcription occur inside the nucleus, where the chromosomal DNA is protected."
    },
    {
      id: 'p2-dna-8',
      question: "Which cellular structure is the site of protein synthesis by the combination of amino acids?",
      options: ["Ribosome", "Nucleus", "Golgi body", "Smooth endoplasmic reticulum"],
      answer: "Ribosome",
      explanation: "Ribosomes act as the factory floor for translation, reading mRNA to assemble amino acids into proteins."
    },
    {
      id: 'p2-dna-9',
      question: "What is the DNA strand called that is used to form either another strand of DNA or mRNA?",
      options: ["Template strand", "Coding strand", "Leading strand", "Okazaki fragment"],
      answer: "Template strand",
      explanation: "The template strand provides the complementary base sequence required to synthesize a new DNA or mRNA strand."
    },
    {
      id: 'p2-dna-10',
      question: "According to complementary base pairing, which nitrogenous base pairs off with adenine in a DNA molecule?",
      options: ["Thymine", "Uracil", "Guanine", "Cytosine"],
      answer: "Thymine",
      explanation: "In DNA, Adenine (A) always pairs with Thymine (T), and Cytosine (C) pairs with Guanine (G)."
    },
    {
      id: 'p2-dna-11',
      question: "Which nitrogenous base is found in RNA but is completely absent in DNA?",
      options: ["Uracil", "Thymine", "Adenine", "Cytosine"],
      answer: "Uracil",
      explanation: "RNA replaces Thymine with Uracil (U), which pairs with Adenine during transcription and translation."
    },
    {
      id: 'p2-dna-12',
      question: "What is the triplet of three consecutive bases on an mRNA molecule called?",
      options: ["Codon", "Anticodon", "Gene", "Nucleotide"],
      answer: "Codon",
      explanation: "A codon is a sequence of three mRNA bases that codes for a single, specific amino acid."
    },
    {
      id: 'p2-dna-13',
      question: "What is the process of transferring the coded message for protein synthesis from DNA onto mRNA?",
      options: ["Transcription", "Translation", "Replication", "Mutation"],
      answer: "Transcription",
      explanation: "Transcription is the first stage of protein synthesis where a single-stranded mRNA molecule is formed from a DNA template."
    },
    {
      id: 'p2-dna-14',
      question: "What is the tangled network of chromatin/chromosomes located within the nucleus called?",
      options: ["Chromatin network", "Nucleolus", "Centromere", "Spindle apparatus"],
      answer: "Chromatin network",
      explanation: "During interphase, DNA exists as an uncoiled, diffuse tangled network called chromatin before condensing into distinct chromosomes."
    },

    // --- Genetics & Inheritance ---
    {
      id: 'p2-gen-1',
      question: "What is a genetic cross involving a single characteristic called?",
      options: ["Monohybrid cross", "Dihybrid cross", "Test cross", "Reciprocal cross"],
      answer: "Monohybrid cross",
      explanation: "A monohybrid cross investigates the inheritance of a single gene controlling one specific characteristic."
    },
    {
      id: 'p2-gen-2',
      question: "What is a cross involving two different characteristics called?",
      options: ["Dihybrid cross", "Monohybrid cross", "Polygenic cross", "Test cross"],
      answer: "Dihybrid cross",
      explanation: "A dihybrid cross examines how two separate pairs of alleles are inherited simultaneously across generations."
    },
    {
      id: 'p2-gen-3',
      question: "What is a diagram that traces the transmission of a characteristic over many generations of a family called?",
      options: ["Pedigree diagram", "Karyotype", "Phylogenetic tree", "Punnett square"],
      answer: "Pedigree diagram",
      explanation: "Pedigree diagrams map out family histories to track how specific inherited disorders or traits are passed down."
    },
    {
      id: 'p2-gen-4',
      question: "What term describes an allele that influences the phenotype only when in the homozygous condition?",
      options: ["Recessive allele", "Dominant allele", "Co-dominant allele", "Mutated allele"],
      answer: "Recessive allele",
      explanation: "A recessive allele's phenotypic expression is masked in the heterozygous state by a dominant allele."
    },
    {
      id: 'p2-gen-5',
      question: "What term describes an allele that influences the phenotype whether in the homozygous or heterozygous condition?",
      options: ["Dominant allele", "Recessive allele", "Sex-linked allele", "Incomplete allele"],
      answer: "Dominant allele",
      explanation: "Dominant alleles override recessive alleles and manifest in the phenotype whenever they are present."
    },
    {
      id: 'p2-gen-6',
      question: "What are alternative forms of a gene found at the same locus called?",
      options: ["Alleles", "Chromatids", "Codons", "Mutations"],
      answer: "Alleles",
      explanation: "Alleles occupy the exact same gene locus on homologous chromosomes and code for different variations of the same trait."
    },
    {
      id: 'p2-gen-7',
      question: "What do we call characteristics controlled by alleles of a gene located on the sex chromosomes?",
      options: ["Sex-linked characteristics", "Autosomal characteristics", "Polygenic traits", "Mutated traits"],
      answer: "Sex-linked characteristics",
      explanation: "Sex-linked traits (like haemophilia or colour-blindness) are typically carried on the X chromosome."
    },
    {
      id: 'p2-gen-8',
      question: "What type of inheritance involves alleles that are equally dominant, leading to both phenotypes being expressed simultaneously?",
      options: ["Co-dominance", "Incomplete dominance", "Complete dominance", "Polygenic inheritance"],
      answer: "Co-dominance",
      explanation: "In co-dominance (such as AB blood group or roan cattle), neither allele is masked; both contribute equally to the phenotype."
    },
    {
      id: 'p2-gen-9',
      question: "What type of cross involves alleles that are neither dominant nor recessive, leading to an intermediate blended phenotype?",
      options: ["Incomplete dominance", "Co-dominance", "Monohybrid cross", "Test cross"],
      answer: "Incomplete dominance",
      explanation: "In incomplete dominance (like pink snapdragons), the heterozygous phenotype is a blend of the two homozygous parents."
    },
    {
      id: 'p2-gen-10',
      question: "What is a cross involving characteristics controlled strictly by dominant and recessive alleles called?",
      options: ["Complete dominance cross", "Incomplete dominance cross", "Co-dominant cross", "Dihybrid cross"],
      answer: "Complete dominance cross",
      explanation: "Complete dominance occurs when the dominant allele completely masks the recessive allele in heterozygotes."
    },
    {
      id: 'p2-gen-11',
      question: "Which genetic disorder is caused by a point mutation leading to abnormally shaped red blood cells?",
      options: ["Sickle-cell anaemia", "Down syndrome", "Haemophilia", "Albinism"],
      answer: "Sickle-cell anaemia",
      explanation: "Sickle-cell anaemia results from a single base substitution mutation in the gene coding for haemoglobin."
    },
    {
      id: 'p2-gen-12',
      question: "Which genetic disorder is caused by the presence of an extra copy of chromosome number 21 (trisomy 21)?",
      options: ["Down syndrome", "Klinefelter syndrome", "Turner syndrome", "Huntington's disease"],
      answer: "Down syndrome",
      explanation: "Down syndrome is caused by non-disjunction during meiosis, resulting in three copies of chromosome 21."
    },
    {
      id: 'p2-gen-13',
      question: "Which genetic disorder is characterised by the total non-production of the pigment melanin?",
      options: ["Albinism", "Haemophilia", "Colour-blindness", "Cystic fibrosis"],
      answer: "Albinism",
      explanation: "Albinism is an inherited autosomal recessive condition where individuals cannot synthesize the melanin pigment."
    },
    {
      id: 'p2-gen-14',
      question: "What term describes an individual with two identical copies of the same allele for a particular characteristic?",
      options: ["Homozygous", "Heterozygous", "Hemizygous", "Hybrid"],
      answer: "Homozygous",
      explanation: "A homozygous individual carries matching alleles (e.g., BB or bb) for a specific gene locus."
    },
    {
      id: 'p2-gen-15',
      question: "What term describes an individual with two different alleles for a particular characteristic?",
      options: ["Heterozygous", "Homozygous", "Purebreeding", "Polyploid"],
      answer: "Heterozygous",
      explanation: "A heterozygous individual carries one dominant and one recessive allele (e.g., Bb) for a trait."
    },
    {
      id: 'p2-gen-16',
      question: "What is the targeted manipulation of an organism's genotype to produce desirable characteristics called?",
      options: ["Genetic engineering", "Natural selection", "Selective breeding", "Cloning"],
      answer: "Genetic engineering",
      explanation: "Genetic engineering involves direct laboratory modification of an organism's DNA, such as inserting recombinant genes."
    },
    {
      id: 'p2-gen-17',
      question: "What term describes when more than two alternative alleles exist at the same locus to influence a single characteristic?",
      options: ["Multiple alleles", "Polygenic inheritance", "Codominance", "Monohybrid inheritance"],
      answer: "Multiple alleles",
      explanation: "An example of multiple alleles is the human ABO blood group system controlled by alleles IA, IB, and i."
    },
    {
      id: 'p2-gen-18',
      question: "What is a sex-linked genetic disorder characterised by the absence of normal blood clotting factors?",
      options: ["Haemophilia", "Sickle-cell anaemia", "Albinism", "Thalassaemia"],
      answer: "Haemophilia",
      explanation: "Haemophilia is a recessive sex-linked condition where blood fails to clot normally due to missing clotting proteins."
    },
    {
      id: 'p2-gen-19',
      question: "What is a sudden, random change in the structure or sequence of a gene called?",
      options: ["Mutation", "Transcription", "Translation", "Replication"],
      answer: "Mutation",
      explanation: "Mutations alter nucleotide sequences and introduce entirely new alleles into a gene pool."
    },
    {
      id: 'p2-gen-20',
      question: "What term describes the actual genetic makeup or allele combination that an individual possesses?",
      options: ["Genotype", "Phenotype", "Karyotype", "Genome"],
      answer: "Genotype",
      explanation: "The genotype represents the internal alleles an organism carries (e.g., BB, Bb, or bb)."
    },
    {
      id: 'p2-gen-21',
      question: "What term describes the physical, outward appearance or expression of an organism's traits?",
      options: ["Phenotype", "Genotype", "Karyotype", "Proteome"],
      answer: "Phenotype",
      explanation: "The phenotype is determined by the genotype interacting with environmental factors."
    },
    {
      id: 'p2-gen-22',
      question: "Which Mendelian principle states that alleles for a characteristic separate into different gametes independently of alleles for other characteristics?",
      options: ["Principle of Independent Assortment", "Law of Segregation", "Principle of Dominance", "Hardy-Weinberg equilibrium"],
      answer: "Principle of Independent Assortment",
      explanation: "Mendel's Law of Independent Assortment states that gene pairs sort independently during gamete formation when located on different chromosome pairs."
    },
    {
      id: 'p2-gen-23',
      question: "What is the production of genetically identical offspring using biotechnology called?",
      options: ["Cloning", "Hybridization", "Mutagenesis", "Transgenesis"],
      answer: "Cloning",
      explanation: "Cloning produces exact genetic copies of an organism or cell line through artificial biotechnological methods."
    },
    {
      id: 'p2-gen-24',
      question: "What are undifferentiated cells that have the potential to form any other cell type in an organism called?",
      options: ["Stem cells", "Gametes", "Somatic cells", "Zygotes"],
      answer: "Stem cells",
      explanation: "Stem cells are unspecialized cells capable of self-renewal and differentiation into specialized tissue types."
    },
    {
      id: 'p2-gen-25',
      question: "What term describes a characteristic where a range of different phenotypes exists?",
      options: ["Continuous variation", "Discontinuous variation", "Mutation", "Polyploidy"],
      answer: "Continuous variation",
      explanation: "Continuous variation features a complete range of phenotypes (like human height) rather than distinct, separate categories."
    },
    {
      id: 'p2-gen-26',
      question: "What type of variation occurs when there is no range of phenotypes, and a trait is usually just present or absent?",
      options: ["Discontinuous variation", "Continuous variation", "Co-dominance", "Incomplete dominance"],
      answer: "Discontinuous variation",
      explanation: "Discontinuous variation results in distinct, clear-cut categories (like blood groups) with no in-between states."
    },

    // --- Evolution, Speciation & Natural Selection ---
    {
      id: 'p2-evo-1',
      question: "What is a feature of the land, such as a river, lake, or mountain, that may separate a population into two called?",
      options: ["Geographical barrier", "Ecological niche", "Biosphere", "Habitat"],
      answer: "Geographical barrier",
      explanation: "A geographical barrier is a physical land feature that prevents two parts of a population from mixing and interbreeding."
    },
    {
      id: 'p2-evo-2',
      question: "What is a testable statement that can be accepted or rejected called?",
      options: ["Hypothesis", "Theory", "Law", "Conclusion"],
      answer: "Hypothesis",
      explanation: "A hypothesis is an initial, testable proposed explanation made on the basis of limited evidence as a starting point for further investigation."
    },
    {
      id: 'p2-evo-3',
      question: "What is an explanation based on a number of different hypotheses, principles, and laws called?",
      options: ["Theory", "Hypothesis", "Observation", "Fact"],
      answer: "Theory",
      explanation: "A scientific theory (like the Theory of Evolution) is a well-substantiated explanation acquired through the scientific method and repeatedly tested."
    },
    {
      id: 'p2-evo-4',
      question: "What term describes the complete elimination of a species from the Earth?",
      options: ["Extinction", "Speciation", "Evolution", "Natural selection"],
      answer: "Extinction",
      explanation: "Extinction occurs when there are no more individuals of that species left alive anywhere in the world."
    },
    {
      id: 'p2-evo-5',
      question: "Which type of evolution is characterised by long periods of little or no change followed by short periods of rapid change?",
      options: ["Punctuated equilibrium", "Gradualism", "Artificial selection", "Convergent evolution"],
      answer: "Punctuated equilibrium",
      explanation: "Proposed by Eldredge and Gould, punctuated equilibrium suggests evolution happens in rare, rapid bursts separated by long periods of stability."
    },
    {
      id: 'p2-evo-6',
      question: "What do we call a group of organisms of the same species occupying the same habitat?",
      options: ["Population", "Community", "Ecosystem", "Genus"],
      answer: "Population",
      explanation: "A population refers to individuals of the same species living in a specific geographical area that can interbreed."
    },
    {
      id: 'p2-evo-7',
      question: "What is the mechanism where organisms survive if they have characteristics that make them suited to the environment?",
      options: ["Natural selection", "Artificial selection", "Mutation", "Genetic drift"],
      answer: "Natural selection",
      explanation: "Natural selection is the process where individuals better adapted to their environment tend to survive and produce more offspring."
    },
    {
      id: 'p2-evo-8',
      question: "What process is used to determine the exact age of a fossil by measuring the decay of radioactive substances?",
      options: ["Radiometric dating", "Relative dating", "Stratigraphy", "Carbon footprinting"],
      answer: "Radiometric dating",
      explanation: "Radiometric dating (or absolute dating) measures the decay of isotopes like Carbon-14 to give a definitive age in years."
    },
    {
      id: 'p2-evo-9',
      question: "What process is used to determine the order in which organisms appeared on Earth without providing an exact age?",
      options: ["Relative dating", "Radiometric dating", "Dendrochronology", "Isotope decay"],
      answer: "Relative dating",
      explanation: "Relative dating looks at the layers of rock (stratigraphy) to determine if a fossil is older or younger than another."
    },
    {
      id: 'p2-evo-10',
      question: "What are the remains of organisms that have existed in the past called?",
      options: ["Fossils", "Artifacts", "Sediments", "Amber"],
      answer: "Fossils",
      explanation: "Fossils are the preserved remains, impressions, or traces of any once-living thing from a past geological age."
    },
    {
      id: 'p2-evo-11',
      question: "What is a group of similar organisms capable of random interbreeding to produce fertile offspring?",
      options: ["Species", "Population", "Genus", "Family"],
      answer: "Species",
      explanation: "The biological species concept defines a species as members of populations that actually or potentially interbreed in nature to produce fertile offspring."
    },
    {
      id: 'p2-evo-12',
      question: "What is the study of the location of organisms on the planet to account for their similarities and differences?",
      options: ["Biogeography", "Palaeontology", "Ecology", "Taxonomy"],
      answer: "Biogeography",
      explanation: "Biogeography studies the geographic distribution of plants and animals to help explain evolutionary relationships."
    },
    {
      id: 'p2-evo-13',
      question: "What type of speciation occurs due to a geographical barrier?",
      options: ["Allopatric speciation", "Sympatric speciation", "Parapatric speciation", "Peripatric speciation"],
      answer: "Allopatric speciation",
      explanation: "Allopatric speciation happens when a physical barrier divides a population, preventing gene flow until they become two distinct species."
    },
    {
      id: 'p2-evo-14',
      question: "What are structures with similar functions but which do not have a common evolutionary origin?",
      options: ["Analogous structures", "Homologous structures", "Vestigial structures", "Mutated structures"],
      answer: "Analogous structures",
      explanation: "Analogous structures (like bird wings and insect wings) do the same job but evolved independently."
    },
    {
      id: 'p2-evo-15',
      question: "What are structures with a common evolutionary origin called?",
      options: ["Homologous structures", "Analogous structures", "Vestigial structures", "Symmetrical structures"],
      answer: "Homologous structures",
      explanation: "Homologous structures (like a human arm and a whale flipper) share a common ancestor but may have adapted to different functions."
    },
    {
      id: 'p2-evo-16',
      question: "What is the evolutionary process of the formation of a new species called?",
      options: ["Speciation", "Extinction", "Hybridization", "Cloning"],
      answer: "Speciation",
      explanation: "Speciation occurs when a lineage splits into two or more distinct species that can no longer interbreed."
    },
    {
      id: 'p2-evo-17',
      question: "What is the production of plants and animals by human intervention for traits suitable to humans?",
      options: ["Artificial selection", "Natural selection", "Cloning", "Biogeography"],
      answer: "Artificial selection",
      explanation: "Also known as selective breeding, artificial selection is directed by humans to enhance desired traits in crops and domestic animals."
    },
    {
      id: 'p2-evo-18',
      question: "What term describes the complete range of life forms that exist on Earth?",
      options: ["Biodiversity", "Ecosystem", "Biosphere", "Biogeography"],
      answer: "Biodiversity",
      explanation: "Biodiversity encompasses all the variety of life on Earth at all its levels, from genes to ecosystems."
    },
    {
      id: 'p2-evo-19',
      question: "What is the separation of a population into two by a river, lake, or mountain specifically called?",
      options: ["Geographic isolation", "Reproductive isolation", "Sympatric isolation", "Temporal isolation"],
      answer: "Geographic isolation",
      explanation: "Geographic isolation is the physical mechanism that blocks gene flow, triggering the process of allopatric speciation."
    },
    {
      id: 'p2-evo-20',
      question: "What is the scientific study of fossils called?",
      options: ["Palaeontology", "Archaeology", "Geology", "Anthropology"],
      answer: "Palaeontology",
      explanation: "Palaeontology is the study of the history of life on Earth as based on fossils."
    },

    // --- Human Evolution ---
    {
      id: 'p2-he-1',
      question: "What do we call a thumb that works in the opposite direction to the fingers?",
      options: ["Opposable thumb", "Prehensile digit", "Polydactyly", "Bipedal appendage"],
      answer: "Opposable thumb",
      explanation: "An opposable thumb is a key primate characteristic that allows for a firm power grip and a precise manipulation grip for tool use."
    },
    {
      id: 'p2-he-2',
      question: "What term describes the type, number, and arrangement of teeth on a jaw?",
      options: ["Dentition", "Mastication", "Palate configuration", "Cranial capacity"],
      answer: "Dentition",
      explanation: "Dentition changes across hominin evolution, shifting from a U-shaped jaw with large canines in apes to a C-shaped (parabolic) jaw with smaller canines in modern humans."
    },
    {
      id: 'p2-he-3',
      question: "What is a diagram showing the evolutionary relationships amongst organisms called?",
      options: ["Phylogenetic tree", "Punnett square", "Pedigree diagram", "Karyotype"],
      answer: "Phylogenetic tree",
      explanation: "A phylogenetic tree (or cladogram) visually represents the evolutionary pathways and common ancestors of different species over time."
    },
    {
      id: 'p2-he-4',
      question: "What do we call a fossil that has characteristics of species that arose before it, as well as species that arose after it?",
      options: ["Transitional fossil", "Index fossil", "Living fossil", "Trace fossil"],
      answer: "Transitional fossil",
      explanation: "Transitional fossils, like Australopithecus sediba, show intermediate traits, providing vital evidence of how one group evolved into another."
    },
    {
      id: 'p2-he-5',
      question: "Which specific genetic material is used to trace maternal (female) ancestry?",
      options: ["Mitochondrial DNA (mtDNA)", "Y-chromosome DNA", "Messenger RNA", "Nuclear DNA"],
      answer: "Mitochondrial DNA (mtDNA)",
      explanation: "During fertilization, only the mother's mitochondria (and its DNA) are passed to the offspring, making mtDNA perfect for tracing direct female lineages."
    },
    {
      id: 'p2-he-6',
      question: "What term describes a skull with a pointed face because of projecting jaws and a protruding nose?",
      options: ["Prognathous", "Orthognathous", "Bipedal", "Cranial"],
      answer: "Prognathous",
      explanation: "Prognathism is typical in apes and early hominins. As humans evolved, faces became flatter (orthognathous) due to changes in diet and fire use."
    },
    {
      id: 'p2-he-7',
      question: "What is the collective term for modern humans and all our immediate ancestors, including genera Homo, Australopithecus, and Ardipithecus?",
      options: ["Hominins", "Hominids", "Anthropoids", "Prosimians"],
      answer: "Hominins",
      explanation: "In CAPS terminology, 'Hominins' strictly refers to the bipedal human lineage, whereas 'Hominids' is a broader family that includes the great apes."
    },
    {
      id: 'p2-he-8',
      question: "What is the opening in the base of the skull through which the spinal cord enters called?",
      options: ["Foramen magnum", "Cranial cavity", "Vertebral canal", "Pelvic girdle"],
      answer: "Foramen magnum",
      explanation: "The position of the foramen magnum moved forward to a more central, inferior position in hominins to balance the skull directly on the spine for bipedalism."
    },
    {
      id: 'p2-he-9',
      question: "To which biological order do humans, chimps, apes, gorillas, lemurs, and gibbons belong?",
      options: ["Primates", "Carnivora", "Mammalia", "Hominidae"],
      answer: "Primates",
      explanation: "Primates are an order of mammals characterized by forward-facing eyes, stereoscopic vision, opposable thumbs, and relatively large brains."
    },
    {
      id: 'p2-he-10',
      question: "What is the scientific term for the act of walking on all four limbs?",
      options: ["Quadrupedalism", "Bipedalism", "Brachiation", "Knuckle-walking"],
      answer: "Quadrupedalism",
      explanation: "Quadrupedalism is typical of most mammals and non-hominin primates. It requires a different spinal and pelvic structure than walking upright."
    },
    {
      id: 'p2-he-11',
      question: "What is the act of walking upright on two feet called?",
      options: ["Bipedalism", "Quadrupedalism", "Brachiation", "Plantigrade"],
      answer: "Bipedalism",
      explanation: "Bipedalism is the defining evolutionary characteristic of hominins, freeing the hands for carrying objects and making tools."
    }
  ],
  'physics': [

    {
      id: 1,
      question: "What is Newton's First Law of Motion also known as?",
      options: ["Law of Acceleration", "Law of Inertia", "Law of Action-Reaction", "Law of Conservation of Energy"],
      answer: "Law of Inertia",
      explanation: "Newton's First Law states an object remains at rest or in uniform motion unless acted upon by a net external force."
    },
    {
      id: 2,
      question: "Which formula represents Newton's Second Law of Motion for constant mass?",
      options: ["F = mv", "F = ma", "p = mv", "W = Fs"],
      answer: "F = ma",
      explanation: "Newton's Second Law states that the net force acting on an object is equal to the rate of change of momentum, which simplifies to F = ma when mass is constant."
    },
    {
      id: 3,
      question: "According to Newton's Third Law, if object A exerts a force on object B, what does object B do?",
      options: ["Exerts a greater force on A", "Exerts a smaller force on A", "Exerts an equal and opposite force on A", "Exerts no force on A"],
      answer: "Exerts an equal and opposite force on A",
      explanation: "Newton's Third Law states that when one body exerts a force on a second body, the second body simultaneously exerts a force equal in magnitude and opposite in direction on the first body."
    },
    {
      id: 4,
      question: "What is the formula for the maximum static frictional force?",
      options: ["fs(max) = μs N", "fk = μk N", "f = ma", "F = G(m1m2)/r^2"],
      answer: "fs(max) = μs N",
      explanation: "The maximum static friction is proportional to the normal force N, scaled by the coefficient of static friction μs."
    },
    {
      id: 5,
      question: "Which equation gives the kinetic frictional force acting on a moving object?",
      options: ["fk = μs N", "fk = μk N", "fk = mg sin(θ)", "fk = mv^2/r"],
      answer: "fk = μk N",
      explanation: "Kinetic friction is equal to the coefficient of kinetic friction multiplied by the normal force."
    },
    {
      id: 6,
      question: "What does Newton's Law of Universal Gravitation state about the gravitational force between two masses?",
      options: ["It is directly proportional to the distance", "It is inversely proportional to the product of masses", "It is directly proportional to the product of masses and inversely proportional to the square of the distance", "It is independent of distance"],
      answer: "It is directly proportional to the product of masses and inversely proportional to the square of the distance",
      explanation: "Newton's Law of Universal Gravitation is expressed as F = G(m1 m2)/r^2."
    },
    {
      id: 7,
      question: "How is linear momentum defined for an object?",
      options: ["The product of mass and velocity", "The product of force and time", "The product of mass and acceleration", "The product of weight and height"],
      answer: "The product of mass and velocity",
      explanation: "Linear momentum is a vector quantity defined as p = mv."
    },
    {
      id: 8,
      question: "What is impulse equal to in terms of force and time?",
      options: ["F / Δt", "F × Δt", "F × v", "F / v"],
      answer: "F × Δt",
      explanation: "Impulse is the product of the net force acting on an object and the time interval for which it acts, which equals the change in momentum."
    },
    {
      id: 9,
      question: "What does the Principle of Conservation of Linear Momentum state for an isolated system?",
      options: ["Total kinetic energy remains constant", "Total linear momentum remains constant", "Total mechanical energy is zero", "Velocity is always constant"],
      answer: "Total linear momentum remains constant",
      explanation: "In an isolated system, the total linear momentum before a collision or explosion equals the total linear momentum after."
    },
    {
      id: 10,
      question: "What physical quantity is conserved in an elastic collision?",
      options: ["Only momentum", "Only kinetic energy", "Both momentum and total kinetic energy", "Neither momentum nor kinetic energy"],
      answer: "Both momentum and total kinetic energy",
      explanation: "An elastic collision is one in which both linear momentum and total kinetic energy are conserved."
    },
    {
      id: 11,
      question: "What happens to kinetic energy in an inelastic collision?",
      options: ["It is conserved", "It is completely destroyed to zero", "It is not conserved and converted into other forms like heat or sound", "It increases"],
      answer: "It is not conserved and converted into other forms like heat or sound",
      explanation: "While momentum is conserved in any collision, kinetic energy is not conserved in an inelastic collision."
    },
    {
      id: 12,
      question: "What defines an object in free fall?",
      options: ["It experiences zero gravity", "It moves solely under the influence of gravitational force", "It travels at a constant velocity", "It experiences no air resistance and zero weight"],
      answer: "It moves solely under the influence of gravitational force",
      explanation: "Free fall describes any motion of a body where gravity is the only force acting upon it, neglecting air resistance."
    },
    {
      id: 13,
      question: "What is the acceleration of a projectile in free fall near the Earth's surface (ignoring air resistance)?",
      options: ["Zero", "9.8 m·s⁻² upwards", "9.8 m·s⁻² downwards", "Depends on its initial velocity"],
      answer: "9.8 m·s⁻² downwards",
      explanation: "The acceleration due to gravity is constant and acts downwards with a magnitude of approximately 9.8 m·s⁻²."
    },
    {
      id: 14,
      question: "Which formula represents the work done by a constant force F acting at an angle θ to the displacement Δx?",
      options: ["W = F Δx", "W = F Δx cos(θ)", "W = F Δx sin(θ)", "W = 1/2 F Δx^2"],
      answer: "W = F Δx cos(θ)",
      explanation: "Work done is defined as the product of the magnitude of the displacement, the magnitude of the force, and the cosine of the angle between them."
    },
    {
      id: 15,
      question: "What does the Work-Energy Theorem state?",
      options: ["Net work done is equal to change in potential energy", "Net work done on an object is equal to its change in kinetic energy", "Total mechanical energy is always zero", "Power equals work divided by time"],
      answer: "Net work done on an object is equal to its change in kinetic energy",
      explanation: "The net work done on an object is equal to the change in its kinetic energy: W_net = ΔK."
    },
    {
      id: 16,
      question: "Under what condition is mechanical energy conserved?",
      options: ["When non-conservative forces like friction do work", "When only conservative forces do work in an isolated system", "When velocity is zero", "When acceleration is constant"],
      answer: "When only conservative forces do work in an isolated system",
      explanation: "Mechanical energy is conserved if no external non-conservative forces (such as friction or air resistance) perform work on the system."
    },
    {
      id: 17,
      question: "How is power defined in physics?",
      options: ["The rate at which work is done", "The total energy stored in a system", "The force applied per unit area", "The momentum change per unit time"],
      answer: "The rate at which work is done",
      explanation: "Power is the rate at which work is done or energy is transferred, calculated as P = W / Δt."
    },
    {
      id: 18,
      question: "What is the Doppler Effect?",
      options: ["The bending of light waves around an obstacle", "The change in frequency or pitch of a wave in relation to an observer who is moving relative to the wave source", "The splitting of white light into spectrum colors", "The reflection of sound waves off a hard surface"],
      answer: "The change in frequency or pitch of a wave in relation to an observer who is moving relative to the wave source",
      explanation: "The Doppler effect is the apparent change in frequency due to relative motion between the source and the observer."
    },
    {
      id: 19,
      question: "What does Coulomb's Law state about the electrostatic force between two point charges?",
      options: ["It is inversely proportional to the product of charges", "It is directly proportional to the product of charges and inversely proportional to the square of the distance between them", "It is directly proportional to the distance", "It is independent of charge magnitude"],
      answer: "It is directly proportional to the product of charges and inversely proportional to the square of the distance between them",
      explanation: "Coulomb's Law states F = k(q1 q2)/r^2 for point charges."
    },
    {
      id: 20,
      question: "How is the electric field at a point defined?",
      options: ["The total charge in the region", "The electrostatic force experienced per unit positive test charge placed at that point", "The work done to move a charge", "The current flowing through a conductor"],
      answer: "The electrostatic force experienced per unit positive test charge placed at that point",
      explanation: "Electric field E is defined as E = F / q, where q is a positive test charge."
    },
    {
      id: 21,
      question: "What does Ohm's Law state for a conductor at constant temperature?",
      options: ["Current is inversely proportional to voltage", "Voltage across the conductor is directly proportional to the current flowing through it", "Resistance is zero", "Power is constant"],
      answer: "Voltage across the conductor is directly proportional to the current flowing through it",
      explanation: "Ohm's Law states that V = IR, meaning potential difference is proportional to current at constant temperature."
    },
    {
      id: 22,
      question: "What is the electromotive force (emf) of a battery?",
      options: ["The voltage across the external resistors only", "The total work done per unit charge by the source when current flows through the complete circuit", "The internal resistance of the battery", "The power lost due to heat"],
      answer: "The total work done per unit charge by the source when current flows through the complete circuit",
      explanation: "Emf is the maximum potential difference across the terminals of a battery when no current flows, or total energy supplied per unit charge."
    },
    {
      id: 23,
      question: "How does terminal potential difference relate to emf when a current flows?",
      options: ["It equals emf", "It is greater than emf", "It is less than emf by the lost volts (Ir)", "It is zero"],
      answer: "It is less than emf by the lost volts (Ir)",
      explanation: "Terminal potential difference V = emf - Ir, where Ir represents the voltage drop across the internal resistance."
    },
    {
      id: 24,
      question: "Which formula can be used to calculate the electrical power dissipated in a resistor?",
      options: ["P = IV", "P = V^2 / R", "P = I^2 R", "All of the above"],
      answer: "All of the above",
      explanation: "Using Ohm's law, power can be expressed as P = IV, P = I^2R, or P = V^2/R."
    },
    {
      id: 25,
      question: "What is electromagnetic induction?",
      options: ["The creation of a magnetic field using direct current", "The process whereby an emf is induced in a conductor when the magnetic flux linked with it changes", "The attraction between two neutral metal plates", "The flow of electrons through a vacuum tube"],
      answer: "The process whereby an emf is induced in a conductor when the magnetic flux linked with it changes",
      explanation: "Electromagnetic induction occurs when a changing magnetic field generates an electromotive force in a circuit."
    },
    {
      id: 26,
      question: "What does Faraday's Law of Electromagnetic Induction state?",
      options: ["The induced emf is directly proportional to the rate of change of magnetic flux linkage", "The induced current opposes the change causing it", "Magnetic flux is always constant", "Induced voltage equals resistance times current"],
      answer: "The induced emf is directly proportional to the rate of change of magnetic flux linkage",
      explanation: "Faraday's law states that the magnitude of the induced emf in a circuit is equal to the rate of change of magnetic flux."
    },
    {
      id: 27,
      question: "What does the root-mean-square (RMS) voltage of an AC circuit represent?",
      options: ["The maximum peak voltage", "The average voltage over a full cycle", "The AC voltage that dissipates the same amount of heat energy in a resistor as an equivalent DC voltage", "Zero voltage"],
      answer: "The AC voltage that dissipates the same amount of heat energy in a resistor as an equivalent DC voltage",
      explanation: "RMS voltage is the effective value of an AC voltage, corresponding to the DC voltage that would produce the same heating effect."
    },
    {
      id: 28,
      question: "What is the work function of a metal in the photoelectric effect?",
      options: ["The maximum speed of emitted electrons", "The minimum energy needed to emit electrons from the metal surface", "The frequency of incident light", "The total energy of a single photon"],
      answer: "The minimum energy needed to emit electrons from the metal surface",
      explanation: "The work function (W_0) is the minimum energy required to liberate an electron from the surface of a metal."
    },
    {
      id: 29,
      question: "What is the threshold frequency of a metal?",
      options: ["The maximum frequency of light absorbed", "The minimum frequency of incident light required to emit photoelectrons from the metal surface", "The frequency of emitted electrons", "The frequency of the alternating source"],
      answer: "The minimum frequency of incident light required to emit photoelectrons from the metal surface",
      explanation: "Threshold frequency (f_0) is the lowest frequency of light that can cause photoelectric emission, related to the work function by W_0 = h f_0."
    },
    {
      id: 30,
      question: "According to Einstein's photoelectric equation, how is the energy of an incoming photon distributed?",
      options: ["Entirely into kinetic energy", "Into the work function plus the maximum kinetic energy of the emitted photoelectron", "Into heat and light", "Equally between all electrons in the metal"],
      answer: "Into the work function plus the maximum kinetic energy of the emitted photoelectron",
      explanation: "Einstein's equation is hf = W_0 + K_max, showing energy conservation during photon absorption."
    }


  ],
  'chemistry': [

    {
      id: 1,
      question: "How is the rate of a chemical reaction formally defined in CAPS chemistry?",
      options: ["The total time required for reagents to mix completely", "The change in concentration of reactants or products per unit time", "The maximum temperature achieved during combustion", "The mass of catalyst consumed per second"],
      answer: "The change in concentration of reactants or products per unit time",
      explanation: "Reaction rate is measured as the change in concentration of a reactant or product divided by the time interval (Δ[c]/Δt)."
    },
    {
      id: 2,
      question: "What does activation energy represent in a chemical reaction profile?",
      options: ["The total heat of reaction (ΔH)", "The minimum energy required for a collision to be effective and initiate a reaction", "The average kinetic energy of products", "The energy released when bonds form"],
      answer: "The minimum energy required for a collision to be effective and initiate a reaction",
      explanation: "Activation energy is the energy barrier that reactant particles must overcome for successful collisions to form an activated complex."
    },
    {
      id: 3,
      question: "What is an activated complex?",
      options: ["A stable intermediate molecule that can be isolated", "A temporary, high-energy, unstable state formed at the peak of the potential energy curve", "The final product mixture", "A catalyst bonded to a reactant"],
      answer: "A temporary, high-energy, unstable state formed at the peak of the potential energy curve",
      explanation: "The activated complex exists momentarily at the maximum point of activation energy where old bonds are breaking and new bonds are forming."
    },
    {
      id: 4,
      question: "How does a positive catalyst increase the rate of a chemical reaction?",
      options: ["By increasing reactant concentration", "By providing an alternative pathway with a lower activation energy", "By raising the reaction temperature", "By increasing the heat of reaction (ΔH)"],
      answer: "By providing an alternative pathway with a lower activation energy",
      explanation: "Catalysts lower the activation energy barrier, meaning more particles have sufficient kinetic energy to react successfully upon collision."
    },
    {
      id: 5,
      question: "Which condition characterizes a system at dynamic chemical equilibrium?",
      options: ["All reactants have been completely converted to products", "The concentrations of reactants and products are strictly equal", "The rate of the forward reaction equals the rate of the reverse reaction", "The reaction stops entirely on a microscopic level"],
      answer: "The rate of the forward reaction equals the rate of the reverse reaction",
      explanation: "Equilibrium is dynamic because forward and reverse reactions continue to occur at equal rates, keeping macroscopic properties constant."
    },
    {
      id: 6,
      question: "What does Le Chatelier's principle state?",
      options: ["Energy can be neither created nor destroyed in a closed system", "If a stress (change in concentration, pressure, or temperature) is applied to a system at equilibrium, the system will shift to counteract that stress", "Reaction rates double for every 10°C temperature rise", "Equilibrium constants always increase with pressure"],
      answer: "If a stress (change in concentration, pressure, or temperature) is applied to a system at equilibrium, the system will shift to counteract that stress",
      explanation: "Le Chatelier's principle predicts how an equilibrium system responds to external perturbations to re-establish balance."
    },
    {
      id: 7,
      question: "How is the equilibrium constant expression (Kc) constructed for a homogeneous reaction?",
      options: ["Products multiplied together divided by reactants multiplied together, each raised to the power of their stoichiometric coefficients", "Reactants multiplied together divided by products", "Sum of concentrations of products minus reactants", "Product of masses divided by molar masses"],
      answer: "Products multiplied together divided by reactants multiplied together, each raised to the power of their stoichiometric coefficients",
      explanation: "Kc is the equilibrium ratio of product concentrations to reactant concentrations, excluding pure solids and liquids."
    },
    {
      id: 8,
      question: "According to the Brønsted-Lowry theory, what is an acid?",
      options: ["A substance that produces hydrogen ions (H+) in water", "A proton (H+) donor", "A proton (H+) acceptor", "An electron pair donor"],
      answer: "A proton (H+) donor",
      explanation: "A Brønsted-Lowry acid is defined specifically as a proton donor during acid-base reactions."
    },
    {
      id: 9,
      question: "According to the Brønsted-Lowry theory, what is a base?",
      options: ["A proton (H+) acceptor", "A hydroxide ion donor", "An electron pair acceptor", "A proton donor"],
      answer: "A proton (H+) acceptor",
      explanation: "A Brønsted-Lowry base accepts protons from an acid."
    },
    {
      id: 10,
      question: "What constitutes a conjugate acid-base pair?",
      options: ["Two acids reacting together", "Two species that differ by a single proton (H+)", "A strong acid and a strong base", "An acid and water"],
      answer: "Two species that differ by a single proton (H+)",
      explanation: "A conjugate acid-base pair is related by the loss or gain of a single proton."
    },
    {
      id: 11,
      question: "What distinguishes a strong acid from a weak acid?",
      options: ["Strong acids have higher concentrations", "Strong acids ionize completely in water, whereas weak acids ionize only partially", "Strong acids contain more carbon atoms", "Strong acids cannot conduct electricity"],
      answer: "Strong acids ionize completely in water, whereas weak acids ionize only partially",
      explanation: "Complete ionization yields a high concentration of hydronium ions for strong acids, unlike partial ionization in weak acids."
    },
    {
      id: 12,
      question: "What happens during the salt hydrolysis of ammonium chloride (NH4Cl) in water?",
      options: ["The solution remains strictly neutral (pH 7)", "The ammonium ion reacts with water to produce hydronium ions, resulting in an acidic solution (pH < 7)", "The chloride ion reacts to produce hydroxide ions", "The salt precipitates out completely"],
      answer: "The ammonium ion reacts with water to produce hydronium ions, resulting in an acidic solution (pH < 7)",
      explanation: "Hydrolysis of the weak base's conjugate acid (NH4+) produces H3O+, making the salt solution acidic."
    },
    {
      id: 13,
      question: "What energy transformation occurs in a galvanic (voltaic) cell?",
      options: ["Electrical energy to chemical energy", "Chemical energy to electrical energy", "Kinetic energy to thermal energy", "Light energy to nuclear energy"],
      answer: "Chemical energy to electrical energy",
      explanation: "Spontaneous redox reactions inside a galvanic cell convert chemical potential energy into electrical current."
    },
    {
      id: 14,
      question: "What energy transformation occurs in an electrolytic cell?",
      options: ["Chemical energy to electrical energy", "Electrical energy to non-spontaneous chemical energy", "Thermal energy to mechanical energy", "Nuclear energy to electrical energy"],
      answer: "Electrical energy to non-spontaneous chemical energy",
      explanation: "An external DC power supply drives non-spontaneous redox reactions in an electrolytic cell."
    },
    {
      id: 15,
      question: "What is the standard electrode potential of the Standard Hydrogen Electrode (SHE) reference half-cell?",
      options: ["+1.00 V", "0.00 V", "-1.00 V", "+1.10 V"],
      answer: "0.00 V",
      explanation: "The SHE is assigned an arbitrary standard reference potential of exactly 0.00 V at 25°C."
    },
    {
      id: 16,
      question: "Which electrode acts as the cathode in a galvanic cell?",
      options: ["The negative electrode where oxidation takes place", "The positive electrode where reduction takes place", "The inert electrode that never conducts", "The salt bridge"],
      answer: "The positive electrode where reduction takes place",
      explanation: "In galvanic cells, reduction occurs at the positive cathode (remember 'Red Cat')."
    },
    {
      id: 17,
      question: "Which electrode is designated as the anode in an electrolytic cell?",
      options: ["The positive electrode connected to the positive terminal of the power supply where oxidation occurs", "The negative electrode where reduction occurs", "The neutral electrode", "The electrolyte solution"],
      answer: "The positive electrode connected to the positive terminal of the power supply where oxidation occurs",
      explanation: "In electrolytic cells, the anode is positive and attracts anions to undergo oxidation ('An Ox')."
    },
    {
      id: 18,
      question: "How is standard cell notation structured for a galvanic cell?",
      options: ["Cathode || Anode", "Anode | Anode ion || Cathode ion | Cathode", "Salt bridge | Electrodes | Solutions", "Reduction potential on left, oxidation on right"],
      answer: "Anode | Anode ion || Cathode ion | Cathode",
      explanation: "Standard cell notation lists the oxidation half-cell on the left and reduction half-cell on the right, separated by double lines for the salt bridge."
    },
    {
      id: 19,
      question: "What defines a homologous series in organic chemistry?",
      options: ["Compounds with different functional groups and identical boiling points", "A series of organic compounds with the same functional group, similar chemical properties, and a general formula", "Compounds that only contain single carbon-carbon bonds", "Isomers of the same alkane"],
      answer: "A series of organic compounds with the same functional group, similar chemical properties, and a general formula",
      explanation: "Members of a homologous series differ by a CH2 group and show a gradual change in physical properties."
    },
    {
      id: 20,
      question: "What are the products of an esterification reaction between a carboxylic acid and an alcohol?",
      options: ["An aldehyde and water", "An ester and water", "A ketone and hydrogen gas", "An ether and carbon dioxide"],
      answer: "An ester and water",
      explanation: "Esterification is a condensation reaction where a carboxylic acid and alcohol react in the presence of an acid catalyst (like concentrated H2SO4) to form an ester and water."
    },
    {
      id: 21,
      question: "What occurs during the thermal or catalytic cracking of long-chain hydrocarbons?",
      options: ["Small molecules combine to form polymers", "Large, less valuable saturated hydrocarbon chains are broken down into smaller, more useful alkenes and alkanes", "Hydrocarbons react with oxygen to form soot", "Alcohols are converted into carboxylic acids"],
      answer: "Large, less valuable saturated hydrocarbon chains are broken down into smaller, more useful alkenes and alkanes",
      explanation: "Cracking breaks heavy petroleum fractions into lighter, high-demand fractions like petrol and ethene."
    },
    {
      id: 22,
      question: "What are the industrial operating conditions for the Haber process to manufacture ammonia?",
      options: ["Room temperature and 1 atm pressure", "Iron catalyst, approximately 450°C, and high pressure around 200 atm", "Platinum catalyst and 1000°C", "Concentrated sulfuric acid at 0°C"],
      answer: "Iron catalyst, approximately 450°C, and high pressure around 200 atm",
      explanation: "The Haber process uses an iron catalyst, moderate temperature (450°C), and high pressure (200 atm) to optimize ammonia yield and reaction rate."
    },
    {
      id: 23,
      question: "What is the key catalytic step in the industrial Contact process for producing sulfuric acid?",
      options: ["Oxidation of sulfur dioxide (SO2) to sulfur trioxide (SO3) using vanadium pentoxide (V2O5)", "Dissolving sulfur in water", "Reduction of sulfur trioxide with hydrogen", "Electrolysis of brine"],
      answer: "Oxidation of sulfur dioxide (SO2) to sulfur trioxide (SO3) using vanadium pentoxide (V2O5)",
      explanation: "The crucial step in the Contact process is the catalytic oxidation of SO2 to SO3 using V2O5."
    },
    {
      id: 24,
      question: "Which three primary macronutrients are essential in commercial NPK fertilizers?",
      options: ["Sodium, Potassium, Calcium", "Nitrogen, Phosphorus, Potassium", "Nitrogen, Platinum, Krypton", "Magnesium, Iron, Carbon"],
      answer: "Nitrogen, Phosphorus, Potassium",
      explanation: "NPK fertilizers supply Nitrogen (for leaf growth), Phosphorus (for root and flower development), and Potassium (for overall plant health and disease resistance)."
    },
    {
      id: 25,
      question: "What are chain isomers?",
      options: ["Compounds with the same molecular formula but different carbon chain arrangements", "Compounds with different functional groups", "Isomers with different positions for double bonds", "Optical isomers with chiral centers"],
      answer: "Compounds with the same molecular formula but different carbon chain arrangements",
      explanation: "Chain isomers (e.g., butane and 2-methylpropane) have different skeletal carbon branches."
    },
    {
      id: 26,
      question: "What characterizes position isomers?",
      options: ["Different functional groups", "Same carbon skeleton but different positions of the functional group or side chain", "Different molecular masses", "Ring structures instead of straight chains"],
      answer: "Same carbon skeleton but different positions of the functional group or side chain",
      explanation: "Position isomers have the functional group located on a different carbon atom along the same parent chain (e.g., propan-1-ol and propan-2-ol)."
    },
    {
      id: 27,
      question: "What are functional isomers?",
      options: ["Compounds with the same molecular formula but belonging to different homologous series (different functional groups)", "Compounds that differ only by a CH2 group", "Isomers that rotate plane-polarized light", "Molecules with identical physical properties"],
      answer: "Compounds with the same molecular formula but belonging to different homologous series (different functional groups)",
      explanation: "Functional isomers share a molecular formula but possess different functional groups (e.g., esters and carboxylic acids)."
    },
    {
      id: 28,
      question: "How do intermolecular forces affect the vapour pressure of organic liquids?",
      options: ["Stronger intermolecular forces result in lower vapour pressure", "Stronger intermolecular forces result in higher vapour pressure", "Vapour pressure is independent of intermolecular forces", "Weak forces cause zero vapour pressure"],
      answer: "Stronger intermolecular forces result in lower vapour pressure",
      explanation: "Liquids with strong intermolecular forces (like hydrogen bonding in alcohols) hold molecules tightly together, leading to fewer molecules escaping into the vapour phase (lower vapour pressure)."
    },
    {
      id: 29,
      question: "What does a Maxwell-Boltzmann distribution curve illustrate?",
      options: ["The rate of a catalyzed reaction over time", "The proportion of molecules possessing various kinetic energies at a specific temperature", "The relationship between pH and hydronium concentration", "The change in standard electrode potential with concentration"],
      answer: "The proportion of molecules possessing various kinetic energies at a specific temperature",
      explanation: "The curve shows that molecular kinetic energies vary widely, with only a fraction exceeding the activation energy threshold."
    },
    {
      id: 30,
      question: "What is the primary environmental concern associated with excessive fertilizer runoff into aquatic ecosystems?",
      options: ["Global cooling", "Eutrophication leading to algal blooms and oxygen depletion in water bodies", "Acid rain formation", "Ozone layer depletion"],
      answer: "Eutrophication leading to algal blooms and oxygen depletion in water bodies",
      explanation: "Runoff rich in nitrates and phosphates causes rapid algae growth (eutrophication), which blocks sunlight and depletes dissolved oxygen when algae decay."
    }


  ],

  'Vietnam-War': [
    {
      id: 201,
      subject_id: "history",
      question: "Which event in 1964 served as the primary justification for the United States Congress to pass the Gulf of Tonkin Resolution, drastically escalating US military involvement in Vietnam?",
      options: [
        "The assassination of President Ngo Dinh Diem",
        "An alleged North Vietnamese attack on US destroyers",
        "The launch of the nationwide Tet Offensive",
        "The defeat of French forces at Dien Bien Phu"
      ],
      answer: "An alleged North Vietnamese attack on US destroyers",
      explanation: "The Gulf of Tonkin incident in August 1964 provided President Lyndon B. Johnson with the political pretext to secure the Gulf of Tonkin Resolution, authorizing direct military intervention without a formal declaration of war."
    },
    {
      id: 202,
      subject_id: "history",
      question: "What was a primary military challenge faced by United States forces fighting the Viet Cong and the People's Army of Vietnam (NVA)?",
      options: [
        "A complete lack of air support and heavy artillery",
        "Fighter aircraft being outmatched by primitive biplanes",
        "Asymmetric guerrilla warfare, dense jungles, and extensive underground tunnel networks",
        "Strict adherence by communist forces to conventional open-field European battle formations"
      ],
      answer: "Asymmetric guerrilla warfare, dense jungles, and extensive underground tunnel networks",
      explanation: "The Viet Cong utilized hit-and-run guerrilla tactics, booby traps, and complex tunnel systems like Cu Chi, neutralizing conventional American technological and firepower supremacy."
    },
    {
      id: 203,
      subject_id: "history",
      question: "Why was the Tet Offensive of 1968 considered a major turning point in the Vietnam War?",
      options: [
        "It resulted in the unconditional surrender of North Vietnamese forces",
        "It shattered US public confidence by proving that communist forces were capable of massive, coordinated attacks nationwide",
        "It marked the first deployment of nuclear weaponry by the United States in Southeast Asia",
        "It led to the immediate overthrow of the communist government in Hanoi"
      ],
      answer: "It shattered US public confidence by proving that communist forces were capable of massive, coordinated attacks nationwide",
      explanation: "Although a tactical military defeat for the Viet Cong, the Tet Offensive shocked the American public, heavily discrediting official government claims that the war was nearly won."
    },
    {
      id: 204,
      subject_id: "history",
      question: "How did television and media coverage impact the domestic situation in the United States during the conflict?",
      options: [
        "It boosted national morale by broadcasting daily patriotic victories",
        "It had minimal impact because news broadcasts were strictly censored and rarely watched",
        "It brought the brutal realities and graphic violence of the war directly into American living rooms, rapidly fueling the anti-war movement",
        "It convinced citizens to fully support a permanent military occupation of Indochina"
      ],
      answer: "It brought the brutal realities and graphic violence of the war directly into American living rooms, rapidly fueling the anti-war movement",
      explanation: "Vietnam was America's first 'television war'. Uncensored graphic footage of casualties and destruction turned public opinion decisively against the war, driving massive university protests and civil unrest."
    },
    {
      id: 205,
      subject_id: "history",
      question: "What was the main strategic objective of President Richard Nixon’s policy of 'Vietnamisation'?",
      options: [
        "To escalate the conflict by launching a full-scale ground invasion of China",
        "To transfer combat responsibilities entirely to the South Vietnamese army while gradually withdrawing US troops",
        "To permanently divide Vietnam into three distinct sovereign states",
        "To negotiate a joint Soviet-American administrative protectorate over Saigon"
      ],
      answer: "To transfer combat responsibilities entirely to the South Vietnamese army while gradually withdrawing US troops",
      explanation: "Vietnamisation aimed to build up the Army of the Republic of Vietnam (ARVN) so American forces could exit the quagmire without suffering an immediate, total collapse of the South."
    },
    {
      id: 206,
      subject_id: "history",
      question: "What was decided at the 1954 Geneva Conference following the defeat of French colonial forces at Dien Bien Phu?",
      options: [
        "Vietnam would be immediately united under a democratic free-market government",
        "Vietnam was temporarily divided along the 17th parallel pending nationwide elections for reunification",
        "The United States was granted permanent military bases across Indochina",
        "France retained direct administrative control over both North and South Vietnam"
      ],
      answer: "Vietnam was temporarily divided along the 17th parallel pending nationwide elections for reunification",
      explanation: "The Geneva Accords temporarily partitioned Vietnam at the 17th parallel, scheduling elections for 1956 to unify the country—elections that were ultimately blocked by South Vietnam and the US."
    },
    {
      id: 207,
      subject_id: "history",
      question: "Which tactical methods did the United States military employ to eliminate thick jungle cover and expose guerrilla supply lines during the war?",
      options: [
        "Large-scale trench warfare and chemical smoke barriers",
        "Use of defoliants such as Agent Orange and incendiary weapons like napalm",
        "Subterranean flooding using controlled river diversion",
        "Constructing an impenetrable electronic wall along the 17th parallel"
      ],
      answer: "Use of defoliants such as Agent Orange and incendiary weapons like napalm",
      explanation: "To combat guerrilla concealment, the US military deployed defoliants like Agent Orange to destroy foliage and napalm to clear fortified positions, causing severe long-term ecological and human health consequences."
    },
    {
      id: 208,
      subject_id: "history",
      question: "How did the revelation of the 1968 My Lai Massacre affect the international and domestic perception of the United States military in Vietnam?",
      options: [
        "It rallied global support for US intervention against communist expansionism",
        "It exposed grave atrocities committed against unarmed Vietnamese civilians, intensifying outrage and the anti-war movement",
        "It proved that South Vietnamese forces were solely responsible for civilian casualties",
        "It resulted in a prompt military court apology and immediate demilitarization of the region"
      ],
      answer: "It exposed grave atrocities committed against unarmed Vietnamese civilians, intensifying outrage and the anti-war movement",
      explanation: "The massacre of hundreds of unarmed villagers by US troops at My Lai, when made public in 1969, shattered the moral rationale of American involvement and fueled intense domestic protests."
    },
    {
      id: 209,
      subject_id: "history",
      question: "What was the strategic significance of the Ho Chi Minh Trail during the Vietnam War?",
      options: [
        "It served as the primary underground communication cable linking Hanoi directly to Washington",
        "It was a major railway system built by American engineers to transport troops across the delta",
        "It functioned as a vital logistical supply network passing through Laos and Cambodia to support communist forces in the South",
        "It was an economic trade route used to export rubber and rice to Western capitalist nations"
      ],
      answer: "It functioned as a vital logistical supply network passing through Laos and Cambodia to support communist forces in the South",
      explanation: "The Ho Chi Minh Trail was a complex network of jungle paths and roads through neighboring neutral countries used by North Vietnam to funnel weapons, equipment, and fighters to the Viet Cong."
    },
    {
      id: 210,
      subject_id: "history",
      question: "What marked the definitive end of the Vietnam War in April 1975?",
      options: [
        "The signing of the Paris Peace Accords",
        "The capture of Saigon by North Vietnamese forces and the subsequent reunification of the country",
        "The UN-supervised democratic elections establishing a permanent coalition government",
        "The formal surrender of communist leadership aboard a US aircraft carrier"
      ],
      answer: "The capture of Saigon by North Vietnamese forces and the subsequent reunification of the country",
      explanation: "Following the withdrawal of US troops and the collapse of the South Vietnamese government, North Vietnamese forces captured Saigon on April 30, 1975, ending the war and uniting the country under communist rule."
    },
    {
      id: 211,
      subject_id: "history",
      question: "What was the primary ideological motivation behind the United States' policy of containment in entering the Vietnam War?",
      options: [
        "To secure exclusive control over Vietnamese oil reserves and rubber plantations",
        "To prevent the spread of communism in Southeast Asia based on the 'Domino Theory'",
        "To establish a permanent colonial protectorate for France",
        "To retaliate directly against Soviet military bases in Hanoi"
      ],
      answer: "To prevent the spread of communism in Southeast Asia based on the 'Domino Theory'",
      explanation: "US involvement was deeply rooted in Cold War containment policies and the Domino Theory, which posited that if one country fell to communism, neighboring countries would follow."
    },
    {
      id: 212,
      subject_id: "history",
      question: "Which of the following best explains why the United States military ultimately failed to defeat communist forces in Vietnam despite its overwhelming technological and military superiority?",
      options: [
        "The US army suffered from a permanent lack of modern aircraft and naval support",
        "The Viet Cong and NVA were backed by an advanced nuclear arsenal",
        "The Viet Cong enjoyed deep local support, masterly guerrilla tactics, and immense national resilience against foreign intervention",
        "South Vietnamese forces surrendered unconditionally to North Vietnam within the first year of the war"
      ],
      answer: "The Viet Cong enjoyed deep local support, masterly guerrilla tactics, and immense national resilience against foreign intervention",
      explanation: "Vietnamese nationalism and guerrilla warfare turned the conflict into a war of attrition that superior American firepower could not overcome, coupled with popular disillusionment with the corrupt South Vietnamese regime."
    },
    {
      id: 213,
      subject_id: "history",
      question: "What was the significance of the Paris Peace Accords signed in January 1973?",
      options: [
        "It immediately united North and South Vietnam under a peaceful democratic coalition",
        "It provided for the withdrawal of remaining US troops and a ceasefire, though fighting between North and South Vietnam later resumed",
        "It officially declared Vietnam as the 51st state of the United States",
        "It handed full administrative control of Vietnam over to the United Nations"
      ],
      answer: "It provided for the withdrawal of remaining US troops and a ceasefire, though fighting between North and South Vietnam later resumed",
      explanation: "The Paris Peace Accords enabled the US to exit the conflict militarily, but the peace was short-lived as North Vietnamese forces eventually launched their final offensive leading to the fall of Saigon in 1975."
    },
    {
      id: 214,
      subject_id: "history",
      question: "How did the domestic situation in the United States influence the eventual withdrawal of troops from Vietnam?",
      options: [
        "Widespread anti-war protests, student movements, and the rising death toll created immense political pressure on the US government to end the war",
        "An economic boom led Americans to lose interest in foreign policy entirely",
        "Congress legally banned the President from ever deploying troops abroad again",
        "Public support for the war increased exponentially after every media broadcast"
      ],
      answer: "Widespread anti-war protests, student movements, and the rising death toll created immense political pressure on the US government to end the war",
      explanation: "The intense home-front opposition—fueled by the draft, high casualties, and media coverage—fractured American society and forced political leaders to seek an exit strategy."
    },
    {
      id: 215,
      subject_id: "history",
      question: "What role did the Strategic Hamlet Program play in South Vietnam prior to its collapse?",
      options: [
        "It was a successful economic reform that modernized Vietnamese agriculture",
        "A US-backed initiative to isolate rural South Vietnamese peasants from Viet Cong influence by relocating them into fortified villages, which ultimately alienated the rural population",
        "A peace treaty signed between Ngo Dinh Diem and Ho Chi Minh",
        "A secret underground railway built to supply American troops in the north"
      ],
      answer: "A US-backed initiative to isolate rural South Vietnamese peasants from Viet Cong influence by relocating them into fortified villages, which ultimately alienated the rural population",
      explanation: "The Strategic Hamlet Program backfired because forced relocations and disruption of ancestral farming traditions deeply alienated rural peasants, driving more support toward the Viet Cong."
    },
    {
      id: 216,
      subject_id: "history",
      question: "How did the regime of Ngô Đình Diệm in South Vietnam contribute to the growing instability before direct US combat intervention?",
      options: [
        "By implementing communist land-reform policies that favored peasants",
        "Through widespread corruption, suppression of Buddhist majorities, and refusal to hold promised democratic reforms",
        "By aligning South Vietnam directly with the Soviet Union and Warsaw Pact",
        "By successfully uniting all religious factions under a secular constitution"
      ],
      answer: "Through widespread corruption, suppression of Buddhist majorities, and refusal to hold promised democratic reforms",
      explanation: "Diệm's autocratic rule, nepotism, and harsh persecution of the Buddhist majority alienated the South Vietnamese population, making his regime deeply unpopular and vulnerable to communist insurgency."
    },
    {
      id: 217,
      subject_id: "history",
      question: "What was the primary purpose of Operation Rolling Thunder, initiated by the Johnson administration in 1965?",
      options: [
        "To provide humanitarian food aid and medical supplies to rural Vietnamese villages",
        "To conduct a sustained aerial bombardment campaign against North Vietnam to destroy its industrial capacity and halt supplies",
        "To airlift French colonial forces back into the Indochina peninsula",
        "To clear landmines along the demilitarized zone near the 17th parallel"
      ],
      answer: "To conduct a sustained aerial bombardment campaign against North Vietnam to destroy its industrial capacity and halt supplies",
      explanation: "Operation Rolling Thunder was a massive, sustained US aerial bombing campaign intended to break North Vietnam's will to fight and stop the flow of supplies down the Ho Chi Minh Trail."
    },
    {
      id: 218,
      subject_id: "history",
      question: "What was a major consequence of the expansion of the Vietnam War into neighboring Cambodia and Laos under President Richard Nixon?",
      options: [
        "It completely ended the communist supply lines within the first month",
        "It sparked massive outrage and intensified domestic protests in the United States, including deadly clashes at Kent State University",
        "It led to a formal alliance between the United States and the Chinese government",
        "It resulted in the peaceful disarmament of all guerrilla factions in Indochina"
      ],
      answer: "It sparked massive outrage and intensified domestic protests in the United States, including deadly clashes at Kent State University",
      explanation: "Nixon's secret bombings and incursions into Cambodia and Laos violated national sovereignty, triggering fierce domestic backlash and student protests across America."
    },
    {
      id: 219,
      subject_id: "history",
      question: "Before direct American involvement, which country fought a protracted colonial war in Vietnam from 1946 to 1954, ending with a decisive defeat at Dien Bien Phu?",
      options: [
        "Great Britain",
        "France",
        "Japan",
        "The Netherlands"
      ],
      answer: "France",
      explanation: "France sought to re-establish control over its former colony of Indochina after World War II, but met fierce resistance from the Viet Minh, culminating in their defeat at Dien Bien Phu in 1954."
    },
    {
      id: 220,
      subject_id: "history",
      question: "What was one of the profound long-term human and political consequences of the Vietnam War for the region following 1975?",
      options: [
        "The permanent establishment of a democratic capitalist federation across all of Indochina",
        "Severe economic devastation, environmental destruction from chemical defoliants, and the mass exodus of refugees known as 'boat people'",
        "The immediate integration of Vietnam into the Western European Union",
        "Total disarmament and demilitarization of the entire Southeast Asian peninsula"
      ],
      answer: "Severe economic devastation, environmental destruction from chemical defoliants, and the mass exodus of refugees known as 'boat people'",
      explanation: "The war left Vietnam physically shattered with lasting ecological damage from agents like Agent Orange, while hundreds of thousands fled communist rule by sea, becoming known as 'boat people'."
    },
    {
      id: 221,
      subject_id: "history",
      question: "Who was Hồ Chí Minh and what role did he play in the early stages of the conflict?",
      options: [
        "A pro-Western capitalist leader who established the Republic of Vietnam in Saigon",
        "The communist revolutionary leader of the Viet Minh who fought for Vietnamese independence from French colonial rule",
        "A United States military general appointed to oversee the containment policy in Indochina",
        "The premier of South Vietnam who cancelled the 1956 reunification elections"
      ],
      answer: "The communist revolutionary leader of the Viet Minh who fought for Vietnamese independence from French colonial rule",
      explanation: "Hồ Chí Minh led the nationalist and communist movement (Viet Minh), first fighting Japanese occupation and then defeating French colonial forces to secure independence for North Vietnam."
    },
    {
      id: 222,
      subject_id: "history",
      question: "Why were the nationwide reunification elections scheduled for 1956 under the Geneva Accords ultimately never held?",
      options: [
        "North Vietnam refused to participate because they preferred immediate military conflict",
        "South Vietnamese leader Ngô Đình Diệm, backed by the US, refused to hold them out of fear that communists would win",
        "The United Nations officially cancelled all elections across Southeast Asia indefinitely",
        "France reoccupied the country and declared martial law nationwide"
      ],
      answer: "South Vietnamese leader Ngô Đình Diệm, backed by the US, refused to hold them out of fear that communists would win",
      explanation: "Realizing that Hồ Chí Minh would likely win a popular national vote due to his heroic status in fighting the French, Diệm—with American support—refused to permit the 1956 elections."
    },
    {
      id: 223,
      subject_id: "history",
      question: "How did the United States selective service system (the draft) impact domestic opposition to the Vietnam War?",
      options: [
        "It encouraged young Americans to volunteer enthusiastically for frontline combat",
        "It disproportionately affected working-class and minority youth, sparking widespread draft card burnings and campus protests",
        "It was universally praised by university students and civil rights leaders",
        "It prevented any American citizens from questioning foreign policy"
      ],
      answer: "It disproportionately affected working-class and minority youth, sparking widespread draft card burnings and campus protests",
      explanation: "The draft made the war intensely personal for American families, as young men faced forced conscription, leading to massive civil disobedience, draft evasion, and radicalized anti-war demonstrations."
    }

  ],
  'Cold-War': [
    {
      id: 301,
      subject_id: "history",
      question: "What was the primary purpose of the Yalta and Potsdam conferences held in 1945?",
      options: [
        "To establish the League of Nations and draft global peace treaties",
        "To negotiate the post-war reorganization, division of Germany, and spheres of influence in Europe",
        "To plan the immediate military invasion of mainland Japan",
        "To create a unified democratic socialist government for all of Europe"
      ],
      answer: "To negotiate the post-war reorganization, division of Germany, and spheres of influence in Europe",
      explanation: "At Yalta and Potsdam, Allied leaders (Churchill, Roosevelt, Truman, and Stalin) mapped out the post-war order, dividing Germany and Berlin into occupation zones and laying the groundwork for rising East-West tensions."
    },
    {
      id: 302,
      subject_id: "history",
      question: "What did British Prime Minister Winston Churchill mean by his famous 1946 'Iron Curtain' speech?",
      options: [
        "A physical trade embargo placed by the US on Western European steel",
        "The ideological and physical boundary dividing Soviet-dominated Eastern Europe from the democratic West",
        "A military alliance formed to protect African colonies from decolonization",
        "The strict censorship laws enforced within Western capitalist democracies"
      ],
      answer: "The ideological and physical boundary dividing Soviet-dominated Eastern Europe from the democratic West",
      explanation: "Churchill's speech at Fulton, Missouri, popularized the term 'Iron Curtain' to describe the descent of Soviet control over Eastern European states, symbolizing the hardening division of the Cold War."
    },
    {
      id: 303,
      subject_id: "history",
      question: "What was the core objective of the Truman Doctrine announced by US President Harry S. Truman in 1947?",
      options: [
        "To provide direct military and economic aid to countries resisting communist subjugation",
        "To launch a preemptive nuclear strike against Soviet military installations",
        "To dissolve the United Nations and replace it with an American-led council",
        "To colonize Central America and secure exclusive mineral rights"
      ],
      answer: "To provide direct military and economic aid to countries resisting communist subjugation",
      explanation: "Triggered by crises in Greece and Turkey, the Truman Doctrine established the US foreign policy of containment, pledging support to free peoples resisting armed minorities or outside pressures."
    },
    {
      id: 304,
      subject_id: "history",
      question: "How did the Marshall Plan (European Recovery Program) function as a tool of Cold War containment?",
      options: [
        "By deploying US combat troops directly to the Soviet border",
        "By providing massive financial aid to rebuild war-torn European economies and prevent the appeal of communism",
        "By establishing communist party branches in Western European capitals",
        "By seizing control of all European trade tariffs and shipping routes"
      ],
      answer: "By providing massive financial aid to rebuild war-torn European economies and prevent the appeal of communism",
      explanation: "The Marshall Plan poured over $13 billion into European economic recovery. By reviving Western Europe, the US aimed to stabilize democracies and curb the political appeal of impoverished communist parties."
    },
    {
      id: 305,
      subject_id: "history",
      question: "What triggered the Berlin Blockade of 1948–1949, and how did the Western Allies respond?",
      options: [
        "Soviet blockade of all road and rail access to West Berlin; met by the massive humanitarian Berlin Airlift",
        "An Allied invasion of East Berlin; met by a Soviet naval embargo",
        "The construction of the Berlin Wall; met by a declaration of war",
        "A communist uprising in West Germany; met by UN peacekeeping forces"
      ],
      answer: "Soviet blockade of all road and rail access to West Berlin; met by the massive humanitarian Berlin Airlift",
      explanation: "In response to Western currency reform in occupied Germany, Stalin cut off land access to West Berlin. The US and Britain bypassed the blockade by flying in vital food and supplies for nearly a year."
    },
    {
      id: 306,
      subject_id: "history",
      question: "What was the fundamental structural difference between NATO (1949) and the Warsaw Pact (1955)?",
      options: [
        "NATO was an economic trading bloc, while the Warsaw Pact was a cultural organization",
        "NATO was a collective defense alliance of Western capitalist nations, while the Warsaw Pact was a Soviet-led military alliance of Eastern bloc states",
        "NATO included Asian nations only, while the Warsaw Pact included North American countries",
        "NATO was formed by the Soviet Union, while the Warsaw Pact was created by the United States"
      ],
      answer: "NATO was a collective defense alliance of Western capitalist nations, while the Warsaw Pact was a Soviet-led military alliance of Eastern bloc states",
      explanation: "NATO institutionalized Western collective security against Soviet aggression. In response to West Germany joining NATO, the Soviet Union formed the Warsaw Pact in 1955, formalizing the bipolar military standoff."
    },
    {
      id: 307,
      subject_id: "history",
      question: "Which geopolitical strategy defined United States foreign policy toward communism throughout the late 1940s and 1950s?",
      options: [
        "Isolationism and complete withdrawal from international affairs",
        "Containment—preventing the further expansion of communism abroad",
        "Appeasement—granting territorial concessions to satisfy Soviet demands",
        "Imperial expansion and direct annexation of Eastern European states"
      ],
      answer: "Containment—preventing the further expansion of communism abroad",
      explanation: "Rooted in George Kennan's 'Long Telegram', containment became the cornerstone of US Cold War strategy, aimed at hemming in Soviet influence until the internal contradictions of the system caused it to collapse."
    },
    {
      id: 308,
      subject_id: "history",
      question: "How did the Soviet Union respond economically and politically to Western integration in Europe during the late 1940s?",
      options: [
        "By joining the Marshall Plan and adopting capitalist reforms",
        "By creating Cominform to coordinate communist parties and Comecon to integrate Eastern bloc economies",
        "By dissolving all national borders within the Eastern bloc",
        "By handing administrative control of Eastern Europe over to the United Nations"
      ],
      answer: "By creating Cominform to coordinate communist parties and Comecon to integrate Eastern bloc economies",
      explanation: "To counter Western influence, the USSR established Cominform (Information Bureau) to maintain ideological control over European communist parties and Comecon (Council for Mutual Economic Assistance) for economic integration."
    },
    {
      id: 309,
      subject_id: "history",
      question: "What was the significance of the Korean War (1950–1953) in the context of global Cold War tensions?",
      options: [
        "It proved that the United Nations could successfully prevent all regional conflicts without superpower involvement",
        "It marked the first major military clash of the Cold War, demonstrating that containment would be enforced globally with armed force",
        "It resulted in the immediate unification of Korea under a democratic government",
        "It led to the complete dissolution of the North Atlantic Treaty Organization"
      ],
      answer: "It marked the first major military clash of the Cold War, demonstrating that containment would be enforced globally with armed force",
      explanation: "When communist North Korea invaded the South, the US and UN intervened militarily. The proxy war along the 38th parallel proved that the Cold War had turned hot in Asia."
    },
    {
      id: 310,
      subject_id: "history",
      question: "How did the Soviet Union's successful atomic bomb test in 1949 alter the global balance of power?",
      options: [
        "It ended the American nuclear monopoly and initiated a dangerous nuclear arms race",
        "It forced the United States to dismantle its military forces immediately",
        "It resulted in a permanent peace treaty signed in Geneva",
        "It caused the immediate economic collapse of the Soviet economy"
      ],
      answer: "It ended the American nuclear monopoly and initiated a dangerous nuclear arms race",
      explanation: "The Soviet atomic test shocked the West, ending US nuclear exclusivity and triggering a massive escalation in nuclear weapons development and doctrines of deterrence on both sides."
    },
    {
      id: 311,
      subject_id: "history",
      question: "What was President Dwight D. Eisenhower's policy of 'massive retaliation' and brinkmanship during the 1950s?",
      options: [
        "Relying on massive conventional ground armies to fight prolonged localized wars",
        "Threatening overwhelming nuclear destruction in response to any Soviet military aggression",
        "Disarming the US military and relying entirely on diplomatic negotiations",
        "Handing control of nuclear weapons over to the United Nations Security Council"
      ],
      answer: "Threatening overwhelming nuclear destruction in response to any Soviet military aggression",
      explanation: "Formulated by Secretary of State John Foster Dulles, 'massive retaliation' argued that maintaining a massive nuclear arsenal was more cost-effective than large conventional armies, willing to push crises to the 'brink' of war."
    },
    {
      id: 312,
      subject_id: "history",
      question: "How did Nikita Khrushchev's policy of 'destalinization' affect Eastern Europe in the mid-1950s?",
      options: [
        "It led to complete political harmony and the abolition of the Warsaw Pact",
        "It sparked hopes for greater national autonomy, leading to uprisings in Poland and the Hungarian Revolution of 1956",
        "It resulted in the immediate reunification of Germany under Western supervision",
        "It caused the Soviet Union to withdraw all military forces from Europe"
      ],
      answer: "It sparked hopes for greater national autonomy, leading to uprisings in Poland and the Hungarian Revolution of 1956",
      explanation: "Khrushchev's 1956 Secret Speech denouncing Stalin's crimes inspired reform movements in Eastern Europe. However, when Hungary attempted to leave the Warsaw Pact, Soviet tanks brutally crushed the revolution."
    },
    {
      id: 313,
      subject_id: "history",
      question: "How did President John F. Kennedy's policy of 'flexible response' differ from Eisenhower's approach?",
      options: [
        "It eliminated all nuclear weapons from the American arsenal",
        "It emphasized a range of military options—from conventional forces and special ops to nuclear weapons—rather than instant massive retaliation",
        "It relied exclusively on economic sanctions rather than military deterrence",
        "It outsourced all US defense responsibilities to NATO allies"
      ],
      answer: "It emphasized a range of military options—from conventional forces and special ops to nuclear weapons—rather than instant massive retaliation",
      explanation: "JFK felt 'massive retaliation' was too rigid for localized conflicts (like Vietnam or guerrilla insurgencies), so 'flexible response' allowed the US to match communist aggression at any level."
    },
    {
      id: 314,
      subject_id: "history",
      question: "What was the immediate catalyst and resolution of the Cuban Missile Crisis in October 1962?",
      options: [
        "Discovery of Soviet nuclear missiles in Cuba; resolved through a US naval quarantine, Soviet withdrawal of missiles, and secret US removal of missiles from Turkey",
        "An American invasion of Havana; resolved by the unconditional surrender of Fidel Castro",
        "A Soviet blockade of Miami; resolved by a UN partition of Florida",
        "The sinking of a US battleship in Havana harbor; resolved by a formal declaration of war"
      ],
      answer: "Discovery of Soviet nuclear missiles in Cuba; resolved through a US naval quarantine, Soviet withdrawal of missiles, and secret US removal of missiles from Turkey",
      explanation: "The 13-day standoff brought the superpowers closer to nuclear war than ever before. It ended peacefully when Khrushchev agreed to remove missiles in exchange for a US pledge not to invade Cuba."
    },
    {
      id: 315,
      subject_id: "history",
      question: "How did President Lyndon B. Johnson escalate Cold War commitments in Southeast Asia during the mid-1960s?",
      options: [
        "By signing a mutual defense pact with North Vietnam",
        "By utilizing the Gulf of Tonkin Resolution to deploy hundreds of thousands of US combat troops to South Vietnam",
        "By withdrawing all military advisors from Indochina",
        "By partitioning Vietnam into four neutral zones supervised by the Soviet Union"
      ],
      answer: "By utilizing the Gulf of Tonkin Resolution to deploy hundreds of thousands of US combat troops to South Vietnam",
      explanation: "Under LBJ, containment shifted from financial and advisory support to full-scale direct American ground combat in Vietnam, escalating the Cold War in the developing world."
    },
    {
      id: 316,
      subject_id: "history",
      question: "What was the strategic goal of Richard Nixon and Henry Kissinger's policy of *détente* and opening relations with China in 1972?",
      options: [
        "To unite the US, USSR, and China into a single global government",
        "To ease Cold War tensions and exploit the Sino-Soviet split to pressure the Soviet Union into arms control agreements",
        "To surrender American military dominance in the Asia-Pacific region",
        "To establish a joint capitalist-communist economic market in Beijing"
      ],
      answer: "To ease Cold War tensions and exploit the Sino-Soviet split to pressure the Soviet Union into arms control agreements",
      explanation: "Nixon's historic visit to China in 1972 capitalized on the ideological rift between Moscow and Beijing, fostering *détente* (relaxation of tensions) and compelling the USSR to negotiate treaties like SALT."
    },
    {
      id: 317,
      subject_id: "history",
      question: "What was the significance of the Strategic Arms Limitation Talks (SALT I) signed in 1972?",
      options: [
        "It completely eliminated all nuclear weapons from the stockpiles of the US and USSR",
        "It marked the first time the superpowers agreed to cap and limit the growth of certain nuclear missile launchers",
        "It granted the United Nations full authority over American and Soviet nuclear arsenals",
        "It banned all conventional military research worldwide"
      ],
      answer: "It marked the first time the superpowers agreed to cap and limit the growth of certain nuclear missile launchers",
      explanation: "SALT I (along with the Anti-Ballistic Missile Treaty) was a landmark achievement of *détente*, freezing the number of strategic ballistic missile launchers and signaling a desire to curb the arms race."
    },
    {
      id: 318,
      subject_id: "history",
      question: "How did President Ronald Reagan shift US foreign policy toward the Soviet Union upon taking office in 1981?",
      options: [
        "By abandoning NATO and forming an alliance with the Warsaw Pact",
        "By adopting a sharply anti-communist rhetoric, labeling the USSR the 'evil empire', and heavily increasing defense spending",
        "By enacting complete economic isolationism and ending all foreign trade",
        "By handing control of American foreign policy over to the United Nations"
      ],
      answer: "By adopting a sharply anti-communist rhetoric, labeling the USSR the 'evil empire', and heavily increasing defense spending",
      explanation: "Reagan rejected *détente*, increased military budgets, funded anti-communist insurgencies globally (the Reagan Doctrine), and proposed the Strategic Defense Initiative (SDI) to pressure the struggling Soviet economy."
    },
    {
      id: 319,
      subject_id: "history",
      question: "What were Mikhail Gorbachev's reform policies of *glasnost* and *perestroika* introduced in the mid-1980s?",
      options: [
        "*Glasnost* (openness/transparency) in government and *perestroika* (economic restructuring) to modernize the USSR",
        "*Glasnost* (total military mobilization) and *perestroika* (expansion of the Warsaw Pact into Asia)",
        "*Glasnost* (state censorship) and *perestroika* (capitalist privatization of the US economy)",
        "*Glasnost* (dissolution of the Communist Party) and *perestroika* (military alliance with NATO)"
      ],
      answer: "*Glasnost* (openness/transparency) in government and *perestroika* (economic restructuring) to modernize the USSR",
      explanation: "Faced with economic stagnation, Gorbachev introduced *glasnost* (free speech and political openness) and *perestroika* (decentralized economic restructuring), which inadvertently unleashed nationalist and democratic movements."
    },
    {
      id: 320,
      subject_id: "history",
      question: "Which summit meetings and treaties between Ronald Reagan and Mikhail Gorbachev marked the winding down of the arms race?",
      options: [
        "The Yalta and Potsdam conferences",
        "The Geneva and Reykjavik summits leading to the Intermediate-Range Nuclear Forces (INF) Treaty",
        "The Paris Peace Accords",
        "The Gulf of Tonkin negotiations"
      ],
      answer: "The Geneva and Reykjavik summits leading to the Intermediate-Range Nuclear Forces (INF) Treaty",
      explanation: "Through diplomatic summits in the late 1980s, Reagan and Gorbachev built trust, culminating in the 1987 INF Treaty, which eliminated an entire class of nuclear missiles for the first time."
    },
    {
      id: 321,
      subject_id: "history",
      question: "Why did East Germany and the Soviet Union construct the Berlin Wall in August 1961?",
      options: [
        "To protect West Berlin from NATO military incursions",
        "To stop the massive, damaging brain drain of skilled professionals fleeing communist East Berlin for the democratic West",
        "To serve as a tourist attraction celebrating socialist architecture",
        "To divide Berlin into four neutral zones supervised by the United Nations"
      ],
      answer: "To stop the massive, damaging brain drain of skilled professionals fleeing communist East Berlin for the democratic West",
      explanation: "Prior to 1961, millions of educated East Germans escaped to the West through open borders in Berlin. The wall physically sealed off East Berlin, becoming the ultimate symbol of the Cold War division."
    },
    {
      id: 322,
      subject_id: "history",
      question: "What was the significance of the Prague Spring in Czechoslovakia (1968) and the subsequent Brezhnev Doctrine?",
      options: [
        "It marked the peaceful transition of Czechoslovakia into a capitalist democracy backed by the US",
        "It was a failed democratic reform movement crushed by Warsaw Pact tanks, followed by the Brezhnev Doctrine asserting Soviet right to intervene in socialist states",
        "It established a military alliance between Czechoslovakia and NATO",
        "It resulted in the total economic collapse of the Western European Union"
      ],
      answer: "It was a failed democratic reform movement crushed by Warsaw Pact tanks, followed by the Brezhnev Doctrine asserting Soviet right to intervene in socialist states",
      explanation: "When Alexander Dubček tried to introduce 'socialism with a human face' in Czechoslovakia, Soviet tanks invaded. The Brezhnev Doctrine justified this by claiming the sovereignty of socialist countries was limited."
    },
    {
      id: 323,
      subject_id: "history",
      question: "How did the Soviet invasion of Afghanistan in December 1979 impact international relations and the Cold War?",
      options: [
        "It solidified *détente* and led to a permanent military alliance between the US and USSR",
        "It shattered *détente*, prompted US grain embargoes and the boycott of the 1980 Moscow Olympics, and bogged the USSR down in a costly quagmire",
        "It resulted in the immediate surrender of anti-communist rebel forces",
        "It caused the dissolution of the Warsaw Pact"
      ],
      answer: "It shattered *détente*, prompted US grain embargoes and the boycott of the 1980 Moscow Olympics, and bogged the USSR down in a costly quagmire",
      explanation: "The invasion of Afghanistan ended the *détente* era. The US heavily armed the Afghan Mujahideen, creating a Soviet 'Vietnam' that drained Soviet resources and morale throughout the 1980s."
    },
    {
      id: 324,
      subject_id: "history",
      question: "What role did the Solidarity trade union in Poland play in challenging Soviet dominance in Eastern Europe during the 1980s?",
      options: [
        "It was a state-run agency established by Moscow to suppress workers' rights",
        "It was an independent trade union led by Lech Wałęsa that successfully mobilized millions of Polish workers against communist rule",
        "It served as the primary military wing of the Warsaw Pact",
        "It negotiated the annexation of Poland into the European Economic Community"
      ],
      answer: "It was an independent trade union led by Lech Wałęsa that successfully mobilized millions of Polish workers against communist rule",
      explanation: "Solidarity (*Solidarność*) was the first independent labor union in a Soviet-bloc country. Despite martial law and government suppression, it persevered and eventually dismantled communist rule in Poland in 1989."
    },
    {
      id: 325,
      subject_id: "history",
      question: "What historical significance did the fall of the Berlin Wall on November 9, 1989, represent for Europe?",
      options: [
        "The start of World War III between NATO and the Warsaw Pact",
        "The symbolic collapse of communist hegemony in Eastern Europe and the impending reunification of Germany",
        "The permanent division of Europe into five independent socialist states",
        "The dissolution of the United Nations Security Council"
      ],
      answer: "The symbolic collapse of communist hegemony in Eastern Europe and the impending reunification of Germany",
      explanation: "The opening of the Berlin Wall catalyzed the peaceful revolutions of 1989 across Eastern Europe, signaling that Moscow would no longer use military force to prop up satellite communist regimes."
    },
    {
      id: 326,
      subject_id: "history",
      question: "What events directly led to the formal dissolution of the Soviet Union in December 1991?",
      options: [
        "A successful military invasion of Western Europe by Soviet forces",
        "Economic bankruptcy, failed hardliner coup attempts, and declarations of independence by Soviet republics led by Boris Yeltsin",
        "A formal peace treaty signed with the United States in Washington",
        "The integration of the Soviet Union into the European Union"
      ],
      answer: "Economic bankruptcy, failed hardliner coup attempts, and declarations of independence by Soviet republics led by Boris Yeltsin",
      explanation: "Gorbachev's reforms unleashed nationalist independence movements. After a botched August 1991 coup by communist hardliners, the USSR fractured, and on December 25, 1991, the Soviet flag was lowered for the last time."
    },
    {
      id: 327,
      subject_id: "history",
      question: "How did the end of the Cold War accelerate the process of economic globalization in the 1990s?",
      options: [
        "By erecting new trade barriers and iron curtains across every continent",
        "By integrating former communist bloc nations into the global capitalist market, expanding international trade, and removing ideological trade divisions",
        "By abolishing all international monetary funds and banking systems",
        "By replacing national currencies with a single global barter system"
      ],
      answer: "By integrating former communist bloc nations into the global capitalist market, expanding international trade, and removing ideological trade divisions",
      explanation: "The collapse of the bipolar Cold War order removed ideological barriers, allowing former Soviet-bloc economies to integrate into global trade, finance, and telecommunications networks, supercharging globalization."
    },
    {
      id: 328,
      subject_id: "history",
      question: "What was the long-term impact of Cold War proxy wars on developing nations in Asia, Africa, and Latin America?",
      options: [
        "Immediate economic prosperity and stable democratic governance in every nation",
        "Devastating loss of life, political instability, militarization, and long-lasting infrastructural destruction",
        "Complete isolation from global politics and economic self-sufficiency",
        "Peaceful unification under neutral non-aligned governments"
      ],
      answer: "Devastating loss of life, political instability, militarization, and long-lasting infrastructural destruction",
      explanation: "While superpowers avoided direct conflict, they fought brutal proxy wars in nations like Vietnam, Angola, Korea, and Afghanistan, leaving behind millions of casualties, unexploded ordnance, and political instability."
    },
    {
      id: 329,
      subject_id: "history",
      question: "What was the purpose of the Non-Aligned Movement formed during the Cold War by countries wishing to avoid alignment with either superpower?",
      options: [
        "To form a third military superpower capable of conquering Europe",
        "To maintain national independence and economic sovereignty without joining either the US-led capitalist bloc or the Soviet-led communist bloc",
        "To secretly supply weapons to the Warsaw Pact",
        "To enforce colonial rule across developing nations"
      ],
      answer: "To maintain national independence and economic sovereignty without joining either the US-led capitalist bloc or the Soviet-led communist bloc",
      explanation: "Founded in 1961 by leaders like Josip Broz Tito, Jawaharlal Nehru, and Gamal Abdel Nasser, the Non-Aligned Movement sought to give newly decolonized developing nations a voice independent of the Cold War bipolar struggle."
    },
    {
      id: 330,
      subject_id: "history",
      question: "How did the Cold War superpower rivalry shape international nuclear non-proliferation treaties and security architectures?",
      options: [
        "It had no impact on international law or weapons treaties",
        "It drove the creation of vital arms control frameworks like the Nuclear Non-Proliferation Treaty (NPT) to prevent the spread of atomic weapons",
        "It mandated that all nations possess nuclear arsenals for self-defense",
        "It resulted in the total abolition of all scientific research regarding atomic energy"
      ],
      answer: "It drove the creation of vital arms control frameworks like the Nuclear Non-Proliferation Treaty (NPT) to prevent the spread of atomic weapons",
      explanation: "Fearing catastrophic nuclear war, the superpowers collaborated on treaties such as the 1968 Nuclear Non-Proliferation Treaty (NPT) to restrict the spread of nuclear weapons technology to other nations."
    },
    {
      id: 331,
      subject_id: "history",
      question: "What were the fundamental economic differences between the United States and the Soviet Union that fueled the Cold War ideological divide?",
      options: [
        "Capitalism (free-market private ownership) versus Communism (state-controlled collective ownership)",
        "Feudalism versus Mercantilism",
        "Agrarian socialism versus Industrial monarchy",
        "Welfare capitalism versus State capitalism with free elections"
      ],
      answer: "Capitalism (free-market private ownership) versus Communism (state-controlled collective ownership)",
      explanation: "The Cold War was rooted in an ideological clash between Western capitalist democracies advocating private enterprise and freedom, and Soviet-style command economies advocating centralized state ownership and Marxist-Leninist ideology."
    },
    {
      id: 332,
      subject_id: "history",
      question: "What was the significance of George Kennan’s 1946 'Long Telegram' from Moscow in shaping United States foreign policy?",
      options: [
        "It advised the US to form an immediate military alliance with Joseph Stalin",
        "It argued that the Soviet Union was inherently expansionist but would back down if met with firm, long-term containment",
        "It recommended immediate disarmament and isolationism",
        "It proposed a joint capitalist-communist administration for Europe"
      ],
      answer: "It argued that the Soviet Union was inherently expansionist but would back down if met with firm, long-term containment",
      explanation: "Kennan’s telegram provided the intellectual framework for the US policy of containment, predicting that Soviet expansionism could be checked without direct war if Western power was applied consistently."
    },
    {
      id: 333,
      subject_id: "history",
      question: "What was the primary recommendation of the United States National Security Council Report 68 (NSC-68) in 1950?",
      options: [
        "To reduce defense spending and rely entirely on diplomacy",
        "To significantly militarize containment, triple the defense budget, and aggressively counter perceived global communist expansion",
        "To withdraw all US military forces from Europe and Asia",
        "To hand over nuclear weapons to the United Nations"
      ],
      answer: "To significantly militarize containment, triple the defense budget, and aggressively counter perceived global communist expansion",
      explanation: "NSC-68 marked a major escalation in US Cold War strategy following the Soviet atomic bomb test and the Chinese Communist Revolution, shifting containment from a political/economic policy to an active military crusade."
    },
    {
      id: 334,
      subject_id: "history",
      question: "How did the 1948–1949 Berlin Blockade lead to the formal partition of Germany?",
      options: [
        "It resulted in the creation of two separate states: the Federal Republic of Germany (West) and the German Democratic Republic (East)",
        "It caused Germany to be permanently placed under French colonial administration",
        "It united Germany under a single communist government",
        "It led to Germany being disarmed and governed by neutral Switzerland"
      ],
      answer: "It resulted in the creation of two separate states: the Federal Republic of Germany (West) and the German Democratic Republic (East)",
      explanation: "The Berlin crisis deepened Cold War divisions, leading Western allies to combine their occupation zones into the democratic Federal Republic of Germany (FRG) in May 1949, followed by the Soviet creation of the German Democratic Republic (GDR) in October 1949."
    },
    {
      id: 335,
      subject_id: "history",
      question: "What was a primary cause of the Sino-Soviet split that emerged in the late 1950s and 1960s?",
      options: [
        "A joint military invasion of the United States",
        "Ideological disputes between Mao Zedong and Nikita Khrushchev, particularly over de-stalinization and peaceful coexistence with the West",
        "Disagreements over how to divide colonial territories in South America",
        "China’s refusal to adopt nuclear weapons"
      ],
      answer: "Ideological disputes between Mao Zedong and Nikita Khrushchev, particularly over de-stalinization and peaceful coexistence with the West",
      explanation: "Mao criticized Khrushchev's policy of peaceful coexistence with capitalist nations as 'revisionism', leading to a bitter ideological and geopolitical rift between Beijing and Moscow that disrupted the monolithic view of global communism."
    },
    {
      id: 336,
      subject_id: "history",
      question: "What was the outcome of the failed US-backed Bay of Pigs invasion of Cuba in April 1961?",
      options: [
        "The immediate overthrow of Fidel Castro's communist regime",
        "A diplomatic victory for President Kennedy that drove Cuba closer to the Soviet Union and set the stage for the Missile Crisis",
        "The peaceful unification of Cuba with the United States",
        "The permanent demilitarization of the Caribbean"
      ],
      answer: "A diplomatic victory for President Kennedy that drove Cuba closer to the Soviet Union and set the stage for the Missile Crisis",
      explanation: "The botched invasion by CIA-trained Cuban exiles humiliated the Kennedy administration, pushed Castro to openly align with Moscow, and prompted Khrushchev to deploy nuclear missiles to Cuba to deter future invasions."
    },
    {
      id: 337,
      subject_id: "history",
      question: "What was the significance of the Limited Nuclear Test Ban Treaty signed in August 1963?",
      options: [
        "It banned all nuclear weapons testing completely worldwide",
        "It prohibited nuclear weapons tests in the atmosphere, in outer space, and underwater, easing Cold War tensions after the Missile Crisis",
        "It permitted the unlimited testing of intercontinental ballistic missiles",
        "It dissolved the United Nations atomic energy commission"
      ],
      answer: "It prohibited nuclear weapons tests in the atmosphere, in outer space, and underwater, easing Cold War tensions after the Missile Crisis",
      explanation: "Shaken by the Cuban Missile Crisis, the US, USSR, and Britain agreed to halt nuclear testing in environments that produced radioactive fallout, marking the first major step in arms control."
    },
    {
      id: 338,
      subject_id: "history",
      question: "What was the significance of the Helsinki Accords signed in 1975 during the era of *détente*?",
      options: [
        "They formally recognized post-World War II European borders and committed signatories to respect human rights and fundamental freedoms",
        "They established a military alliance between NATO and the Warsaw Pact",
        "They abolished all trade tariffs between capitalist and communist nations",
        "They granted the Soviet Union permanent ownership of West Berlin"
      ],
      answer: "They formally recognized post-World War II European borders and committed signatories to respect human rights and fundamental freedoms",
      explanation: "The Helsinki Accords were a high-water mark of *détente*. While the West accepted Soviet borders in Eastern Europe, the human rights provisions gave dissidents legal grounds to challenge authoritarian regimes."
    },
    {
      id: 339,
      subject_id: "history",
      question: "How did the Cold War manifest as a proxy conflict in Southern Africa during the 1975–1988 Angolan Civil War?",
      options: [
        "The US and USSR fought a direct naval battle off the coast of Luanda",
        "The MPLA was backed by Soviet arms and Cuban combat troops, while UNITA received covert support from the US and apartheid South Africa",
        "South Africa remained neutral while NATO occupied Angola",
        "Angola was peacefully partitioned into democratic and socialist zones"
      ],
      answer: "The MPLA was backed by Soviet arms and Cuban combat troops, while UNITA received covert support from the US and apartheid South Africa",
      explanation: "Angola became a major Cold War proxy battleground where Soviet and Cuban military intervention clashed with South African defense forces and US-backed rebel groups, tying regional liberation struggles directly into superpower rivalry."
    },
    {
      id: 340,
      subject_id: "history",
      question: "What role did intelligence agencies like the CIA and the KGB play during the Cold War?",
      options: [
        "They operated exclusively as diplomatic peace envoys",
        "They engaged in espionage, covert operations, assassinations, and overthrowing foreign governments deemed unfriendly to their respective superpowers",
        "They managed international trade tariffs and banking systems",
        "They enforced environmental regulations across Europe"
      ],
      answer: "They engaged in espionage, covert operations, assassinations, and overthrowing foreign governments deemed unfriendly to their respective superpowers",
      explanation: "The CIA and KGB waged a shadow war through espionage, recruitment of double agents, and covert regime changes in developing nations (such as Iran, Guatemala, and Chile) to secure strategic advantages."
    },
    {
      id: 341,
      subject_id: "history",
      question: "How did the Space Race (starting with Sputnik 1 in 1957) reflect Cold War ideological competition?",
      options: [
        "It was a peaceful scientific collaboration without any political motivations",
        "It served as a surrogate competition to demonstrate technological superiority, national prestige, and the perceived supremacy of capitalism versus communism",
        "It was used solely to establish global weather forecasting networks",
        "It led to the immediate disarmament of both superpowers"
      ],
      answer: "It served as a surrogate competition to demonstrate technological superiority, national prestige, and the perceived supremacy of capitalism versus communism",
      explanation: "Milestones like the Soviet launch of Sputnik and the US Apollo 11 moon landing were potent propaganda victories, proving that technological prowess in aerospace was inextricably linked to ideological dominance."
    },
    {
      id: 342,
      subject_id: "history",
      question: "What major economic challenges plagued the Soviet Union and Eastern bloc nations by the late 1970s and 1980s?",
      options: [
        "Hyper-inflation caused by excessive free-market speculation",
        "Severe technological stagnation, chronic shortages of consumer goods, and inefficient command economies bogged down by military spending",
        "An over-reliance on agricultural exports to Western Europe",
        "Complete economic collapse caused by joining the Marshall Plan"
      ],
      answer: "Severe technological stagnation, chronic shortages of consumer goods, and inefficient command economies bogged down by military spending",
      explanation: "Central planning failed to generate consumer innovation. Coupled with massive military spending to match the US and the cost of the arms race, the Soviet economy stagnated severely."
    },
    {
      id: 343,
      subject_id: "history",
      question: "What historical event on October 3, 1990, marked a definitive milestone in ending the Cold War division of Europe?",
      options: [
        "The signing of the Warsaw Pact renewal treaty",
        "The formal reunification of East and West Germany into a single sovereign state",
        "The partition of Berlin into four neutral zones",
        "The establishment of a communist government in West Germany"
      ],
      answer: "The formal reunification of East and West Germany into a single sovereign state",
      explanation: "Following the fall of the Berlin Wall in November 1989, diplomatic negotiations culminated in German reunification on October 3, 1990, effectively ending the physical division that began the Cold War."
    },
    {
      id: 344,
      subject_id: "history",
      question: "What happened to the Warsaw Pact and COMECON following the collapse of communist regimes in Eastern Europe?",
      options: [
        "They were expanded to include North American capitalist states",
        "They were formally dissolved in 1991 as Soviet influence collapsed and member states transitioned to market economies",
        "They merged with NATO to form a global peacekeeping force",
        "They relocated their headquarters to Washington, D.C."
      ],
      answer: "They were formally dissolved in 1991 as Soviet influence collapsed and member states transitioned to market economies",
      explanation: "With the collapse of communist governments in Eastern Europe, the institutional pillars of Soviet hegemony—the Warsaw Pact (military) and COMECON (economic)—were dissolved in mid-1991."
    },
    {
      id: 345,
      subject_id: "history",
      question: "How did the Cold War rivalry impact international sports, notably during the 1980 Moscow and 1984 Los Angeles Olympic Games?",
      options: [
        "Sports were completely isolated from political disputes",
        "Both superpowers utilized boycotts as political protests—the US led a boycott of Moscow 1980 over Afghanistan, and the USSR retaliated by boycotting LA 1984",
        "Olympic medals were awarded jointly to the US and USSR in the spirit of peace",
        "The Olympics were cancelled indefinitely by the United Nations"
      ],
      answer: "Both superpowers utilized boycotts as political protests—the US led a boycott of Moscow 1980 over Afghanistan, and the USSR retaliated by boycotting LA 1984",
      explanation: "The Olympics became another arena for Cold War ideological warfare, resulting in tit-for-tat boycotts that punished athletes and highlighted the deep political fracture of the globe."
    },
    {
      id: 346,
      subject_id: "history",
      question: "What role did Pope John Paul II play in challenging communist dominance in Eastern Europe during the 1980s?",
      options: [
        "He promoted Marxist-Leninist theology across Poland",
        "His historic papal visits to his native Poland inspired spiritual renewal and empowered the anti-communist Solidarity movement",
        "He brokered a military alliance between the Vatican and the Warsaw Pact",
        "He called for the immediate dissolution of the Catholic Church in Europe"
      ],
      answer: "His historic papal visits to his native Poland inspired spiritual renewal and empowered the anti-communist Solidarity movement",
      explanation: "As the first Polish pope, John Paul II provided moral and spiritual leadership that galvanized resistance against communist oppression, heavily boosting the Solidarity movement in Poland."
    },
    {
      id: 347,
      subject_id: "history",
      question: "How did China approach economic reform under leader Deng Xiaoping starting in the late 1970s while maintaining single-party communist rule?",
      options: [
        "By completely abolishing all industry and returning to subsistence farming",
        "By introducing 'Socialism with Chinese characteristics'—market reforms, special economic zones, and foreign investment while retaining political control",
        "By merging China's economy with the United States federal reserve",
        "By handing economic management over to the United Nations"
      ],
      answer: "By introducing 'Socialism with Chinese characteristics'—market reforms, special economic zones, and foreign investment while retaining political control",
      explanation: "Deng Xiaoping transformed China's economy by introducing capitalist market mechanisms and opening trade with the West, achieving rapid economic growth while strictly suppressing political dissent (such as at Tiananmen Square in 1989)."
    },
    {
      id: 348,
      subject_id: "history",
      question: "What was the Nixon Doctrine (Guam Doctrine) announced in 1969 regarding US foreign policy in Asia?",
      options: [
        "A pledge that the US would deploy millions of ground troops to every Asian conflict",
        "A declaration that Asian allies would be expected to take primary responsibility for their own military defense without massive US ground troop commitments",
        "An agreement to hand over all Pacific naval bases to the Soviet Union",
        "A treaty establishing a unified Asian communist federation"
      ],
      answer: "A declaration that Asian allies would be expected to take primary responsibility for their own military defense without massive US ground troop commitments",
      explanation: "In the wake of the Vietnam quagmire, the Nixon Doctrine signaled that the US would honor existing security treaties but would no longer dispatch massive ground armies to fight Asian wars, paving the way for Vietnamisation."
    },
    {
      id: 349,
      subject_id: "history",
      question: "How did the United States and Soviet Union utilize the United Nations Security Council veto during the Cold War?",
      options: [
        "They never used it because the UN was completely unanimous",
        "Both superpowers frequently exercised their veto power to block resolutions sponsored by the opposing bloc, causing frequent institutional deadlock",
        "They surrendered their veto power to the General Assembly",
        "They used it exclusively to fund international humanitarian relief"
      ],
      answer: "Both superpowers frequently exercised their veto power to block resolutions sponsored by the opposing bloc, causing frequent institutional deadlock",
      explanation: "The structural design of the UN Security Council meant that Cold War rivalries routinely paralyzed the organization, as Washington and Moscow regularly vetoed each other's initiatives."
    },
    {
      id: 350,
      subject_id: "history",
      question: "What core principles defined Western democratic liberalism in contrast to Soviet Marxism-Leninism during the Cold War?",
      options: [
        "A one-party state, central planning, and elimination of private property",
        "Representative democracy, multi-party elections, civil liberties, and free-market capitalism",
        "Absolute monarchy and state-enforced religious orthodoxy",
        "Feudal land tenure and agrarian self-sufficiency"
      ],
      answer: "Representative democracy, multi-party elections, civil liberties, and free-market capitalism",
      explanation: "Western liberalism championed individual rights, free elections, freedom of speech, and private enterprise as the pillars of society, contrasting sharply with communist collectivism and single-party authoritarian rule."
    },
    {
      id: 351,
      subject_id: "history",
      question: "How did Cold War policies affect Latin America through interventions such as in Chile or Nicaragua?",
      options: [
        "The US fostered flourishing, stable social democracies across the continent",
        "Both superpowers intervened covertly and overtly, leading to US-backed military coups against leftist governments and violent civil conflicts",
        "Latin America remained completely isolated from global superpower politics",
        "The Soviet Union established naval bases in every capital city"
      ],
      answer: "Both superpowers intervened covertly and overtly, leading to US-backed military coups against leftist governments and violent civil conflicts",
      explanation: "Under the Monroe Doctrine and containment policy, the US viewed Latin America as its 'backyard' and frequently intervened—such as supporting the 1973 coup against Salvador Allende in Chile—to prevent the spread of left-wing governments."
    },
    {
      id: 352,
      subject_id: "history",
      question: "What was the purpose of the 1968 Nuclear Non-Proliferation Treaty (NPT)?",
      options: [
        "To encourage every nation on Earth to build an atomic bomb",
        "To prevent the spread of nuclear weapons technology, promote peaceful uses of atomic energy, and pursue general disarmament",
        "To grant the Soviet Union a monopoly on nuclear power",
        "To ban all scientific research in physics worldwide"
      ],
      answer: "To prevent the spread of nuclear weapons technology, promote peaceful uses of atomic energy, and pursue general disarmament",
      explanation: "The NPT was a landmark international treaty designed to restrict the acquisition of nuclear weapons to the five recognized nuclear-weapon states (US, USSR, UK, France, and China) while promoting peaceful nuclear technology."
    },
    {
      id: 353,
      subject_id: "history",
      question: "What was the significance of the 1956 Suez Crisis in shifting global geopolitical power?",
      options: [
        "It proved that Britain and France remained the dominant global imperial superpowers",
        "It humiliated Britain and France when the US and USSR jointly forced their withdrawal, signaling that superpower hegemony had replaced European colonialism",
        "It resulted in the creation of a unified European communist state",
        "It triggered a direct nuclear exchange between Washington and Moscow"
      ],
      answer: "It humiliated Britain and France when the US and USSR jointly forced their withdrawal, signaling that superpower hegemony had replaced European colonialism",
      explanation: "When Britain, France, and Israel invaded Egypt over nationalization of the Suez Canal, financial pressure from the US and stern warnings from the USSR forced a humiliating retreat, marking the definitive end of European imperial dominance."
    },
    {
      id: 354,
      subject_id: "history",
      question: "What was the outcome of the 1955 Bandung Conference in Indonesia for developing nations?",
      options: [
        "It resulted in all Asian and African nations joining the Warsaw Pact",
        "It laid the groundwork for the Non-Aligned Movement, uniting newly decolonized nations in resisting colonialism and superpower domination",
        "It established American colonial rule across Southeast Asia",
        "It dissolved the United Nations"
      ],
      answer: "It laid the groundwork for the Non-Aligned Movement, uniting newly decolonized nations in resisting colonialism and superpower domination",
      explanation: "The Bandung Conference brought together leaders from Asia and Africa to promote economic and cultural cooperation and assert independence from both US and Soviet Cold War pressures."
    },
    {
      id: 355,
      subject_id: "history",
      question: "Why did the Soviet command economy struggle to produce consumer goods effectively by the 1980s?",
      options: [
        "Because factories were rewarded for meeting rigid quantitative quotas rather than consumer quality, leading to massive waste and shortages",
        "Because citizens refused to purchase manufactured items",
        "Because the US imposed a total trade embargo on all Soviet products",
        "Because agriculture generated more revenue than industry"
      ],
      answer: "Because factories were rewarded for meeting rigid quantitative quotas rather than consumer quality, leading to massive waste and shortages",
      explanation: "State-planning bureau structures focused on gross output targets (like tons of steel), resulting in mismanaged resources, poor quality, and frustrating shortages of basic everyday consumer goods for Soviet citizens."
    },
    {
      id: 356,
      subject_id: "history",
      question: "How did the Revolutions of 1989 unfold across Eastern Europe?",
      options: [
        "Through violent military invasions launched by NATO forces",
        "Through largely peaceful popular uprisings and mass protests that overthrew communist regimes after Gorbachev signaled the USSR would not intervene",
        "Through secret royal marriages uniting capitalist and communist dynasties",
        "Through UN-supervised democratic referendums organized by Moscow"
      ],
      answer: "Through largely peaceful popular uprisings and mass protests that overthrew communist regimes after Gorbachev signaled the USSR would not intervene",
      explanation: "When Gorbachev abandoned the Brezhnev Doctrine (refusing to send Soviet tanks to crush dissent), people across Poland, Hungary, East Germany, Czechoslovakia, and Bulgaria peacefully toppled their communist governments."
    },
    {
      id: 357,
      subject_id: "history",
      question: "What was the Commonwealth of Independent States (CIS) established in December 1991?",
      options: [
        "A military alliance created to invade Western Europe",
        "A loose regional association formed by former Soviet republics following the dissolution of the Soviet Union",
        "A capitalist trading bloc led by the United States",
        "A new communist party governing Moscow"
      ],
      answer: "A loose regional association formed by former Soviet republics following the dissolution of the Soviet Union",
      explanation: "Upon the official collapse of the USSR, leaders of the former Soviet republics established the CIS to coordinate economic, trade, and security policies during their messy transition to independent nationhood."
    },
    {
      id: 358,
      subject_id: "history",
      question: "What concept did the acronym 'MAD' (Mutually Assured Destruction) represent in Cold War military strategy?",
      options: [
        "A political protest movement against nuclear weapons",
        "A doctrine of military strategy in which a full-scale use of nuclear weapons by two opposing sides would result in the complete annihilation of both the attacker and the defender",
        "An economic treaty limiting conventional naval forces",
        "A secret agreement between NATO and the Warsaw Pact to disarm"
      ],
      answer: "A doctrine of military strategy in which a full-scale use of nuclear weapons by two opposing sides would result in the complete annihilation of both the attacker and the defender",
      explanation: "MAD ensured that any first strike would trigger immediate retaliation, resulting in total mutual suicide. This terrifying deterrence paradox helped prevent direct hot war between the superpowers."
    },
    {
      id: 359,
      subject_id: "history",
      question: "What role did cultural diplomacy and propaganda play during the Cold War?",
      options: [
        "They had no influence on public opinion abroad",
        "Both superpowers utilized broadcasting networks (like Voice of America and Radio Moscow), cultural exchanges, and art to spread ideological influence and win 'hearts and minds'",
        "They were banned by international law",
        "They were managed exclusively by neutral Red Cross organizations"
      ],
      answer: "Both superpowers utilized broadcasting networks (like Voice of America and Radio Moscow), cultural exchanges, and art to spread ideological influence and win 'hearts and minds'",
      explanation: "The Cold War was an ideological battle for global perception. Governments deployed jazz musicians, literature, exhibitions, and beamed radio broadcasts across the Iron Curtain to promote their way of life."
    },
    {
      id: 360,
      subject_id: "history",
      question: "How did the collapse of the Soviet Union transform the global geopolitical landscape in the early 1990s?",
      options: [
        "It established a stable multipolar balance of power across five equal superpowers",
        "It ended the bipolar Cold War era, leaving the United States as the world's sole remaining superpower in a brief unipolar moment",
        "It resulted in the immediate unification of all world governments under the United Nations",
        "It caused global economic isolation and the end of international trade"
      ],
      answer: "It ended the bipolar Cold War era, leaving the United States as the world's sole remaining superpower in a brief unipolar moment",
      explanation: "The sudden demise of the USSR removed the counterweight to American power, transforming international relations from a rigid bipolar standoff into a post-Cold War unipolar era."
    },
    {
      id: 401,
      subject_id: "history",
      question: "What was the primary objective of George Kennan's 'Long Telegram' and the resulting policy of containment?",
      options: [
        "To negotiate the immediate unification of the United States and the Soviet Union",
        "To prevent the further spread of Soviet communist influence globally without necessarily rolling it back where it already existed",
        "To establish a joint capitalist-communist command economy across Europe",
        "To dismantle the United Nations and replace it with a US-led military empire"
      ],
      answer: "To prevent the further spread of Soviet communist influence globally without necessarily rolling it back where it already existed",
      explanation: "Kennan's containment doctrine became the foundational pillar of US foreign policy throughout the Cold War, dictating that Soviet expansionism must be checked by firm diplomatic, economic, and military resistance."
    },
    {
      id: 402,
      subject_id: "history",
      question: "What was the ideological significance of Winston Churchill's 1946 'Iron Curtain' speech delivered in Fulton, Missouri?",
      options: [
        "It praised Joseph Stalin's democratic reforms in Eastern Europe",
        "It publicly declared that an ideological and physical boundary had descended across Europe, dividing the democratic West from the Soviet-dominated East",
        "It proposed the immediate military invasion of Moscow by NATO forces",
        "It announced the dissolution of the British Empire"
      ],
      answer: "It publicly declared that an ideological and physical boundary had descended across Europe, dividing the democratic West from the Soviet-dominated East",
      explanation: "Churchill's speech popularized the term 'Iron Curtain' and served as a wake-up call to the Western public regarding the hardening division of Europe and Soviet dominance in Eastern bloc states."
    },
    {
      id: 403,
      subject_id: "history",
      question: "How did the Truman Doctrine (1947) mark a fundamental shift in United States foreign policy?",
      options: [
        "It committed the US to a policy of permanent isolationism and non-intervention",
        "It pledged American financial and military aid to support free peoples resisting subjugation by armed minorities or outside pressures, specifically targeting communist expansion in Greece and Turkey",
        "It surrendered control of American foreign policy to the United Nations Security Council",
        "It abolished the United States Armed Forces"
      ],
      answer: "It pledged American financial and military aid to support free peoples resisting subjugation by armed minorities or outside pressures, specifically targeting communist expansion in Greece and Turkey",
      explanation: "The Truman Doctrine signaled the end of US isolationism, establishing that Washington would actively intervene and provide aid to nations threatened by communist takeovers."
    },
    {
      id: 404,
      subject_id: "history",
      question: "What was the purpose of the Molotov Plan and its institutional creation, the Council for Mutual Economic Assistance (Comecon)?",
      options: [
        "To distribute Marshall Plan funds to capitalist nations",
        "To coordinate economic development and trade within the Soviet bloc as a direct communist counterweight to the US Marshall Plan",
        "To oversee Western European military defense under NATO command",
        "To manage atomic weapons testing in Siberia"
      ],
      answer: "To coordinate economic development and trade within the Soviet bloc as a direct communist counterweight to the US Marshall Plan",
      explanation: "Recognizing the American Marshall Plan as an economic weapon to draw European nations into the Western sphere, Stalin created Comecon to integrate Eastern bloc economies strictly under Moscow's direction."
    },
    {
      id: 405,
      subject_id: "history",
      question: "What was the military significance of the formation of the North Atlantic Treaty Organization (NATO) in 1949 and the Warsaw Pact in 1955?",
      options: [
        "They were environmental protection agencies created to combat climate change",
        "They institutionalized the bipolar military division of Europe, where an attack on any member of one alliance was considered an attack on all",
        "They served as joint economic regulatory boards for international shipping",
        "They were cultural exchange organizations between capitalist and communist artists"
      ],
      answer: "They institutionalized the bipolar military division of Europe, where an attack on any member of one alliance was considered an attack on all",
      explanation: "NATO formed as a collective defense pact for Western nations against Soviet aggression, prompting Moscow to establish the Warsaw Pact in 1955, solidifying the two opposing military blocs of the Cold War."
    },
    {
      id: 406,
      subject_id: "history",
      question: "What caused the outbreak of the Korean War in June 1950, and how did it alter the nature of the Cold War?",
      options: [
        "North Korean communist forces, backed by the Soviet Union and China, invaded South Korea, transforming the Cold War from a European political standoff into a globalized military conflict",
        "South Korea invaded Vladivostok, triggering a nuclear exchange",
        "United Nations peacekeepers attacked Beijing without authorization",
        "Japan re-militarized and conquered the entire Korean peninsula"
      ],
      answer: "North Korean communist forces, backed by the Soviet Union and China, invaded South Korea, transforming the Cold War from a European political standoff into a globalized military conflict",
      explanation: "The invasion across the 38th parallel tested the containment policy in Asia, leading to direct US and UN military intervention and proving that the Cold War could turn into a bloody 'hot' proxy war."
    },
    {
      id: 407,
      subject_id: "history",
      question: "What was the significance of the 1956 Hungarian Revolution and its suppression by Soviet tanks?",
      options: [
        "It proved that the Soviet Union would tolerate democratic multi-party elections within the Eastern bloc",
        "It demonstrated that reform movements in satellite states would be crushed by military force to maintain Soviet hegemony, exposing the limits of de-stalinization",
        "It resulted in Hungary joining NATO and expelling all Soviet troops permanently",
        "It triggered World War III between the US and the USSR"
      ],
      answer: "It demonstrated that reform movements in satellite states would be crushed by military force to maintain Soviet hegemony, exposing the limits of de-stalinization",
      explanation: "When Imre Nagy's Hungarian government announced withdrawal from the Warsaw Pact, Soviet tanks rolled into Budapest, crushing the uprising and signaling that Moscow would not tolerate defection from the bloc."
    },
    {
      id: 408,
      subject_id: "history",
      question: "How did the launch of Sputnik 1 by the Soviet Union in October 1957 impact the United States?",
      options: [
        "It caused panic and a profound sense of technological inferiority, sparking the 'Space Race,' increased federal funding for science education, and the creation of NASA",
        "It had zero impact on American public policy or military planning",
        "It resulted in the immediate surrender of the United States to the Soviet Union",
        "It led to the cancellation of all American missile programs"
      ],
      answer: "It caused panic and a profound sense of technological inferiority, sparking the 'Space Race,' increased federal funding for science education, and the creation of NASA",
      explanation: "The world's first artificial satellite shocked the US establishment, creating fears that American technological supremacy had been eclipsed and driving massive investments in aerospace and defense."
    },
    {
      id: 409,
      subject_id: "history",
      question: "What was the U-2 Spy Plane Incident of May 1960 and how did it affect US-Soviet relations?",
      options: [
        "A peaceful commercial flight that established trade routes between Moscow and New York",
        "The shooting down of an American high-altitude reconnaissance aircraft over the Soviet Union, which derailed a major summit in Paris and escalated superpower tensions",
        "A joint scientific mission to study weather patterns in the stratosphere",
        "A defection flight by Soviet pilots carrying atomic secrets to Washington"
      ],
      answer: "The shooting down of an American high-altitude reconnaissance aircraft over the Soviet Union, which derailed a major summit in Paris and escalated superpower tensions",
      explanation: "Pilot Francis Gary Powers was captured deep inside Soviet airspace. When Washington was caught lying about the spy mission, Premier Khrushchev stormed out of the Paris Summit, severely freezing diplomatic ties."
    },
    {
      id: 410,
      subject_id: "history",
      question: "What was the outcome of the Bay of Pigs Invasion in April 1961 for the Kennedy administration?",
      options: [
        "It was a resounding military success that overthrew Fidel Castro",
        "It was a humiliating failure where CIA-backed Cuban exiles were captured or killed, pushing Castro closer to the Soviet Union for protection",
        "It resulted in the peaceful integration of Cuba into the Organization of American States",
        "It triggered a direct nuclear strike on Washington by Fidel Castro"
      ],
      answer: "It was a humiliating failure where CIA-backed Cuban exiles were captured or killed, pushing Castro closer to the Soviet Union for protection",
      explanation: "The botched invasion by CIA-trained exiles embarrassed the new Kennedy administration and cemented Fidel Castro's alignment with Moscow, setting the stage for the Cuban Missile Crisis."
    },
    {
      id: 411,
      subject_id: "history",
      question: "Why did East Germany and the Soviet Union construct the Berlin Wall in August 1961?",
      options: [
        "To celebrate the cultural unity of East and West Berlin",
        "To stop the massive, economically damaging brain drain of skilled professionals and citizens fleeing communist East Berlin for the capitalist West",
        "To serve as a border defense against an anticipated NATO ground invasion",
        "To regulate tourist traffic between France and Poland"
      ],
      answer: "To stop the massive, economically damaging brain drain of skilled professionals and citizens fleeing communist East Berlin for the capitalist West",
      explanation: "Before the wall went up, millions of East Germans had crossed into West Berlin to escape communist rule. The wall physically sealed the border, ending the exodus and becoming the ultimate symbol of the Iron Curtain."
    },
    {
      id: 412,
      subject_id: "history",
      question: "How was the Cuban Missile Crisis (October 1962) ultimately resolved?",
      options: [
        "Through a US nuclear strike that destroyed all missile sites in Cuba",
        "Through secret negotiations where the US agreed to a naval blockade, promised not to invade Cuba, and secretly agreed to remove US Jupiter missiles from Turkey, while Khrushchev withdrew Soviet missiles from Cuba",
        "Through the unconditional surrender of Fidel Castro to the United Nations",
        "Through the partitioning of Cuba into capitalist and communist zones"
      ],
      answer: "Through secret negotiations where the US agreed to a naval blockade, promised not to invade Cuba, and secretly agreed to remove US Jupiter missiles from Turkey, while Khrushchev withdrew Soviet missiles from Cuba",
      explanation: "The 13-day standoff brought the world closer to nuclear war than ever before. Diplomacy prevailed when Kennedy and Khrushchev reached a compromise that averted mutual annihilation."
    },
    {
      id: 413,
      subject_id: "history",
      question: "What was the concept of Mutual Assured Destruction (MAD) in nuclear strategy?",
      options: [
        "A doctrine stating that a full-scale use of nuclear weapons by two opposing sides would result in the complete annihilation of both the attacker and the defender, thereby deterring first strikes",
        "A plan to build underground bomb shelters for every citizen on Earth",
        "A treaty banning all conventional warfare between superpowers",
        "An agreement to share nuclear launch codes between NATO and the Warsaw Pact"
      ],
      answer: "A doctrine stating that a full-scale use of nuclear weapons by two opposing sides would result in the complete annihilation of both the attacker and the defender, thereby deterring first strikes",
      explanation: "MAD ensured that neither superpower would launch a nuclear first strike because retaliation would guarantee mutual suicide, maintaining a grim stability known as the 'balance of terror'."
    },
    {
      id: 414,
      subject_id: "history",
      question: "What triggered direct United States military escalation in the Vietnam War following the Gulf of Tonkin Resolution (1964)?",
      options: [
        "Alleged North Vietnamese attacks on US Navy destroyers in the Gulf of Tonkin, which gave President Lyndon B. Johnson broad congressional authority to wage war in Vietnam",
        "A direct Soviet invasion of Saigon",
        "The capture of the US Embassy in Hanoi",
        "A formal declaration of war signed by the United Nations"
      ],
      answer: "Alleged North Vietnamese attacks on US Navy destroyers in the Gulf of Tonkin, which gave President Lyndon B. Johnson broad congressional authority to wage war in Vietnam",
      explanation: "The Gulf of Tonkin incident served as the political catalyst for the massive deployment of US ground combat troops into Vietnam, escalating the conflict into a major Cold War quagmire."
    },
    {
      id: 415,
      subject_id: "history",
      question: "What was the significance of the Tet Offensive in January 1968 during the Vietnam War?",
      options: [
        "It was a total military victory for US forces that ended the war immediately",
        "It was a massive surprise coordinated attack by the Viet Cong and North African troops across South Vietnam; while a military defeat for the communists, it shattered American public confidence in the war",
        "It marked the capture of Hanoi by American Marines",
        "It resulted in the signing of a permanent peace treaty in Geneva"
      ],
      answer: "It was a massive surprise coordinated attack by the Viet Cong and North African troops across South Vietnam; while a military defeat for the communists, it shattered American public confidence in the war",
      explanation: "Though tactically repulsed, the Tet Offensive proved to the American public that victory was not 'just around the corner' as military leaders claimed, drastically turning domestic opinion against the war."
    },
    {
      id: 416,
      subject_id: "history",
      question: "What caused the Sino-Soviet Split during the late 1950s and 1960s?",
      options: [
        "Ideological disputes over de-stalinization, differing approaches to Western imperialism ('peaceful coexistence' vs. militant revolution), and national border tensions between Mao Zedong and Nikita Khrushchev",
        "A trade war over agricultural grain exports",
        "A dispute over maritime borders in the Atlantic Ocean",
        "China's decision to join NATO"
      ],
      answer: "Ideological disputes over de-stalinization, differing approaches to Western imperialism ('peaceful coexistence' vs. militant revolution), and national border tensions between Mao Zedong and Nikita Khrushchev",
      explanation: "The communist monolith shattered as China accused the Soviet Union of revisionism after Stalin's death, fracturing the global communist movement into competing Moscow-led and Beijing-led factions."
    },
    {
      id: 417,
      subject_id: "history",
      question: "What was the 'Prague Spring' of 1968 and how did the Soviet Union respond to it?",
      options: [
        "A democratic political liberalization movement in Czechoslovakia led by Alexander Dubček ('socialism with a human face'), which was crushed by a Warsaw Pact military invasion invoking the Brezhnev Doctrine",
        "A cultural music festival sponsored jointly by the CIA and KGB",
        "An economic reform program that transitioned Czechoslovakia to capitalism",
        "A peaceful agreement to reunite Germany under NATO"
      ],
      answer: "A democratic political liberalization movement in Czechoslovakia led by Alexander Dubček ('socialism with a human face'), which was crushed by a Warsaw Pact military invasion invoking the Brezhnev Doctrine",
      explanation: "Dubček's reforms granting freedom of speech and press alarmed Moscow. The Soviet invasion and the subsequent Brezhnev Doctrine declared that Moscow had the right to intervene in any socialist state threatening communist party rule."
    },
    {
      id: 418,
      subject_id: "history",
      question: "What was the diplomatic strategy behind US President Richard Nixon’s historic visit to the People's Republic of China in February 1972?",
      options: [
        "To form a military alliance to invade the Soviet Union",
        "To exploit the Sino-Soviet Split by driving a diplomatic wedge between Beijing and Moscow, pressuring the USSR into arms control negotiations and isolating North Vietnam",
        "To surrender American capitalist interests to Mao Zedong",
        "To negotiate joint control over the United Nations"
      ],
      answer: "To exploit the Sino-Soviet Split by driving a diplomatic wedge between Beijing and Moscow, pressuring the USSR into arms control negotiations and isolating North Vietnam",
      explanation: "Nixon's visit to China was a masterstroke of realpolitik. By opening dialogue with Beijing, Washington shifted the global strategic triangle in its favor, pressuring Moscow to pursue Détente."
    },
    {
      id: 419,
      subject_id: "history",
      question: "What were the Strategic Arms Limitation Talks (SALT I) signed in 1972 during the era of Détente?",
      options: [
        "Treaties between the US and USSR that froze the number of strategic ballistic missile launchers and limited anti-ballistic missile (ABM) systems, easing nuclear tensions",
        "An agreement to destroy all nuclear weapons worldwide within five years",
        "A pact banning all conventional military forces in Europe",
        "A joint space exploration program to land humans on Mars"
      ],
      answer: "Treaties between the US and USSR that froze the number of strategic ballistic missile launchers and limited anti-ballistic missile (ABM) systems, easing nuclear tensions",
      explanation: "SALT I represented a major milestone in Détente (relaxation of tensions), establishing the first formal bilateral limits on nuclear arsenals between Washington and Moscow."
    },
    {
      id: 420,
      subject_id: "history",
      question: "How did the Soviet invasion of Afghanistan in December 1979 impact the Cold War?",
      options: [
        "It marked the high point of Détente and led to closer cooperation between Washington and Moscow",
        "It shattered Détente, prompted President Carter to boycott the 1980 Moscow Olympics, led to US grain embargoes, and initiated covert CIA backing for Afghan Mujahideen resistance",
        "It resulted in the peaceful surrender of Afghanistan to the United Nations",
        "It triggered a direct nuclear exchange between the US and the USSR"
      ],
      answer: "It shattered Détente, prompted President Carter to boycott the 1980 Moscow Olympics, led to US grain embargoes, and initiated covert CIA backing for Afghan Mujahideen resistance",
      explanation: "Moscow's intervention in Afghanistan ended the Détente era. Often called the Soviet Union's 'Vietnam', the quagmire drained Soviet resources and hardened US resolve under Reagan."
    },
    {
      id: 421,
      subject_id: "history",
      question: "What was the significance of the Solidarity (Solidarność) trade union movement in Poland during the early 1980s?",
      options: [
        "It was an official state-run organ of the Polish Communist Party",
        "Led by Lech Wałęsa, it was the first independent, mass trade union in the Soviet bloc, utilizing strikes to challenge communist authority and lay groundwork for the fall of communism in Poland",
        "It was a capitalist corporate cartel funded by the CIA",
        "It successfully established a monarchy in Warsaw"
      ],
      answer: "Led by Lech Wałęsa, it was the first independent, mass trade union in the Soviet bloc, utilizing strikes to challenge communist authority and lay groundwork for the fall of communism in Poland",
      explanation: "Solidarity galvanized Polish workers against economic hardship and totalitarian control. Despite martial law crackdowns, it survived to peacefully dismantle communist rule at the end of the decade."
    },
    {
      id: 422,
      subject_id: "history",
      question: "What was Mikhail Gorbachev’s policy of *Glasnost* and *Perestroika* introduced in the mid-1980s?",
      options: [
        "Military buildup and nuclear expansion",
        "*Glasnost* (political openness/transparency) and *Perestroika* (economic restructuring aimed at decentralization and modernization)",
        "Strict censorship and the reinstatement of Stalinist labor camps",
        "Total economic isolation from Western capitalist markets"
      ],
      answer: "*Glasnost* (political openness/transparency) and *Perestroika* (economic restructuring aimed at decentralization and modernization)",
      explanation: "Gorbachev introduced these reforms to rescue the stagnating Soviet economy and society. Instead, free speech (*glasnost*) uncorked decades of suppressed nationalism and dissent, ultimately collapsing the USSR."
    },
    {
      id: 423,
      subject_id: "history",
      question: "What was the significance of the Intermediate-Range Nuclear Forces (INF) Treaty signed by Ronald Reagan and Mikhail Gorbachev in 1987?",
      options: [
        "It authorized the deployment of new nuclear missiles in space",
        "It eliminated an entire class of nuclear weapons, requiring both superpowers to destroy all ground-based ballistic and cruise missiles with ranges between 500 and 5,500 kilometers",
        "It permitted unlimited nuclear testing underground",
        "It merged the US and Soviet nuclear command systems"
      ],
      answer: "It eliminated an entire class of nuclear weapons, requiring both superpowers to destroy all ground-based ballistic and cruise missiles with ranges between 500 and 5,500 kilometers",
      explanation: "The INF Treaty was a landmark disarmament agreement that went further than any previous pact by dismantling existing nuclear delivery systems rather than just capping future growth."
    },
    {
      id: 424,
      subject_id: "history",
      question: "What triggered the opening and fall of the Berlin Wall on November 9, 1989?",
      options: [
        "A direct NATO military assault on East Berlin",
        "A botched press conference announcement by an East German official regarding relaxed travel regulations, which led thousands of East Berliners to flood the checkpoints and dismantle the wall",
        "An agreement signed by Fidel Castro and Ronald Reagan",
        "A catastrophic earthquake that destroyed the concrete barrier"
      ],
      answer: "A botched press conference announcement by an East German official regarding relaxed travel regulations, which led thousands of East Berliners to flood the checkpoints and dismantle the wall",
      explanation: "Günter Schabowski mistakenly announced that citizens could travel to the West 'immediately'. Overwhelmed border guards opened the gates, leading to joyous scenes as crowds breached the wall."
    },
    {
      id: 425,
      subject_id: "history",
      question: "How did the 'Sinatra Doctrine' mark a decisive break from the Brezhnev Doctrine under Mikhail Gorbachev?",
      options: [
        "It forced all Warsaw Pact nations to adopt American jazz music",
        "It allowed Warsaw Pact member states to determine their own political futures ('doing it their way') without Soviet military intervention, enabling the 1989 revolutions across Eastern Europe",
        "It mandated the immediate military conquest of Western Europe",
        "It banned all political elections in the Soviet Union"
      ],
      answer: "It allowed Warsaw Pact member states to determine their own political futures ('doing it their way') without Soviet military intervention, enabling the 1989 revolutions across Eastern Europe",
      explanation: "Witty press secretary Gennadi Gerasimov quipped that Moscow had adopted the 'Sinatra Doctrine' (referencing 'My Way'), signaling that the USSR would no longer use military force to prop up communist regimes in Eastern Europe."
    },
    {
      id: 426,
      subject_id: "history",
      question: "What was the significance of the formal German Reunification on October 3, 1990?",
      options: [
        "East and West Germany were reunited into a single sovereign democratic state within NATO, marking the definitive closure of the post-WWII division of Europe",
        "Germany was partitioned into four separate capitalist and socialist zones",
        "Berlin was established as the permanent capital of the Soviet Union",
        "Germany was disarmed and placed under United Nations trusteeship"
      ],
      answer: "East and West Germany were reunited into a single sovereign democratic state within NATO, marking the definitive closure of the post-WWII division of Europe",
      explanation: "With Soviet acquiescence and Western diplomatic approval, the German Democratic Republic (East Germany) dissolved and absorbed into the Federal Republic of Germany (West Germany)."
    },
    {
      id: 427,
      subject_id: "history",
      question: "What formal event marked the ultimate end of the Soviet Union on December 25–26, 1991?",
      options: [
        "Mikhail Gorbachev resigned as president, the Soviet hammer-and-sickle flag was lowered from the Kremlin for the last time, and power was transferred to the Russian Federation",
        "A joint US-Soviet military parade in Red Square",
        "The signing of a peace treaty in Berlin with NATO",
        "The reelection of Joseph Stalin as General Secretary"
      ],
      answer: "Mikhail Gorbachev resigned as president, the Soviet hammer-and-sickle flag was lowered from the Kremlin for the last time, and power was transferred to the Russian Federation",
      explanation: "Following the Belavezha Accords and the secession of Soviet republics, Gorbachev resigned, the USSR officially ceased to exist, and the Cold War came to a definitive end."
    },
    {
      id: 428,
      subject_id: "history",
      question: "What was the role of Cominform (Communist Information Bureau), established in 1947?",
      options: [
        "To coordinate propaganda and ideological unity among European communist parties under Soviet direction in response to the Marshall Plan",
        "To negotiate disarmament treaties with the United States",
        "To manage capitalist stock markets in Eastern Europe",
        "To oversee agricultural production in Latin America"
      ],
      answer: "To coordinate propaganda and ideological unity among European communist parties under Soviet direction in response to the Marshall Plan",
      explanation: "Cominform was created by Stalin to ensure that European communist parties toed the Moscow line and actively resisted American economic and political influence."
    },
    {
      id: 429,
      subject_id: "history",
      question: "What was the strategic aim of President Ronald Reagan’s 'Reagan Doctrine' during the 1980s?",
      options: [
        "To isolate the United States from all international conflicts",
        "To provide overt and covert financial and military aid to anti-communist resistance movements (such as the Contras, Mujahideen, and UNITA) fighting Soviet-backed governments in the Third World",
        "To establish a joint socialist federation with the Soviet Union",
        "To dismantle NATO and withdraw troops from Europe"
      ],
      answer: "To provide overt and covert financial and military aid to anti-communist resistance movements (such as the Contras, Mujahideen, and UNITA) fighting Soviet-backed governments in the Third World",
      explanation: "The Reagan Doctrine rolled back Soviet influence in developing regions by supporting insurgencies fighting against left-wing regimes in Latin America, Africa, and Asia."
    },
    {
      id: 430,
      subject_id: "history",
      question: "What core structural conflict defined the entire span of the Cold War (1947–1991) between the United States and the Soviet Union?",
      options: [
        "A dispute over territorial fishing rights in the Pacific Ocean",
        "An existential global struggle between two opposing socio-economic and political systems: Western capitalist democracy versus Soviet communist totalitarianism",
        "A disagreement over Olympic athletic hosting duties",
        "A competition to colonize Antarctica"
      ],
      answer: "An existential global struggle between two opposing socio-economic and political systems: Western capitalist democracy versus Soviet communist totalitarianism",
      explanation: "The Cold War was fundamentally an ideological, economic, and geopolitical clash between two superpowers championing irreconcilable visions for the post-war world order."
    }
  ],
  'Civil-Rights-Movement-(USA)': [
    {
      id: 461,
      subject_id: "history",
      question: "What was the primary political objective of the 1963 March on Washington for Jobs and Freedom?",
      options: [
        "To demand the passage of comprehensive civil rights legislation, an end to segregation in public schools, and a federal minimum wage increase",
        "To declare the immediate secession of Southern states from the Union",
        "To establish a separate Marxist government in Washington, D.C.",
        "To merge all labor unions into a single corporate trust"
      ],
      answer: "To demand the passage of comprehensive civil rights legislation, an end to segregation in public schools, and a federal minimum wage increase",
      explanation: "Under the CAPS curriculum, the 1963 March on Washington is studied as a pivotal mass demonstration that pressured the Kennedy administration to push for robust federal civil rights laws."
    },
    {
      id: 462,
      subject_id: "history",
      question: "What was the primary focus of the 1965 Selma to Montgomery voting rights marches in Alabama?",
      options: [
        "To protest against high property taxes in northern cities",
        "To highlight systemic voter suppression and demand federal legislation to protect African American voting rights following years of intimidation and literacy tests",
        "To integrate municipal swimming pools in Selma",
        "To campaign for the election of a Republican governor in Alabama"
      ],
      answer: "To highlight systemic voter suppression and demand federal legislation to protect African American voting rights following years of intimidation and literacy tests",
      explanation: "The Selma marches focused intensely on the denial of franchise to Black citizens in the South, directly leading to the passage of the Voting Rights Act of 1965."
    },
    {
      id: 463,
      subject_id: "history",
      question: "What was the significance of 'Bloody Sunday' on March 7, 1965, during the first attempt to march from Selma to Montgomery?",
      options: [
        "A peaceful march that was met with brutal police violence on the Edmund Pettus Bridge, generating national outrage and mobilizing public support for voting rights",
        "An armed clash between the Black Panthers and the US Army",
        "A peaceful legislative assembly that granted universal suffrage unanimously",
        "A race riot in downtown Selma caused by labor disputes"
      ],
      answer: "A peaceful march that was met with brutal police violence on the Edmund Pettus Bridge, generating national outrage and mobilizing public support for voting rights",
      explanation: "State troopers and deputized posses tear-gassed and beat peaceful marchers on the Edmund Pettus Bridge. Televised footage shocked viewers worldwide and forced federal intervention."
    },
    {
      id: 464,
      subject_id: "history",
      question: "How did the 1963 Birmingham Campaign (Project C) utilize public marches and demonstrations as a tactical strategy?",
      options: [
        "By avoiding all public spaces and negotiating exclusively behind closed doors",
        "By organizing nonviolent marches, sit-ins, and economic boycotts to intentionally overwhelm local jails and force white authorities to negotiate desegregation",
        "By launching armed guerrilla raids against police stations",
        "By appealing exclusively to foreign courts for intervention"
      ],
      answer: "By organizing nonviolent marches, sit-ins, and economic boycotts to intentionally overwhelm local jails and force white authorities to negotiate desegregation",
      explanation: "Led by Martin Luther King Jr. and the SCLC, Birmingham was chosen as one of the most segregated cities in America to test nonviolent direct action through disciplined street marches."
    },
    {
      id: 465,
      subject_id: "history",
      question: "What was the role of the 'Children's Crusade' during the May 1963 Birmingham campaign?",
      options: [
        "School students skipped classes to participate in peaceful marches, enduring arrests and police brutality from Commissioner Bull Connor to energize the movement",
        "Children were recruited to run military combat missions against local militias",
        "A government-sponsored youth education initiative in public schools",
        "A youth branch of the Ku Klux Klan organized to counter integration"
      ],
      answer: "School students skipped classes to participate in peaceful marches, enduring arrests and police brutality from Commissioner Bull Connor to energize the movement",
      explanation: "When adult protesters hesitated due to job threats, organizers mobilized thousands of school children for marches, whose televised arrests by police dogs and fire hoses created a profound moral crisis."
    },
    {
      id: 466,
      subject_id: "history",
      question: "What was the Meredith March Against Fear in June 1966, and why is it historically significant?",
      options: [
        "A march initiated by James Meredith to encourage Black voter registration in Mississippi, during which he was shot, leading various civil rights organizations to complete the march and spark the 'Black Power' slogan",
        "A military parade celebrating the victory of the Union Army",
        "An anti-war march protesting US involvement in Vietnam",
        "A celebration of agricultural workers' unions in California"
      ],
      answer: "A march initiated by James Meredith to encourage Black voter registration in Mississippi, during which he was shot, leading various civil rights organizations to complete the march and spark the 'Black Power' slogan",
      explanation: "The Meredith March became a historical turning point where ideological divisions between nonviolent integrationists and militant Black Power advocates (like Stokely Carmichael) came to the forefront."
    },
    {
      id: 467,
      subject_id: "history",
      question: "What was the role of the Women's Political Council (WPC) in initiating the Montgomery Bus Boycott in 1955?",
      options: [
        "They organized the political campaign for Rosa Parks' election to city council",
        "They had already spent years planning and laying the groundwork for a mass boycott of segregated city buses before Rosa Parks' arrest catalyzed action",
        "They served as legal advisors to the transit corporation",
        "They functioned as an auxiliary wing of the Ku Klux Klan"
      ],
      answer: "They had already spent years planning and laying the groundwork for a mass boycott of segregated city buses before Rosa Parks' arrest catalyzed action",
      explanation: "Led by figures like Jo Ann Robinson, Black women educators in Montgomery formed the WPC and immediately mimeographed thousands of leaflets calling for the bus boycott the night Parks was arrested."
    },
    {
      id: 468,
      subject_id: "history",
      question: "What was the tactical significance of the Albany Movement (1961–1962) in Georgia for civil rights activists?",
      options: [
        "It was an absolute victory that completely eliminated segregation across the state in one week",
        "It served as a sobering learning experience where police chief Laurie Pritchett countered nonviolent marches with mass arrests without brutality, neutralizing the movement's media impact",
        "It established the first independent communist government in the US South",
        "It resulted in the immediate election of Martin Luther King Jr. as mayor"
      ],
      answer: "It served as a sobering learning experience where police chief Laurie Pritchett countered nonviolent marches with mass arrests without brutality, neutralizing the movement's media impact",
      explanation: "Activists learned vital strategic lessons from Albany—specifically the need to target specific discriminatory practices and provoke visible overreactions from segregationist police (like in Birmingham)."
    },
    {
      id: 469,
      subject_id: "history",
      question: "How did the Freedom Rides of 1961 challenge segregation in the American South?",
      options: [
        "By staging massive protest marches across Washington, D.C.",
        "Through interracial groups riding interstate buses into the Deep South to challenge segregated terminal facilities in direct defiance of local Jim Crow ordinances",
        "By filing class-action lawsuits in municipal traffic courts",
        "By boycotting all automobile manufacturers in Detroit"
      ],
      answer: "Through interracial groups riding interstate buses into the Deep South to challenge segregated terminal facilities in direct defiance of local Jim Crow ordinances",
      explanation: "Organized by CORE, the Freedom Rides tested federal rulings banning segregation in interstate travel, enduring savage KKK beatings and firebombings that forced federal enforcement."
    },
    {
      id: 470,
      subject_id: "history",
      question: "What was the significance of the Greensboro sit-ins starting on February 1, 1960?",
      options: [
        "They marked the beginning of student-led, nonviolent direct-action protests that quickly spread across the South, inspiring the formation of the Student Nonviolent Coordinating Committee (SNCC)",
        "They were agricultural strikes organized by farm laborers",
        "They resulted in the immediate nationalization of all restaurant chains",
        "They were armed protests led by the Black Panther Party"
      ],
      answer: "They marked the beginning of student-led, nonviolent direct-action protests that quickly spread across the South, inspiring the formation of the Student Nonviolent Coordinating Committee (SNCC)",
      explanation: "Four Black college students sitting at a Woolworth's lunch counter ignited a youth-led wave of sit-ins that mobilized thousands of students to challenge public segregation directly."
    },
    {
      id: 471,
      subject_id: "history",
      question: "What role did freedom songs and gospel music play during civil rights marches and campaigns?",
      options: [
        "They were used exclusively for commercial radio broadcasting and fundraising",
        "They sustained morale, unified crowds during tense confrontations, communicated nonviolent discipline, and transformed traditional spirituals into anthems of resistance",
        "They were banned by civil rights leaders for being too disruptive",
        "They served as secret military code for armed insurrections"
      ],
      answer: "They sustained morale, unified crowds during tense confrontations, communicated nonviolent discipline, and transformed traditional spirituals into anthems of resistance",
      explanation: "Songs like 'We Shall Overcome' provided emotional resilience and psychological strength to marchers facing police dogs, tear gas, and violent mobs."
    },
    {
      id: 472,
      subject_id: "history",
      question: "How did mass media (television and print journalism) influence the outcome of civil rights marches in the 1960s?",
      options: [
        "By ignoring all protests and refusing to publish photographs",
        "By broadcasting graphic images of police brutality against peaceful marchers into American living rooms, generating national moral outrage and accelerating federal legislation",
        "By heavily censoring all civil rights activism under wartime emergency laws",
        "By promoting segregationist propaganda exclusively"
      ],
      answer: "By broadcasting graphic images of police brutality against peaceful marchers into American living rooms, generated national moral outrage and accelerating federal legislation",
      explanation: "Television cameras exposed the violent reality of Jim Crow to the world during events like the Birmingham Campaign and Selma marches, making political inaction untenable for Washington."
    },
    {
      id: 473,
      subject_id: "history",
      question: "What was the Poor People's Campaign launched by Martin Luther King Jr. and the SCLC in 1968?",
      options: [
        "A campaign focused on economic justice, poverty alleviation, and advocating for a guaranteed annual income through multi-racial marches and encampments in Washington, D.C.",
        "A tax cut proposal for wealthy corporate executives",
        "An armed militia campaign to overthrow state governments",
        "A program to relocate impoverished families to rural farming communes"
      ],
      answer: "A campaign focused on economic justice, poverty alleviation, and advocating for a guaranteed annual income through multi-racial marches and encampments in Washington, D.C.",
      explanation: "In his final years, MLK broadened his focus from legal segregation to systemic economic inequality, planning a massive march of poor Americans of all races before his assassination."
    },
    {
      id: 474,
      subject_id: "history",
      question: "What was the role of the Deacons for Defense and Justice in relation to civil rights marches in the South?",
      options: [
        "A black self-defense organization formed to protect civil rights workers, voter registration drives, and peaceful marches from Ku Klux Klan violence when local police failed to act",
        "A police unit tasked with arresting civil rights organizers",
        "A federal agency overseeing school integration",
        "A religious choir that sang at SCLC rallies"
      ],
      answer: "A black self-defense organization formed to protect civil rights workers, voter registration drives, and peaceful marches from Ku Klux Klan violence when local police failed to act",
      explanation: "While organizations like SCLC practiced strict nonviolence, armed groups like the Deacons for Defense provided critical protection for community marches and activists against white supremacist terror."
    },
    {
      id: 475,
      subject_id: "history",
      question: "What was the historical importance of the Mississippi Freedom Summer project of 1964?",
      options: [
        "A summer vacation program for northern politicians",
        "A massive voter registration drive and educational campaign that brought hundreds of college volunteers to Mississippi, resulting in violent KKK backlash and the creation of the MFDP",
        "A military training operation in the Mississippi Delta",
        "A state-sponsored agricultural festival celebrating cotton harvests"
      ],
      answer: "A massive voter registration drive and educational campaign that brought hundreds of college volunteers to Mississippi, resulting in violent KKK backlash and the creation of the MFDP",
      explanation: "Freedom Summer confronted the most entrenched state of disenfranchisement, enduring murders and church bombings while registering voters and challenging segregated political structures."
    },
    {
      id: 476,
      subject_id: "history",
      question: "What was the purpose of the Student Nonviolent Coordinating Committee (SNCC) organizing voter registration marches in rural counties like Lowndes County, Alabama?",
      options: [
        "To build independent local political power, leading to the creation of the Lowndes County Freedom Organization (whose symbol inspired the Black Panther party)",
        "To campaign for the re-election of segregationist politicians",
        "To establish commercial agricultural businesses",
        "To draft new state constitutions without federal oversight"
      ],
      answer: "To build independent local political power, leading to the creation of the Lowndes County Freedom Organization (whose symbol inspired the Black Panther party)",
      explanation: "SNCC organizers helped rural Black citizens organize politically, demonstrating that grassroots mobilization could challenge white-dominated electoral machines."
    },
    {
      id: 477,
      subject_id: "history",
      question: "How did southern white governors and segregationist politicians respond to civil rights marches and federal desegregation orders?",
      options: [
        "By immediately complying with federal laws and funding integrated schools",
        "Through policies of 'massive resistance,' enacting state laws to block integration, deploying police and National Guard units, and encouraging white supremacist opposition",
        "By resigning from office to join civil rights organizations",
        "By petitioning the United Nations for secession"
      ],
      answer: "Through policies of 'massive resistance,' enacting state laws to block integration, deploying police and National Guard units, and encouraging white supremacist opposition",
      explanation: "Figures like George Wallace ('Segregation now, segregation tomorrow, segregation forever!') and Orval Faubus fought integration tooth and nail using state legislative and executive power."
    },
    {
      id: 478,
      subject_id: "history",
      question: "What was the significance of the 1963 March on Washington in relation to civil rights legislation?",
      options: [
        "It had no impact on federal lawmaking",
        "It successfully built bipartisan pressure that culminated in the passage of the landmark Civil Rights Act of 1964 and the Voting Rights Act of 1965",
        "It resulted in the repeal of the US Constitution",
        "It forced the immediate resignation of the US Supreme Court"
      ],
      answer: "It successfully built bipartisan pressure that culminated in the passage of the landmark Civil Rights Act of 1964 and the Voting Rights Act of 1965",
      explanation: "The sheer scale, dignity, and peaceful discipline of the 250,000 marchers at the Lincoln Memorial solidified public support for Kennedy's stalled civil rights bill."
    },
    {
      id: 479,
      subject_id: "history",
      question: "What was the role of Ella Baker in shaping the philosophy of the Civil Rights Movement and organizations like SNCC?",
      options: [
        "She advocated for hierarchical, top-down leadership controlled strictly by elite male ministers",
        "She championed 'participatory democracy,' mentoring young student activists to build grassroots, decentralized leadership where ordinary people drove their own liberation",
        "She served as legal counsel for the NAACP Supreme Court defense team",
        "She financed segregationist political campaigns in North Carolina"
      ],
      answer: "She championed 'participatory democracy,' mentoring young student activists to build grassroots, decentralized leadership where ordinary people drove their own liberation",
      explanation: "Ella Baker was a master organizer who helped found SCLC, SNCC, and NAACP branches, famously stating that 'strong people don't need strong leaders,' empowering students during sit-ins and marches."
    },
    {
      id: 480,
      subject_id: "history",
      question: "Why was Martin Luther King Jr. in Memphis, Tennessee, in April 1968 when he was assassinated?",
      options: [
        "To vacation at a luxury resort",
        "To support striking African American sanitation workers who were marching for fair wages, safe working conditions, and union recognition",
        "To deliver a speech endorsing a presidential candidate",
        "To inspect local military bases"
      ],
      answer: "To support striking African American sanitation workers who were marching for fair wages, safe working conditions, and union recognition",
      explanation: "King went to Memphis to lead a march in support of striking garbage workers whose motto was 'I Am a Man,' linking civil rights directly to economic dignity and labor rights."
    },
    {
      id: 481,
      subject_id: "history",
      question: "What was the ideological shift represented by the transition from the 1963 March on Washington to the rise of Black Power marches in 1966?",
      options: [
        "A shift from integration, interracial coalition, and Christian nonviolence toward Black self-determination, racial pride, economic autonomy, and armed self-defense",
        "A complete abandonment of political activism in favor of quietism",
        "A merger of civil rights groups with the Republican Party",
        "A return to agrarian subsistence farming in the North"
      ],
      answer: "A shift from integration, interracial coalition, and Christian nonviolence toward Black self-determination, racial pride, economic autonomy, and armed self-defense",
      explanation: "Frustrated by persistent white violence, slow legal reform, and urban poverty, younger activists shifted from appealing to white moral conscience via marches to demanding autonomous Black Power."
    },
    {
      id: 482,
      subject_id: "history",
      question: "What role did religious institutions, particularly Black churches, play in organizing civil rights marches across the American South?",
      options: [
        "They prohibited political discussions and focused strictly on theology",
        "They served as organizational hubs, meeting places, recruitment centers, and financial storehouses that sustained boycotts, marches, and nonviolent workshops",
        "They functioned as military armories for armed insurrection",
        "They operated as state tax collection agencies"
      ],
      answer: "They served as organizational hubs, meeting places, recruitment centers, and financial storehouses that sustained boycotts, marches, and nonviolent workshops",
      explanation: "The Black church provided the institutional infrastructure, moral authority, and courageous leadership (such as MLK, Ralph Abernathy, and Fred Shuttlesworth) necessary to sustain mass marches."
    },
    {
      id: 483,
      subject_id: "history",
      question: "What was the significance of the 1963 Birmingham campaign's 'Letter from Birmingham Jail' regarding the timing of civil rights marches?",
      options: [
        "It argued that oppressed people cannot wait indefinitely for 'convenient' times and that nonviolent direct action creates necessary tension to force negotiation",
        "It ordered all activists to halt marches immediately and rely solely on courts",
        "It called for an armed uprising against municipal authorities",
        "It proposed postponing civil rights legislation for ten years"
      ],
      answer: "It argued that oppressed people cannot wait indefinitely for 'convenient' times and that nonviolent direct action creates necessary tension to force negotiation",
      explanation: "Responding to white clergymen who urged patience, MLK defended the urgency of direct action marches, famously declaring that 'justice too long delayed is justice denied.'"
    },
    {
      id: 484,
      subject_id: "history",
      question: "What was the historical impact of the 1965 Selma voting rights marches on federal legislation?",
      options: [
        "They led directly to President Johnson pushing through the Voting Rights Act of 1965, which banned literacy tests and provided federal examiners to register Black voters",
        "They resulted in the repeal of the 14th Amendment",
        "They had no legislative consequences",
        "They caused Congress to reduce federal funding for public education"
      ],
      answer: "They led directly to President Johnson pushing through the Voting Rights Act of 1965, which banned literacy tests and provided federal examiners to register Black voters",
      explanation: "The brutality witnessed during the Selma marches galvanized national pressure, prompting LBJ to declare 'We shall overcome' in a televised address to Congress and sign the Voting Rights Act."
    },
    {
      id: 485,
      subject_id: "history",
      question: "How did Malcolm X view integrationist civil rights marches and demonstrations during the early 1960s?",
      options: [
        "He participated actively as a leading organizer alongside Martin Luther King Jr.",
        "He criticized integration as a false dream, arguing that Black Americans should focus on self-reliance, building their own institutions, and defending themselves rather than begging for integration into a corrupt society",
        "He funded peaceful sit-ins across northern universities",
        "He served as a legal consultant for the NAACP"
      ],
      answer: "He criticized integration as a false dream, arguing that Black Americans should focus on self-reliance, building their own institutions, and defending themselves rather than begging for integration into a corrupt society",
      explanation: "As a Nation of Islam spokesman, Malcolm X famously mocked integration, asking why Black people would want to integrate into a 'burning house,' advocating instead for Black nationalism."
    },
    {
      id: 486,
      subject_id: "history",
      question: "What was the role of Diane Nash in the student-led civil rights movement in Nashville and the Freedom Rides?",
      options: [
        "She coordinated disciplined nonviolent sit-in training for students and fiercely insisted on continuing the Freedom Rides after violent attacks in Alabama",
        "She led armed patrols in urban neighborhoods",
        "She managed corporate investments for civil rights organizations",
        "She opposed student activism and advocated for gradualism"
      ],
      answer: "She coordinated disciplined nonviolent sit-in training for students and fiercely insisted on continuing the Freedom Rides after violent attacks in Alabama",
      explanation: "Diane Nash was a fearless strategist and leader in SNCC who organized Nashville lunch counter sit-ins and told Attorney General Robert Kennedy that the Freedom Riders would not yield to violence."
    },
    {
      id: 487,
      subject_id: "history",
      question: "What was the significance of the 1968 Olympic Project for Human Rights protest by Tommie Smith and John Carlos?",
      options: [
        "It brought international attention to American racism, poverty, and civil rights struggles by utilizing the global platform of the medal podium to raise gloved fists for Black Power",
        "It raised funds for NASA space missions",
        "It protested against amateur sports regulations",
        "It campaigned for the inclusion of new athletic events"
      ],
      answer: "It brought international attention to American racism, poverty, and civil rights struggles by utilizing the global platform of the medal podium to raise gloved fists for Black Power",
      explanation: "Smith and Carlos used the Mexico City Olympics to broadcast the struggle of African Americans to a global audience, enduring severe personal backlash and suspension for their defiance."
    },
    {
      id: 488,
      subject_id: "history",
      question: "What was the primary goal of the 1963 Birmingham economic boycott organized alongside street marches?",
      options: [
        "To force white-owned downtown businesses to desegregate lunch counters and hire Black employees by withholding African American purchasing power",
        "To bankrupt all small businesses in the state of Alabama",
        "To establish state-owned monopolies on retail goods",
        "To protest against international trade tariffs"
      ],
      answer: "To force white-owned downtown businesses to desegregate lunch counters and hire Black employees by withholding African American purchasing power",
      explanation: "Economic boycotts during the Easter shopping season hit downtown merchants hard, complementing public marches and creating intense commercial pressure for desegregation agreements."
    },
    {
      id: 489,
      subject_id: "history",
      question: "How did the 1964 Civil Rights Act impact public accommodations and employment across the United States?",
      options: [
        "It reinforced Jim Crow laws in southern states",
        "It legally outlawed discrimination based on race, color, religion, sex, or national origin in hotels, restaurants, theaters, and employment, striking down legal segregation",
        "It mandated racial segregation in federal agencies",
        "It abolished all private property rights"
      ],
      answer: "It legally outlawed discrimination based on race, color, religion, sex, or national origin in hotels, restaurants, theaters, and employment, striking down legal segregation",
      explanation: "The Civil Rights Act of 1964 was the legislative masterpiece resulting from decades of legal battles, grassroots protests, sit-ins, and public marches."
    },
    {
      id: 490,
      subject_id: "history",
      question: "What was the overarching historical legacy of the American Civil Rights and Black Power movements on global human rights struggles?",
      options: [
        "They inspired international anti-colonial and liberation struggles, including the anti-apartheid movement in South Africa, by demonstrating how organized mass resistance can dismantle systemic oppression",
        "They resulted in the isolation of the United States from global politics",
        "They proved that nonviolent protest is entirely ineffective against totalitarian states",
        "They had no impact beyond the borders of North America"
      ],
      answer: "They inspired international anti-colonial and liberation struggles, including the anti-apartheid movement in South Africa, by demonstrating how organized mass resistance can dismantle systemic oppression",
      explanation: "The tactics, literature, songs, and philosophies of the US Civil Rights and Black Power movements reverberated globally, serving as a powerful blueprint for oppressed groups worldwide."
    },
    {
      id: 491,
      subject_id: "history",
      question: "How did the 1963 March on Washington serve as a catalyst for the passage of the Civil Rights Act of 1964?",
      options: [
        "By demonstrating disciplined national unity and mounting intense political pressure on the Kennedy and Johnson administrations to enact comprehensive anti-discrimination legislation",
        "By forcing the immediate dissolution of the United States Congress",
        "By establishing a separate federal tax code for minority businesses",
        "By mandating the resignation of all southern governors"
      ],
      answer: "By demonstrating disciplined national unity and mounting intense political pressure on the Kennedy and Johnson administrations to enact comprehensive anti-discrimination legislation",
      explanation: "The massive peaceful turnout and televised broadcast of the march solidified public support, making legislative inaction politically untenable for federal lawmakers."
    },
    {
      id: 492,
      subject_id: "history",
      question: "What was the primary organizational role of James Farmer and the Congress of Racial Equality (CORE) during the early 1960s?",
      options: [
        "Pioneering direct-action tactics such as interracial freedom rides and lunch counter sit-ins to challenge segregated interstate travel and public accommodations",
        "Drafting tax reform bills for northern municipal governments",
        "Operating agricultural cooperatives in rural Alaska",
        "Serving as an advisory board for military recruitment"
      ],
      answer: "Pioneering direct-action tactics such as interracial freedom rides and lunch counter sit-ins to challenge segregated interstate travel and public accommodations",
      explanation: "CORE played a vital role in planning and executing direct action campaigns that tested federal desegregation rulings across the Deep South."
    },
    {
      id: 493,
      subject_id: "history",
      question: "What was Bayard Rustin's strategic contribution as the chief logistical organizer of the 1963 March on Washington?",
      options: [
        "He masterminded the complex operational planning, transportation networks, security protocols, and schedule that kept 250,000 marchers organized and peaceful",
        "He commanded the National Guard units deployed to protect the Lincoln Memorial",
        "He authored the legal briefs submitted to the Supreme Court",
        "He managed the financial investments of southern plantation owners"
      ],
      answer: "He masterminded the complex operational planning, transportation networks, security protocols, and schedule that kept 250,000 marchers organized and peaceful",
      explanation: "As an openly gay, veteran pacifist organizer, Bayard Rustin coordinated the monumental logistics required for the historic march."
    },
    {
      id: 494,
      subject_id: "history",
      question: "What was the significance of the founding of the Student Nonviolent Coordinating Committee (SNCC) in April 1960?",
      options: [
        "It gave young student activists an independent organizational vehicle to sustain sit-ins, voter registration drives, and community-led grassroots marches",
        "It created a lobbying firm for corporate manufacturing interests",
        "It served as the official youth wing of the Ku Klux Klan",
        "It functioned as a federal agency for public school funding"
      ],
      answer: "It gave young student activists an independent organizational vehicle to sustain sit-ins, voter registration drives, and community-led grassroots marches",
      explanation: "SNCC empowered a younger, militant generation of activists who spearheaded direct-action campaigns in dangerous rural counties across the South."
    },
    {
      id: 495,
      subject_id: "history",
      question: "How did the Southern Christian Leadership Conference (SCLC) utilize church networks during major civil rights campaigns?",
      options: [
        "By leveraging the moral authority, financial resources, and physical meeting spaces of Black churches to organize nonviolent workshops and mass marches",
        "By using church buildings exclusively as private worship sites detached from community issues",
        "By collecting state taxes for municipal governments",
        "By operating military armories for armed insurrections"
      ],
      answer: "By leveraging the moral authority, financial resources, and physical meeting spaces of Black churches to organize nonviolent workshops and mass marches",
      explanation: "The SCLC anchored its leadership in the Black church network, providing essential infrastructure for sustained nonviolent protest."
    },
    {
      id: 496,
      subject_id: "history",
      question: "What was the response of Attorney General Robert F. Kennedy and the federal government to the violent attacks on the Freedom Riders in Alabama in 1961?",
      options: [
        "Deploying federal marshals to protect the riders and petitioning the Interstate Commerce Commission to issue strict regulations banning segregation in interstate transit facilities",
        "Ordering the immediate arrest of all civil rights activists",
        "Abolishing the Department of Justice",
        "Enacting laws to legalize local segregation ordinances"
      ],
      answer: "Deploying federal marshals to protect the riders and petitioning the Interstate Commerce Commission to issue strict regulations banning segregation in interstate transit facilities",
      explanation: "Despite initial reluctance, violent attacks on Freedom Riders forced the Kennedy administration to intervene and enforce federal desegregation mandates."
    },
    {
      id: 497,
      subject_id: "history",
      question: "What role did the 1964 St. Augustine movement in Florida play in the legislative battle for the Civil Rights Act?",
      options: [
        "Dr. King and local activists staged targeted marches and swim-ins that generated national headlines just as the Senate filibuster of the Civil Rights Act reached its climax",
        "It was a peaceful agricultural strike with no political impact",
        "It resulted in the immediate secession of Florida from the Union",
        "It established a state-run segregated university system"
      ],
      answer: "Dr. King and local activists staged targeted marches and swim-ins that generated national headlines just as the Senate filibuster of the Civil Rights Act reached its climax",
      explanation: "St. Augustine highlighted persistent white supremacist violence in Florida, pressuring wavering senators to break the filibuster and pass the Civil Rights Act."
    },
    {
      id: 498,
      subject_id: "history",
      question: "How did Gloria Richardson and the Cambridge movement in Maryland challenge racial inequality in 1963?",
      options: [
        "By leading militant desegregation marches and demanding socio-economic parity, demonstrating that civil rights struggles extended beyond the deep South into the Mid-Atlantic",
        "By filing quiet lawsuits in municipal traffic court",
        "By supporting segregationist political candidates",
        "By boycotting public education entirely"
      ],
      answer: "By leading militant desegregation marches and demanding socio-economic parity, demonstrating that civil rights struggles extended beyond the deep South into the Mid-Atlantic",
      explanation: "Gloria Richardson led the Cambridge Nonviolent Action Committee, emphasizing self-defense alongside public protest to achieve civil rights."
    },
    {
      id: 499,
      subject_id: "history",
      question: "What was the main focus of the 1966 Chicago Freedom Movement led by Martin Luther King Jr. and local leaders?",
      options: [
        "Challenging systemic housing discrimination, slum landlord practices, unequal education, and job discrimination in northern urban centers",
        "Campaigning for lower tariffs on agricultural imports",
        "Protesting against federal space exploration funding",
        "Demanding the relocation of all residents to rural communes"
      ],
      answer: "Challenging systemic housing discrimination, slum landlord practices, unequal education, and job discrimination in northern urban centers",
      explanation: "The Chicago Freedom Movement brought civil rights marches and open-housing campaigns to northern cities, exposing de facto segregation outside the South."
    },
    {
      id: 500,
      subject_id: "history",
      question: "What was the significance of Dr. Martin Luther King Jr.'s final 'I've Been to the Mountaintop' speech delivered in Memphis on April 3, 1968?",
      options: [
        "It rallied striking sanitation workers and reflected on mortality and the ongoing struggle for economic justice just hours before his assassination",
        "It announced his retirement from political activism",
        "It endorsed a presidential candidate from the Republican Party",
        "It called for an armed military coup against local government"
      ],
      answer: "It rallied striking sanitation workers and reflected on mortality and the ongoing struggle for economic justice just hours before his assassination",
      explanation: "In his final address, King connected civil rights with worker dignity, inspiring the striking sanitation workers marching in Memphis."
    },
    {
      id: 501,
      subject_id: "history",
      question: "How did President Dwight D. Eisenhower respond to the crisis surrounding the integration of Central High School in Little Rock, Arkansas, in 1957?",
      options: [
        "By federalizing the Arkansas National Guard and dispatching the 101st Airborne Division to protect the Little Rock Nine and enforce federal court desegregation orders",
        "By ordering the permanent closure of all public high schools in the state",
        "By supporting Governor Orval Faubus's segregationist policies",
        "By petitioning the United Nations to intervene"
      ],
      answer: "By federalizing the Arkansas National Guard and dispatching the 101st Airborne Division to protect the Little Rock Nine and enforce federal court desegregation orders",
      explanation: "Eisenhower used executive military power to ensure that federal court orders overriding state resistance to school integration were upheld."
    },
    {
      id: 502,
      subject_id: "history",
      question: "What occurred when James Meredith attempted to enroll as the first African American student at the University of Mississippi (Ole Miss) in 1962?",
      options: [
        "Riots erupted on campus, prompting President John F. Kennedy to dispatch federal marshals and troops to restore order and secure his enrollment",
        "University officials welcomed him with a formal parade",
        "The federal government cancelled all university funding indefinitely",
        "The Supreme Court reversed its previous desegregation rulings"
      ],
      answer: "Riots erupted on campus, prompting President John F. Kennedy to dispatch federal marshals and troops to restore order and secure his enrollment",
      explanation: "State resistance and violent riots forced federal intervention to uphold Meredith's constitutional right to education."
    },
    {
      id: 503,
      subject_id: "history",
      question: "What was the strategic function of the NAACP Legal Defense and Educational Fund, led by Thurgood Marshall?",
      options: [
        "To wage a calculated, multi-decade legal campaign through the federal courts that ultimately dismantled the legal doctrine of 'separate but equal' in *Brown v. Board of Education*",
        "To organize armed militias in southern states",
        "To lobby for corporate monopolies in northern manufacturing",
        "To manage voter registration lotteries"
      ],
      answer: "To wage a calculated, multi-decade legal campaign through the federal courts that ultimately dismantled the legal doctrine of 'separate but equal' in *Brown v. Board of Education*",
      explanation: "Thurgood Marshall and his legal team systematically challenged segregation laws in courts, laying the constitutional foundation for direct-action marches."
    },
    {
      id: 504,
      subject_id: "history",
      question: "What was the significance of the Civil Rights Act of 1957, the first civil rights legislation passed since Reconstruction?",
      options: [
        "It established the Civil Rights Commission to investigate voter suppression and created a civil rights division within the Department of Justice",
        "It immediately integrated all public schools across the American South",
        "It outlawed all private property ownership in southern states",
        "It granted universal suffrage to all citizens without restriction"
      ],
      answer: "It established the Civil Rights Commission to investigate voter suppression and created a civil rights division within the Department of Justice",
      explanation: "Though modest in its immediate enforcement power, the 1957 Act created institutional mechanisms within the federal government to monitor civil rights violations."
    },
    {
      id: 505,
      subject_id: "history",
      question: "How did the ratification of the 24th Amendment in January 1964 impact voter participation in federal elections?",
      options: [
        "It abolished poll taxes in federal elections, removing a major financial barrier used by southern states to disenfranchise poor Black and white voters",
        "It mandated literacy tests for all voters nationwide",
        "It lowered the voting age to 18 years old",
        "It established property ownership requirements for voting"
      ],
      answer: "It abolished poll taxes in federal elections, removing a major financial barrier used by southern states to disenfranchise poor Black and white voters",
      explanation: "The 24th Amendment struck down poll taxes, which had long served as an economic tool of voter suppression in southern states."
    },
    {
      id: 506,
      subject_id: "history",
      question: "What was the main conclusion of the Kerner Commission Report issued in 1968 regarding urban riots and civil unrest?",
      options: [
        "That American society was moving toward 'two societies, one black, one white—separate and unequal,' and that systemic racism and police brutality were root causes of urban revolts",
        "That all unrest was caused entirely by foreign communist agitators",
        "That public education spending should be reduced to zero",
        "That urban areas should be permanently evacuated"
      ],
      answer: "That American society was moving toward 'two societies, one black, one white—separate and unequal,' and that systemic racism and police brutality were root causes of urban revolts",
      explanation: "The Kerner Commission provided a sobering official analysis of urban rebellions, attributing them to entrenched racial inequality and institutional neglect."
    },
    {
      id: 507,
      subject_id: "history",
      question: "What were the core tenets of the Black Panther Party, founded in Oakland, California, in 1966 by Huey Newton and Bobby Seale?",
      options: [
        "Armed self-defense against police brutality, community survival programs (like free breakfast for children), and socialist community control",
        "Strict adherence to nonviolent Christian integration strategies",
        "Campaigning for the election of conservative southern politicians",
        "Promoting corporate capitalism and deregulation"
      ],
      answer: "Armed self-defense against police brutality, community survival programs (like free breakfast for children), and socialist community control",
      explanation: "The Black Panthers represented the militant Black Power wing, combining armed neighborhood patrols with vital survival programs for impoverished urban communities."
    },
    {
      id: 508,
      subject_id: "history",
      question: "What was the objective of the 1972 National Black Political Convention held in Gary, Indiana?",
      options: [
        "To unite diverse African American political factions, draft an independent Black political agenda, and debate electoral strategies versus nationalist autonomy",
        "To endorse the platform of the Ku Klux Klan",
        "To dissolve all municipal governments in the Midwest",
        "To establish a corporate conglomerate for retail trade"
      ],
      answer: "To unite diverse African American political factions, draft an independent Black political agenda, and debate electoral strategies versus nationalist autonomy",
      explanation: "The Gary Convention brought together thousands of Black activists, politicians, and nationalists to chart an independent political course."
    },
    {
      id: 509,
      subject_id: "history",
      question: "What was the role of white civil rights volunteers (such as Schwerner, Chaney, and Goodman) during Freedom Summer in Mississippi (1964)?",
      options: [
        "They worked alongside local Black activists to register voters and teach in 'Freedom Schools,' drawing national attention when they were murdered by the KKK",
        "They served as commanding officers in state militia units",
        "They managed corporate financial donations from northern banks",
        "They lobbied Congress to repeal civil rights laws"
      ],
      answer: "They worked alongside local Black activists to register voters and teach in 'Freedom Schools,' drawing national attention when they were murdered by the KKK",
      explanation: "The participation of northern white students alongside local Black organizers brought intense national media scrutiny to Mississippi's reign of white supremacist terror."
    },
    {
      id: 510,
      subject_id: "history",
      question: "What was the impact of Septima Clark and the Citizenship Schools in the Sea Islands and across the South?",
      options: [
        "They taught literacy skills specifically designed to help African Americans pass discriminatory voter registration tests, empowering grassroots community leadership",
        "They operated elite finishing schools for wealthy politicians",
        "They served as military academies for state guards",
        "They functioned as commercial trade training centers for factory workers"
      ],
      answer: "They taught literacy skills specifically designed to help African Americans pass discriminatory voter registration tests, empowering grassroots community leadership",
      explanation: "Septima Clark's Citizenship Schools were instrumental in overcoming voter suppression by teaching literacy and civic rights at the grassroots level."
    },
    {
      id: 511,
      subject_id: "history",
      question: "How did Mahatma Gandhi's philosophy of *Satyagraha* influence leaders of the American Civil Rights Movement, such as Martin Luther King Jr. and James Lawson?",
      options: [
        "It provided a practical methodology and moral framework for nonviolent direct action, showing how mass civil disobedience could dismantle unjust political systems",
        "It advocated for armed guerrilla warfare against occupying armies",
        "It promoted political isolation and economic self-sufficiency without protest",
        "It focused exclusively on courtroom litigation"
      ],
      answer: "It provided a practical methodology and moral framework for nonviolent direct action, showing how mass civil disobedience could dismantle unjust political systems",
      explanation: "MLK and other leaders studied Gandhi's principles of nonviolent resistance, successfully adapting them to confront Jim Crow segregation in America."
    },
    {
      id: 512,
      subject_id: "history",
      question: "What was the national impact of the brutal murder of 14-year-old Emmett Till in Mississippi in August 1955?",
      options: [
        "Openly published photographs of his mutilated body in the Black press galvanized public outrage, energizing a new generation of activists to ignite the modern Civil Rights Movement",
        "It was quickly forgotten and had no effect on public consciousness",
        "It led to the immediate passage of federal anti-lynching legislation",
        "It caused civil rights organizations to abandon direct action"
      ],
      answer: "Openly published photographs of his mutilated body in the Black press galvanized public outrage, energizing a new generation of activists to ignite the modern Civil Rights Movement",
      explanation: "Emmett Till's murder and the subsequent acquittal of his killers exposed the brutal reality of Jim Crow justice, deeply radicalizing Black youth across America."
    },
    {
      id: 513,
      subject_id: "history",
      question: "What role did northern religious coalitions and student interfaith groups play in southern civil rights campaigns?",
      options: [
        "They provided financial backing, moral solidarity, and physical participation by traveling south to join marches, sit-ins, and voter registration drives",
        "They actively funded segregationist legal defenses",
        "They promoted the complete separation of religion from social issues",
        "They operated commercial shipping businesses"
      ],
      answer: "They provided financial backing, moral solidarity, and physical participation by traveling south to join marches, sit-ins, and voter registration drives",
      explanation: "Interfaith coalitions brought national religious conscience into the struggle, supporting southern activists with resources and manpower."
    },
    {
      id: 514,
      subject_id: "history",
      question: "What were the primary rhetorical themes of Martin Luther King Jr.'s 'I Have a Dream' speech at the 1963 March on Washington?",
      options: [
        "An appeal to the foundational promises of the US Constitution and Declaration of Independence as a 'promissory note' guaranteeing freedom and equality for all citizens",
        "A declaration of armed secession from the Union",
        "A call for the establishment of a socialist dictatorship",
        "A demand for the deportation of white citizens"
      ],
      answer: "An appeal to the foundational promises of the US Constitution and Declaration of Independence as a 'promissory note' guaranteeing freedom and equality for all citizens",
      explanation: "King eloquently invoked American democratic ideals to shame the nation into fulfilling its promises of racial equality."
    },
    {
      id: 515,
      subject_id: "history",
      question: "What was the consequence of the Supreme Court's 'all deliberate speed' ruling in *Brown v. Board of Education II* (1955)?",
      options: [
        "It provided southern segregationists a vague legal loophole to enact 'massive resistance' and stall school desegregation for over a decade",
        "It resulted in the immediate and complete desegregation of every school in America within six months",
        "It abolished public education nationwide",
        "It mandated federal funding for private religious schools only"
      ],
      answer: "It provided southern segregationists a vague legal loophole to enact 'massive resistance' and stall school desegregation for over a decade",
      explanation: "The lack of a strict enforcement deadline in *Brown II* allowed white southern authorities to delay integration through procedural hurdles and school closures."
    },
    {
      id: 516,
      subject_id: "history",
      question: "How did local movement centers in rural towns like McComb, Mississippi, sustain grassroots organizing despite extreme danger?",
      options: [
        "Through the courage of local sharecroppers and SNCC field secretaries who built indigenous leadership networks to withstand KKK intimidation and economic reprisals",
        "By relying exclusively on federal military protection",
        "By operating underground manufacturing businesses",
        "By avoiding all political engagement with local authorities"
      ],
      answer: "Through the courage of local sharecroppers and SNCC field secretaries who built indigenous leadership networks to withstand KKK intimidation and economic reprisals",
      explanation: "Grassroots organizing in dangerous rural areas depended heavily on the resilience of local residents working alongside dedicated young field secretaries."
    },
    {
      id: 517,
      subject_id: "history",
      question: "How did international decolonization movements across Africa during the late 1950s and 1960s influence African American civil rights activism?",
      options: [
        "They inspired civil rights and Black Power activists by demonstrating that European colonial empires could be successfully overthrown, fostering a global anti-racist consciousness",
        "They encouraged African Americans to emigrate en masse to Europe",
        "They had no cultural or political impact on the United States",
        "They reinforced support for segregationist policies in America"
      ],
      answer: "They inspired civil rights and Black Power activists by demonstrating that European colonial empires could be successfully overthrown, fostering a global anti-racist consciousness",
      explanation: "African independence struggles provided a powerful psychological boost and international perspective to Black Americans fighting white supremacy at home."
    },
    {
      id: 518,
      subject_id: "history",
      question: "What was the significance of the 'preclearance' provision (Section 5) of the Voting Rights Act of 1965?",
      options: [
        "It required jurisdictions with a history of voter suppression to submit any proposed voting law changes to the federal government for approval before enactment",
        "It required all voters to pass a federal literacy examination",
        "It permitted state governors to veto federal civil rights laws",
        "It abolished elections in southern states permanently"
      ],
      answer: "It required jurisdictions with a history of voter suppression to submit any proposed voting law changes to the federal government for approval before enactment",
      explanation: "Section 5 was the crown jewel of the Voting Rights Act, preventing discriminatory counties from continuously inventing new barriers to minority voting."
    },
    {
      id: 519,
      subject_id: "history",
      question: "What was the role of the Black Arts Movement, associated with figures like Amiri Baraka, alongside the Black Power political movement?",
      options: [
        "To create revolutionary literature, theater, visual art, and music that celebrated Black cultural identity and fostered racial pride independent of white cultural standards",
        "To produce commercial advertising for corporate retail brands",
        "To lobby for federal subsidies for classical European art",
        "To censor all forms of public expression"
      ],
      answer: "To create revolutionary literature, theater, visual art, and music that celebrated Black cultural identity and fostered racial pride independent of white cultural standards",
      explanation: "The Black Arts Movement provided the cultural and aesthetic counterpart to the political demands of the Black Power era."
    },
    {
      id: 520,
      subject_id: "history",
      question: "What is the enduring historical legacy of the American Civil Rights and Black Power movements on global human rights advocacy?",
      options: [
        "They established powerful legal precedents, moral frameworks, and tactical blueprints for nonviolent and direct-action resistance utilized by marginalized groups worldwide",
        "They proved that legal reform is entirely impossible in democratic societies",
        "They resulted in the political isolation of the Americas from international law",
        "They had zero relevance outside the borders of the United States"
      ],
      answer: "They established powerful legal precedents, moral frameworks, and tactical blueprints for nonviolent and direct-action resistance utilized by marginalized groups worldwide",
      explanation: "The strategies, literature, and victories of the US civil rights struggles continue to serve as a universal reference point for social justice movements globally."
    }
  ],
  'Black-Consciousness-Movement-(South-Africa)': [
    {
      id: 521,
      subject_id: "history",
      question: "Who was the primary student leader and intellectual founder of the South African Students' Organisation (SASO) established in 1968?",
      options: [
        "Steve Biko",
        "Nelson Mandela",
        "Oliver Tambo",
        "Robert Sobukwe"
      ],
      answer: "Steve Biko",
      explanation: "Under the CAPS curriculum, Steve Biko is studied as the central figure of the Black Consciousness Movement who co-founded SASO after breaking away from the white-dominated NUSAS."
    },
    {
      id: 522,
      subject_id: "history",
      question: "Why did Black university students break away from the National Union of South African Students (NUSAS) to form SASO in 1968?",
      options: [
        "They felt white liberal students could not truly understand or authentically represent the lived experiences and oppression of Black South Africans under apartheid",
        "NUSAS ordered all Black students to join political parties in exile",
        "The apartheid government banned white students from attending universities",
        "NUSAS merged directly with the ruling National Party"
      ],
      answer: "They felt white liberal students could not truly understand or authentically represent the lived experiences and oppression of Black South Africans under apartheid",
      explanation: "SASO argued that Black students needed their own autonomous organization to foster self-reliance and psychological liberation without white paternalism."
    },
    {
      id: 523,
      subject_id: "history",
      question: "What was the core philosophical meaning behind the famous Black Consciousness slogan coined by Steve Biko: 'Black man, you are on your own'?",
      options: [
        "That Black South Africans must shed their psychological inferiority, unite, and liberate themselves through self-reliance rather than waiting for white liberals to save them",
        "An instruction for Black citizens to emigrate to neighboring African countries",
        "A directive to form military alliances with foreign colonial powers",
        "An endorsement of total political isolation from international trade"
      ],
      answer: "That Black South Africans must shed their psychological inferiority, unite, and liberate themselves through self-reliance rather than waiting for white liberals to save them",
      explanation: "Black Consciousness emphasized psychological liberation, arguing that mental emancipation from the shackles of apartheid was the crucial first step toward political freedom."
    },
    {
      id: 524,
      subject_id: "history",
      question: "What role did the Black Community Programmes (BCP), established by BCM leaders in the early 1970s, play in local communities?",
      options: [
        "They established self-help community projects such as healthcare clinics, literacy programs, and cooperatives to foster economic and social self-reliance",
        "They served as recruitment centers for the apartheid police force",
        "They functioned exclusively as tax collection agencies for municipal councils",
        "They operated private luxury resorts for white business executives"
      ],
      answer: "They established self-help community projects such as healthcare clinics, literacy programs, and cooperatives to foster economic and social self-reliance",
      explanation: "BCP projects like the Zanempilo Community Health Centre demonstrated Black Consciousness in action by meeting practical community needs independently."
    },
    {
      id: 525,
      subject_id: "history",
      question: "How did the apartheid state respond to the growing influence of the Black Consciousness Movement in October 1977?",
      options: [
        "It banned 17 key Black Consciousness organizations (including SASO and BCP) and clamped down heavily on activists following the death of Steve Biko",
        "It invited BCM leaders to participate in the cabinet",
        "It granted full universal suffrage to all adult citizens",
        "It nationalized all universities across South Africa"
      ],
      answer: "It banned 17 key Black Consciousness organizations (including SASO and BCP) and clamped down heavily on activists following global outrage over Steve Biko's murder",
      explanation: "Following Steve Biko's brutal death in police detention in September 1977, the state launched a massive crackdown, banning BCM structures on 19 October 1977 (Black Wednesday)."
    },
    {
      id: 526,
      subject_id: "history",
      question: "What philosophical and political influences shaped the development of the Black Consciousness Movement in South Africa?",
      options: [
        "Frantz Fanon's writings on decolonization, American Black Power ideology, Negritude, and Christian liberation theology",
        "Strict adherence to British imperial legal theory and absolute monarchy",
        "Marxist-Leninist doctrines translated directly from the Soviet Union",
        "Isolationist agrarian philosophies from 19th-century Europe"
      ],
      answer: "Frantz Fanon's writings on decolonization, American Black Power ideology, Negritude, and Christian liberation theology",
      explanation: "BCM theorists synthesized international anti-colonial literature and Black Power struggles in the US to articulate a uniquely South African liberation philosophy."
    },
    {
      id: 527,
      subject_id: "history",
      question: "What was the significance of the 1972 SASO-led student strikes and rallies held at the University of the North (Turfloop)?",
      options: [
        "They led to the expulsion of student leader Onkgopotse Tiro, sparking nationwide student protests and consolidating SASO's militant influence across campuses",
        "They resulted in the immediate integration of all university faculties",
        "They were agricultural strikes organized by farm workers",
        "They led to the appointment of Steve Biko as university chancellor"
      ],
      answer: "They led to the expulsion of student leader Onkgopotse Tiro, sparking nationwide student protests and consolidating SASO's militant influence across campuses",
      explanation: "Tiro's graduation speech criticizing Bantu Education led to his expulsion, which galvanized student resistance across tertiary institutions."
    },
    {
      id: 528,
      subject_id: "history",
      question: "How did the Black Consciousness Movement define the term 'Black' in the South African context?",
      options: [
        "Anyone who was legally or socially discriminated against as a non-white under apartheid, including Africans, Coloureds, and Indians united in a common struggle",
        "Only individuals belonging to indigenous Nguni-speaking ethnic groups",
        "Exclusively individuals born outside the borders of South Africa",
        "Any citizen who owned rural agricultural land"
      ],
      answer: "Anyone who was legally or socially discriminated against as a non-white under apartheid, including Africans, Coloureds, and Indians united in a common struggle",
      explanation: "BCM redefined 'Black' as a political identity of solidarity for all oppressed groups, rejecting the apartheid regime's divisive racial categorization."
    },
    {
      id: 529,
      subject_id: "history",
      question: "What was the direct impact of Steve Biko's death in detention on September 12, 1977?",
      options: [
        "It generated massive international condemnation, united internal resistance, and exposed the brutal reality of police interrogation under apartheid",
        "It caused anti-apartheid organizations to disband permanently",
        "It prompted the government to abolish the security police",
        "It had no political significance domestically or internationally"
      ],
      answer: "It generated massive international condemnation, united internal resistance, and exposed the brutal reality of police interrogation under apartheid",
      explanation: "Biko's murder turned him into an international martyr of the anti-apartheid struggle, permanently damaging the regime's moral legitimacy."
    },
    {
      id: 530,
      subject_id: "history",
      question: "What is considered the primary historical legacy of the Black Consciousness Movement in South African history?",
      options: [
        "Instilling a profound sense of self-worth, pride, and psychological liberation among Black South Africans, paving the way for the mass uprisings of the 1970s and 1980s",
        "Negotiating the immediate creation of a parliamentary monarchy",
        "Establishing corporate monopolies in the mining sector",
        "Persuading the National Party to voluntarily surrender power without protest"
      ],
      answer: "Instilling a profound sense of self-worth, pride, and psychological liberation among Black South Africans, paving the way for the mass uprisings of the 1970s and 1980s",
      explanation: "BCM successfully broke the psychological paralysis of fear enforced by the apartheid state, inspiring the youth generation of 1976."
    },

    // --- UDF (United Democratic Front) (531 - 540) ---
    {
      id: 531,
      subject_id: "history",
      question: "When and why was the United Democratic Front (UDF) formed in South Africa?",
      options: [
        "In August 1983, to coordinate mass resistance against the apartheid government's Tricameral Parliament and Koornhof Bills",
        "In 1960, to launch armed guerrilla warfare across major cities",
        "In 1994, to campaign in the first democratic national elections",
        "In 1976, specifically to organize high school student boycotts in Soweto"
      ],
      answer: "In August 1983, to coordinate mass resistance against the apartheid government's Tricameral Parliament and Koornhof Bills",
      explanation: "Under CAPS, the UDF is studied as a massive umbrella coalition formed to oppose the Tricameral Parliament, which gave limited representation to Coloured and Indian citizens while totally excluding Africans."
    },
    {
      id: 532,
      subject_id: "history",
      question: "What was the famous unifying slogan of the United Democratic Front (UDF)?",
      options: [
        "UDF unites, apartheid divides",
        "Liberation now, education later",
        "One settler, one bullet",
        "Workers of the world, unite"
      ],
      answer: "UDF unites, apartheid divides",
      explanation: "The slogan highlighted the UDF's core mission of bringing together diverse anti-apartheid formations across racial, religious, and geographic lines."
    },
    {
      id: 533,
      subject_id: "history",
      question: "What was the organizational structure of the UDF?",
      options: [
        "An umbrella mass-democratic coalition comprising over 500 independent community civics, trade unions, student groups, religious bodies, and women's organizations",
        "A centralized political party with a single executive committee in exile",
        "An underground guerrilla army operating secret training camps in foreign nations",
        "A government-sponsored advisory board for municipal administration"
      ],
      answer: "An umbrella mass-democratic coalition comprising over 500 independent community civics, trade unions, student groups, religious bodies, and women's organizations",
      explanation: "The UDF operated openly inside South Africa as a legal front linking thousands of grassroots organizations in a coordinated anti-apartheid campaign."
    },
    {
      id: 534,
      subject_id: "history",
      question: "Where was the launch rally of the United Democratic Front held on August 20, 1983?",
      options: [
        "Mitchells Plain, Cape Town",
        "Soweto, Johannesburg",
        "Durban Central, KwaZulu-Natal",
        "Sharpeville, Vereeniging"
      ],
      answer: "Mitchells Plain, Cape Town",
      explanation: "The historic launch took place in the Coloured township of Mitchells Plain, symbolizing multi-racial opposition to the exclusive Tricameral Parliament."
    },
    {
      id: 535,
      subject_id: "history",
      question: "Who were some of the prominent national presidents and leaders of the United Democratic Front during the 1980s?",
      options: [
        "Albertina Sisulu, Archie Gumede, and Oscar Mpetha",
        "Nelson Mandela, Walter Sisulu, and Govan Mbeki",
        "Steve Biko, Barney Pityana, and Strini Moodley",
        "F.W. de Klerk, P.W. Botha, and B.J. Vorster"
      ],
      answer: "Albertina Sisulu, Archie Gumede, and Oscar Mpetha",
      explanation: "The UDF's national leadership included respected veterans of the defiance campaigns and trade union movements, many of whom faced severe state persecution."
    },
    {
      id: 536,
      subject_id: "history",
      question: "How did the UDF successfully campaign against the elections for the Tricameral Parliament in August 1984?",
      options: [
        "By organizing massive voter boycotts, rallies, and door-to-door campaigns that resulted in extremely low voter turnouts among Coloured and Indian electorates",
        "By participating in the elections and winning a majority of seats",
        "By launching armed attacks on polling stations across the country",
        "By filing lawsuits in international courts to dissolve parliament"
      ],
      answer: "By organizing massive voter boycotts, rallies, and door-to-door campaigns that resulted in extremely low voter turnouts among Coloured and Indian electorates",
      explanation: "The UDF's anti-election campaign was a massive tactical success, delegitimizing the Tricameral Parliament through boycotts and low voter participation."
    },
    {
      id: 537,
      subject_id: "history",
      question: "What was the Delmas Treason Trial (1985–1988) in relation to the UDF?",
      options: [
        "A high-profile trial where prominent UDF leaders were prosecuted for treason by the state in an attempt to crush internal mass democratic resistance",
        "A municipal dispute over property taxes in the Transvaal",
        "A labor arbitration hearing between mine workers and mine owners",
        "An internal disciplinary inquiry conducted by the UDF executive"
      ],
      answer: "A high-profile trial where prominent UDF leaders were prosecuted for treason by the state in an attempt to crush internal mass democratic resistance",
      explanation: "The state charged top UDF leaders (the Delmas Treason Trialists) with treason, alleging their mass campaigns caused violent township unrest, though most were eventually acquitted or freed on appeal."
    },
    {
      id: 538,
      subject_id: "history",
      question: "What ideological document did many UDF affiliates and regional branches embrace as their guiding political vision?",
      options: [
        "The Freedom Charter",
        "The Communist Manifesto",
        "The Magna Carta",
        "The American Declaration of Independence"
      ],
      answer: "The Freedom Charter",
      explanation: "Most UDF affiliates were 'Charterists' who aligned themselves with the principles of the 1955 Freedom Charter adopted by the ANC-led Congress Alliance."
    },
    {
      id: 539,
      subject_id: "history",
      question: "How did the apartheid government attempt to cripple the UDF in February 1988?",
      options: [
        "By officially banning the UDF and restricting its leadership from engaging in any public political activities or holding meetings",
        "By appointing UDF leaders to cabinet ministerial positions",
        "By funding UDF community projects directly from state coffers",
        "By merging the UDF with the ruling National Party"
      ],
      answer: "By officially banning the UDF and restricting its leadership from engaging in any public political activities or holding meetings",
      explanation: "Under sweeping State of Emergency regulations in Feb 1988, P.W. Botha's government crippled the UDF as a legal entity, forcing resistance underground or into the MDM."
    },
    {
      id: 540,
      subject_id: "history",
      question: "What was the broader historical impact of the UDF on the collapse of apartheid in South Africa?",
      options: [
        "It mobilized millions of South Africans into active resistance, made townships 'ungovernable' for the state, and established a powerful internal democratic movement that hastened the transition to negotiations",
        "It proved that peaceful civic organizing was completely ineffective against military dictatorships",
        "It resulted in the permanent partition of South Africa into separate federal states",
        "It led to the replacement of capitalism with a traditional feudal economy"
      ],
      answer: "It mobilized millions of South Africans into active resistance, made townships 'ungovernable' for the state, and established a powerful internal democratic movement that hastened the transition to negotiations",
      explanation: "The UDF successfully united internal mass resistance, creating the domestic pressure that made apartheid unworkable and forced the regime to negotiate."
    },

    // --- ECC (End Conscription Campaign) (541 - 550) ---
    {
      id: 541,
      subject_id: "history",
      question: "When and why was the End Conscription Campaign (ECC) formed in South Africa?",
      options: [
        "In 1983, to campaign against compulsory military service for white South African males in the South African Defence Force (SADF)",
        "In 1960, to recruit white soldiers for deployment in the Korean War",
        "In 1990, to oversee the demobilization of liberation armies",
        "In 1976, to train high school students in civil defense"
      ],
      answer: "In 1983, to campaign against compulsory military service for white South African males in the South African Defence Force (SADF)",
      explanation: "Under CAPS, the ECC is studied as a prominent anti-apartheid organization that mobilized white citizens against the militarization of society and the SADF's role in townships and Namibia."
    },
    {
      id: 542,
      subject_id: "history",
      question: "What was the central political slogan and primary demand of the End Conscription Campaign?",
      options: [
        "Troops out of the townships / End conscription",
        "Equal pay for equal work across all races",
        "Education before liberation",
        "One settler, one bullet"
      ],
      answer: "Troops out of the townships / End conscription",
      explanation: "The ECC demanded that the SADF withdraw from black townships where they were deployed to crush protests, and called for an end to compulsory conscription."
    },
    {
      id: 543,
      subject_id: "history",
      question: "Who formed the primary support base and membership of the End Conscription Campaign (ECC)?",
      options: [
        "White middle-class South Africans, including students, academics, parents, religious figures, and young conscripts refusing military service",
        "Exclusively black migrant workers in the mining sector",
        "Members of the South African Police security branch",
        "Traditional rural tribal chiefs and headmen"
      ],
      answer: "White middle-class South Africans, including students, academics, parents, religious figures, and young conscripts refusing military service",
      explanation: "The ECC was unique as a predominantly white anti-apartheid organization that challenged the apartheid state from within its core constituency (the white electorate)."
    },
    {
      id: 544,
      subject_id: "history",
      question: "What distinctive symbol was widely used by the ECC on badges, banners, and t-shirts during their public campaigns?",
      options: [
        "A yellow triangle bearing the words 'Troops out'",
        "A raised black clenched fist",
        "A red star enclosed in a white circle",
        "A dove carrying an olive branch over a green leaf"
      ],
      answer: "A yellow triangle bearing the words 'Troops out'",
      explanation: "The yellow triangle became the recognizable visual emblem of the ECC, frequently displayed on clothing and placards at anti-conscription rallies."
    },
    {
      id: 545,
      subject_id: "history",
      question: "How did the apartheid state and military establishment view and respond to the End Conscription Campaign?",
      options: [
        "As a subversive, communist-inspired threat that undermined national security, leading to severe state harassment, smear campaigns, and its eventual banning in 1988",
        "As a helpful advisory group on military welfare",
        "As a legitimate political party eligible for parliamentary seats",
        "As a charitable organization providing sports gear to soldiers"
      ],
      answer: "As a subversive, communist-inspired threat that undermined national security, leading to severe state harassment, smear campaigns, and its eventual banning in 1988",
      explanation: "The SADF and state security apparatus viewed the ECC as a major threat to white morale, subjecting members to surveillance, burglaries, and banning them under the State of Emergency."
    },
    {
      id: 546,
      subject_id: "history",
      question: "What was a 'conscientious objector' in the context of the End Conscription Campaign?",
      options: [
        "A young white man who publicly refused on moral, religious, or political grounds to serve in the SADF enforcing apartheid",
        "A soldier who volunteered for elite border war reconnaissance units",
        "A police officer who resigned to join municipal town councils",
        "A civilian who refused to pay municipal water taxes"
      ],
      answer: "A young white man who publicly refused on moral, religious, or political grounds to serve in the SADF enforcing apartheid",
      explanation: "Conscientious objectors like Ivan Toms, Richard Steele, and David Webster faced severe prison sentences for refusing military conscription."
    },
    {
      id: 547,
      subject_id: "history",
      question: "What role did the ECC play in the broader anti-apartheid alliance (such as the UDF)?",
      options: [
        "It served as an affiliate of the UDF, mobilizing white dissent and highlighting the brutal reality of military intervention in Namibia and South African townships",
        "It functioned as the financial treasury for the ANC armed wing",
        "It operated exclusively as a trade union for commercial farmers",
        "It acted as a diplomatic intermediary between the regime and foreign governments"
      ],
      answer: "It served as an affiliate of the UDF, mobilizing white dissent and highlighting the brutal reality of military intervention in Namibia and South African townships",
      explanation: "The ECC aligned itself with the broader mass democratic movement, demonstrating that apartheid was being challenged across racial lines."
    },
    {
      id: 548,
      subject_id: "history",
      question: "What covert state actions were later exposed regarding the state's dirty tricks campaign against the ECC (stratcom operations)?",
      options: [
        "Break-ins, smear pamphlets, telephone wiretaps, and even parcel bombings orchestrated by military intelligence and security police",
        "Financial donations to help fund ECC youth festivals",
        "Providing official permits for all ECC public marches",
        "Offering scholarships to ECC members studying abroad"
      ],
      answer: "Break-ins, smear pamphlets, telephone wiretaps, and even parcel bombings orchestrated by military intelligence and security police",
      explanation: "The Truth and Reconciliation Commission (TRC) later revealed that state covert units (Stratcom) waged a vicious campaign of intimidation and sabotage against the ECC."
    },
    {
      id: 549,
      subject_id: "history",
      question: "Who was David Webster, and what was his significance to the ECC and anti-apartheid movement?",
      options: [
        "An anthropology professor at Wits University and prominent ECC leader who was assassinated by government hit squads in 1989",
        "A military general who resigned to lead the SADF opposition",
        "A founding member of the Tricameral Parliament",
        "A defense lawyer during the Rivonia Trial"
      ],
      answer: "An anthropology professor at Wits University and prominent ECC leader who was assassinated by government hit squads in 1989",
      explanation: "David Webster's assassination by Civil Cooperation Bureau (CCB) operatives shocked the nation and galvanized widespread protests shortly before the unbanning of liberation movements."
    },
    {
      id: 550,
      subject_id: "history",
      question: "What was the historical significance of the End Conscription Campaign in white South African politics?",
      options: [
        "It cracked the ideological solidarity of the white minority, proving that significant numbers of white youth and parents rejected military enforcement of apartheid",
        "It successfully persuaded the SADF to conquer neighboring Angola",
        "It resulted in the immediate abolition of the South African Air Force",
        "It had zero impact on white public opinion"
      ],
      answer: "It cracked the ideological solidarity of the white minority, proving that significant numbers of white youth and parents rejected military enforcement of apartheid",
      explanation: "The ECC successfully challenged the myth of monolithic white support for military conscription and the border war."
    },

    // --- NECC (National Education Crisis Committee) (551 - 560) ---
    {
      id: 551,
      subject_id: "history",
      question: "When and why was the National Education Crisis Committee (NECC) formed?",
      options: [
        "In 1985–1986, to address the profound crisis in black education and transition from 'Liberation before Education' to 'People's Education for People's Power'",
        "In 1953, to draft the initial legislation for Bantu Education",
        "In 1994, to administer university entrance examinations",
        "In 1976, to assist police in reopening primary schools in Soweto"
      ],
      answer: "In 1985–1986, to address the profound crisis in black education and transition from 'Liberation before Education' to 'People's Education for People's Power'",
      explanation: "Under CAPS, the NECC is studied for its pivotal role in organizing educational resistance and formulating alternative democratic schooling during the 1980s school boycotts."
    },
    {
      id: 552,
      subject_id: "history",
      question: "What was the strategic shift represented by the slogan 'People's Education for People's Power' championed by the NECC?",
      options: [
        "Moving away from permanent school boycotts ('Liberation before Education') toward reclaiming schools as sites of struggle and building alternative, democratic education",
        "Demanding that all students drop out of school permanently to join farm cooperatives",
        "Calling for the privatization of all educational institutions in South Africa",
        "Insisting on the teaching of classical European history exclusively"
      ],
      answer: "Moving away from permanent school boycotts ('Liberation before Education') toward reclaiming schools as sites of struggle and building alternative, democratic education",
      explanation: "The NECC recognized that boycotting schools indefinitely was damaging the youth, so they coined People's Education to transform what and how children were taught."
    },
    {
      id: 553,
      subject_id: "history",
      question: "What were the core objectives of 'People's Education' promoted by the NECC?",
      options: [
        "To eliminate capitalist and racist bias in school curricula, foster critical thinking, encourage democratic student-teacher-parent participation, and prepare students for a liberated society",
        "To enforce strict corporal punishment and rote memorization of state propaganda",
        "To limit black education strictly to manual labor and agricultural skills",
        "To replace all English and Afrikaans instruction with foreign classical languages"
      ],
      answer: "To eliminate capitalist and racist bias in school curricula, foster critical thinking, encourage democratic student-teacher-parent participation, and prepare students for a liberated society",
      explanation: "People's Education aimed to dismantle Bantu Education by introducing syllabi that promoted critical social awareness, non-racialism, and democracy."
    },
    {
      id: 554,
      subject_id: "history",
      question: "Who were the key constituents that formed the broad-based coalition of the NECC?",
      options: [
        "Students, teachers, parents, trade unions (such as COSATU), and community civic organizations",
        "Exclusively white university professors and government inspectors",
        "Military generals and police commissioners",
        "Foreign diplomats and international mining executives"
      ],
      answer: "Students, teachers, parents, trade unions (such as COSATU), and community civic organizations",
      explanation: "The NECC brought together all stakeholders in black education to formulate unified strategies against the collapsing Bantu Education system."
    },
    {
      id: 555,
      subject_id: "history",
      question: "Who was Zwelakhe Sisulu, and what was his role in the National Education Crisis Committee?",
      options: [
        "A prominent journalist, activist, and key leader in founding and guiding the NECC who faced intense state detention and banning",
        "A cabinet minister appointed by P.W. Botha to oversee school sports",
        "A commander in the apartheid army deployed to suppress school strikes",
        "A legal representative for mining corporations in Johannesburg"
      ],
      answer: "A prominent journalist, activist, and key leader in founding and guiding the NECC who faced intense state detention and banning",
      explanation: "Zwelakhe Sisulu played a central intellectual and organizational role in the NECC before being detained without trial by the apartheid state."
    },
    {
      id: 556,
      subject_id: "history",
      question: "How did the apartheid government react to the emergence and mobilization of the NECC?",
      options: [
        "By declaring States of Emergency, arresting NECC leadership, banning meetings, and deploying military forces into township school grounds",
        "By funding the printing of People's Education textbooks",
        "By handing over administrative control of all schools to the UDF",
        "By abolishing school fees nationwide"
      ],
      answer: "By declaring States of Emergency, arresting NECC leadership, banning meetings, and deploying military forces into township school grounds",
      explanation: "The state viewed People's Education as a direct threat to its ideological control, responding with severe police repression and detentions of NECC organizers."
    },
    {
      id: 557,
      subject_id: "history",
      question: "What crisis prompted the formation of the NECC in 1985 at the University of the Witwatersrand conference?",
      options: [
        "The total breakdown of schooling in townships across South Africa as students engaged in prolonged boycotts and police occupied school premises",
        "A nationwide shortage of paper for school examinations",
        "The decision by universities to admit only international students",
        "A massive financial surplus in the Department of Education and Training"
      ],
      answer: "The total breakdown of schooling in townships across South Africa as students engaged in prolonged boycotts and police occupied school premises",
      explanation: "With townships in turmoil and generations of youth risking the loss of formal education ('lost generation'), communities demanded an organized intervention."
    },
    {
      id: 558,
      subject_id: "history",
      question: "What was the relationship between the NECC and student organizations such as COSAS?",
      options: [
        "The NECC worked closely with student bodies like COSAS and SASO successor groups to bridge generational divides between impatient youth and parents/teachers",
        "The NECC was established exclusively to suppress student strikes ordered by COSAS",
        "They operated as rival organizations with no communication",
        "COSAS was a government-funded branch designed to counter the NECC"
      ],
      answer: "The NECC worked closely with student bodies like COSAS and SASO successor groups to bridge generational divides between impatient youth and parents/teachers",
      explanation: "The NECC successfully brought students, parents, and teachers into a collaborative structure, channeling student militancy into organized, strategic educational reform."
    },
    {
      id: 559,
      subject_id: "history",
      question: "How did the NECC attempt to implement alternative education in practice despite state bans?",
      options: [
        "By organizing alternative history and literature workshops, drafting alternative syllabi, and setting up parent-teacher-student associations (PTSAs)",
        "By building secret underground universities in foreign countries only",
        "By purchasing private commercial publishing houses in London",
        "By forcing all students to memorize traditional Afrikaans poetry"
      ],
      answer: "By organizing alternative history and literature workshops, drafting alternative syllabi, and setting up parent-teacher-student associations (PTSAs)",
      explanation: "The NECC pioneered PTSAs to democratize school governance and created alternative teaching materials that exposed apartheid propaganda."
    },
    {
      id: 560,
      subject_id: "history",
      question: "What is the lasting historical significance of the NECC in South African educational history?",
      options: [
        "It laid the conceptual foundations for democratic school governance and non-racial curricula that shaped post-apartheid educational reform in South Africa",
        "It proved that state-run school systems can never be reformed",
        "It resulted in the permanent closure of all secondary schools in urban areas",
        "It established a private religious school network across the country"
      ],
      answer: "It laid the conceptual foundations for democratic school governance and non-racial curricula that shaped post-apartheid educational reform in South Africa",
      explanation: "The democratic principles and PTSA structures pioneered by the NECC heavily influenced post-1994 education policy and school governance acts."
    },

    // --- COSAS (Congress of South African Students) (561 - 570) ---
    {
      id: 561,
      subject_id: "history",
      question: "When was the Congress of South African Students (COSAS) formed, and what was its primary focus?",
      options: [
        "In 1979, to unite high school students in the fight against Bantu Education and demand Representative Student Councils (SRCs) in schools",
        "In 1955, to draft the Freedom Charter in Kliptown",
        "In 1994, to monitor the first democratic election ballots",
        "In 1968, as the high school wing of the Black Consciousness Movement"
      ],
      answer: "In 1979, to unite high school students in the fight against Bantu Education and demand Representative Student Councils (SRCs) in schools",
      explanation: "Under CAPS, COSAS is studied as the militant high school student organization that mobilized youth resistance aligned with the Freedom Charter tradition during the 1980s."
    },
    {
      id: 562,
      subject_id: "history",
      question: "What was the prominent slogan used by COSAS throughout its campaigns in South African schools?",
      options: [
        "Asinamali / Equal Education for All",
        "Troops out of the townships",
        "One settler, one bullet",
        "Liberation now, education later"
      ],
      answer: "Asinamali / Equal Education for All",
      explanation: "COSAS championed demands for equal, non-racial education, democratic SRCs, and the abolition of corporal punishment and prefect systems."
    },
    {
      id: 563,
      subject_id: "history",
      question: "What role did COSAS play during the widespread school boycotts of 1980 and 1984–1985?",
      options: [
        "It spearheaded the organization of mass school boycotts, protests, and solidarity strikes linking student grievances to broader community struggles",
        "It acted as an administrative body managing government school budgets",
        "It organized armed invasions of police stations in rural towns",
        "It negotiated agreements to extend the school day for all students"
      ],
      answer: "It spearheaded the organization of mass school boycotts, protests, and solidarity strikes linking student grievances to broader community struggles",
      explanation: "COSAS successfully mobilized tens of thousands of high school students across the country, turning schools into active sites of anti-apartheid mobilization."
    },
    {
      id: 564,
      subject_id: "history",
      question: "How did the apartheid government respond to COSAS's radical mobilization of youth in August 1985?",
      options: [
        "By officially banning COSAS, making it the first youth organization to be outlawed under the State of Emergency",
        "By appointing COSAS leaders to the national education advisory board",
        "By building new sports stadiums in all major townships",
        "By offering free university scholarships to all COSAS members"
      ],
      answer: "By officially banning COSAS, making it the first youth organization to be outlawed under the State of Emergency",
      explanation: "Louis le Grange (Minister of Law and Order) banned COSAS in August 1985 due to its effectiveness in rendering townships ungovernable through school boycotts."
    },
    {
      id: 565,
      subject_id: "history",
      question: "How did COSAS members and township youth continue their activism after the organization was banned in 1985?",
      options: [
        "By operating underground, forming localized youth congresses (such as SAYCO), and participating in community civic structures",
        "By emigrating en masse to join foreign armies",
        "By forming a legal political party to contest parliamentary elections",
        "By abandoning all political engagement entirely"
      ],
      answer: "By operating underground, forming localized youth congresses (such SAYCO), and participating in community civic structures",
      explanation: "Despite the ban, youth activism persisted through underground networks and regional youth congresses that later fed into the UDF and MDM."
    },
    {
      id: 566,
      subject_id: "history",
      question: "What was the connection between COSAS and the broader 'Charterist' movement?",
      options: [
        "COSAS was firmly aligned with the Freedom Charter and the ANC tradition, cooperating closely with trade unions (COSATU) and community groups (UDF)",
        "COSAS rejected the Freedom Charter in favor of Black Consciousness separatism",
        "COSAS operated as the youth wing of the National Party",
        "COSAS had no political affiliations outside individual schools"
      ],
      answer: "COSAS was firmly aligned with the Freedom Charter and the ANC tradition, cooperating closely with trade unions (COSATU) and community groups (UDF)",
      explanation: "Unlike the BCM-aligned student groups of the 1970s, COSAS adopted the non-racial principles of the Congress Alliance and the Freedom Charter."
    },
    {
      id: 567,
      subject_id: "history",
      question: "What tactics beyond school boycotts did COSAS utilize to exert political pressure on the apartheid regime?",
      options: [
        "Consumer boycotts of white-owned businesses, stayaways, and solidarity campaigns with striking workers and rent boycotters",
        "Filing class-action lawsuits in municipal traffic courts",
        "Running commercial transport businesses in urban townships",
        "Lobbying foreign monarchies for financial aid"
      ],
      answer: "Consumer boycotts of white-owned businesses, stayaways, and solidarity campaigns with striking workers and rent boycotters",
      explanation: "COSAS students played a vanguard role in community-wide protests, enforcing consumer boycotts and joining workers in stayaway actions."
    },
    {
      id: 568,
      subject_id: "history",
      question: "What was the human cost faced by COSAS activists under apartheid state repression?",
      options: [
        "Widespread arbitrary detention without trial, torture in police custody, expulsion from schools, and assassination by security hit squads",
        "Minor monetary fines and community service orders",
        "Mandatory military service in the SADF",
        "Free travel vouchers and academic scholarships"
      ],
      answer: "Widespread arbitrary detention without trial, torture in police custody, expulsion from schools, and assassination by security hit squads",
      explanation: "COSAS members bore the brunt of state violence during the 1980s states of emergency, with thousands detained, tortured, or killed."
    },
    {
      id: 569,
      subject_id: "history",
      question: "Why did the slogan 'Liberation now, education later' reflect the militant sentiment among COSAS high school students in the mid-1980s?",
      options: [
        "Students prioritized political freedom and dismantling apartheid over schooling, believing that education under a racist system was worthless",
        "Students preferred agricultural farming over academic study",
        "The government ordered all high schools to close permanently",
        "Universities offered guaranteed degrees without exams"
      ],
      answer: "Students prioritized political freedom and dismantling apartheid over schooling, believing that education under a racist system was worthless",
      explanation: "This militant sentiment reflected the deep urgency among youth who felt that fighting the regime took precedence over attending Bantu Education classes."
    },
    {
      id: 570,
      subject_id: "history",
      question: "What is the historical significance of COSAS in the history of anti-apartheid resistance?",
      options: [
        "It proved that high school youth were a decisive, disciplined political force capable of mobilizing mass resistance and destabilizing apartheid governance",
        "It demonstrated that students were solely interested in sports and academic exams",
        "It successfully reformed Bantu Education from within through parliamentary lobbying",
        "It resulted in the voluntary resignation of P.W. Botha"
      ],
      answer: "It proved that high school youth were a decisive, disciplined political force capable of mobilizing mass resistance and destabilizing apartheid governance",
      explanation: "COSAS transformed youth from passive victims into frontline combatants of the mass democratic movement."
    },

    // --- MDM (Mass Democratic Movement) (571 - 580) ---
    {
      id: 571,
      subject_id: "history",
      question: "When and why did the Mass Democratic Movement (MDM) emerge in South Africa?",
      options: [
        "In 1989, as a loose, unbanned coalition of anti-apartheid organizations (civics, trade unions, churches) formed after the UDF and other groups were restricted in Feb 1988",
        "In 1960, immediately following the Sharpeville Massacre",
        "In 1994, to administer the transition of government departments",
        "In 1976, to coordinate high school student boycotts in the Western Cape"
      ],
      answer: "In 1989, as a loose, unbanned coalition of anti-apartheid organizations (civics, trade unions, churches) formed after the UDF and other groups were restricted in Feb 1988",
      explanation: "Under CAPS, the MDM is studied as the vital legal resistance coalition that took over public defiance campaigns when major anti-apartheid formations like the UDF were banned."
    },
    {
      id: 572,
      subject_id: "history",
      question: "What was the nature of the Mass Democratic Movement (MDM) as an organizational strategy?",
      options: [
        "It operated as an unbanned, flexible alliance of trade unions (COSATU), church leaders, civic associations, and grassroots activists to bypass state restrictions",
        "It was a rigid, hierarchical political party with registered parliamentary candidates",
        "It functioned as an underground military wing launching guerrilla attacks",
        "It was a government-sponsored committee for constitutional reform"
      ],
      answer: "It operated as an unbanned, flexible alliance of trade unions (COSATU), church leaders, civic associations, and grassroots activists to bypass state restrictions",
      explanation: "Because the UDF was banned in 1988, activists created the MDM as a fluid umbrella structure that was harder for the security police to outlaw."
    },
    {
      id: 573,
      subject_id: "history",
      question: "What major campaign did the MDM launch in mid-1989 to challenge remaining apartheid laws?",
      options: [
        "The Defiance Campaign of 1989",
        "The Armed Struggle Offensive",
        "The Tricameral Election Boycott",
        "The Border War Resistance Campaign"
      ],
      answer: "The Defiance Campaign of 1989",
      explanation: "The MDM launched a massive Defiance Campaign, deliberately defying petty apartheid laws by entering 'whites-only' hospitals, beaches, and public transport."
    },
    {
      id: 574,
      subject_id: "history",
      question: "Who were some of the prominent leaders associated with the coordination of the Mass Democratic Movement (MDM)?",
      options: [
        "Cyril Ramaphosa, Frank Chikane, Trevor Manuel, and Jay Naidoo",
        "Nelson Mandela, Govan Mbeki, and Ahmed Kathrada",
        "Steve Biko, Barney Pityana, and Mafika Gwala",
        "P.W. Botha, F.W. de Klerk, and Magnus Malan"
      ],
      answer: "Cyril Ramaphosa, Frank Chikane, Trevor Manuel, and Jay Naidoo",
      explanation: "The MDM leadership brought together trade unionists (COSATU), religious figures (SACC), and former UDF organizers to spearhead mass action."
    },
    {
      id: 575,
      subject_id: "history",
      question: "What was the 'Purple Rain Protest' in Cape Town in September 1989?",
      options: [
        "A dramatic MDM protest march where police sprayed demonstrators with a water cannon laced with purple dye to mark and arrest them",
        "A peaceful art exhibition organized by anti-apartheid painters",
        "A celebration marking the unbanning of the African National Congress",
        "A chemical spill caused by an industrial accident in a township"
      ],
      answer: "A dramatic MDM protest march where police sprayed demonstrators with a water cannon laced with purple dye to mark and arrest them",
      explanation: "Demonstrators famously graffitied 'The purple shall govern' after police used a purple dye cannon, symbolizing the unstoppable momentum of the MDM."
    },
    {
      id: 576,
      subject_id: "history",
      question: "How did the MDM coordinate its actions with the broader anti-apartheid struggle, including the ANC in exile?",
      options: [
        "It maintained close strategic alignment with the ANC, consulting leadership and aligning internal mass action with international sanctions and armed struggle",
        "It operated in total isolation without any communication with exiled leaders",
        "It actively opposed the ANC and promoted rival political ideologies",
        "It functioned as a fundraising branch for foreign political parties"
      ],
      answer: "It maintained close strategic alignment with the ANC, consulting leadership and aligning internal mass action with international sanctions and armed struggle",
      explanation: "The MDM was the internal domestic arm of the broader Congress Alliance, coordinating its mass defiance seamlessly with the ANC and trade unions."
    },
    {
      id: 577,
      subject_id: "history",
      question: "What role did trade unions, particularly COSATU, play within the Mass Democratic Movement?",
      options: [
        "They provided powerful organizational muscle, organizing massive stayaways, strikes, and economic protests that crippled industrial production",
        "They focused exclusively on internal workplace wages without engaging in politics",
        "They acted as mediators between the apartheid government and foreign investors",
        "They served as a branch of the South African Police"
      ],
      answer: "They provide powerful organizational muscle, organizing massive stayaways, strikes, and economic protests that crippled industrial production",
      explanation: "COSATU (Congress of South African Trade Unions, formed in 1985) was the backbone of the MDM, wielding enormous economic power through general strikes."
    },
    {
      id: 578,
      subject_id: "history",
      question: "What was the impact of the MDM's 1989 Defiance Campaign on the incoming administration of F.W. de Klerk?",
      options: [
        "It demonstrated that apartheid could no longer be enforced through repression, convincing De Klerk that negotiations and unbanning liberation movements were inevitable",
        "It persuaded De Klerk to intensify states of emergency and deploy more troops",
        "It had no effect on government policy whatsoever",
        "It resulted in the immediate resignation of the entire cabinet"
      ],
      answer: "It demonstrated that apartheid could no longer be enforced through repression, convincing De Klerk that negotiations and unbanning liberation movements were inevitable",
      explanation: "The sheer scale of defiance led by the MDM in late 1989 forced F.W. de Klerk to realize the status quo was unsustainable, leading to the historic announcements of February 1990."
    },
    {
      id: 579,
      subject_id: "history",
      question: "How did the MDM handle state repression during the height of its campaigns in 1989?",
      options: [
        "By openly defying bans, organizing mass marches, and challenging emergency regulations directly through coordinated civil disobedience",
        "By surrendering immediately to security police headquarters",
        "By hiding underground and halting all public activities indefinitely",
        "By appealing exclusively to foreign courts for injunctions"
      ],
      answer: "By openly defying bans, organizing mass marches, and challenging emergency regulations directly through coordinated civil disobedience",
      explanation: "The MDM mastered the tactic of defiance, deliberately breaking unjust laws in large numbers to overwhelm police detention capacity and draw global media attention."
    },
    {
      id: 580,
      subject_id: "history",
      question: "What is the primary historical significance of the Mass Democratic Movement in South African history?",
      options: [
        "It successfully bridged the gap between banned organizations and the final push for negotiations, embodying 'People's Power' in action",
        "It proved that mass protest is ineffective against authoritarian regimes",
        "It established a military dictatorship that ruled until 1994",
        "It led to the partition of South Africa into separate ethnic states"
      ],
      answer: "It successfully bridged the gap between banned organizations and the final push for negotiations, embodying 'People's Power' in action",
      explanation: "The MDM represented the peak of internal mass mobilization that broke the back of apartheid rule and paved the way for a democratic South Africa."
    },

    // --- Black Sash (581 - 590) ---
    {
      id: 581,
      subject_id: "history",
      question: "When was the Black Sash founded, and what was its original name and demographic makeup?",
      options: [
        "In 1955, originally named the Women's Defence of the Constitution League, founded by middle-class white women opposing Senate-packing acts",
        "In 1976, founded by high school students in Soweto",
        "In 1983, founded by trade unionists in Durban",
        "In 1948, founded by Afrikaner nationalists supporting apartheid"
      ],
      answer: "In 1955, originally named the Women's Defence of the Constitution League, founded by middle-class white women opposing Senate-packing acts",
      explanation: "Under CAPS, the Black Sash is studied as a unique organization of predominantly white women who used silent protest, legal aid, and human rights monitoring to fight apartheid."
    },
    {
      id: 582,
      subject_id: "history",
      question: "What was the distinctive form of protest and attire adopted by members of the Black Sash?",
      options: [
        "Wearing black sashes across their shoulders and standing in silent, dignified vigils outside parliament, courts, and government buildings",
        "Wearing military combat uniforms while marching with firearms",
        "Striking from work and shutting down industrial factories",
        "Publishing anonymous underground revolutionary newspapers"
      ],
      answer: "Wearing black sashes across their shoulders and standing in silent, dignified vigils outside parliament, courts, and government buildings",
      explanation: "The black sash symbolized mourning for the death of the South African Constitution and human rights under apartheid legislation."
    },
    {
      id: 583,
      subject_id: "history",
      question: "What crucial practical service did the Black Sash establish across major South African cities during the apartheid era?",
      options: [
        "Advice offices that provided free paralegal aid, legal counseling, and assistance to victims of pass laws, influx control, and forced removals",
        "Commercial banks offering micro-loans to white farmers",
        "Private military training academies for conscientious objectors",
        "Government-funded boarding schools for rural children"
      ],
      answer: "Advice offices that provided free paralegal aid, legal counseling, and assistance to victims of pass laws, influx control, and forced removals",
      explanation: "The Black Sash Advice Offices (in Johannesburg, Cape Town, Durban, etc.) were lifelines for ordinary Black South Africans navigating the labyrinthine cruelty of pass laws."
    },
    {
      id: 584,
      subject_id: "history",
      question: "What specific government legislation sparked the formation of the Black Sash in May 1955?",
      options: [
        "The Senate Act of 1955, which packed the Senate to remove Coloured voters from the common voters' roll",
        "The Bantu Education Act of 1953",
        "The Group Areas Act of 1950",
        "The Suppression of Communism Act of 1950"
      ],
      answer: "The Senate Act of 1955, which packed the Senate to remove Coloured voters from the common voters' roll",
      explanation: "The National Party government altered the size of the Senate to manufacture a two-thirds majority to disenfranchise Coloured voters, outraging white liberal women who formed the Sash."
    },
    {
      id: 585,
      subject_id: "history",
      question: "Who were some of the prominent leaders and stalwarts of the Black Sash during its history?",
      options: [
        "Jean Sinclair, Sheena Duncan, Joyce Harris, and Mary Burton",
        "Albertina Sisulu, Winnie Madikizela-Mandela, and Lillian Ngoyi",
        "Helen Suzman, Helen Zille, and Patricia de Lille",
        "Bessie Head, Nadine Gordimer, and Miriam Makeba"
      ],
      answer: "Jean Sinclair, Sheena Duncan, Joyce Harris, and Mary Burton",
      explanation: "Leaders like Sheena Duncan and Jean Sinclair steered the Black Sash from a constitutional protest group into a fierce human rights watchdog organization."
    },
    {
      id: 586,
      subject_id: "history",
      question: "How did the Black Sash expand its focus from constitutional protests to broader human rights advocacy?",
      options: [
        "By documenting forced removals, pass law arrests, police brutality, and detention without trial, publishing meticulous research reports that exposed apartheid's cruelty",
        "By launching armed guerrilla raids against police stations",
        "By running candidates in parliamentary elections under the National Party",
        "By organizing international trade embargoes against South Africa"
      ],
      answer: "By documenting forced removals, pass law arrests, police brutality, and detention without trial, publishing meticulous research reports that exposed apartheid's cruelty",
      explanation: "Through their daily advice office casework, Black Sash members gathered undeniable empirical evidence of the human devastation caused by apartheid laws."
    },
    {
      id: 587,
      subject_id: "history",
      question: "How did the apartheid state react to the activities of the Black Sash?",
      options: [
        "Through police surveillance, harassment during vigils, verbal abuse by white counter-protesters, and detention or banning of key members",
        "By awarding them state medals for community service",
        "By funding their advice offices directly from government budgets",
        "By appointing Black Sash leaders to cabinet advisory posts"
      ],
      answer: "Through police surveillance, harassment during vigils, verbal abuse by white counter-protesters, and detention or banning of key members",
      explanation: "Despite being white women, Black Sash members were frequently harassed, tear-gassed, arrested, and subjected to smear campaigns by the security state."
    },
    {
      id: 588,
      subject_id: "history",
      question: "What was the relationship between the Black Sash and other anti-apartheid organizations like the UDF?",
      options: [
        "The Black Sash cooperated closely with the UDF and trade unions, participating in joint campaigns against apartheid laws and states of emergency",
        "The Black Sash actively opposed the UDF and supported National Party policies",
        "The Black Sash operated in complete isolation from all other resistance groups",
        "The Black Sash was the legal wing of the armed liberation struggle"
      ],
      answer: "The Black Sash cooperated closely with the UDF and trade unions, participating in joint campaigns against apartheid laws and states of emergency",
      explanation: "The Black Sash formed vital alliances across the racial divide, standing shoulder-to-shoulder with organizations like the UDF and COSATU."
    },
    {
      id: 589,
      subject_id: "history",
      question: "What role did the Black Sash play during the States of Emergency in the 1980s?",
      options: [
        "They ran the 'Repression Monitoring Group,' meticulously documenting detentions, police abuse, and human rights violations across the country",
        "They served as guards in state detention camps",
        "They organized military training for township youth",
        "They censored independent newspapers"
      ],
      answer: "They ran the 'Repression Monitoring Group,' meticulously documenting detentions, police abuse, and human rights violations across the country",
      explanation: "During the turbulent 1980s emergency states, the Black Sash provided crucial monitoring and support networks for political detainees and their families."
    },
    {
      id: 590,
      subject_id: "history",
      question: "What is the enduring historical legacy of the Black Sash in South Africa?",
      options: [
        "It demonstrated white dissenting courage against injustice, pioneered professional human rights monitoring, and provided essential paralegal aid to the oppressed",
        "It proved that white women could reform apartheid through polite tea-party lobbying",
        "It established the first independent banking monopoly in South Africa",
        "It successfully repealed the pass laws through parliamentary debate alone"
      ],
      answer: "It demonstrated white dissenting courage against injustice, pioneered professional human rights monitoring, and provided essential paralegal aid to the oppressed",
      explanation: "The Black Sash left a proud legacy of uncompromising human rights advocacy, legal aid, and moral witness against state tyranny."
    },

    // --- Civil Rights & 1980s Mass Resistance (591 - 600) ---
    {
      id: 591,
      subject_id: "history",
      question: "What was the significance of the declaration of States of Emergency by P.W. Botha's government in 1985 and 1986?",
      options: [
        "They granted sweeping, draconian powers to the police and military, imposing curfews, media censorship, and mass detentions to crush township uprisings",
        "They marked the peaceful handover of power to democratic political parties",
        "They abolished all apartheid legislation and established equal voting rights",
        "They transferred executive authority to the United Nations"
      ],
      answer: "They granted sweeping, draconian powers to the police and military, imposing curfews, media censorship, and mass detentions to crush township uprisings",
      explanation: "Under CAPS, the 1980s States of Emergency represent the height of the apartheid state's 'securocrat' strategy to suppress internal rebellion through military force."
    },
    {
      id: 592,
      subject_id: "history",
      question: "What does the phrase 'making townships ungovernable' refer to in the context of 1980s South African resistance?",
      options: [
        "The strategy adopted by youth, civics, and activists to render apartheid-created black local authorities and municipal structures completely dysfunctional",
        "A campaign by the state to destroy township housing developments",
        "An economic plan to promote industrial manufacturing in rural areas",
        "A policy implemented by the National Party to grant full independence to townships"
      ],
      answer: "The strategy adopted by youth, civics, and activists to render apartheid-created black local authorities and municipal structures completely dysfunctional",
      explanation: "Through rent boycotts, resignation of puppet councillors, and mass protests, activists made apartheid's local administrative system unworkable."
    },
    {
      id: 593,
      subject_id: "history",
      question: "How were consumer boycotts utilized as a weapon of civil resistance during the 1980s (e.g., in Port Elizabeth and Cradock)?",
      options: [
        "Black consumers boycotted white-owned downtown businesses to exert economic pressure on white business owners, forcing them to lobby the state to dismantle apartheid",
        "White consumers boycotted black agricultural produce",
        "Township residents refused to buy electricity from municipal grids only",
        "Foreign importers boycotted South African gold exports"
      ],
      answer: "Black consumers boycotted white-owned downtown businesses to exert economic pressure on white business owners, forcing them to lobby the state to dismantle apartheid",
      explanation: "Consumer boycotts hit white merchants in their pockets, effectively turning the white business community against the intransigence of the government."
    },
    {
      id: 594,
      subject_id: "history",
      question: "Who were the 'Cradock Four,' and what was their significance in the history of 1980s resistance?",
      options: [
        "Matthew Goniwe, Sparrow Mkonto, Fort Calata, and Sicelo Mhlauli—prominent Eastern Cape activists whose brutal assassination by security police in 1985 sparked national outrage",
        "Four white conscripts who refused military service in Namibia",
        "Four student leaders who founded the NECC in Johannesburg",
        "Four trade unionists who negotiated the formation of COSATU"
      ],
      answer: "Matthew Goniwe, Sparrow Mkonto, Fort Calata, and Sicelo Mhlauli—prominent Eastern Cape activists whose brutal assassination by security police in 1985 sparked national outrage",
      explanation: "The assassination of the Cradock Four by state death squads highlighted the murderous lengths to which the security apparatus went to eliminate grassroots leadership."
    },
    {
      id: 595,
      subject_id: "history",
      question: "When was the Congress of South African Trade Unions (COSATU) formed, and what role did it play in civil resistance?",
      options: [
        "In December 1985; it became a powerhouse of political and economic resistance, organizing mega-stayaways, general strikes, and aligning with the UDF and MDM",
        "In 1960; it operated as the trade wing of the National Party",
        "In 1994; it managed the privatization of state corporations",
        "In 1976; it coordinated high school boycotts in Soweto"
      ],
      answer: "In December 1985; it became a powerhouse of political and economic resistance, organizing mega-stayaways, general strikes, and aligning with the UDF and MDM",
      explanation: "COSATU united progressive trade unions into a massive federation that used its industrial leverage to paralyze the apartheid economy in coordination with political struggles."
    },
    {
      id: 596,
      subject_id: "history",
      question: "What was the Release Mandela Campaign (RMC) launched in the 1980s?",
      options: [
        "A domestic and international solidarity campaign demanding the unconditional release of Nelson Mandela and all other political prisoners, which galvanized global anti-apartheid resistance",
        "A government initiative to parole common-law criminals in provincial prisons",
        "A legal defense fund for white conscientious objectors",
        "A sports tournament organized to raise funds for prison guards"
      ],
      answer: "A domestic and international solidarity campaign demanding the unconditional release of Nelson Mandela and all other political prisoners, which galvanized global anti-apartheid resistance",
      explanation: "The RMC kept Nelson Mandela's name and legacy alive in the public consciousness, turning his imprisonment into a rallying cry for the entire anti-apartheid movement."
    },
    {
      id: 597,
      subject_id: "history",
      question: "What was the significance of the 1976 Soweto Uprising as a turning point leading into the mass resistance of the 1980s?",
      options: [
        "It shattered the political quietude of the 1960s, radicalized a new generation of youth who fled into exile or built internal resistance, and permanently changed the trajectory of the struggle",
        "It resulted in the immediate peaceful negotiation of a new constitution",
        "It convinced the National Party to abandon apartheid voluntarily",
        "It had no lasting impact beyond a single day of student protests"
      ],
      answer: "It shattered the political quietude of the 1960s, radicalized a new generation of youth who fled into exile or built internal resistance, and permanently changed the trajectory of the struggle",
      explanation: "Soweto 1976 marked the watershed moment when youth resistance took center stage, inspiring the organizational explosions of the 1980s (UDF, COSAS, NECC, etc.)."
    },
    {
      id: 598,
      subject_id: "history",
      question: "What role did international solidarity—such as economic sanctions, disinvestment, and cultural boycotts—play in the 1980s?",
      options: [
        "They isolated South Africa economically, culturally, and diplomatically, placing immense pressure on the apartheid regime and crippling access to foreign capital",
        "They had no impact on South Africa's domestic economy",
        "They provided military funding and weapons to the apartheid police force",
        "They encouraged foreign corporations to build new factories in Johannesburg"
      ],
      answer: "They isolated South Africa economically, culturally, and diplomatically, placing immense pressure on the apartheid regime and crippling access to foreign capital",
      explanation: "Global anti-apartheid solidarity campaigns successfully severed South Africa from international sporting events, financial loans, and trade, making apartheid unsustainable."
    },
    {
      id: 599,
      subject_id: "history",
      question: "What was the significance of the Kairos Document published by progressive South African theologians in 1985?",
      options: [
        "It launched a devastating critique of 'State Theology' used to justify apartheid and 'Church Theology' of cheap reconciliation, calling for a 'Prophetic Theology' of active Christian resistance against tyranny",
        "It defended the divine right of the National Party to rule South Africa",
        "It called for the complete separation of religion from social justice issues",
        "It served as an official prayer book for the South African Defence Force"
      ],
      answer: "It launched a devastating critique of 'State Theology' used to justify apartheid and 'Church Theology' of cheap reconciliation, calling for a 'Prophetic Theology' of active Christian resistance against tyranny",
      explanation: "The Kairos Document was a milestone theological critique that challenged religious justification of apartheid and summoned Christians to join the liberation struggle."
    },
    {
      id: 600,
      subject_id: "history",
      question: "How did the combination of internal mass resistance (UDF, MDM, trade unions) and international pressure culminate in February 1990?",
      options: [
        "It forced President F.W. de Klerk to announce the unbanning of the ANC, PAC, and SACP, lift emergency restrictions, and release Nelson Mandela, opening the path to negotiations",
        "It triggered an all-out nuclear war across Southern Africa",
        "It led to the partition of the country into independent white and black republics",
        "It resulted in the military takeover of the government by trade union leaders"
      ],
      answer: "It forced President F.W. de Klerk to announce the unbanning of the ANC, PAC, and SACP, lift emergency restrictions, and release Nelson Mandela, opening the path to negotiations",
      explanation: "The unyielding domestic defiance led by the mass democratic movement, combined with economic collapse and international isolation, left the apartheid regime with no alternative but to negotiate."
    }
  ],
  'Road-To-Democracy': [
    // --- F.W. de Klerk (601 - 610) ---
    {
      id: 601,
      subject_id: "history",
      question: "What historic announcement did State President F.W. de Klerk make in Parliament on February 2, 1990?",
      options: [
        "The unbanning of the ANC, PAC, SACP, and the lifting of restrictions on anti-apartheid organizations",
        "The immediate declaration of war against neighboring southern African states",
        "The formal annexation of all former British colonies into the republic",
        "The immediate abolition of all taxation for white farmers"
      ],
      answer: "The unbanning of the ANC, PAC, SACP, and the lifting of restrictions on anti-apartheid organizations",
      explanation: "Under the CAPS curriculum, De Klerk's February 2, 1990 speech is studied as the watershed moment that dismantled legal apartheid barriers and cleared the path for negotiations."
    },
    {
      id: 602,
      subject_id: "history",
      question: "What were the primary pressures that compelled F.W. de Klerk to initiate negotiations upon taking office in August 1989?",
      options: [
        "Severe economic collapse, crippling international sanctions, sustained internal mass resistance, and the unsustainable cost of the border war",
        "A direct instruction from the United Nations Security Council to step down",
        "A military coup d'état led by reform-minded generals",
        "A landslide electoral victory by the African National Congress"
      ],
      answer: "Severe economic collapse, crippling international sanctions, sustained internal mass resistance, and the unsustainable cost of the border war",
      explanation: "De Klerk recognized that apartheid was economically unworkable and morally indefensible, forcing a shift from securocrat repression to political negotiation."
    },
    {
      id: 603,
      subject_id: "history",
      question: "How did F.W. de Klerk's political philosophy differ from his predecessor P.W. Botha?",
      options: [
        "De Klerk acknowledged that white minority rule could not be sustained indefinitely and accepted the principle of a universal franchise in a united South Africa",
        "De Klerk favored total isolation from the global community",
        "De Klerk wanted to establish a strict military dictatorship across all provinces",
        "De Klerk rejected all forms of capitalism in favor of a communist state"
      ],
      answer: "De Klerk acknowledged that white minority rule could not be sustained indefinitely and accepted the principle of a universal franchise in a united South Africa",
      explanation: "Unlike Botha's 'Total Strategy' of reform combined with heavy military repression, De Klerk chose to negotiate an end to apartheid."
    },
    {
      id: 604,
      subject_id: "history",
      question: "What was F.W. de Klerk's initial strategic vision for a post-apartheid South Africa during early negotiations?",
      options: [
        "Power-sharing arrangements and entrenched minority vetoes to protect white economic and political interests from majority domination",
        "The complete expulsion of all non-white citizens to separate rural homelands",
        "A one-party socialist state governed exclusively by the National Party",
        "The division of South Africa into independent cantons based on European language groups"
      ],
      answer: "Power-sharing arrangements and entrenched minority vetoes to protect white economic and political interests from majority domination",
      explanation: "The National Party initially sought group rights and power-sharing models to prevent what they termed 'domination of minorities'."
    },
    {
      id: 605,
      subject_id: "history",
      question: "Which high-profile political prisoner was released by F.W. de Klerk's government on February 11, 1990?",
      options: [
        "Nelson Mandela",
        "Robert Sobukwe",
        "Govan Mbeki",
        "Ahmed Kathrada"
      ],
      answer: "Nelson Mandela",
      explanation: "Nelson Mandela's unconditional release from Victor Verster Prison marked a monumental psychological and political turning point in South Africa's history."
    },
    {
      id: 606,
      subject_id: "history",
      question: "How did conservative white politicians and the Conservative Party (CP) react to F.W. de Klerk's reforms in 1990?",
      options: [
        "They accused him of high-ranking treason and selling out white self-determination, organizing fierce right-wing opposition",
        "They congratulated him and joined the ANC cabinet",
        "They migrated en masse to Australia and New Zealand immediately",
        "They supported his efforts to create a socialist republic"
      ],
      answer: "They accused him of high-ranking treason and selling out white self-determination, organizing fierce right-wing opposition",
      explanation: "Right-wing Afrikaner conservatives fiercely opposed negotiations, viewing De Klerk's actions as a betrayal of Afrikaner nationalism."
    },
    {
      id: 607,
      subject_id: "history",
      question: "Why did F.W. de Klerk call an all-white referendum in March 1992?",
      options: [
        "To test whether the white electorate supported his continuation of negotiations toward a democratic settlement after right-wing electoral setbacks",
        "To decide whether South Africa should adopt the US dollar as currency",
        "To approve the creation of a separate white homeland in the Karoo",
        "To dissolve parliament and hand power over to the United Nations"
      ],
      answer: "To test whether the white electorate supported his continuation of negotiations toward a democratic settlement after right-wing electoral setbacks",
      explanation: "Following a parliamentary by-election loss in Potchefstroom, De Klerk called the referendum to silence conservative critics who claimed he lacked a mandate."
    },
    {
      id: 608,
      subject_id: "history",
      question: "What was the outcome of the March 1992 whites-only referendum initiated by F.W. de Klerk?",
      options: [
        "A resounding 'Yes' vote of nearly 69%, giving him a clear mandate to proceed with negotiations for a democratic constitution",
        "A narrow 'No' vote that forced De Klerk to resign immediately",
        "A complete boycott by white voters resulting in zero turnout",
        "A tie that required a second referendum in December"
      ],
      answer: "A resounding 'Yes' vote of nearly 69%, giving him a clear mandate to proceed with negotiations for a democratic constitution",
      explanation: "The strong 'Yes' vote validated De Klerk's reform mandate and isolated conservative opponents."
    },
    {
      id: 609,
      subject_id: "history",
      question: "What international honor was jointly awarded to F.W. de Klerk and Nelson Mandela in 1993?",
      options: [
        "The Nobel Peace Prize",
        "The UN Human Rights Award",
        "The Presidential Medal of Freedom",
        "The Sakharov Prize for Freedom of Thought"
      ],
      answer: "The Nobel Peace Prize",
      explanation: "De Klerk and Mandela received the 1993 Nobel Peace Prize for their collaborative role in peacefully dismantling apartheid."
    },
    {
      id: 610,
      subject_id: "history",
      question: "What is considered F.W. de Klerk's primary historical legacy in South African history?",
      options: [
        "Taking the courageous political risk to dismantle statutory apartheid and steer the country from minority rule to peaceful democratic elections",
        "Successfully preserving white minority dominance through constitutional loopholes",
        "Establishing a permanent military dictatorship in the Western Cape",
        "Signing an alliance with Warsaw Pact nations"
      ],
      answer: "Taking the courageous political risk to dismantle statutory apartheid and steer the country from minority rule to peaceful democratic elections",
      explanation: "De Klerk's willingness to cross the Rubicon in 1990 made peaceful transition to democracy possible."
    },

    // --- Nelson Mandela (611 - 620) ---
    {
      id: 611,
      subject_id: "history",
      question: "From which prison facility was Nelson Mandela released on February 11, 1990?",
      options: [
        "Victor Verster Prison",
        "Robben Island Maximum Security Prison",
        "Pollsmoor Prison",
        "C-Max Pretoria Central Prison"
      ],
      answer: "Victor Verster Prison",
      explanation: "Under CAPS, Mandela's final years of imprisonment at Victor Verster (Paarl) where he conducted secret talks with government ministers are highlighted."
    },
    {
      id: 612,
      subject_id: "history",
      question: "What key message did Nelson Mandela deliver in his historic speech on the Grand Parade in Cape Town upon his release?",
      options: [
        "A call for peace, unity, reconciliation, and a reiteration that the armed struggle was a necessary response to state violence which would be reviewed as talks progressed",
        "A declaration of immediate guerrilla war against all government installations",
        "An announcement that he was retiring from political life permanently",
        "A demand for the immediate expulsion of all white citizens"
      ],
      answer: "A call for peace, unity, reconciliation, and a reiteration that the armed struggle was a necessary response to state violence which would be reviewed as talks progressed",
      explanation: "Mandela immediately projected statesmanship, balancing militant resolve with an outstretched hand for peace."
    },
    {
      id: 613,
      subject_id: "history",
      question: "What role did Nelson Mandela play in the African National Congress during the negotiation period (1990–1994)?",
      options: [
        "He served as Deputy President (and later President) of the ANC, leading the organization through complex multi-party negotiations",
        "He remained in exile in London directing underground military operations",
        "He refused to hold any formal leadership position within political parties",
        "He served as chief legal advisor to the National Party government"
      ],
      answer: "He served as Deputy President (and later President) of the ANC, leading the organization through complex multi-party negotiations",
      explanation: "Mandela steered the ANC delegation at CODESA and bilateral talks, keeping the alliance cohesive through immense turbulence."
    },
    {
      id: 614,
      subject_id: "history",
      question: "How did Nelson Mandela approach white fears and anxieties during the transition process?",
      options: [
        "Through deliberate acts of reconciliation, emphasizing that a democratic South Africa belonged to all who lived in it, black and white",
        "By threatening expropriation of all private property without compensation",
        "By refusing to meet with white business leaders or Afrikaner cultural figures",
        "By demanding segregated neighborhoods in major urban centers"
      ],
      answer: "Through deliberate acts of reconciliation, emphasizing that a democratic South Africa belonged to all who lived in it, black and white",
      explanation: "Mandela famously championed national reconciliation, famously visiting Betsy Verwoerd (widow of Hendrik Verwoerd) and promoting rugby as a unifying symbol."
    },
    {
      id: 615,
      subject_id: "history",
      question: "What secret preliminary talks did Nelson Mandela initiate with the apartheid government while still imprisoned?",
      options: [
        "Talks about talks with government emissaries and State Security officials like Kobie Coetsee to explore the viability of a negotiated settlement",
        "Negotiations to sell Robben Island to foreign investors",
        "Discussions to form a coalition government with the Conservative Party",
        "Secret arms deals with international superpower intelligence agencies"
      ],
      answer: "Talks about talks with government emissaries and State Security officials like Kobie Coetsee to explore the viability of a negotiated settlement",
      explanation: "Mandela took the initiative from prison in the mid-1980s to write letters and meet government ministers, laying the groundwork for official negotiations."
    },
    {
      id: 616,
      subject_id: "history",
      question: "Why did Nelson Mandela insist on maintaining international economic sanctions against South Africa during the early negotiation phase?",
      options: [
        "To ensure the regime did not stall or backtrack on its promises to dismantle apartheid irreversibly",
        "To bankrupt the South African banking sector permanently",
        "To prevent foreign tourists from visiting national parks",
        "To force the country into a communist economic system"
      ],
      answer: "To ensure the regime did not stall or backtrack on its promises to dismantle apartheid irreversibly",
      explanation: "Sanctions were used as strategic leverage by the ANC until 'irreversible' steps toward democracy were guaranteed."
    },
    {
      id: 617,
      subject_id: "history",
      question: "How did Nelson Mandela handle crises such as the Boipatong and Bisho massacres during negotiations?",
      options: [
        "By managing intense public anger, temporarily suspending talks when necessary, but consistently steering the parties back to the negotiating table",
        "By ordering armed retaliatory attacks on government military bases",
        "By resigning from political leadership in protest",
        "By calling for a permanent civil war across the country"
      ],
      answer: "By managing intense public anger, temporarily suspending talks when necessary, but consistently steering the parties back to the negotiating table",
      explanation: "Mandela balanced grassroots outrage with a pragmatic commitment to securing a peaceful democratic settlement."
    },
    {
      id: 618,
      subject_id: "history",
      question: "What core value became the defining hallmark of Nelson Mandela's political vision for a new South Africa?",
      options: [
        "National reconciliation and the vision of a 'Rainbow Nation'",
        "Retributive justice and punishment for all white citizens",
        "Isolation from international diplomatic affairs",
        "Centralized state ownership of all agricultural land"
      ],
      answer: "National reconciliation and the vision of a 'Rainbow Nation'",
      explanation: "Mandela's emphasis on forgiveness and nation-building averted a racial civil war during the turbulent transition."
    },
    {
      id: 619,
      subject_id: "history",
      question: "What historic milestone was achieved on April 27, 1994, under Nelson Mandela's leadership?",
      options: [
        "South Africa's first fully democratic, non-racial national elections, resulting in Mandela becoming the first democratically elected president",
        "The signing of the final communist constitution",
        "The partition of South Africa into four independent republics",
        "The re-admission of South Africa into the British Empire"
      ],
      answer: "South Africa's first fully democratic, non-racial national elections, resulting in Mandela becoming the first democratically elected president",
      explanation: "April 27, 1994, marked the birth of South Africa's constitutional democracy."
    },
    {
      id: 620,
      subject_id: "history",
      question: "What is Nelson Mandela's enduring global legacy?",
      options: [
        "An international symbol of moral integrity, forgiveness, leadership, and the peaceful resolution of seemingly intractable political conflicts",
        "The pioneer of modern guerrilla warfare tactics",
        "The architect of centralized economic planning",
        "The founder of international trade cartels"
      ],
      answer: "An international symbol of moral integrity, forgiveness, leadership, and the peaceful resolution of seemingly intractable political conflicts",
      explanation: "Mandela's global stature rests on his transition from militant prisoner to statesman and unifier."
    },

    // --- Groote Schuur Minute (621 - 630) ---
    {
      id: 621,
      subject_id: "history",
      question: "When was the Groote Schuur Minute signed between the National Party government and the ANC?",
      options: [
        "May 4, 1990",
        "February 2, 1990",
        "August 6, 1990",
        "December 20, 1991"
      ],
      answer: "May 4, 1990",
      explanation: "Under CAPS, the Groote Schuur Minute is studied as the first formal exploratory meeting establishing procedural guidelines for negotiations."
    },
    {
      id: 622,
      subject_id: "history",
      question: "Where did the meeting that resulted in the Groote Schuur Minute take place?",
      options: [
        "Groote Schuur, the official presidential residence in Cape Town",
        "The Union Buildings in Pretoria",
        "Victor Verster Prison in Paarl",
        "The World Trade Centre in Kempton Park"
      ],
      answer: "Groote Schuur, the official presidential residence in Cape Town",
      explanation: "The venue gave its name to the historic document signed at the conclusion of the talks."
    },
    {
      id: 623,
      subject_id: "history",
      question: "Who headed the negotiating delegations for the ANC and the government at Groote Schuur?",
      options: [
        "Nelson Mandela for the ANC and F.W. de Klerk / government ministers for the State",
        "Cyril Ramaphosa and Magnus Malan",
        "Oliver Tambo and P.W. Botha",
        "Thabo Mbeki and B.J. Vorster"
      ],
      answer: "Nelson Mandela for the ANC and F.W. de Klerk / government ministers for the State",
      explanation: "Top-level leaders from both sides met face-to-face for the first time in decades to establish mutual trust."
    },
    {
      id: 624,
      subject_id: "history",
      question: "What was the primary objective of the Groote Schuur Minute talks?",
      options: [
        "To resolve climate-of-violence obstacles and create a conducive atmosphere for formal constitutional negotiations",
        "To draft the final democratic constitution of South Africa",
        "To integrate the ANC armed wing directly into the SADF",
        "To hold immediate national elections within thirty days"
      ],
      answer: "To resolve climate-of-violence obstacles and create a conducive atmosphere for formal constitutional negotiations",
      explanation: "The meeting focused on clearing obstacles such as political prisoners, exiles, and repressive security legislation."
    },
    {
      id: 625,
      subject_id: "history",
      question: "What key agreement regarding political prisoners and exiles was reached in the Groote Schuur Minute?",
      options: [
        "To establish a joint working group to review definitions of political offenses, release political prisoners, and grant immunity to returning exiles",
        "To execute all political prisoners immediately",
        "To ban all exiles from ever returning to South Africa",
        "To charge returning exiles with high treason"
      ],
      answer: "To establish a joint working group to review definitions of political offenses, release political prisoners, and grant immunity to returning exiles",
      explanation: "Addressing the plight of political prisoners and exiles was a crucial prerequisite set by the ANC before talks could advance."
    },
    {
      id: 626,
      subject_id: "history",
      question: "How did the government commit to reviewing repressive security legislation in the Groote Schuur Minute?",
      options: [
        "By agreeing to review security laws like the Internal Security Act and emergency regulations to ensure free political activity",
        "By doubling prison sentences for political activists",
        "By passing new laws banning all public gatherings permanently",
        "By placing the entire country under martial law"
      ],
      answer: "By agreeing to review security laws like the Internal Security Act and emergency regulations to ensure free political activity",
      explanation: "Normalizing political life required scaling back draconian apartheid security legislation."
    },
    {
      id: 627,
      subject_id: "history",
      question: "Why was the Groote Schuur Minute considered a breakthrough in South African political history?",
      options: [
        "It represented the first official, face-to-face agreement between the apartheid government and the banned ANC leadership",
        "It resulted in the immediate surrender of the National Party",
        "It established a socialist republic overnight",
        "It abolished all taxes and municipal fees nationwide"
      ],
      answer: "It represented the first official, face-to-face agreement between the apartheid government and the banned ANC leadership",
      explanation: "It bridged decades of bitter hostility, initiating a formal working relationship between former enemies."
    },
    {
      id: 628,
      subject_id: "history",
      question: "What procedural challenge arose regarding the release of political prisoners during the Groote Schuur discussions?",
      options: [
        "Defining what constituted a 'political offense' versus a common-law crime committed during political unrest",
        "Finding enough prison cells to hold the released prisoners",
        "Convincing prisoners to leave their cells voluntarily",
        "Paying for international airline tickets for returning prisoners"
      ],
      answer: "Defining what constituted a 'political offense' versus a common-law crime committed during political unrest",
      explanation: "Sorting through thousands of cases required careful legal definitions by the joint working group."
    },
    {
      id: 629,
      subject_id: "history",
      question: "What follow-up meeting was scheduled as a direct result of the momentum generated at Groote Schuur?",
      options: [
        "The Pretoria Minute in August 1990",
        "CODESA 1 in December 1991",
        "The Bisho Peace Conference in 1992",
        "The Kempton Park Summit in 1993"
      ],
      answer: "The Pretoria Minute in August 1990",
      explanation: "The success at Groote Schuur paved the way for further confidence-building steps in Pretoria."
    },
    {
      id: 630,
      subject_id: "history",
      question: "What was the broader historical significance of the Groote Schuur Minute on the road to democracy?",
      options: [
        "It established the procedural mechanisms and mutual trust required to move toward formal constitutional negotiations",
        "It proved that negotiations were impossible and led to renewed warfare",
        "It resulted in the immediate partition of the country",
        "It had no impact on subsequent political developments"
      ],
      answer: "It established the procedural mechanisms and mutual trust required to move toward formal constitutional negotiations",
      explanation: "It set the precedent that negotiated settlements would replace violent conflict."
    },

    // --- Pretoria Minute (631 - 640) ---
    {
      id: 631,
      subject_id: "history",
      question: "When was the Pretoria Minute signed between the ANC and the South African government?",
      options: [
        "August 6, 1990",
        "May 4, 1990",
        "February 2, 1990",
        "December 20, 1991"
      ],
      answer: "August 6, 1990",
      explanation: "Under CAPS, the Pretoria Minute is studied as the milestone agreement where the ANC suspended the armed struggle."
    },
    {
      id: 632,
      subject_id: "history",
      question: "What major concession did the African National Congress make in the Pretoria Minute?",
      options: [
        "The immediate suspension of all armed struggle actions and related military activities",
        "The complete disbandment of the ANC political organization",
        "The surrender of all ANC assets to the National Party",
        "The agreement to contest elections as part of the National Party ticket"
      ],
      answer: "The immediate suspension of all armed struggle actions and related military activities",
      explanation: "In exchange for government commitments, the ANC suspended Umkhonto we Sizwe's armed campaign."
    },
    {
      id: 633,
      subject_id: "history",
      question: "How did the government reciprocate the ANC's suspension of the armed struggle in the Pretoria Minute?",
      options: [
        "By committing to expedite the release of political prisoners and grant indemnity from prosecution to returning exiles",
        "By handing over executive control of the police force to Nelson Mandela",
        "By resigning from office and holding elections the following week",
        "By declaring Afrikaans the sole official language of the state"
      ],
      answer: "By committing to expedite the release of political prisoners and grant indemnity from prosecution to returning exiles",
      explanation: "The Pretoria Minute balanced the ANC's military suspension with state actions on prisoners and exiles."
    },
    {
      id: 634,
      subject_id: "history",
      question: "What timeline was established in the Pretoria Minute regarding security legislation and political prisoners?",
      options: [
        "Agreed target dates for reviewing security laws and releasing political prisoners by specified deadlines",
        "A 20-year delay on all prisoner releases",
        "An indefinite postponement of all legal reviews",
        "Immediate execution of all security legislation"
      ],
      answer: "Agreed target dates for reviewing security laws and releasing political prisoners by specified deadlines",
      explanation: "Setting concrete target dates ensured accountability in implementing the Groote Schuur understandings."
    },
    {
      id: 635,
      subject_id: "history",
      question: "Why was the suspension of the armed struggle by the ANC controversial among some anti-apartheid activists?",
      options: [
        "Some underground cadres and radical youth felt the armed struggle was being halted before substantive democratic gains were guaranteed",
        "They wanted the armed struggle to intensify into a nuclear conflict",
        "They believed the military wing should merge with the South African Police",
        "They wanted to hand weapons over to foreign mercenaries"
      ],
      answer: "Some underground cadres and radical youth felt the armed struggle was being halted before substantive democratic gains were guaranteed",
      explanation: "Suspending MK military operations was a difficult compromise that caused internal debate within the liberation movement."
    },
    {
      id: 636,
      subject_id: "history",
      question: "How did the Pretoria Minute impact ongoing violence in South African townships?",
      options: [
        "While political leaders signed peace commitments, township violence unfortunately continued to escalate due to complex local conflicts and alleged third-force activity",
        "Township violence stopped completely overnight across the country",
        "Violence increased only because the ANC broke its promise immediately",
        "The police dismantled all weapons factories in townships"
      ],
      answer: "While political leaders signed peace commitments, township violence unfortunately continued to escalate due to complex local conflicts and alleged third-force activity",
      explanation: "Despite top-level agreements, violence on the ground persisted, challenging the transition process."
    },
    {
      id: 637,
      subject_id: "history",
      question: "What role did the joint working groups play leading up to the Pretoria Minute?",
      options: [
        "They monitored progress on prisoner releases and security law reviews, ironing out technical disputes before ministerial sign-off",
        "They drafted secret military invasion plans against neighboring states",
        "They served as a legislative parliament while normal parliament was suspended",
        "They audited financial accounts of political parties"
      ],
      answer: "They monitored progress on prisoner releases and security law reviews, ironing out technical disputes before ministerial sign-off",
      explanation: "Working groups ensured that high-level agreements were backed by practical administrative implementation."
    },
    {
      id: 638,
      subject_id: "history",
      question: "What was F.W. de Klerk's assessment of the Pretoria Minute?",
      options: [
        "He hailed it as a major breakthrough that normalized political life and cleared the path for multi-party negotiations",
        "He dismissed it as a failure and reimposed strict states of emergency",
        "He argued it gave too many concessions to the ANC without any return",
        "He claimed it had no legal validity in South African courts"
      ],
      answer: "He hailed it as a major breakthrough that normalized political life and cleared the path for multi-party negotiations",
      explanation: "De Klerk welcomed the suspension of armed conflict as proof that negotiations were succeeding."
    },
    {
      id: 639,
      subject_id: "history",
      question: "How did the Pretoria Minute influence the international community's economic stance toward South Africa?",
      options: [
        "It encouraged foreign governments to begin easing economic sanctions as irreversible steps toward democracy were demonstrated",
        "It prompted the UN to impose total military blockades on South African ports",
        "It had no effect on international trade policies whatsoever",
        "It led foreign investors to withdraw all capital from the country immediately"
      ],
      answer: "It encouraged foreign governments to begin easing economic sanctions as irreversible steps toward democracy were demonstrated",
      explanation: "Progress in talks rewarded South Africa with gradual re-entry into the international community."
    },
    {
      id: 640,
      subject_id: "history",
      question: "What was the ultimate historical significance of the Pretoria Minute?",
      options: [
        "It removed the final major obstacle to formal constitutional convention talks by securing the suspension of the armed struggle",
        "It resulted in the immediate resignation of Nelson Mandela",
        "It permanently divided the country into independent confederations",
        "It established a military junta that ruled until 1999"
      ],
      answer: "It removed the final major obstacle to formal constitutional convention talks by securing the suspension of the armed struggle",
      explanation: "With the armed struggle suspended, the parties could finally transition to multi-party constitutional negotiations."
    },

    // --- CODESA 1 (Convention for a Democratic South Africa) (641 - 650) -->
    {
      id: 641,
      subject_id: "history",
      question: "When and where did CODESA 1 (Convention for a Democratic South Africa) take place?",
      options: [
        "December 20–21, 1991, at the World Trade Centre in Kempton Park, Johannesburg",
        "August 6, 1990, in Pretoria",
        "May 15, 1992, in Cape Town",
        "April 27, 1994, in Soweto"
      ],
      answer: "December 20–21, 1991, at the World Trade Centre in Kempton Park, Johannesburg",
      explanation: "Under CAPS, CODESA 1 is studied as the formal launch of multi-party constitutional negotiations."
    },
    {
      id: 642,
      subject_id: "history",
      question: "What was the primary purpose of CODESA 1?",
      options: [
        "To bring together political parties, homeland leaders, and the government to negotiate a new democratic constitution and transitional arrangements",
        "To negotiate foreign trade agreements with European nations",
        "To decide the outcome of upcoming rugby test matches",
        "To allocate municipal housing budgets for major metropolitan areas"
      ],
      answer: "To bring together political parties, homeland leaders, and the government to negotiate a new democratic constitution and transitional arrangements",
      explanation: "CODESA served as the primary multi-party forum for designing a democratic South Africa."
    },
    {
      id: 643,
      subject_id: "history",
      question: "How many political formations participated in CODESA 1?",
      options: [
        "Nineteen political parties and organizations representing a broad spectrum of South African society",
        "Only two parties: the National Party and the African National Congress",
        "Over one hundred international delegations from the United Nations",
        "A single committee appointed entirely by the judiciary"
      ],
      answer: "Nineteen political parties and organizations representing a broad spectrum of South African society",
      explanation: "CODESA was remarkably inclusive, bringing together the government, liberation movements, homeland leaders, and various political parties."
    },
    {
      id: 644,
      subject_id: "history",
      question: "What was the 'Declaration of Intent' signed by delegates at CODESA 1?",
      options: [
        "A solemn pledge committing all participants to a united, non-racial, democratic South Africa with universal suffrage and an independent judiciary",
        "An agreement to maintain apartheid separate development indefinitely",
        "A declaration of war against neighboring African states",
        "A promise to establish a one-party socialist dictatorship"
      ],
      answer: "A solemn pledge committing all participants to a united, non-racial, democratic South Africa with universal suffrage and an independent judiciary",
      explanation: "Almost all delegates signed the Declaration of Intent, establishing common constitutional goals."
    },
    {
      id: 645,
      subject_id: "history",
      question: "What dramatic public confrontation occurred between Nelson Mandela and F.W. de Klerk during CODESA 1?",
      options: [
        "Mandela publicly rebuked De Klerk over covert state-sponsored violence (third force) in townships, stunning television audiences and delegates",
        "De Klerk ordered Mandela to be arrested and returned to Robben Island",
        "Mandela challenged De Klerk to a physical boxing match on stage",
        "De Klerk walked out of the conference and refused to ever return"
      ],
      answer: "Mandela publicly rebuked De Klerk over covert state-sponsored violence (third force) in townships, stunning television audiences and delegates",
      explanation: "Mandela's fierce critique exposed deep tensions regarding state complicity in township violence."
    },
    {
      id: 646,
      subject_id: "history",
      question: "What working groups were established at CODESA 1 to tackle specific constitutional tasks?",
      options: [
        "Five working groups dealing with climate for free political activity, constitution-making body, transitional government, future of homelands, and timeframes",
        "A single committee handling military defense budgets",
        "Two groups focusing exclusively on agricultural subsidies",
        "Ten committees managing foreign trade and tourism"
      ],
      answer: "Five working groups dealing with climate for free political activity, constitution-making body, transitional government, future of homelands, and timeframes",
      explanation: "The working group structure divided complex constitutional issues into manageable negotiation topics."
    },
    {
      id: 647,
      subject_id: "history",
      question: "What role did South African judges play during the CODESA proceedings?",
      options: [
        "They served as neutral chairpersons and administrators to ensure orderly and fair multi-party deliberations",
        "They acted as prosecuting attorneys against political leaders",
        "They held veto power over all constitutional proposals",
        "They boycotted the convention in protest against legal reform"
      ],
      answer: "They served as neutral chairpersons and administrators to ensure orderly and fair multi-party deliberations",
      explanation: "Judicial chairpersons provided impartiality in managing heated multi-party debates."
    },
    {
      id: 648,
      subject_id: "history",
      question: "Why was CODESA 1 considered a major milestone despite underlying tensions?",
      options: [
        "It marked the formal commencement of inclusive, multi-party negotiations to peacefully replace apartheid with a democratic order",
        "It successfully drafted and implemented the final constitution within 48 hours",
        "It resulted in the immediate voluntary disbandment of all political parties",
        "It abolished all taxes and established free public housing"
      ],
      answer: "It marked the formal commencement of inclusive, multi-party negotiations to peacefully replace apartheid with a democratic order",
      explanation: "Bringing diverse adversaries to the same negotiating table was a historic achievement."
    },
    {
      id: 649,
      subject_id: "history",
      question: "Which major political organizations notably stayed away or expressed serious reservations about CODESA 1?",
      options: [
        "The Pan Africanist Congress (PAC) and homeland figures like Mangosuthu Buthelezi (IFP) raised severe objections, while the Conservative Party refused to attend",
        "The African National Congress and the South African Communist Party",
        "The National Party and the South African Defence Force",
        "The Democratic Party and the Labour Party"
      ],
      answer: "The Pan Africanist Congress (PAC) and homeland figures like Mangosuthu Buthelezi (IFP) raised severe objections, while the Conservative Party refused to attend",
      explanation: "Achieving universal buy-in was difficult due to competing visions of a future state (unitary vs. federal/homeland models)."
    },
    {
      id: 650,
      subject_id: "history",
      question: "What underlying tensions threatened the success of CODESA 1 from its inception?",
      options: [
        "Profound mistrust between the NP and ANC, ongoing township violence, and disputes over the sovereignty of ethnic homelands",
        "Disagreements over the official menu at convention dinners",
        "Arguments over the color of the conference room carpeting",
        "Fierce debates over professional sports team selections"
      ],
      answer: "Profound mistrust between the NP and ANC, ongoing township violence, and disputes over the sovereignty of ethnic homelands",
      explanation: "Deep-seated suspicion and violence outside the negotiation hall constantly threatened to derail proceedings."
    },

    // --- CODESA 2 (651 - 660) ---
    {
      id: 651,
      subject_id: "history",
      question: "When did CODESA 2 convene at the World Trade Centre in Kempton Park?",
      options: [
        "May 15–16, 1992",
        "December 20–21, 1991",
        "September 7, 1992",
        "August 6, 1990"
      ],
      answer: "May 15–16, 1992",
      explanation: "Under CAPS, CODESA 2 is studied as the session where negotiations hit a severe deadlock and collapsed."
    },
    {
      id: 652,
      subject_id: "history",
      question: "What was the central point of deadlock between the National Party and the ANC at CODESA 2?",
      options: [
        "The percentage majority required in an elected constituent assembly to draft the final constitution—the NP demanded veto power (75%), while the ANC wanted a democratic majority (around 60%)",
        "The choice of national anthem and official flag colors",
        "The decision to privatize all national airline services",
        "The exact date of school holidays across provinces"
      ],
      answer: "The percentage majority required in an elected constituent assembly to draft the final constitution—the NP demanded veto power (75%), while the ANC wanted a democratic majority (around 60%)",
      explanation: "The NP wanted minority veto rights to block major constitutional changes, while the ANC insisted on democratic majority rule."
    },
    {
      id: 653,
      subject_id: "history",
      question: "What was the immediate consequence of the deadlock over constitutional majorities at CODESA 2?",
      options: [
        "A complete breakdown and deadlock of negotiations, leading to the suspension of CODESA 2 without agreement",
        "The immediate signing of a final democratic constitution",
        "The voluntary surrender of power by the National Party government",
        "The merger of the ANC and NP into a single political party"
      ],
      answer: "A complete breakdown and deadlock of negotiations, leading to the suspension of CODESA 2 without agreement",
      explanation: "The failure of CODESA 2 plunged the country into a political crisis and renewed mass confrontation."
    },
    {
      id: 654,
      subject_id: "history",
      question: "What tragic event in June 1992 severely damaged the political climate immediately after the collapse of CODESA 2?",
      options: [
        "The Boipatong Massacre, where Inkatha-affiliated hostel dwellers killed 39 township residents",
        "The Bisho Massacre in the Ciskei homeland",
        "The assassination of Chris Hani in Boksburg",
        "The bombing of Shell House in Johannesburg"
      ],
      answer: "The Boipatong Massacre, where Inkatha-affiliated hostel dwellers killed 39 township residents",
      explanation: "The Boipatong Massacre generated national outrage and deep suspicion of police complicity in third-force violence."
    },
    {
      id: 655,
      subject_id: "history",
      question: "How did the African National Congress respond to the Boipatong Massacre regarding negotiations?",
      options: [
        "By suspending all bilateral and multilateral negotiations with the National Party government until state-sponsored violence was halted",
        "By declaring immediate total war against the South African Defence Force",
        "By resigning from all municipal councils nationwide",
        "By appealing exclusively to the British monarchy for intervention"
      ],
      answer: "By suspending all bilateral and multilateral negotiations with the National Party government until state-sponsored violence was halted",
      explanation: "Mandela and the ANC walked away from the negotiating table in protest against ongoing violence and police inaction."
    },
    {
      id: 656,
      subject_id: "history",
      question: "What strategy of mass resistance did the ANC launch following the collapse of CODESA 2 and the Boipatong massacre?",
      options: [
        "A campaign of rolling mass action, including general strikes, nationwide protests, and mass marches",
        "A guerrilla bombing campaign targeting commercial shopping centers",
        "An economic blockade of rural agricultural farmlands",
        "A refusal to pay income tax to the central government"
      ],
      answer: "A campaign of rolling mass action, including general strikes, nationwide protests, and mass marches",
      explanation: "The ANC took the struggle back to the streets with rolling mass action to pressure the regime."
    },
    {
      id: 657,
      subject_id: "history",
      question: "Which subsequent massacre in September 1992 further escalated tensions and threatened the transition process?",
      options: [
        "The Bisho Massacre",
        "The Sharpeville Massacre",
        "The Langa Massacre",
        "The Soweto Uprising"
      ],
      answer: "The Bisho Massacre",
      explanation: "The Bisho Massacre in Ciskei added further urgency and tragedy to the tense political stalemate of late 1992."
    },
    {
      id: 658,
      subject_id: "history",
      question: "What did the failure of CODESA 2 demonstrate about the South African transition?",
      options: [
        "That high-level constitutional talks were fragile and could not succeed while township violence, deep mistrust, and unresolved security issues persisted",
        "That the apartheid government was invincible and could never be defeated",
        "That political parties were completely uninterested in democracy",
        "That foreign powers controlled every aspect of South African politics"
      ],
      answer: "That high-level constitutional talks were fragile and could not succeed while township violence, deep mistrust, and unresolved security issues persisted",
      explanation: "CODESA 2 proved that political negotiations were inextricably linked to peace and security on the ground."
    },
    {
      id: 659,
      subject_id: "history",
      question: "What agreement eventually broke the post-CODESA 2 deadlock later in September 1992?",
      options: [
        "The Record of Understanding signed between Nelson Mandela and F.W. de Klerk",
        "The Pretoria Minute on military integration",
        "The Groote Schuur Constitutional Accord",
        "The National Peace Treaty of Johannesburg"
      ],
      answer: "The Record of Understanding signed between Nelson Mandela and F.W. de Klerk",
      explanation: "The Record of Understanding paved the way for resuming negotiations by addressing political prisoners and carrying dangerous weapons."
    },
    {
      id: 660,
      subject_id: "history",
      question: "What is the historical legacy of CODESA 2?",
      options: [
        "Although it collapsed in deadlock, it highlighted the fundamental constitutional divide over majority rule versus minority safeguards that eventually had to be resolved",
        "It successfully established the final democratic constitution of 1994",
        "It resulted in the permanent ban of all political parties in South Africa",
        "It had zero relevance to subsequent political developments"
      ],
      answer: "Although it collapsed in deadlock, it highlighted the fundamental constitutional divide over majority rule versus minority safeguards that eventually had to be resolved",
      explanation: "CODESA 2's failure exposed crucial stumbling blocks that shaped the subsequent design of the Interim Constitution."
    },

    // --- National Peace Accord / Peace Treaty (661 - 670) ---
    {
      id: 661,
      subject_id: "history",
      question: "When was the National Peace Accord signed in South Africa?",
      options: [
        "September 21, 1991",
        "August 6, 1990",
        "December 20, 1991",
        "April 27, 1994"
      ],
      answer: "September 21, 1991",
      explanation: "Under CAPS, the National Peace Accord is studied as a critical multi-party pact aimed at curbing political violence during negotiations."
    },
    {
      id: 662,
      subject_id: "history",
      question: "Who were the primary signatories to the National Peace Accord?",
      options: [
        "Representatives of the South African government, the ANC, the IFP, trade unions, business leaders, and over 20 political organizations and churches",
        "Only the National Party and the African National Congress",
        "Exclusively military generals and police commissioners",
        "Foreign diplomats representing the United Nations Security Council"
      ],
      answer: "Representatives of the South African government, the ANC, the IFP, trade unions, business leaders, and over 20 political organizations and churches",
      explanation: "The Peace Accord brought together an unprecedented cross-section of South African leadership to tackle violence."
    },
    {
      id: 663,
      subject_id: "history",
      question: "What was the primary objective of the National Peace Accord?",
      options: [
        "To curb political violence, establish codes of conduct for political parties and security forces, and create mechanisms for peaceful conflict resolution",
        "To draft the final chapters of the democratic constitution",
        "To privatize state corporations and industrial factories",
        "To organize national rugby tournaments across provinces"
      ],
      answer: "To curb political violence, establish codes of conduct for political parties and security forces, and create mechanisms for peaceful conflict resolution",
      explanation: "Stopping the devastating bloodshed in townships and rural areas was the Accord's urgent mandate."
    },
    {
      id: 664,
      subject_id: "history",
      question: "What institutional structures were created nationwide as a result of the National Peace Accord?",
      options: [
        "National, regional, and local Peace Committees, along with a National Peace Secretariat to monitor violence and mediate disputes",
        "Private military academies for political party bodyguards",
        "Government tribunals to prosecute tax evaders",
        "State-run commercial farms in rural districts"
      ],
      answer: "National, regional, and local Peace Committees, along with a National Peace Secretariat to monitor violence and mediate disputes",
      explanation: "Grassroots peace committees brought communities, police, and political rivals together to defuse local tensions."
    },
    {
      id: 665,
      subject_id: "history",
      question: "What code of conduct did the National Peace Accord establish for the South African Police and security forces?",
      options: [
        "A strict code prohibiting political bias, torture, and excessive force, requiring accountability and professional policing during protests",
        "An instruction to shoot on sight any protester marching in public streets",
        "Permission to arrest opposition leaders without judicial warrants",
        "Mandatory membership in the ruling National Party"
      ],
      answer: "A strict code prohibiting political bias, torture, and excessive force, requiring accountability and professional policing during protests",
      explanation: "Holding security forces accountable to a code of conduct was crucial to restoring public trust in policing."
    },
    {
      id: 666,
      subject_id: "history",
      question: "What code of conduct was laid down for political parties in the National Peace Accord?",
      options: [
        "Commitment to peaceful political competition, freedom of political movement, and a ban on carrying dangerous weapons at public rallies",
        "An agreement to merge into a single ruling coalition",
        "A ban on holding public speeches or election meetings",
        "Mandatory financial contributions to state treasury accounts"
      ],
      answer: "Commitment to peaceful political competition, freedom of political movement, and a ban on carrying dangerous weapons at public rallies",
      explanation: "Parties pledged to campaign peacefully and renounce political intimidation."
    },
    {
      id: 667,
      subject_id: "history",
      question: "Who chaired the National Peace Commission responsible for monitoring the implementation of the Accord?",
      options: [
        "Prominent jurists and religious leaders, notably headed by figures like John Hall and backed by church leaders",
        "Senior generals of the South African Defence Force",
        "Cabinet ministers appointed by President F.W. de Klerk",
        "International ambassadors stationed in Pretoria"
      ],
      answer: "Prominent jurists and religious leaders, notably headed by figures like John Hall and backed by church leaders",
      explanation: "Independent moral authority was essential for overseeing compliance with the Peace Accord."
    },
    {
      id: 668,
      subject_id: "history",
      question: "Why did the National Peace Accord struggle to completely eliminate political violence in townships?",
      options: [
        "Due to rogue elements within security forces ('Third Force'), deep-seated local rivalries (such as ANC-IFP clashes), and lack of full compliance",
        "Because political leaders ordered their followers to ignore the treaty entirely",
        "Because the United Nations ordered the treaty to be dissolved",
        "Because there were no police officers stationed in urban areas"
      ],
      answer: "Due to rogue elements within security forces ('Third Force'), deep-seated local rivalries (such as ANC-IFP clashes), and lack of full compliance",
      explanation: "While the Accord provided vital mechanisms, stopping entrenched violence proved exceptionally difficult."
    },
    {
      id: 669,
      subject_id: "history",
      question: "What role did international monitors play within the framework of the peace agreements?",
      options: [
        "Observers from the UN, OAU, Commonwealth, and European Community monitored marches and hot spots to build confidence and deter violence",
        "They commanded local police battalions during protests",
        "They acted as judges in criminal courts across the country",
        "They managed international trade tariffs and import quotas"
      ],
      answer: "Observers from the UN, OAU, Commonwealth, and European Community monitored marches and hot spots to build confidence and deter violence",
      explanation: "International observers added credibility and transparency to demonstrations and peace efforts."
    },
    {
      id: 670,
      subject_id: "history",
      question: "What is considered the primary historical importance of the National Peace Accord?",
      options: [
        "It provided a vital multi-party framework for managing conflict and proved that South Africans could establish joint mechanisms for peace despite deep divisions",
        "It successfully abolished all political parties except the National Party",
        "It resulted in the immediate disarmament of all citizens nationwide",
        "It had no practical effect on the level of violence in South Africa"
      ],
      answer: "It provided a vital multi-party framework for managing conflict and proved that South Africans could establish joint mechanisms for peace despite deep divisions",
      explanation: "The Peace Accord established structures that fostered dialogue and conflict resolution at community and national levels."
    },

    // --- Major Conflicts like Bisho Massacre (671 - 680) ---
    {
      id: 671,
      subject_id: "history",
      question: "When did the Bisho Massacre take place in South Africa?",
      options: [
        "September 7, 1992",
        "June 17, 1992",
        "December 20, 1991",
        "April 27, 1994"
      ],
      answer: "September 7, 1992",
      explanation: "Under CAPS, the Bisho Massacre is studied as one of the deadliest conflicts of the transition period involving homeland security forces."
    },
    {
      id: 672,
      subject_id: "history",
      question: "Where did the Bisho Massacre occur?",
      options: [
        "In Bisho, the capital of the 'independent' homeland of Ciskei in the Eastern Cape",
        "In Soweto, Johannesburg",
        "In Boipatong, Vereeniging",
        "In Mitchells Plain, Cape Town"
      ],
      answer: "In Bisho, the capital of the 'independent' homeland of Ciskei in the Eastern Cape",
      explanation: "The event took place during a mass protest march directed at the Ciskei homeland administration."
    },
    {
      id: 673,
      subject_id: "history",
      question: "Who organized the mass protest march that culminated in the Bisho Massacre?",
      options: [
        "The African National Congress (ANC) and its alliance partners",
        "The National Party government",
        "The Inkatha Freedom Party",
        "The Conservative Party"
      ],
      answer: "The African National Congress (ANC) and its alliance partners",
      explanation: "The ANC led the march to pressure military-ruled homelands to democratize and reincorporate into South Africa."
    },
    {
      id: 674,
      subject_id: "history",
      question: "What was the primary political demand of the protesters marching on Bisho in September 1992?",
      options: [
        "The reincorporation of the Ciskei homeland into South Africa and the removal of military dictator Brigadier Oupa Gqozo",
        "The immediate independence of the Eastern Cape province",
        "The appointment of Nelson Mandela as king of Ciskei",
        "The abolition of all taxes for homeland residents"
      ],
      answer: "The reincorporation of the Ciskei homeland into South Africa and the removal of military dictator Brigadier Oupa Gqozo",
      explanation: "Protesters demanded an end to repressive homeland rule and reintegration into a unitary South Africa."
    },
    {
      id: 675,
      subject_id: "history",
      question: "How did Ciskei homeland security forces respond as protesters approached the stadium in Bisho?",
      options: [
        "Ciskei Defence Force troops opened fire with automatic rifles and machine guns directly into the crowd of peaceful marchers",
        "They welcomed the protesters with food and water packages",
        "They resigned from their posts and joined the march",
        "They locked themselves inside government offices and refused to engage"
      ],
      answer: "Ciskei Defence Force troops opened fire with automatic rifles and machine guns directly into the crowd of peaceful marchers",
      explanation: "The Ciskei forces used lethal force against demonstrators attempting to breach stadium gates."
    },
    {
      id: 676,
      subject_id: "history",
      question: "What was the tragic human toll of the Bisho Massacre?",
      options: [
        "29 people were killed and over 300 were wounded by gunfire",
        "Only 2 people were injured with minor bruises",
        "Over 1,000 protesters were killed in hand-to-hand combat",
        "Zero casualties occurred during the protest march"
      ],
      answer: "29 people were killed and over 300 were wounded by gunfire",
      explanation: "The massacre resulted in heavy loss of life, shocking the nation and international observers."
    },
    {
      id: 677,
      subject_id: "history",
      question: "Who was the military ruler of Ciskei at the time of the Bisho Massacre?",
      options: [
        "Brigadier Oupa Gqozo",
        "Chief Mangosuthu Buthelezi",
        "Lucas Mangope",
        "Kaiser Matanzima"
      ],
      answer: "Brigadier Oupa Gqozo",
      explanation: "Gqozo headed the military regime in Ciskei and fiercely resisted ANC political activities in the territory."
    },
    {
      id: 678,
      subject_id: "history",
      question: "What was the immediate political fallout of the Bisho Massacre on the national transition?",
      options: [
        "It created widespread national outrage, froze political momentum, and intensified pressure on leaders to find a peaceful settlement to homeland instability",
        "It caused the immediate collapse of the National Party government",
        "It led to the permanent cancellation of all constitutional negotiations",
        "It had no impact on national political discussions"
      ],
      answer: "It created widespread national outrage, froze political momentum, and intensified pressure on leaders to find a peaceful settlement to homeland instability",
      explanation: "Bisho highlighted the dangerous volatility of independent homelands standing outside democratic reforms."
    },
    {
      id: 679,
      subject_id: "history",
      question: "What agreement was signed shortly after the Bisho Massacre to restart stalled negotiations?",
      options: [
        "The Record of Understanding between Nelson Mandela and F.W. de Klerk (September 1992)",
        "The Pretoria Military Pact",
        "The Groote Schuur Security Accord",
        "The Kempton Park Peace Treaty"
      ],
      answer: "The Record of Understanding between Nelson Mandela and F.W. de Klerk (September 1992)",
      explanation: "Following Bisho, leaders recognized the urgent need to restart talks, leading to the Record of Understanding."
    },
    {
      id: 680,
      subject_id: "history",
      question: "What broader historical lesson did the Bisho Massacre highlight regarding the South African transition?",
      options: [
        "It demonstrated that the apartheid-created homelands were volatile flashpoints that had to be dismantled and reincorporated before peaceful elections could occur",
        "It proved that military force was the only effective way to govern provinces",
        "It showed that protest marches should be permanently banned nationwide",
        "It had no bearing on future constitutional arrangements"
      ],
      answer: "It demonstrated that the apartheid-created homelands were volatile flashpoints that had to be dismantled and reincorporated before peaceful elections could occur",
      explanation: "The tragedy underscored that reintegrating homelands into South Africa was essential for national stability."
    }
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
  ]
};


//randomize

export function getRandomQuestions(subjectId, count = 10) {
  const list = questionsData[subjectId] || [];
  if (!list.length) return [];

  // Helper for Fisher-Yates shuffle
  const shuffle = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // 1. Group questions safely (converting IDs to strings to prevent crashes)
  const topicsMap = {};

  for (const q of list) {
    let topicKey = q.topic;

    // Safely infer prefix if q.id is a string/number with hyphens (e.g., 'p1-m-1' -> 'p1-m')
    if (!topicKey && q.id !== undefined && q.id !== null) {
      const idStr = String(q.id);
      if (idStr.includes('-')) {
        const parts = idStr.split('-');
        if (parts.length > 1) {
          topicKey = parts.slice(0, -1).join('-');
        }
      }
    }

    // Default to 'general' if no distinct prefix exists
    topicKey = topicKey || 'general';

    if (!topicsMap[topicKey]) {
      topicsMap[topicKey] = [];
    }
    topicsMap[topicKey].push(q);
  }

  const topicKeys = Object.keys(topicsMap);
  let selected = [];

  // 2. Multi-Topic Subjects: Stratified round-robin draw
  if (topicKeys.length > 1) {
    const topicPools = Object.values(topicsMap).map((pool) => shuffle(pool));

    while (selected.length < count) {
      let addedAny = false;
      for (const pool of topicPools) {
        if (pool.length > 0) {
          selected.push(pool.pop());
          addedAny = true;
          if (selected.length === count) break;
        }
      }
      if (!addedAny) break;
    }
  } else {
    // 3. Single Topic / Sequential ID Subjects: Full array random shuffle
    selected = shuffle(list).slice(0, Math.min(count, list.length));
  }

  // 4. Randomize question display order and option choices
  return shuffle(selected).map((q) => ({
    ...q,
    options: shuffle(q.options || []),
  }));
}