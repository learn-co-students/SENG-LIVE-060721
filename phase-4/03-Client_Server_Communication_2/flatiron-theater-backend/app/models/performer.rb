class Performer < ApplicationRecord
    has_many :character_roles
    has_many :productions, through: :character_roles
    
    validates :name, presence: true, uniqueness: true
    validates :headshot, presence: true
end
