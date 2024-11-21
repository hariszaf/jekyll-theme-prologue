---
layout: post
title: Microbiome basics
category: resources
image: https://media.licdn.com/dms/image/D5612AQENbGxsBiiBXA/article-cover_image-shrink_720_1280/0/1682668294084?e=2147483647&v=beta&t=o8W3gA2iYv0oL-ZQzqAU9UKn2ft21lSRa_ngd53hDzo
---
<!-- https://t4.ftcdn.net/jpg/08/13/85/15/360_F_813851569_Pm4OMS0rtCi4D3Y4Vgt76SI87MLUATNk.jpg -->
<!--  https://sbvu.ac.in/wp-content/uploads/2023/11/microbes-bacteria-7.jpg -->
<!-- since it is a post, they have always to start with a date!!!  -->


Microbiome analysis counts several aspects, yet it always comes down at some basic concepts! 
Here, I will try to cover a thing or two and gather some links that describe them more thoroughly.
To save some (of my) time, I will use a lot of copy-paste () always referring the initial resource 

- [Microbiome data idiosyncrasy](#microbiome-data-idiosyncrasy)
- [Microbiome diversity](#microbiome-diversity)
  - [Diversity within a community](#diversity-within-a-community)
  - [Diversity between communities](#diversity-between-communities)
- [Feature Identification](#feature-identification)
  - [Differential Abundance Analysis](#differential-abundance-analysis)
- [Literature](#literature)


## Microbiome data idiosyncrasy 

<!-- <div style="background-color: #f0f8ff; padding: 10px; border-radius: 5px; border: 1px solid #b0e0e6;">
  <h3>Important Information</h3>
  This is a colored box with a light blue background. You can use HTML to add more complex styling to your Markdown content.
</div> -->


Although microbiome data has some of the attributes of compositional data, it is not perfectly compositional. Classic compositional data vectors represent portions of a whole. The total sum of the components is not meaningful, and only the relative difference between components matters [36]. For truly compositional data, the vectors (2, 1) and (2000, 1000) represent the same information: only that the first and second components are present in the ratio 2 : 1. For microbiome data, the size of the counts also contains information about the reliability of the ratio. Larger counts are more likely to closely match the true ratio in the sample [44].



## Microbiome diversity


### Diversity within a community 

**α-diversity** 

https://docs.onecodex.com/en/articles/4136553-alpha-diversity

Shannon Entropy (\(H'\))

$$
H' = - \sum_{i=1}^S p_i \ln(p_i)
$$

where:

- $$p_i$$ is the proportional abundance of species \(i\),
- $$S$$ is the total number of species.

The effective number of species based on Shannon entropy is:

$$
\text{Effective Number of Species} = e^{H'}
$$

---


### Diversity between communities 

**β-diversity** 



## Feature Identification

asdas

### Differential Abundance Analysis 

asd


## Literature 

Datta, Somnath, and Subharup Guha, eds. [Statistical Analysis of Microbiome Data](https://link.springer.com/book/10.1007/978-3-030-73351-3). Springer International Publishing, 2021. 

