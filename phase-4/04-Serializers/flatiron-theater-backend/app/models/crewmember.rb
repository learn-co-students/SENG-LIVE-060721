class Crewmember < ApplicationRecord
  belongs_to :production

  validates :name, presence: true
  validates :job_title, presence: true
  validates :salary, presence: true, numericality:{greater_than:500}
  
end
