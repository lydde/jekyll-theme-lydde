Gem::Specification.new do |spec|
    spec.name          = "jekyll-theme-lydde"
    spec.version       = "0.1.4"
    spec.authors       = ["MrKoubyak"]
    spec.email         = ["koubyak@msn.com"]
  
    spec.summary       = "LYDDE Group Website template for Jekyll & Bootstrap"
    spec.homepage      = "https://lyddegroup.com/jekyll-theme-lydde/"
    spec.license       = "MIT"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

    spec.metadata = {
      "bug_tracker_uri"   => "https://github.com/lydde/jekyll-theme-lydde/issues",
      "documentation_uri" => "https://github.com/lydde/jekyll-theme-lydde/#readme",
      "homepage_uri"      => "https://lydde.github.io/jekyll-lydde-theme/",
      "source_code_uri"   => "https://github.com/lydde/jekyll-theme-lydde",
      "wiki_uri"          => "https://github.com/lydde/jekyll-theme-lydde/wiki",
      "plugin_type"       => "theme"
    }
      
    spec.required_ruby_version = "~> 3.1"

    spec.add_runtime_dependency "jekyll", "~> 4.3"
    spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
    spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
    spec.add_runtime_dependency "jekyll-archives", "~> 2.2"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
    spec.add_runtime_dependency "jekyll-include-cache", "~> 0.2"

    spec.add_development_dependency "bundler"
  end