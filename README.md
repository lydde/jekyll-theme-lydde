# Lydde Group - Boostrap Theme for Jekyll

Theme for all Lydde Group GitHub Sites based on Jekyll & Bootstrap 5.3.0

We start creating this approach for sustainability. 

Jekyll is a simple and powerful tool that lets us build beautiful websites without any coding. 
We use GitHub Pages to host your Jekyll site for free and update it with just a few clicks. 
By using Jekyll and GitHub, you are reducing your environmental impact and saving money. 

What are you waiting for? As we do, Start your Jekyll journey today!

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-bootstrap-theme"
```

Add this line to your site's `_config.yml`:

```
# Jekyl Theme
remote_theme: YAKAGameStudio/Symphony
```
And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-boostrap-theme

## Content
Lydde Group Jekyll Theme has been scaffolded with all the necessary files and directories to have a new Jekyll site up and running with zero-configuration.

## Layouts
Refers to files within the `_layouts` directory, that define the markup for your theme.

  - `default.html` : The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says ` {{ content }} ` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
  - `home.html` : The layout for your landing-page / home-page / index-page. [[More Info.](#home-layout)]
  - `page.html` : The layout for your documents that contain FrontMatter, but are not posts.
  - `post.html` : The layout for your posts.
  - `category.html` : The layout for pages used as categories

### Home Layout

`home.html` is a flexible HTML layout for the site's landing-page / home-page / index-page.

## Usage


## Plugin
  - jekyll-feed             #https://github.com/jekyll/jekyll-feed
  - jekyll-archives         #https://github.com/jekyll/jekyll-archives
  - jekyll-sitemap          #https://github.com/jekyll/jekyll-sitemap
  - jekyll-avatar           #https://github.com/jekyll/jekyll-avatar
  - jekyll-seo-tag          #https://github.com/jekyll/jekyll-seo-tag
  - jekyll-mentions         #https://github.com/jekyll/jekyll-mentions
  - jekyll-redirect-from    #https://github.com/jekyll/jekyll-redirect-from
                            #https://github.com/jekyll/github-metadata

# Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/lydde/jekyll-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
