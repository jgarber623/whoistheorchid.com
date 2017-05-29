require 'html-proofer'

desc 'Test the site with html-proofer'
task :htmlproofer do
  options = {
    assume_extension: true
  }

  HTMLProofer.check_directory('./public', options).run
end
