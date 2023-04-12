class AddColumnSelectedDaysSelectedTimingsToMedicines < ActiveRecord::Migration[6.1]
  def change
    add_column :medicines, :selectedDays, :text
    add_column :medicines, :selectedTimings, :text
  end
end
