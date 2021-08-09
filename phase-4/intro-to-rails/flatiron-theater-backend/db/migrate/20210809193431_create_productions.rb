class CreateProductions < ActiveRecord::Migration[6.1]
  def change
    create_table :productions do |t|
      t.string :title
      t.string :genera
      t.text :description
      t.float :budget
      t.string :image
      t.string :director
      t.string :artistic_director
      t.boolean :ongoing

      t.timestamps
    end
  end
end
