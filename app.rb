require "sinatra"
require "active_record"
require 'yaml'
require 'erb'
require "sinatra/reloader" if development?

db_config_yaml = 
ActiveRecord::Base.configurations = YAML.load(ERB.new(IO.read('config/database.yml')).result)
db_config = ActiveRecord::Base.configurations[ENV["RACK_ENV"]]
ActiveRecord::Base.establish_connection(db_config)

class Stay < ActiveRecord::Base
end

get "/" do
  File.read(File.join('public', 'index.html'))
end

get "/stays" do
  Stay.all.to_json
end

post '/stays' do
  stay = Stay.new
  stay.place = params[:place]
  stay.save!
end
