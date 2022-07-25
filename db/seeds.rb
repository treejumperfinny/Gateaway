# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting seeds"

User.create(first_name: "Murph", last_name: "Pup", email:"pup@m.c", phone: "1-000-000-0000", pasword_digest: "pup")

puts "there's really nothing to seed..."