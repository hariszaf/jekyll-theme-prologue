<!-- ---
title: An IMBBC HPC facily manuscript got published
author: Haris Z
layout: post
--- -->

A revised version of the [`darn`](https://github.com/hariszaf/darn) software tool is now available. 
Dark mAtteR iNvestigator (DARN) uses a COI reference tree covering all domains of life (eukaryotes, bacteria, archaea) 
to assign your sequences to the 3 domains of life.

Its purpose is not to provide you with certain taxonomic assignment but to give an overview of the species present. 

PFam oriented bacterial sequences have been added in the initial sequences dataset
and allowing us to cover 371 families plus 60 taxonomic groups of higher level not assigned in family. 

To get this latest version, you just need to install [`docker`](https://docs.docker.com/get-docker/)
and run 

    docker pull hariszaf/darn:latest


Have fun discovering more and more bacteria on your COI amplicon data! :tada: 🥳

<img src="https://raw.githubusercontent.com/hariszaf/darn/main/figures/placements_of_consensus_seqs_transpaernt.png" width="850" height="700">
