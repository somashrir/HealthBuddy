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

ActiveRecord::Schema.define(version: 2023_04_08_073001) do

  create_table "foods", force: :cascade do |t|
    t.string "user_id"
    t.string "name"
    t.decimal "calorie"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.decimal "carb"
    t.decimal "fat"
    t.decimal "protein"
    t.decimal "sodium"
    t.decimal "suger"
    t.string "food_type"
    t.decimal "quantity"
    t.string "quantity_type"
  end

  create_table "medicines", force: :cascade do |t|
    t.string "name"
    t.string "med_type"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "selectedDays"
    t.text "selectedTimings"
    t.index ["user_id"], name: "index_medicines_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "age"
    t.string "gender"
    t.decimal "height"
    t.decimal "weight"
    t.string "activity_level"
    t.decimal "goal_weight"
    t.decimal "calorie_intake"
  end

end
