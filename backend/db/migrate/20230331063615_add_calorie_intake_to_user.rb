class AddCalorieIntakeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :calorie_intake, :numeric
  end
end
