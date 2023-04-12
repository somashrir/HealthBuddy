class Api::V1::MedicinesController < ApplicationController
    def index 
        decoded_token = JWT.decode(params[:token], nil, false)
        user_id = decoded_token[0]["user_id"]
        day = Date.today.strftime("%a")
        puts day 
        user = User.find(user_id)
        meds = user.medicines.where("selectedDays like ?","%#{day}%")
        morning_med = meds.where("selectedTimings like ?","%morning%")
        afternoon_med = meds.where("selectedTimings like ?","%afternoon%")
        evening_med = meds.where("selectedTimings like ?","%evening%")
        night_med = meds.where("selectedTimings like ?","%night%")

        render json: {morning_med:morning_med, afternoon_med:afternoon_med, evening_med:evening_med, night_med:night_med} 
    end

    def check
        # require jwt 
        decoded_token = JWT.decode(params[:token], nil, false)
        user_id = decoded_token[0]["user_id"]
        puts user_id, decoded_token
        user = User.find(user_id)
        user.medicines.create(name: params[:medicineName], med_type:params[:medicineType], selectedDays:params[:selectedDays], selectedTimings: params[:selectedTimings])

        render json: {message:"med created"}
        # puts params

    end

    def medDestroy 
        medicine = Medicine.find(params[:id])
        puts params[:timing]
        puts medicine
        selected_timings = medicine.selectedTimings
        selected_timings.delete(params[:timing])
        medicine.update(selectedTimings:selected_timings)
        puts medicine


    end

    # private 

    
    #     params.permit(:token,:medicineName,:medicineType, :selectedDays,:selectedTimings)
    

end
