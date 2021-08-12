class Production < ApplicationRecord
    has_many :crewmembers, dependent: :destroy
    has_many :character_roles
    has_many :performers, through: :character_roles

    validates :title, presence: true
    validates :genre, presence: true
    validates :budget, presence: true
    validates :image, presence: true
    validates :director, presence: true
    validates :artistic_director, presence: true
    validates :description, presence: true, length: {minimum:10}






end
