# New theme based on [Lazy Ren's](https://lazyren.github.io)

To deploy locally, first make sure you have all pre-requisites:

```bash
sudo apt update && sudo apt install ruby-full build-essential zlib1g-dev

gem install bundler jekyll

# Makes sure to run this again if you edit anything in the Gemfile 
bundle install
```

and once everything's there: 

```bash
bundle exec jekyll serve
```


# Orphan posts
 
Under the `more_posts` you may build pages that are not linked to a particular category from those included in the `_config.yml` file. To point to those from another post, you may use directly the `permalink` of the post you'd like to point at. For example check how we did that [here](_posts/resources/2024-11-20-microbiome.md#a-strain-dips-to-very-low-abundance-in-a-microbial-community-and-then-recovers-to-thrive). 




