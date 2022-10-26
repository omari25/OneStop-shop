class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :image_url, :description, :price
  belongs_to :category
end
