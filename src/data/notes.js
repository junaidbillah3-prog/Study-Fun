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
                            content: '$$\\text{Chromosome} \\longrightarrow \\text{Replicated (2 Sister Chromatids)}$$'
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

    ],
};