export const NOTES_DATA = {
    'life-sciences-p1': [
        {
            id: 'meiosis',
            title: 'Meiosis & Chromosomes',
            summary: 'Reduction division process forming haploid gametes.',
            sections: [
                {
                    heading: '1. Purpose of Meiosis',
                    blocks: [
                        {
                            type: 'text',
                            content:
                                'Meiosis is a continuous process that reduces the diploid number $(2n)$ of chromosomes to haploid $(n)$ in sex cells (gametes).',
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/images.png',
                            caption: 'Figure 1.1: Haploid VS Diploid.',
                        },
                        {
                            type: 'text',
                            content:
                                'This reduction ensures that when fertilization occurs, the resulting zygote restores the full diploid $(2n)$ chromosome count.',
                        },
                    ],
                },

                {
                    heading: 'Interphase',
                    blocks: [
                        {
                            type: 'text',
                            content: 'Interphase is the crucial preparation phase that occurs before meiosis begins. Even though it is not technically a part of the cell division process itself, a cell must complete this stage before it can divide.'
                        },
                        {
                            type: 'text',
                            content: 'During interphase, the cell grows, performs its normal cellular functions, and most importantly, <strong>replicates its DNA</strong>. This replication ensures that each single-stranded chromosome duplicates to form two identical sister chromatids connected by a centromere.'
                        },
                        {
                            type: 'text',
                            content: '$$\\text{Chromosome} \\longrightarrow \\text{Replicated }$$'
                        },
                        {
                            type: 'text',
                            content: 'Without this prior DNA replication during interphase, the cell would lack the necessary genetic material to eventually separate and form four haploid $(n)$ gametes by the end of Meiosis II.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/images%202.png',
                            caption: 'Figure 1.2: DNA Replication'
                        }
                    ]
                },
                {
                    heading: 'Prophase I',
                    blocks: [
                        {
                            type: 'text',
                            content: '<strong>Prophase I</strong> is the longest and most complex phase of meiosis, accounting for over 90% of the time required for meiotic division. During this stage, critical genetic events occur that ensure genetic variation in the resulting gametes.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. Chromosome Condensation:</strong>\nAs Prophase I begins, the diffuse chromatin threads inside the nucleus shorten, thicken, and become clearly visible as individual chromosomes under a light microscope. Because DNA replication took place during interphase, each chromosome is composed of two identical <strong>sister chromatids</strong> joined tightly at a region called the centromere.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Synapsis and Bivalent Formation:</strong>\nHomologous chromosomes—one inherited from the mother and one from the father, matching in length, shape, and gene loci—find each other and align precisely side-by-side. This pairing process is known as <strong>synapsis</strong>. The paired homologous chromosomes form a four-stranded structure called a <strong>bivalent</strong> (or <strong>tetrad</strong>, because it contains four chromatids in total).'
                        },
                        {
                            type: 'text',
                            content: '<strong>3. Crossing Over (Genetic Recombination):</strong>\nWhile tightly paired in bivalents, non-sister chromatids of the homologous pair physically overlap at specific points called <strong>chiasmata</strong> (singular: chiasma). At these points, segments of DNA break and are swapped between the maternal and paternal chromatids. This process, called <strong>crossing over</strong>, results in a reciprocal exchange of genes, creating brand-new allele combinations and serving as one of the primary drivers of genetic diversity in offspring.'
                        },
                        {
                            type: 'text',
                            content: '<strong>4. Final Preparations for Division:</strong>\nToward the end of Prophase I, the nucleolus fades away, and the nuclear envelope completely breaks down. Meanwhile, the centrosomes migrate toward opposite poles of the cell, beginning to assemble the spindle apparatus (microtubules) that will capture and move the chromosomes during the next phase.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/image3.jpg',
                            caption: 'Figure 1.3: Prophase 1'
                        }
                    ]
                },
                {
                    heading: 'Metaphase I',
                    blocks: [
                        {
                            type: 'text',
                            content: '<strong>Metaphase I</strong> is where things get really exciting as the cell sets the stage for genetic shuffling! Once Prophase I wraps up, the bivalents—those pairs of homologous chromosomes that just finished crossing over—migrate and line up right down the middle, along the equatorial plane (or metaphase plate) of the cell.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. Spindle Fiber Attachment (The Setup):</strong>\nMicrotubules from the spindle apparatus, stretching out from the centrioles at opposite poles of the cell, reach in and attach to the kinetochores at the centromeres of the chromosomes.\n\n<em>Here is a crucial detail to keep in mind:</em> Unlike in mitosis or Meiosis II, whole chromosomes—each made of two sister chromatids—attach to spindle fibers coming from <strong>only one pole</strong> of the cell. In mitosis, individual sister chromatids are pulled apart to opposite sides; here, whole homologous partners are about to be separated from each other.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Independent Assortment (The Grand Shuffle):</strong>\nAs the homologous pairs line up along the equator, each pair orients itself completely independently of all the other pairs.\n\nWhether a maternal chromosome faces the left pole and a paternal chromosome faces the right has zero effect on how any other pair lines up. This random, independent alignment is known as <strong>independent assortment</strong>. Together with crossing over, it ensures that every single gamete you produce gets a completely unique mix of maternal and paternal traits!'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/images%204%20(2).png',
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/images%204.5.png',
                            caption: 'Figure 1.5: Metaphase 1',
                        }

                    ]
                },
                {
                    heading: 'Anaphase I',
                    blocks: [
                        {
                            type: 'text',
                            content: 'In <strong>Anaphase I</strong>, the excitement really kicks in! The homologous pairs that were lined up so perfectly at the equator are now pulled apart. The spindle fibers, which are connected to the kinetochores, begin to shorten and retract, drawing the homologous chromosomes toward opposite poles of the cell.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. The Crucial Centromere Detail:</strong>\nThis is a super important point to remember for your exams: <strong>the centromeres do not split in Anaphase I.</strong> \n\nBecause the centromeres stay intact, each chromosome is still composed of two sister chromatids. This is a massive difference from mitosis (or Anaphase II), where the sister chromatids are torn apart.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. The "Reduction" Phase:</strong>\nAs these chromosomes move to opposite sides, the cell is effectively performing its main goal—the reduction of chromosome number. Each pole now receives one set of chromosomes, effectively moving the cell from a diploid $(2n)$ state to a haploid $(n)$ state, even though each chromosome currently consists of two chromatids.\n\nBasically, each pole gets a complete, but reduced, set of genetic information, setting the stage for the final division steps.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/images6.jpg',
                            caption: 'Figure 1.6 Anaphase 1',
                        }
                    ]
                },
                {
                    heading: 'Telophase I and Cytokinesis',
                    blocks: [
                        {
                            type: 'text',
                            content: '<strong>Telophase I</strong> acts as the final stage of the first meiotic division. By this point, the homologous chromosomes have reached opposite poles of the cell, and the frantic pace of the division process pauses for a quick moment of cleanup before the second round begins.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. The Nuclear Cleanup:</strong>\nIn many organisms, the nuclear envelope begins to reform around the two distinct clusters of chromosomes, and the nucleolus may reappear. However, unlike in mitosis, the chromosomes usually do not fully decondense (uncoil) back into chromatin. Since the cell is about to dive straight into Meiosis II, it keeps the chromosomes condensed to save time and energy.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Cytokinesis (The Split):</strong>\nAlmost simultaneously with Telophase I, <strong>cytokinesis</strong> occurs—this is the physical splitting of the cytoplasm. The cell membrane pinches inward (forming a cleavage furrow in animal cells) to officially divide the parent cell into two separate daughter cells.\n\nAt the end of this stage, we are left with two <strong>haploid</strong> $(n)$ daughter cells. It is vital to remember this key takeaway for your exams: even though the chromosome count has been halved, each individual chromosome <em>still consists of two sister chromatids</em>. This is precisely why we need the entire Meiosis II process—to separate those sister chromatids!'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/image%207.png',
                            caption: 'Figure 1.7: Telophase 1'
                        }
                    ]
                },
                {
                    heading: 'Prophase II',
                    blocks: [
                        {
                            type: 'text',
                            content: '<strong>Prophase II</strong> is the starting point of the second meiotic division. Think of this phase as a "reset" for the two daughter cells produced in Meiosis I. Unlike Prophase I, which is long and complex, Prophase II is much shorter and simpler—it behaves very similarly to the prophase stage of standard mitosis.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. The Haploid Reality:</strong>\nIt is important to remember that the cells entering this phase are already <strong>haploid</strong> $(n)$. Even though they have half the number of chromosomes compared to the original parent cell, each chromosome still consists of two sister chromatids joined at the centromere. There is no DNA replication (no Interphase) before this stage begins.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Preparing for Action:</strong>\nIf the nuclear envelope reformed during Telophase I, it now breaks down again. The nucleolus disappears, and the centrosomes begin moving toward opposite poles of the cell, radiating new spindle fibers. \n\n<em>Key Distinction:</em> Because the homologous pairs were already separated during Anaphase I, there is <strong>no synapsis</strong> and <strong>no crossing over</strong> in Prophase II. The chromosomes are already condensed, so they simply prepare to line up for the final division.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/prophase_2.gif',
                            caption: 'Figure 1.8: Prophase 2',
                        }
                    ]
                },
                {
                    heading: 'Metaphase II',
                    blocks: [
                        {
                            type: 'text',
                            content: '<strong>Metaphase II</strong> should look quite familiar if you have ever looked at standard mitosis! In this stage, the chromosomes in both of the haploid daughter cells migrate to the middle and get ready for the final split.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. Single-File Alignment:</strong>\nUnlike Metaphase I, where homologous pairs lined up side-by-side as couples, the chromosomes here line up <em>single file</em> down the center along the equatorial plane (the metaphase plate) of each cell.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Spindle Fiber Attachment (Setting Up the Split):</strong>\nSpindle fibers extend from the centrosomes at opposite poles and attach to the kinetochores on <strong>both sides</strong> of the centromere for each individual chromosome.\n\n<em>Exam Tip to Remember:</em> Because the spindle fibers now pull from opposite poles on either side of the centromere, the stage is perfectly set to finally tear those sister chromatids apart in the next step!'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/metaphase_2.gif',
                            caption: 'Figure 1.9: Metaphase 2',
                        }
                    ]
                },
                {
                    heading: 'Anaphase II',
                    blocks: [
                        {
                            type: 'text',
                            content: 'In <strong>Anaphase II</strong>, the tension builds and the big moment arrives for the sister chromatids! Up until this point, those chromatids have been stuck together since interphase, but now they are finally about to part ways.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. Centromeres Splitting:</strong>\nThis is the major defining feature of Anaphase II and a classic exam trap! The centromere of each individual chromosome finally splits in two.\n\nBecause the centromere divides, the two sister chromatids are pulled apart and officially become <strong>independent, single-stranded chromosomes</strong> of their own.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Migration to Opposite Poles:</strong>\nOnce separated, the spindle fibers rapidly shorten and retract, pulling these newly freed individual chromosomes toward opposite poles of the cell. By the time this phase wraps up, each pole has a complete, single-stranded set of chromosomes, setting us up perfectly for the final division.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/anaphase_2.gif',
                            caption: 'Figure 1.10 : Anaphase 2',
                        }
                    ]
                },
                {
                    heading: 'Telophase II and Cytokinesis',
                    blocks: [
                        {
                            type: 'text',
                            content: '<strong>Telophase II</strong> is the final curtain call for meiosis! By this stage, the separated sister chromatids—which are now independent, single-stranded chromosomes—have successfully completed their journey to opposite poles of both cells.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. Rebuilding the Nuclei:</strong>\nOnce the chromosomes arrive at the poles, they begin to uncoil and lengthen, returning to their relaxed, thread-like chromatin state. A new nuclear envelope forms around each of the four emerging groups of chromosomes, and the nucleoli reappear.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Final Cytokinesis and the Grand Finale:</strong>\nSimultaneously, the final round of <strong>cytokinesis</strong> occurs. The cell membranes pinch inward to split both cells completely down the middle.\n\nWhen the dust settles, this single original diploid $(2n)$ cell has successfully given rise to <strong>four distinct haploid $(n)$ daughter cells</strong> (such as sperm or egg cells). Because of crossing over in Prophase I and independent assortment in Metaphase I, every single one of these four final cells is completely unique genetically!'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/meiosis/telo2.jpg',
                            caption: 'Figure 1.11 : Telophase 2',
                        }
                    ]
                }
            ],
        },
        {
            id: 'Reproduction-in-Vertebrates',
            title: 'Reproduction in Vertebrates',
            summary: 'Reproduction in Vertebrates having various mating strategies',
            sections: [
                {
                    heading: 'Reproductive Strategies: External vs. Internal Fertilization',
                    blocks: [
                        {
                            type: 'text',
                            content: '<strong>Reproductive strategies</strong> are the methods and behavioral adaptations animals use to ensure their gametes meet and successful fertilization occurs. The primary strategy a vertebrate uses depends heavily on whether its environment is aquatic (water) or terrestrial (land).'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. External Fertilization:</strong>\nThis occurs when both the male and female release their gametes (sperm and ova) into an external aqueous environment, usually water, where fertilization takes place outside the body (a process often called <em>spawning</em>).\n\n &bull; <strong>Where it occurs:</strong> Exclusively in aquatic or semi-aquatic vertebrates, such as bony fish and amphibians (e.g., frogs and toads).\n &bull; <strong>Advantages:</strong> It requires minimal energy expenditure since animals do not need to search for mates or engage in complex courtship behaviors. Huge numbers of gametes can be released simultaneously, maximizing potential offspring.\n &bull; <strong>Disadvantages:</strong> Gametes and unprotecting zygotes are completely exposed to environmental hazards, water currents, and hungry predators. Consequently, mortality rates are extremely high, requiring massive numbers of eggs to be produced just for a few to survive.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Internal Fertilization:</strong>\nThis occurs when the male deposits sperm directly inside the female’s reproductive tract via copulation, meaning fusion of the gametes happens internally.\n &bull; <strong>Where it occurs:</strong> Virtually all terrestrial vertebrates (reptiles, birds, and mammals) as well as some specialized aquatic groups like cartilaginous fish (sharks and rays).\n &bull; <strong>Advantages:</strong> Gametes are protected from physical damage, environmental fluctuations, and dehydration. Because the conditions are controlled, a much higher percentage of zygotes successfully fertilize and survive, meaning fewer total eggs need to be produced.\n &bull; <strong>Disadvantages:</strong> It demands significantly more biological energy. Organisms must develop specialized anatomical structures (like copulatory organs) and often rely on intricate mating behaviors or courtship rituals to find and secure a mate.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Invertebrates/ext%20int.png',
                            caption: 'Figure 2.1: Internal VS External Fertilization',
                        }
                    ]
                },
                {
                    heading: 'Modes of Reproduction: Ovipary, Ovovivipary, and Vivipary',
                    blocks: [
                        {
                            type: 'text',
                            content: 'Once fertilization is successful, vertebrates have evolved three distinct evolutionary pathways for how embryos develop and how offspring enter the world. These modes are classified based on where the embryo develops and where it gets its nutrition.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. Ovipary (Egg-Laying):</strong>\n &bull; <strong>Definition:</strong> Females lay fertilized or unfertilized eggs outside their bodies into the external environment.\n &bull; <strong>Nutrition:</strong> The developing embryo relies entirely on the yolk stored inside the egg for all its food and energy needs.\n &bull; <strong>Protection:</strong> Eggs are usually protected by a leathery or hard calcareous shell to prevent drying out and physical damage.\n &bull; <strong>Examples:</strong> Birds, most reptiles, amphibians, and monotreme mammals (like the platypus and echidna).'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. Ovovivipary (Egg-Retention):</strong>\n &bull; <strong>Definition:</strong> Eggs are fertilized internally and retained <em>inside</em> the mother’s body (often within a capsule or shell) until they are ready to hatch.\n &bull; <strong>Nutrition:</strong> Just like oviparous animals, the embryo draws its nutrients solely from the egg yolk, <strong>not</strong> directly from the mother’s bloodstream.\n &bull; <strong>Birth:</strong> The young either hatch inside the mother right before birth or are born as live young as the egg capsules are expelled.\n &bull; <strong>Examples:</strong> Certain species of sharks, rays, and some vipers and lizards.'
                        },
                        {
                            type: 'text',
                            content: '<strong>3. Vivipary (Live-Bearing):</strong>\n &bull; <strong>Definition:</strong> Fertilization is strictly internal, and the embryo develops completely inside the mother’s reproductive tract (uterus).\n &bull; <strong>Nutrition:</strong> Unlike the other two modes, the embryo receives nutrients and oxygen directly from the mother via specialized structures, such as a <strong>placenta</strong> or uterine secretions.\n &bull; <strong>Birth:</strong> Offspring are born alive and usually at a more advanced stage of development.\n &bull; <strong>Examples:</strong> Most placental mammals (e.g., lions, whales, rodents) as well as a few specialized fish and reptiles.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Invertebrates/ovovivi.jpg',
                            Caption: 'Figure 2.2: Comparison of strategies',
                        }
                    ]
                },
                {
                    heading: 'The Amniotic Egg: A Terrestrial Breakthrough',
                    blocks: [
                        {
                            type: 'text',
                            content: 'The evolutionary transition of vertebrates from water to land presented a massive challenge: how to prevent the developing embryo and its gametes from drying out (desiccation). The evolution of the <strong>amniotic egg</strong> in reptiles, birds, and mammals solved this completely, allowing animals to reproduce independently of open water.'
                        },
                        {
                            type: 'text',
                            content: '<strong>Key Structural Membranes and Components of the Amniotic Egg:</strong><br><br>' +
                                '<strong>1. Amnion:</strong> A transparent, fluid-filled sac that surrounds and cushions the embryo, protecting it from physical shock, mechanical injury, and dehydration.<br><br>' +
                                '<strong>2. Allantois:</strong> A sac-like structure that stores metabolic wastes (such as uric acid) produced by the embryo and also assists with gas exchange.<br><br>' +
                                '<strong>3. Chorion:</strong> An outer membrane that works closely with the allantois to facilitate the exchange of oxygen and carbon dioxide between the embryo and the outside environment.<br><br>' +
                                '<strong>4. Yolk Sac:</strong> Contains a dense, nutrient-rich food supply (yolk) that provides all the necessary energy and nourishment for the growing embryo.<br><br>' +
                                '<strong>5. Shell (Leathery or Calcareous):</strong> A protective, semi-permeable outer covering that shields the internal structures from predators and physical damage while allowing vital respiratory gases (O₂ and CO₂) to diffuse through.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Invertebrates/amnion%20(1).jpg',
                            Caption: 'Figure 2.3: The Amniotic Egg',
                        }
                    ]
                },
                {
                    heading: 'Parental Care and Offspring Survival',
                    blocks: [
                        {
                            type: 'text',
                            content: 'There is a fundamental evolutionary trade-off in the animal kingdom between the <strong>number of offspring</strong> an organism produces and the amount of <strong>parental care</strong> it invests in raising them. Because biological energy and resources are limited, parents cannot maximize both.'
                        },
                        {
                            type: 'text',
                            content: '<strong>1. Low Parental Care & High Offspring Production:</strong><br>' +
                                'Animals that utilize external fertilization or lay large numbers of simple eggs (such as bony fish, amphibians, and many reptiles) typically produce hundreds or thousands of offspring at a time.<br><br>' +
                                '&bull; <strong>Energy Investment:</strong> Minimal energy is spent protecting, feeding, or raising the young after they are spawned or laid.<br>' +
                                '&bull; <strong>Survival Strategy:</strong> They rely entirely on sheer numbers. Even though the vast majority of eggs and juveniles will succumb to predators, harsh weather, or disease, a small percentage will survive purely by statistical chance.'
                        },
                        {
                            type: 'text',
                            content: '<strong>2. High Parental Care & Low Offspring Production:</strong><br>' +
                                'Animals that rely on internal fertilization, ovovivipary, or vivipary (such as birds, mammals, and some specialized reptiles) usually produce very few offspring—often just one or a small litter at a time.<br><br>' +
                                '&bull; <strong>Energy Investment:</strong> Parents invest massive amounts of metabolic energy, time, and active protection into feeding, guarding, and nurturing their young.<br>' +
                                '&bull; <strong>Survival Strategy:</strong> Because individual offspring are heavily protected and taught, a significantly higher proportion of them survive to maturity, ensuring the continuation of the species with far fewer total births.'
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Invertebrates/parent.png',
                        }
                    ]
                }

            ],
        },
        {
            id: 'Human Reproduction',
            title: 'Human Reproduction',
            Summary: 'Human Reproduction is act of passing on our DNA',
            sections: [
                {
                    heading: '&bull; <strong>The Female Reproductive System: Structure and Function <strong>',
                    blocks: [
                        {
                            type: 'text',
                            content: `Welcome to the female reproductive system! Think of this system as a beautifully coordinated, highly specialized environment. Its job isn't just to produce female gametes (ova), but to provide a safe, nutrient-rich home to nurture, protect, and support a developing human life if fertilization occurs. Let's walk through each key structure together.`
                        },
                        {
                            type: 'text',
                            content: `<strong>1. Ovaries (The Primary Female Organs):</strong><br>
                    The ovaries are two small, almond-shaped glands located in the lower abdominal cavity. They have two massive responsibilities:<br>
                    &bull; <strong>Gamete Production (Oogenesis):</strong> This is where female sex cells (ova or eggs) are produced and mature inside fluid-filled sacs called follicles.<br>
                    &bull; <strong>Hormone Secretion:</strong> They produce the primary female sex hormones, <strong>estrogen</strong> and <strong>progesterone</strong>, which drive the menstrual cycle and maintain pregnancy.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/ovarie.jpg',
                            caption: 'Figure 3.1: Ovarie Structure',
                        },
                        {
                            type: 'text',
                            content: `<strong>2. Fallopian Tubes (Oviducts):</strong><br>
                    These are muscular tubes lined with tiny hair-like structures called cilia, stretching from the ovaries to the uterus.<br>
                    &bull; <strong>The Site of Fertilization:</strong> This is where the magic happens! Sperm typically meet and fuse with an egg here in the upper third of the fallopian tube.<br>
                    &bull; <strong>Transport:</strong> The beating cilia and smooth muscle contractions gently sweep the fertilized egg (zygote) down toward the womb.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/fallopian.jpg',
                            caption: 'Figure 3.2: Fallopian Tube',
                        },
                        {
                            type: 'text',
                            content: `<strong>3. Uterus (The Womb):</strong><br>
                    A strong, muscular, pear-shaped organ designed to expand massively during pregnancy.<br>
                    &bull; <strong>The Endometrium:</strong> The rich, highly vascular inner lining of the uterus. If an egg is fertilized, it implants right here into this blood-rich lining to grow. If pregnancy doesn't happen, this is the lining that breaks down and is shed during menstruation.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/uterus.jpg',
                            caption: 'Figure 3.3: Uterus Structure',
                        },
                        {
                            type: 'text',
                            content: `<strong>4. Cervix and Vagina:</strong><br>
                    &bull; <strong>Cervix:</strong> The lower, narrow neck of the uterus that opens into the vagina. It produces mucus that changes consistency throughout the cycle to help or hinder sperm entry, and it must dilate completely during childbirth.<br>
                    &bull; <strong>Vagina:</strong> A muscular, elastic canal that extends from the cervix to the outside of the body. It serves a dual purpose: receiving sperm during intercourse and acting as the birth canal.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/female%20rep.png',
                            caption: 'The complete female reproduction anatomy',
                        }
                    ]
                },


                {
                    heading: '&bull; <strong> The Menstrual Cycle and Hormonal Control <strong>',
                    blocks: [
                        {
                            type: 'text',
                            content: `Welcome to one of the most classic exam topics in Grade 12 Life Sciences: <strong>The Menstrual Cycle</strong>! This is a monthly series of coordinated events lasting approximately 28 days. Its core purpose is to prepare the female body for a potential pregnancy by maturing an egg and building up a rich lining in the uterus. If pregnancy doesn't happen, the cycle resets.`
                        },
                        {
                            type: 'text',
                            content: `<strong>1.The Key Hormones:<br></strong>
            To understand the cycle, you need to know the four main hormones that run the show and where they come from:<br>
            &bull; <strong>FSH (Follicle-Stimulating Hormone):</strong> Secreted by the pituitary gland; stimulates egg and follicle development in the ovary.<br>
            &bull; <strong>LH (Luteinizing Hormone):</strong> Secreted by the pituitary gland; triggers ovulation and the formation of the corpus luteum.<br>
            &bull; <strong>Oestrogen:</strong> Secreted by the developing ovarian follicles; repairs and thickens the uterine lining (endometrium) and triggers the LH surge.<br>
            &bull; <strong>Progesterone:</strong> Secreted by the corpus luteum; maintains and enriches the blood-rich uterine lining to prepare for embryo implantation.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/menstrual-cycle.jpg',
                            caption: 'Figure 3.5: The Menstrual Hormone Graph'
                        },
                        {
                            type: 'text',
                            content: `<strong>2. The Ovarian Cycle (What’s happening in the ovaries):<br></strong>
            &bull; <strong>The Follicular Phase (Days 1–14):</strong> FSH causes several primary follicles to develop in the ovary, though usually only one matures into a Graafian follicle. As this follicle grows, it secretes increasing amounts of oestrogen.<br>
            &bull; <strong>Ovulation (Around Day 14):</strong> The high level of oestrogen triggers a sudden spike (surge) in LH from the pituitary gland. This surge causes the mature Graafian follicle to burst open and release the secondary oocyte (egg) into the fallopian tube.<br>
            &bull; <strong>The Luteal Phase (Days 15–28):</strong> The ruptured follicle transforms into a yellow structure called the <strong>corpus luteum</strong>. It begins pumping out massive amounts of progesterone and some oestrogen.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/ovarie.jpg',
                            caption: 'Figure 3.6: Ovarian Cycle',
                        },
                        {
                            type: 'text',
                            content: `<strong>3. The Uterine (Menstrual) Cycle (What’s happening in the womb):<br></strong>
            &bull; <strong>Menstruation / Bleeding Phase (Days 1–5):</strong> If fertilization does not occur, progesterone and oestrogen levels drop sharply. This causes the thickened endometrium to break down and shed, resulting in the menstrual period.<br>
            &bull; <strong>Proliferative Phase (Days 6–14):</strong> Driven by rising oestrogen levels from the growing follicles, the endometrium repairs itself, thickens, and becomes richly supplied with blood vessels.<br>
            &bull; <strong>Secretory Phase (Days 15–28):</strong> Driven by progesterone from the corpus luteum, the endometrium becomes even thicker, spongy, and packed with nutrients and mucus, creating the ultimate "bed" ready to receive a fertilized egg.`
                        }
                    ]
                },
                {
                    heading: 'The Male Reproductive System: Structure and Function',
                    blocks: [
                        {
                            type: 'text',
                            content: `Now let's switch gears to the male reproductive system! While the female system is built to nurture and grow a developing embryo, the male system is engineered for one primary mission: producing, sustaining, and efficiently delivering male gametes (sperm) into the female reproductive tract. Let's tour the main anatomical parts together!`
                        },
                        {
                            type: 'text',
                            content: `<strong>1. Testes (The Testicles) & The Scrotum:</strong><br>
            The testes are the primary male sex organs, located outside the main abdominal cavity inside a protective pouch of skin called the scrotum.<br>
            &bull; <strong>Spermatogenesis:</strong> This is where millions of sperm cells are produced continuously inside tiny coiled structures called seminiferous tubules.<br>
            &bull; <strong>Hormone Secretion:</strong> They produce <strong>testosterone</strong>, the master hormone responsible for male secondary sexual characteristics and driving sperm production.<br>
            &bull; <strong>The Temperature Rule:</strong> Why are the testes on the outside? Because healthy sperm production requires a temperature about 2°C lower than normal core body temperature. The scrotum acts as a natural thermostat to keep them cool!`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/testes.jpg',
                            caption: 'Figure 3.7: The Testes',
                        },
                        {
                            type: 'text',
                            content: `<strong>2. Epididymis and Vas Deferens (The Transport Highway):</strong><br><br>
            &bull; <strong>Epididymis:</strong> A comma-shaped, tightly coiled tube sitting right along the back of each testis. Newly made sperm are stored here for a short period to mature fully and gain <strong>motility</strong> (the ability to swim using their tails).<br>
            &bull; <strong>Vas Deferens (Sperm Duct):</strong> A thick, muscular tube that carries mature sperm away from the epididymis, looping up over the bladder and joining with the urethra during ejaculation.`
                        },
                        {
                            type: 'text',
                            content: `<strong>3. The Accessory Glands (Adding the Fluid):</strong><br>
            Sperm can't travel alone—they need a vehicle and energy! Three sets of glands secrete fluids that mix with sperm to create <strong>semen</strong>:<br><br>
            &bull; <strong>Seminal Vesicles:</strong> Produce an alkaline fluid rich in fructose (sugar) to give the sperm energy for swimming.<br>
            &bull; <strong>Prostate Gland:</strong> Secretes a milky, slightly alkaline fluid that further activates sperm and helps neutralize the acidic environment of the vagina.<br>
            &bull; <strong>Cowper's (Bulbourethral) Glands:</strong> Secretes a clear, slippery fluid just before ejaculation to lubricate the urethra and neutralize any remaining acidic traces of urine.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/glands.png',
                            caption: 'Figure 3.8: The Male Glands',
                        },
                        {
                            type: 'text',
                            content: `<strong>4. Urethra and Penis:</strong><br><br>
            &bull; <strong>Urethra:</strong> A muscular tube running through the center of the penis. It serves a dual role as an exit passageway for both urine (from the bladder) and semen (during ejaculation), though internal valves ensure both fluids never exit at the same time.<br>
            &bull; <strong>Penis:</strong> The external copulatory organ containing spongy, erectile tissue. When sexually stimulated, blood rushes into these spaces causing an erection, enabling the transfer of semen into the female reproductive tract.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/urethra.png',
                            caption: 'Figure 3.9: Urethra Assembly',
                        }
                    ]
                },
                {
                    heading: '&bull; <strong> Copulation, Fertilization, and Pregnancy <strong>',
                    blocks: [
                        {
                            type: 'text',
                            content: `Now let's connect all the pieces from copulation and ejaculation all the way through to fertilization, implantation, and pregnancy!`
                        },
                        {
                            type: 'text',
                            content: `<strong>1. Copulation and Ejaculation:</strong><br>
            During sexual intercourse (copulation), the erect penis is inserted into the vagina. Sexual stimulation triggers rhythmic muscular contractions that lead to <strong>ejaculation</strong>—the release of millions of sperm cells (contained within semen) into the top of the vagina near the opening of the cervix.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/cop%20ejac.jpg',
                            caption: 'Figure 3.10: Copulation and Ejaculation',
                        },
                        {
                            type: 'text',
                            content: `<strong>2. The Journey and Fertilization:</strong><br>
            Once deposited, sperm use their tails (flagella) and muscular contractions of the female tract to swim up through the cervix and uterus into the fallopian tubes.<br>
            &bull; <strong>The Meeting:</strong> Fertilization typically takes place in the upper third of the fallopian tube.<br>
            &bull; <strong>The Acrosome Reaction:</strong> When a sperm reaches the secondary oocyte (egg), enzymes in its head digest the outer protective layers. Only a single sperm successfully penetrates the cell membrane, and their nuclei fuse to form a diploid <strong>zygote</strong>.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/repview.jpg',
                            caption: 'Figure 3.11: Fertilization',
                        },
                        {
                            type: 'text',
                            content: `<strong>3. Cleavage and Implantation:</strong><br>
            As the zygote slowly travels down the fallopian tube toward the uterus, it undergoes rapid mitotic cell divisions (known as cleavage) to become a solid ball of cells called a <strong>morula</strong>, and then a hollow ball called a <strong>blastocyst</strong>.<br>
            &bull; <strong>Implantation:</strong> Around 6 to 8 days after fertilization, the blastocyst embeds itself firmly into the thick, blood-rich uterine lining (endometrium). This marks the official start of pregnancy.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/implantation-722x406.jpg',
                            caption: 'Figure 3.12: Implantation',
                        },
                        {
                            type: 'text',
                            content: `<strong>4. Pregnancy (Gestation) and the Placenta:</strong><br>
            Human gestation lasts approximately 38 to 40 weeks. Several vital structures support the growing fetus:<br>
            &bull; <strong>The Placenta:</strong> A temporary organ formed from both fetal and maternal tissues. It acts as the baby's lungs, gut, and kidneys—allowing oxygen and nutrients to diffuse from the mother’s blood into the fetal blood (via the umbilical cord), while wastes diffuse out. (Note: The blood supplies never mix directly!)<br>
            &bull; <strong>Hormonal Shift:</strong> The placenta takes over progesterone and oestrogen production from the corpus luteum to keep the endometrium thick and prevent further ovulation.<br>
            &bull; <strong>Amniotic Fluid and Sac:</strong> A protective, fluid-filled sac that cushions the fetus against mechanical shocks, prevents drying out, and provides a stable temperature.`
                        },
                        {
                            type: 'image',
                            url: 'https://cezcbppjqqnmdmfvnalz.supabase.co/storage/v1/object/public/Assets/asset-app/Human%20Reproduction/pregnant.jpg',
                            caption: 'Figure 3.13: Pregnancy',
                        },

                    ]
                }


            ],
        }

    ],
};