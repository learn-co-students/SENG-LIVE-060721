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

ActiveRecord::Schema.define(version: 2021_08_11_193812) do

  create_table "character_roles", force: :cascade do |t|
    t.integer "performer_id", null: false
    t.integer "production_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "character_name"
    t.index ["performer_id"], name: "index_character_roles_on_performer_id"
    t.index ["production_id"], name: "index_character_roles_on_production_id"
  end

  create_table "crewmembers", force: :cascade do |t|
    t.string "name"
    t.string "job_title"
    t.float "salary"
    t.integer "production_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["production_id"], name: "index_crewmembers_on_production_id"
  end

  create_table "performers", force: :cascade do |t|
    t.string "name"
    t.string "headshot"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "productions", force: :cascade do |t|
    t.string "title"
    t.string "genre"
    t.text "description"
    t.float "budget"
    t.string "image"
    t.string "director"
    t.string "artistic_director"
    t.boolean "ongoing"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "character_roles", "performers"
  add_foreign_key "character_roles", "productions"
  add_foreign_key "crewmembers", "productions"
end
