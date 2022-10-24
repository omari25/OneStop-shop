class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :image
      t.string :description
      t.integer :price
      t.integer :category_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
