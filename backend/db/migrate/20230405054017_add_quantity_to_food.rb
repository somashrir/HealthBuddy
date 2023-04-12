class AddQuantityToFood < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :quantity, :numeric
  end
end
