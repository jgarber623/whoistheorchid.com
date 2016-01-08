set :stages, %w(production)
set :default_stage, 'production'

require 'bundler/capistrano'
require 'capistrano/ext/multistage'

set :application, 'whoistheorchid.com'

set :repository, 'git@github.com:jgarber623/whoistheorchid.com.git'
set :deploy_to, '/var/www/whoistheorchid-com'
set :user, 'www-data'
set :default_environment, { JEKYLL_ENV: 'production' }
set :deploy_via, :remote_cache
set :ssh_options, { forward_agent: true }
set :use_sudo, false

set :ruby_version, '2.2.4'
set :bundle_cmd, "chruby-exec #{ruby_version} -- bundle"

default_run_options[:shell] = '/bin/bash'

after :deploy, 'deploy:build_site', 'deploy:cleanup'

namespace :deploy do
  task :build_site do
    run "cd #{release_path} && #{bundle_cmd} exec jekyll build --config config/jekyll.yml"
  end

  %w{finalize_update restart}.each do |cmd|
    task cmd do
      # Override default deploy tasks
    end
  end
end
