# Lydde Group - Full Boostrap 5.3 Theme for Jekyll
Theme for LYDDE Group Sites based on Jekyll & Bootstrap 5

## Installation
Add this line to your site's `_config.yml`:

```
# Jekyl Theme
remote_theme: lydde/jekyll-lydde-theme
```

## Content
Symphony has been scaffolded with all the necessary files and directories to have a new Jekyll site up and running with zero-configuration.

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