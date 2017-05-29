desc 'Test the site with html-proofer'
task :htmlproofer do
  sh 'bundle exec htmlproofer ./public --url-swap "releases/(?<slug>[a-z0-9\-]*$):releases/\k<slug>.html"'
end
