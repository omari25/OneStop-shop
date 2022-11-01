# -*- encoding: utf-8 -*-
# stub: formtastic_i18n 0.7.0 ruby lib

Gem::Specification.new do |s|
  s.name = "formtastic_i18n".freeze
  s.version = "0.7.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Timo Schilling".freeze]
  s.date = "2021-05-23"
  s.email = ["timo@schilling.io".freeze]
  s.homepage = "https://github.com/timoschilling/formtastic_i18n".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.21".freeze
  s.summary = "I18n translation for the formtastic gem".freeze

  s.installed_by_version = "3.3.21" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
  else
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
  end
end
