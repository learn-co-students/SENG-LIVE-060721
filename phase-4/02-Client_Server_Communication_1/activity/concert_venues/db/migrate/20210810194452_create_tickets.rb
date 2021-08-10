class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.float :price
      t.belongs_to :show, null: false, foreign_key: true
      t.string :ticket_owner
      t.boolean :willcall

      t.timestamps
    end
  end
end
