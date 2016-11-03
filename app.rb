require "sinatra"
require "active_record"

ActiveRecord::Base.configurations = YAML.load_file('config/database.yml')
# ActiveRecord::Base.establish_connection(ENV['RACK_ENV'])

class Stay < ActiveRecord::Base
end

get "/" do
  Stay.all.to_json
end

post '/' do
  stay = Stay.new
  place.place = params[:place]
  place.save!
end
