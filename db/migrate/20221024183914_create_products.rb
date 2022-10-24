class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :image_url
      t.string :description
      t.integer :category_id
      t.integer :price

      t.timestamps
    end
  end
end
