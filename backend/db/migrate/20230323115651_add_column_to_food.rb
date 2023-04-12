class AddColumnToFood < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :carb, :numeric
    add_column :foods, :fat, :numeric
    add_column :foods, :protein, :numeric
    add_column :foods, :sodium, :numeric
    add_column :foods, :suger, :numeric
    add_column :foods, :type, :string
  end
end
