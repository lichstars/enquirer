require 'sinatra/base'
require 'json'
require 'yaml/store'
require 'date'

class Enquiry < Sinatra::Base
  	
	@@store = YAML::Store.new 'database.yml'
	
	get '/' do
		@page = 'index'
		@success = false
		erb:main
	end

	get '/api/list' do
		response['Access-Control-Allow-Origin'] = '*'
		@page = 'list'
	  	@messages = @@store.transaction { @@store['messages'] }
		return @messages.to_json
	end

	post '/api/save' do
		response['Access-Control-Allow-Origin'] = '*'

		firstname = params['firstname']
		lastname = params['lastname']
		email = params['email']
		phone = params['phone']
		comments = params['comments']

  		@@store.transaction do
			key = Time.new
  			details = {
  				'date': key,
  				'firstname': firstname,
  				'lastname': lastname,
  				'email': email,
  				'phone': phone,
  				'comments': comments
  			}
  			@@store["messages"] ||= [] 			
  			@@store["messages"].push(details)
			@success = true
		end
		status 200
	end
end