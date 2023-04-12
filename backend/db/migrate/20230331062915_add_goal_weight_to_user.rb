class AddGoalWeightToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :goal_weight, :numeric
  end
end
