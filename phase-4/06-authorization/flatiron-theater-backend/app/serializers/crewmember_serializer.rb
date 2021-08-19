class CrewmemberSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_title, :salary
  belongs_to :production
end
