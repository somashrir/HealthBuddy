class Api::V1::UsersController < ApplicationController
    # def track
    #     require 'net/http'
    #     require 'uri'

    #     query = 'fries'
    #     api_url = "https://api.api-ninjas.com/v1/nutrition?query=#{CGI.escape(query)}"
    #     uri = URI.parse(api_url)
    #     request = Net::HTTP::Get.new(uri)
    #     request['X-Api-Key'] = 'jv0VxLujC1De2xvBzLesnQ==Bj7A0pKc0tunOSpL'

    #     response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    #     http.request(request)
    #     end

    #     if response.code == '200'
    #     puts response.body
    #     data = JSON.parse(response.body)
    #     puts data
    #     puts data[0]["name"]
    #     puts data[0]["calories"]
    #     # puts response.body[0].calories
    #     else
    #     puts "Error: #{response.code} #{response.body}"
    #     end
    # end

    def count_cal
        # cal_track();
        user = User.find(params[:user_id])
        age = params[:age]
        gender = params[:gender] 
        height = params[:height].to_f()
        weight = params[:weight].to_f() 
        activity_level = params[:activity_level] 
        goal_weight = params[:goal_weight].to_f() 
        diff_weight = goal_weight.to_f()-weight.to_f()
        puts activity_level

        cal_data = cal_track(age=age, gender= gender, height= height, weight= weight, activity_level= activity_level)

        cal_intake =  cal_data["data"]["goals"]["maintain weight"]+ (1000*diff_weight)
        if user.update!(age:age,gender:gender,height:height, weight:weight, goal_weight:goal_weight, activity_level:activity_level,calorie_intake: cal_intake)

            render json: {calorie_intake:user.calorie_intake} 

        else  
            render json: {message: user.errors.full_messages} 
        end
        # puts cal_data["data"]
    end

    def food_search 
        puts params
        data = food_cal(params[:query])
        calorie = data[0]["calories"]
        carb = data[0]["carbohydrates_total_g"]
        fat = data[0]["fat_total_g"]
        protein  = data[0]["protein_g"]
        sodium = data[0]["sodium_mg"]/1000
        sugar = data[0]["sugar_g"]
        name = data[0]["name"]

        render json: {calorie:calorie, carb:carb, fat:fat, protein:protein, sodium:sodium, sugar:sugar, name:name}
    end
    def show
        decoded_token = JWT.decode(params[:token], nil, false)
        user_id = decoded_token[0]["user_id"]
        user = User.find(user_id)
        puts user
        render json: {user:user} 
    end

       

end
