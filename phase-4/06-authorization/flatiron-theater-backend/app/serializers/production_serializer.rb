class ProductionSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :description, :image, :director, :artistic_director, :ongoing, :production_performers
  has_many :crewmembers

  def production_performers
    object.character_roles.map{|cr| "#{cr.character_name} : #{cr.performer.name}"}
  end 
end
