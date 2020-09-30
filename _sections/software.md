---
layout: software
title: Software
icon: fa-pencil-alt
order: 4
---

<p align="center">
  <img src="https://i.paste.pics/870189fadf668a958c8aac83f38e799c.png"  width="300" align="left" >
</p>
<br/>
## PEMA: a flexible Pipeline for Environmental DNA Metabarcoding Analysis of the 16S/18S rRNA, ITS and COI marker genes
*Main page on* [*GitHub*](https://github.com/hariszaf/pema).
*PEMA is reposited in* [*Docker Hub*](https://hub.docker.com/r/hariszaf/pema) *as well as in* [*Singularity Hub*](https://singularity-hub.org/collections/2295).

Metabarcoding analysis of four marker genes, **16S rRNA** (Bacteria), **ITS** (Fungi) as well as **COI** and **18S rRNA** (metazoa) is supported by PEMA. PEMA processes the reads (raw data) from each sample and **returns an OTU- or an ASV-table with the taxonomies** of the taxa found and their abundances in each sample.

PEMA supports **both OTU clustering** (thanks to VSEARCH and CROP algorithms) **and ASV inference** (via SWARM) for all four marker genes. For the case of the 16S rRNA marker gene,  two separate approaches for taxonomy assignment have been included: **alignment- and phylogenetic-based**. For the latter, a **reference tree of 1000 taxa** was created using SILVA_132_SSURef, EPA-ng and RaxML-ng.

PEMA has been implemented in [**BigDataScript**](https://pcingola.github.io/BigDataScript/) programming language. BDS’s ad hoc task parallelism and task synchronization, supports heavyweight computation.
Thus, PEMA inherits such features and it also supports roll-back checkpoints and on-demand partial pipeline execution. In addition, it takes advantage of all the computational power available on a specific machine; for example, if PEMA is executed on a personal laptop with 4 cores, it is going to use all four of them.

Finally, **container-based technologies** such as **Docker** and **Singularity**, make PEMA easy accessible for all operating systems.
As you can see in the [PEMA_tutorial.pdf](https://github.com/hariszaf/pema/blob/master/help_files/GitHub%20tutorial.pdf), once you have either Docker or Singularity on your computational environment (see below which suits your case better), running PEMA is cakewalk. You may also find the [**PEMA tutorial**](https://docs.google.com/presentation/d/1lVH23DPa2NDNBhVvOTRoip8mraw8zfw8VQwbK4vkB1U/edit?usp=sharing) as a Google Slides file.




<p align="bottom">
  <img src="https://i.ibb.co/kqT6rP5/imageedit-70-4833876726.png"  width="250" align="left" >
</p>
<br/>
## volesti: a C++ library for high-dimensional sampling and volume approximation for modelling metabolic networks.

VolEsti is a C++ library for volume approximation and sampling of convex bodies (e.g. polytopes) with an R and limited python interface. VolEsti is part of the [GeomScale](https://geomscale.github.io/) project.

Along with the GeomScale group, we are building a complete toolobx  for the analysis of metabolic network.
Our aim is  to address the challenges of high dimensional networks (e.g the human Recon 3D) as well as those rising from networks of networks, just like in the case of metabolic networks of microbial communities.
