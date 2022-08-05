puts "starting seeds"

User.create!(first_name: "Murph", last_name: "Pup", email:"pup@m.c", phone: "1-000-000-0000", password: "pup")
User.create!(first_name: "Lep", last_name: "Bun", email:"bunbunlep@gmail.com", phone: "1-000-000-0000", password: "testtest")

puts "seeding aiports"

cmh = Airport.create!(name: "John Glenn Columbus International Airport", code: "CMH", city: "Columbus", state: "Ohio", timezone: "EST/New York")
day = Airport.create!(name: "James M. Cox Dayton International Airport", code: "DAY", city: "Dayton", state: "Ohio", timezone: "EST/New York")
Airport.create!(name: "Cleveland Hopkins International Airport", code: "CLE", city: "Cleveland", state: "Ohio", timezone: "EST/New York")
Airport.create!(name: "Cincinnati/Northern Kentucky International Airport", code: "CVG", city: "Hebron", state: "Kentucky", timezone: "EST/New York")

puts "seeding CMH concourses"

con_a = Concourse.create!(name: "Concourse A", y_coord: 39.9980574, x_coord: -82.8838088, cardinal_direction: "south", airport: cmh)
con_b = Concourse.create!(name: "Concourse B", y_coord: 39.997742, x_coord: -82.880192, cardinal_direction: "east", airport: cmh)
con_c = Concourse.create!(name: "Concourse C", y_coord: 39.998459, x_coord: -82.8856209, cardinal_direction: "north", airport: cmh)

puts "seeding CMH Gates"

gates = [
    {:name=>"Gate C56", :lat=> 39.999352, :long=> -82.887221, :concourse=> con_c},
    {:name=>"Gate C55", :lat=> 39.999409, :long=> -82.886823, :concourse=> con_c},
    {:name=>"Gate C54", :lat=> 39.999417, :long=> -82.886335, :concourse=> con_c},
    {:name=>"Gate C53", :lat=> 39.999375, :long=> -82.885481, :concourse=> con_c},
    {:name=>"Gate C52", :lat=> 39.999356, :long=> -82.885407, :concourse=> con_c},
    {:name=>"Gate C51", :lat=> 39.999351, :long=> -82.884958, :concourse=> con_c},
    {:name=>"Gate C50", :lat=> 39.999307, :long=> -82.884436, :concourse=> con_c},
    {:name=>"Gate C49", :lat=> 39.999331, :long=> -82.884286, :concourse=> con_c},
    {:name=>"Gate C48", :lat=> 39.999278, :long=> -82.883804, :concourse=> con_c},
    {:name=>"Gate C47", :lat=> 39.999195, :long=> -82.883761, :concourse=> con_c},
    {:name=>"Gate C46", :lat=> 39.998957, :long=> -82.883782, :concourse=> con_c},
    {:name=>"Gate B36", :lat=> 39.996977, :long=> -82.880649, :concourse=> con_b},
    {:name=>"Gate B35", :lat=> 39.997034, :long=> -82.880531, :concourse=> con_b},
    {:name=>"Gate B34", :lat=> 39.997355, :long=> -82.880504, :concourse=> con_b},
    {:name=>"Gate B32", :lat=> 39.998267, :long=> -82.880467, :concourse=> con_b},
    {:name=>"Gate B31", :lat=> 39.998518, :long=> -82.880435, :concourse=> con_b},
    {:name=>"Gate B30", :lat=> 39.998624, :long=> -82.880423, :concourse=> con_b},
    {:name=>"Gate B29", :lat=> 39.998643, :long=> -82.880509, :concourse=> con_b},
    {:name=>"Gate B28", :lat=> 39.997955, :long=> -82.880917, :concourse=> con_b},
    {:name=>"Gate B26", :lat=> 39.998066, :long=> -82.881271, :concourse=> con_b},
    {:name=>"Gate B25", :lat=> 39.997750, :long=> -82.881227, :concourse=> con_b},
    {:name=>"Gate B24", :lat=> 39.998073, :long=> -82.881587, :concourse=> con_b},
    {:name=>"Gate B23", :lat=> 39.997770, :long=> -82.881587, :concourse=> con_b},
    {:name=>"Gate B22", :lat=> 39.998078, :long=> -82.881893, :concourse=> con_b},
    {:name=>"Gate B21", :lat=> 39.997657, :long=> -82.882371, :concourse=> con_b},
    {:name=>"Gate B20", :lat=> 39.998220, :long=> -82.882822, :concourse=> con_b},
    {:name=>"Gate B19", :lat=> 39.997794, :long=> -82.882763, :concourse=> con_b},
    {:name=>"Gate A7", :lat=> 39.996876, :long=> -82.886604, :concourse=> con_a},
    {:name=>"Gate A6", :lat=> 39.996864, :long=> -82.886416, :concourse=> con_a},
    {:name=>"Gate A5", :lat=> 39.996852, :long=> -82.886201, :concourse=> con_a},
    {:name=>"Gate A4", :lat=> 39.996818, :long=> -82.885623, :concourse=> con_a},
    {:name=>"Gate A3", :lat=> 39.996792, :long=> -82.885119, :concourse=> con_a},
    {:name=>"Gate A2", :lat=> 39.996740, :long=> -82.884184, :concourse=> con_a},
    {:name=>"Gate A1", :lat=> 39.996825, :long=> -82.884136, :concourse=> con_a},
]

gates.each { |gate| Gate.create!(name: gate[:name], x_coord: gate[:long], y_coord: gate[:lat], concourse: gate[:concourse])}

puts "seeding CMH Bathrooms"

bathroom = Bathroom.create!(name: "Restrooms Concourse A", y_coord: 39.996767, x_coord: -82.884560)
bathroom.gates = con_a.gates
bathroom.save

bathroom = Bathroom.create!(name: "Restrooms Concourse A", y_coord: 39.996874, x_coord: -82.885965)
bathroom.gates = con_a.gates
bathroom.save

bathroom = Bathroom.create!(name: "Restrooms Concourse B", y_coord: 39.997969, x_coord: -82.882048)
bathroom.gates = con_b.gates
bathroom.save

bathroom = Bathroom.create!(name: "Restrooms Concourse B", y_coord: 39.997811, x_coord: -82.880491)
bathroom.gates = con_b.gates
bathroom.save

bathroom = Bathroom.create!(name: "Restrooms Concourse C", y_coord: 39.999384, x_coord: -82.885744)
bathroom.gates = con_c.gates
bathroom.save

bathroom = Bathroom.create!(name: "Restrooms Concourse C", y_coord: 39.999159, x_coord: -82.884039)
bathroom.gates = con_c.gates
bathroom.save

puts "creating concessions"
def gate_range(prefix, start, finish)
    (start..finish).map { |gate_num| "Gate #{prefix}#{gate_num}" }
end

food = Concession.create!(name:"Wolfgang Puck Gormet Express", y_coord:39.997629, x_coord: -82.880684, opening_time: "11:00am", closing_time: "8:00pm")
food.gates = con_b.gates.where(name: gate_range('B', 28, 36))

food = Concession.create!(name: "Vino Volo", y_coord: 39.996855, x_coord: -82.885697, opening_time: "7:00am", closing_time: "9:30pm")
food.gates = con_a.gates.where(name: gate_range('A', 1, 6))

food = Concession.create!(name: "Starbucks", y_coord: 39.996804, x_coord: -82.884785, opening_time: "4:15am", closing_time: "7:00pm")
food.gates = con_a.gates.where(name:gate_range('A', 1, 6))

food = Concession.create!(name: "Starbucks", y_coord: 39.997811, x_coord: -82.881937, opening_time: "4:15am", closing_time: "7:30pm")
food.gates = con_b.gates.where(name: gate_range('B', 17, 28))

food = Concession.create!(name: "Starbucks", y_coord: 39.999257, x_coord: -82.883916, opening_time: "4:15am", closing_time: "4:45pm")
food.gates = con_c.gates.where(name: gate_range('C', 46, 53))

vend = Concession.create!(name: "Vending Machines", y_coord: 39.996983, x_coord: -82.886564, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_a.gates.where(name: gate_range('A', 4, 6))

vend = Concession.create!(name: "Vending Machines", y_coord: 39.996891, x_coord: -82.884855, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_a.gates.where(name: gate_range('A', 1, 3))

vend = Concession.create!(name: "Vending Machines", y_coord: 39.997969, x_coord: -82.881716, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_b.gates.where(name: gate_range('B', 22, 25))

vend = Concession.create!(name: "Vending Machines", y_coord: 39.997903, x_coord: -82.880554, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_b.gates.where(name: ["Gate B28", "Gate B29", "Gate B30", "Gate B31","Gate B32", "Gate B33", "Gate B34"])

vend = Concession.create!(name: "Vending Machines", y_coord: 39.997658, x_coord: -82.880494, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_b.gates.where(name: ["Gate B28", "Gate B33", "Gate B34", "Gate B35","Gate B36"])

vend = Concession.create!(name: "Vending Machines", y_coord: 39.999234, x_coord: -82.885059, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_c.gates.where(name: gate_range('C', 46, 50))

vend = Concession.create!(name: "Vending Machines", y_coord: 39.999268, x_coord: -82.885553, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_c.gates.where(name: gate_range('C', 51, 56))

food = Concession.create!(name: "Land-Grant Brewing Co.", y_coord: 39.997805, x_coord: -82.881675, opening_time: "11:00am", closing_time: "7:00pm")
food.gates = con_b.gates.where(name: gate_range('B', 22, 28))

food = Concession.create!(name: "Eddie George's Grille 27", y_coord: 39.997733, x_coord: -82.882135, opening_time: "11:00am", closing_time: "9:00pm")
food.gates = con_b.gates.where(name: gate_range('B', 17, 21))

food = Concession.create!(name: "Bob Evans Express", y_coord: 39.997973, x_coord: -82.882162, opening_time: "11:00am", closing_time: "9:00pm")
food.gates = con_b.gates.where(name: gate_range('B', 17, 21))

food = Concession.create!(name: "Auntie Anne's Pretzels", y_coord: 39.997941, x_coord: -82.881574, opening_time: "11:00am", closing_time: "6:00pm")
food.gates = con_b.gates.where(name: gate_range('B', 17, 26))

vend = Concession.create!(name: "Farmer's Fridge", y_coord: 39.997972, x_coord: -82.882100, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_b.gates.where(name: gate_range('B', 17, 21))

vend = Concession.create!(name: "PopShop Local", y_coord: 39.997811, x_coord: -82.881802, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_b.gates.where(name: gate_range('B', 17, 26))

vend = Concession.create!(name: "illy Coffee Vending Machine", y_coord: 39.997973, x_coord: -82.882131, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_b.gates.where(name: gate_range('B', 17, 26))

shop = Concession.create!(name: "Columbus Marketplace", y_coord: 39.997894, x_coord: -82.880667, opening_time: "4:15am", closing_time: "5:00pm")
shop.gates = con_b.gates.where(name: gate_range('B', 17, 28))

shop = Concession.create!(name: "Capital City TravelMart", y_coord: 39.997962, x_coord: -82.881930, opening_time: "4:15am", closing_time: "5:00pm")
shop.gates = con_b.gates.where(name: gate_range('B', 17, 28))

food = Concession.create!(name: "Donatos", y_coord: 39.996862, x_coord: -82.885837, opening_time: "6:00am", closing_time: "10:00pm")
food.gates = con_a.gates.where(name: gate_range('A', 3, 6))

food = Concession.create!(name: "Chili's Too", y_coord: 39.996755, x_coord: -82.884411, opening_time: "6:00am", closing_time: "7:00pm")
food.gates = con_a.gates.where(name: gate_range('A', 1, 3))

vend = Concession.create!(name: "Farmer's Fridge", y_coord: 39.996889, x_coord: -82.884810, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_a.gates.where(name: gate_range('A', 1, 3))

vend = Concession.create!(name: "Jeni's Splendid Ice Cream", y_coord: 39.996894, x_coord: -82.884878, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_a.gates.where(name: gate_range('A', 1, 3))

shop = Concession.create!(name: "CNBC News Store", y_coord: 39.996792, x_coord: -82.884677, opening_time: "4:00am", closing_time: "9:00pm")
shop.gates = con_a.gates.where(name: gate_range('A', 1, 4))

food = Concession.create!(name: "PGA TOUR Grill", y_coord: 39.999282, x_coord: -82.884013, opening_time: "10:00am", closing_time: "9:00pm")
food.gates = con_c.gates.where(name: gate_range('C', 46, 50))

vend = Concession.create!(name: "Farmer's Fridge", y_coord: 39.999203, x_coord: -82.884407, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_c.gates.where(name: gate_range('C', 46, 50))

vend = Concession.create!(name: "Jeni's Splendid Ice Cream", y_coord: 39.999272, x_coord: -82.885696, opening_time: "7:00am", closing_time: "7:00am")
vend.gates = con_c.gates.where(name: gate_range('C', 46, 50))

food = Concession.create!(name: "Donatos", y_coord: 39.999336, x_coord: -82.885198, opening_time: "10:00am", closing_time: "6:00pm")
food.gates = con_c.gates.where(name: gate_range('C', 50, 56))

shop = Concession.create!(name: "Columbus Marketplace", y_coord: 39.999307, x_coord: -82.884104, opening_time: "10:00am", closing_time: "6:00pm")
shop.gates = con_c.gates.where(name: gate_range('C', 46, 50))

shop = Concession.create!(name: "CNBC News Store", y_coord: 39.999364, x_coord: -82.885611, opening_time: "5:00am", closing_time: "12:30pm")
shop.gates = con_c.gates.where(name: gate_range('C', 46, 50))

food = Concession.create!(name: "American Craft Tavern", y_coord: 39.999323, x_coord: -82.886674, opening_time: "11:00am", closing_time: "7:00pm")
food.gates = con_c.gates.where(name: gate_range('C', 54, 56))
