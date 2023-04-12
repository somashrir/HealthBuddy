class CreateMedicines < ActiveRecord::Migration[6.1]
  def change
    create_table :medicines do |t|
      t.string :name
      t.string :med_type
      t.integer :dose
      t.references :user

      t.timestamps
    end
  end
end
