# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180612180128) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.integer "user_id", null: false
    t.datetime "publish_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "hook", null: false
    t.string "img_url"
    t.index ["title"], name: "index_articles_on_title", unique: true
  end

  create_table "bookmarks", force: :cascade do |t|
    t.string "user_id", null: false
    t.string "article_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_bookmarks_on_article_id"
    t.index ["user_id"], name: "index_bookmarks_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "article_id", null: false
    t.integer "user_id", null: false
    t.datetime "publish_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "body", null: false
    t.string "img_url"
    t.index ["article_id"], name: "index_comments_on_article_id"
    t.index ["publish_date"], name: "index_comments_on_publish_date"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "follows", force: :cascade do |t|
    t.string "follower_id", null: false
    t.string "followee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followee_id"], name: "index_follows_on_followee_id"
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "article_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_likes_on_article_id"
    t.index ["user_id", "article_id"], name: "index_likes_on_user_id_and_article_id", unique: true
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["firstname"], name: "index_users_on_firstname"
    t.index ["lastname"], name: "index_users_on_lastname"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
