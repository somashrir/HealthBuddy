class Api::V1::FoodsController < ApplicationController
    def create
        require 'date'
        user = User.find(params[:user_id])
        data = food_cal(params[:query])
        quantity = params[:quantity].to_f() 
        quantity_type = params[:quantityType]
        
        date = params[:date].to_datetime()

        puts "---------------------"
        puts date
        puts params[:date]
        value = (quantity_type == 'ml' || quantity_type == 'gram')? (quantity/100): quantity
        
        calorie = data[0]["calories"]*value
        carb = data[0]["carbohydrates_total_g"]*value
        fat = data[0]["fat_total_g"]*value
        protein  = data[0]["protein_g"]*value
        sodium = data[0]["sodium_mg"]*value
        sugar = data[0]["sugar_g"]*value
        food_type = params[:food_type]
        user.foods.create(name:data[0]["name"],calorie: calorie,carb:carb, fat:fat, protein:protein, sodium:sodium, suger:sugar, food_type:food_type, created_at:date, updated_at:date, quantity:quantity,quantity_type:quantity_type)

        render json: {message:"success"}

    end

    def index 
        require 'date'

        current_time = DateTime.now
        current_time = current_time.day.to_s + "/" + current_time.month.to_s + "/" + current_time.year.to_s

        user = User.find(params[:user_id])

        date = params[:selectedDate]

        current_date =  DateTime.parse(date)
        puts current_date

        total_intake = 0
        total_intake = (user.foods.where(['created_at >= ? AND created_at < ?', current_date, current_date + 1]).sum("calorie")).round(2)
        puts total_intake
        breakfast = user.foods.where(food_type:"breakfast")
        lunch = user.foods.where(food_type:"lunch")
        dinner = user.foods.where(food_type:"dinner")
        puts total_intake
        render json: {breakfast:breakfast, lunch:lunch, dinner:dinner, total_intake:total_intake}
    end

    def destroy
        food = Food.find(params[:id])
        
        if food.destroy
            render json: {message:"deletion successful."} 
        else
            render json: {message:"deletion unsuccessful."}
        end

    end

end
