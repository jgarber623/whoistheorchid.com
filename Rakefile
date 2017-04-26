Dir.glob('lib/tasks/*.rake').each { |file| load file }

task :default do
  Rake::Task['jekyll:build'].invoke
  Rake::Task['htmlproofer'].invoke
end
