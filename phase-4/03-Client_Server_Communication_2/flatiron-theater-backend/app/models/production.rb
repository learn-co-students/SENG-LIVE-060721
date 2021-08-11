class Production < ApplicationRecord
    has_many :crewmembers, dependent: :destroy
    has_many :character_roles
    has_many :performers, through: :character_roles
end
