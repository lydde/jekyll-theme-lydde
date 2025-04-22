source "https://rubygems.org"

#
# Welcome to LYDDE Group Website system
# Version : 1.0.0
#
# To install & execute this website run:
#     bundle exec jekyll serve

# Define Jekyll version requested (default to 4.3.2 if not set)
gem "jekyll"

# This is the default theme for our Jekyll sites.
# Uncomment if using a custom theme
# gem "jekyll-theme-lydde"

# If you have any plugins, put them here!
group :jekyll_plugins do
  # Uncomment if using GitHub Pages metadata
  # gem "jekyll-github-metadata"

  # Syntax highlighting for code blocks
  gem "rouge"

  # Adds retry functionality for HTTP requests
  gem "faraday-retry"
end

# GitHub Pages gem (includes specific versions of Jekyll and plugins)
gem "github-pages"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.2.0", platforms: [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]