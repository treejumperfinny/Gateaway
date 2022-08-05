require 'json'

file = File.open("./data.json").read
data = JSON.parse(file)

locations = []
restrooms = []

data["data"].each do |fac|
    next if fac["name"] == "Security Checkpoint"
    next if fac['name'] =~ /Gate .[0-9]*/

    if fac['name'] == 'Restrooms'
        restrooms << {
            lat: fac['address']['lat'],
            long: fac['address']['lng'],
            concourse: fac['categories'].map { |c| c['name'] }.select{ |c| c =~ /Concourse/ }.first
        }
    else
        locations << {
            name: fac['name'],
            lat: fac['address']['lat'],
            long: fac['address']['lng'],
            concourse: fac['categories'].map { |c| c['name'] }.select{ |c| c =~ /Concourse/ }.first
        }
    end
end

locations.keep_if { |loc| loc[:concourse] }
restrooms.keep_if { |loc| loc[:concourse] }

locations.each { |l| puts l}
restrooms.each { |l| puts l}