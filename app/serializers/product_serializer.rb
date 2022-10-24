class ProductSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :image, :description, :price
end
