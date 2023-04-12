class AddQuantityTypeToFood < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :quantity_type, :string 
  end
end
