class RemoveDoseFromMedicines < ActiveRecord::Migration[6.1]
  def change
    remove_column :medicines, :dose
  end
end
