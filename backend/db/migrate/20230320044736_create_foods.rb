class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :user_id
      t.string :name
      t.numeric :calorie

      t.timestamps
    end
  end
end
