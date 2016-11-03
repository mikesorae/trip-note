require "sinatra"
require "active_record"

ActiveRecord::Base.configurations = YAML.load_file('config/database.yml')
db_config = ActiveRecord::Base.configurations["development"]
ActiveRecord::Base.establish_connection(db_config)

class Stay < ActiveRecord::Base
end

get "/" do
  Stay.all.to_json
end

post '/' do
  stay = Stay.new
  stay.place = params[:place]
  stay.save!
end
