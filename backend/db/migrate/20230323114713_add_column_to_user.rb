class AddColumnToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :age, :integer
    add_column :users, :gender, :string
    add_column :users, :height, :numeric
    add_column :users, :weight, :numeric
    add_column :users, :activity_level, :integer
  end
end
