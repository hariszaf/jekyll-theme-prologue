---
layout: post
title: Arsenal
category: resources
image: https://media.licdn.com/dms/image/v2/D561BAQGxm3Cp1Lc-tQ/company-background_10000/company-background_10000/0/1654722729907/lyda_hill_department_of_bioinformatics_cover?e=2147483647&v=beta&t=XF1Z5LhEVtcFFy_D-4E7gwz3qDv6xoG9qe0YVSdOXQI
tags: tools
---

This is my favorite resources' page
<!-- To make life easier, we use the Markdown All in One vs-code add on
You can make a shitty table first and then by Ctrl+Shift+I make it pretty 
Here you can find more: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one 

[NOTE] For the Copy Table button to well perform, we need to have the exact same number of buttons as the number of tables in a page.
-->

<!-- Ctrl+shift+p and then run: `Create Table of Contents`. this also comes from the "all in one" extension -->
**TABLE OF CONTENTS**
- [Metabolic modeling](#metabolic-modeling)
- [Genomics and Metagenomics](#genomics-and-metagenomics)
- [Databases](#databases)
- [Statistics for microbiome analysis](#statistics-for-microbiome-analysis)
- [My dictionary](#my-dictionary)
- [Visualizations](#visualizations)

---


## Metabolic modeling

You may have a look at this [*e-book*](https://hariszaf.github.io/notes-on-met-mod-analysis/tools.html) :notebook: I've been working on. 

## Genomics and Metagenomics

| Tool     | Description                                                                   | Documentation | Architecture | Repo                                                          | DOI                                       |
| :------- | :---------------------------------------------------------------------------- | :-----------  | :----------- | :------------------------------------------------------------ | :---------------------------------------- |
| skani |  determining average nucleotide identity (ANI) via sparse approximate alignments | [wiki](https://github.com/bluenote-1577/skani/wiki) | stand-alone  | [GitHub](https://github.com/bluenote-1577/skani) | [OA](https://doi.org/10.1038/s41592-023-02018-3) |
| LocalHGT | ultrafast horizontal gene transfer detection from large microbial communities | - |stand-alone  | [GitHub](https://github.com/deepomicslab/LocalHGT#hgt-events) | [OA](https://doi.org/10.1093/nar/gkae515) |
| gRodon | estimates maximal growth rates of prokaryotes and microbial eukaryotes from genome-wide codon usage statistics | [site](https://microbialgamut.com/gRodon-vignette) | R package | [GitHub](https://github.com/jlw-ecoevo/gRodon2) |  [original](https://doi.org/10.1073/pnas.2016810118) | [v2 @ biorxiv](https://doi.org/10.1101/2021.10.15.464604) |
| 

<button class="copy-button">Copy Table</button>



## Databases

| Resource | Description | Link |  DOI |
| -------: | ----------: | ---: | ---: |
| eggo  |  estimated growth rates from gRodon online | [GitHub](https://github.com/jlw-ecoevo/eggo) | [OA](https://doi.org/10.1073/pnas.2016810118)  |

<button class="copy-button">Copy Table</button>

## Statistics for microbiome analysis
<!-- ✘ (&#10008) is a not available ; ✔ (&#10003) is a tick for yes -->
<!-- Template for copy-paste of new entry:

|  |  |  |  |  <a href="">✔</a> |   |
-->

| Tool            | Description                                                                                                                                                                                                    | Architecture        | Repo                                                   |                        Documentation                         |                         DOI                          |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------ | :----------------------------------------------------- | :----------------------------------------------------------: | :--------------------------------------------------: |
| MOFA2           | a factor analysis model that provides a general framework for the integration of multi-omic data sets in an unsupervised fashion.                                                                              | library (Python, R) | [ GitHub ](https://github.com/bioFAM/MOFA2)            |       <a href="https://biofam.github.io/MOFA2/">✔</a>        |   [OA](https://doi.org/10.1186/s13059-020-02015-1)   |
| coda4microbiome | analyzing microbiome data within the Compositional Data Analysis (CoDA) framework in both, cross-sectional and longitudinal studies                                                                            | R package           | [GitHub](https://malucalle.github.io/coda4microbiome/) | <a href="https://malucalle.github.io/coda4microbiome/">✔</a> |   [OA](https://doi.org/10.1186/s12859-023-05205-3)   |
| multimedia      | multimodal **[mediation analysis](2024-11-20-microbiome.md#mediation-analysis)** of microbiome data                                                                                                            | R package           | [GitHub](https://github.com/krisrs1128/multimedia)     |   <a href="https://krisrs1128.github.io/multimedia/">✔</a>   | [biorxiv](https://doi.org/10.1101/2024.03.27.587024) |
| metagenomeSeq   | determines differentially features using a count-based method via a zero-inflated normal model (a mixture of a point mass at zero and a normal distribution) to represent the log of microbiome feature counts | R package           | [GitHub](https://github.com/HCBravoLab/metagenomeSeq)  | <a href="https://cbcb.umd.edu/software/metagenomeSeq">✔</a>  |       [OA](https://doi.org/10.1038/nmeth.2658)       |

<button class="copy-button">Copy Table</button>



<!-- ## Mind-blowing papers  -->

## My dictionary 

In the following table I describe some terms I usually read/write about. 



| Term             | Description                                                                                                                                                                                                |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| richness         | number of different taxa in a community                                                                                                                                                                    |
| evenness         | the commonness or rarity of a species                                                                                                                                                                      |
| mucin            | a family of high molecular weight, heavily glycosylated proteins (glycoconjugates) produced by epithelial tissues in most animals                                                                          |
| effective number | refers to the number of equally abundant species needed to obtain the same mean proportional species abundance as that observed in the dataset of interest (where all species may not be equally abundant) |
| copiotrophs      | taxa living in environments rich in nutrients                                                                                                                                                              |
| succession | changes in the presence, relative abundance or absolute abundance of one or more organisms within a microbial community. Its processes can be **deterministic** or **stochastic**. Factors that drive deterministic succession fall into three categories: *abiotic factors* (pH, redox potential), *environmental factors* (cross-feeding, diet or travel) and *biological factors* (innate and adaptive immunity). Stochastic succession is defined as microbial community changes that are not the consequence of environmentally determined fitness (*ecological drift*). Whether microbial succession is more deterministic or stochastic is driven by several factors in the formation of the community, including birth mode, travel, diet (for example, human breast milk) and antibiotics. |



<button class="copy-button">Copy Table</button>


## Visualizations


| Tool            | Description                                                                                                                                                                                                    | Architecture        | Repo                                                   |                        Documentation                         |                         DOI                          |
| clinker | pipeline for easily generating publication-quality gene cluster comparison figures | Python package | [GitHub](https://github.com/gamcil/clinker) |  [wiki page](https://github.com/gamcil/clinker/wiki#basic-pipeline) |  [OA](https://doi.org/10.1093/bioinformatics/btab007) |

<button class="copy-button">Copy Table</button>

