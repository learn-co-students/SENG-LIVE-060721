class CharacterRole < ApplicationRecord
  belongs_to :performer
  belongs_to :production
end
