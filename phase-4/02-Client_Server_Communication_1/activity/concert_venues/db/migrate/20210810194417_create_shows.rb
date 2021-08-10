class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.datetime :date
      t.string :artist
      t.boolean :all_ages

      t.timestamps
    end
  end
end
