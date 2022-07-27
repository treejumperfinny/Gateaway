# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_26_141547) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "airports", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.string "city"
    t.string "state"
    t.string "timezone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bathrooms", force: :cascade do |t|
    t.string "name"
    t.text "location"
    t.integer "x_coord"
    t.integer "y_coord"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "concessions", force: :cascade do |t|
    t.string "name"
    t.integer "x_coord"
    t.integer "y_coord"
    t.string "opening_time"
    t.string "closing_time"
    t.boolean "open"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "concessions_gates", id: false, force: :cascade do |t|
    t.bigint "gate_id", null: false
    t.bigint "concession_id", null: false
  end

  create_table "concourses", force: :cascade do |t|
    t.string "name"
    t.integer "x_coord"
    t.integer "y_coord"
    t.string "cardinal_direction"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "flights", force: :cascade do |t|
    t.string "airline"
    t.string "flight_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "departure_date"
    t.integer "user_id"
  end

  create_table "gates", force: :cascade do |t|
    t.string "name"
    t.integer "x_coord"
    t.integer "y_coord"
    t.string "timezone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "segments", force: :cascade do |t|
    t.string "airline"
    t.string "flight_number"
    t.datetime "departure_time"
    t.string "departure_gate"
    t.string "departure_time_zone"
    t.datetime "arrival_time"
    t.string "arrival_gate"
    t.string "arrival_time_zone"
    t.datetime "time_at_destination"
    t.datetime "time_at_origin"
    t.integer "travel_time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
