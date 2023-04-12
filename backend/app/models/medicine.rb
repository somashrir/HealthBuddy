class Medicine < ApplicationRecord
    belongs_to :user
    serialize :selectedDays
    serialize :selectedTimings
end
