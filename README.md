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

