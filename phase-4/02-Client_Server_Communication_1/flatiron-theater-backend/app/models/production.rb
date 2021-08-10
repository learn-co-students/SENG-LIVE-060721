class Production < ApplicationRecord
    has_many :crewmembers, dependent: :destroy
end
