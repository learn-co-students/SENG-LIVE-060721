class CharacterRole < ApplicationRecord
  belongs_to :performer
  belongs_to :production
  validate :only_one

  def only_one
    if(performer.productions.length > 1)
      errors.add(:performer, "Performers can only be in one production at a time")
    end 
  end 
end
