# -*- encoding: utf-8 -*-
# stub: formtastic 4.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "formtastic".freeze
  s.version = "4.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Justin French".freeze]
  s.date = "2021-02-01"
  s.description = "A Rails form builder plugin/gem with semantically rich and accessible markup".freeze
  s.email = ["justin@indent.com.au".freeze]
  s.extra_rdoc_files = ["README.md".freeze]
  s.files = ["README.md".freeze]
  s.homepage = "http://github.com/formtastic/formtastic".freeze
  s.licenses = ["MIT".freeze]
  s.rdoc_options = ["--charset=UTF-8".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.4.0".freeze)
  s.rubygems_version = "3.3.21".freeze
  s.summary = "A Rails form builder plugin/gem with semantically rich and accessible markup".freeze

  s.installed_by_version = "3.3.21" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<actionpack>.freeze, [">= 5.2.0"])
    s.add_development_dependency(%q<rspec-rails>.freeze, ["~> 3.4"])
    s.add_development_dependency(%q<rspec-dom-testing>.freeze, [">= 0.1.0"])
    s.add_development_dependency(%q<yard>.freeze, ["~> 0.9.20"])
    s.add_development_dependency(%q<ammeter>.freeze, ["~> 1.1.3"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<sqlite3>.freeze, ["~> 1.4"])
  else
    s.add_dependency(%q<actionpack>.freeze, [">= 5.2.0"])
    s.add_dependency(%q<rspec-rails>.freeze, ["~> 3.4"])
    s.add_dependency(%q<rspec-dom-testing>.freeze, [">= 0.1.0"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9.20"])
    s.add_dependency(%q<ammeter>.freeze, ["~> 1.1.3"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<sqlite3>.freeze, ["~> 1.4"])
  end
end
