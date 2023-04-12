class ChangeActivityLevelToString < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :activity_level, :string
  end
end
