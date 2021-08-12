class AddCharacterNameToCharacterRoles < ActiveRecord::Migration[6.1]
  def change
    add_column :character_roles, :character_name, :string
  end
end
