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
        diff_weight = (goal_weight.to_f()-weight.to_f())>0?1:-1
        puts activity_level

        cal_data = cal_track(age=age, gender= gender, height= height, weight= weight, activity_level= activity_level)
        puts cal_data
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
        if params[:file]!="null"
            image = params[:file] 
            File.open(Rails.root.join('public', 'uploads', image.original_filename), 'wb') do |f|
                f.write(image.read)
            end
            data = imageSearch(image.original_filename)

            
        else
            data = food_cal(params[:query])
        end
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


    # def foodie
    #     # require 'net/http'       
    #     # image = params[:file] 
    #     # File.open(Rails.root.join('public', 'uploads', image.original_filename), 'wb') do |f|
    #     #     f.write(image.read)
    #     # end
    #     # img = 'C:/Users/asus/Desktop/Project/New folder/majorProject/backend/public/uploads/pizza_test.jpg'
    #     # puts File.exist?('C:/Users/asus/Desktop/Project/New folder/majorProject/backend/public/uploads/pizza_test.jpg')
    #     # File.open(img)
    #     # image = params[:image]
    # #     @image = Image.create(image: image)
    # # render json: @image
    #     require "net/https"
    #     require "uri"

    #     uri = URI.parse("https://api.logmeal.es/v2/recognition/dish")
    #     form = [["image", File.open("C://Users//asus//Desktop//Project//New folder//majorProject//backend//public//uploads//pizza_test.jpg")]]

    #     req = Net::HTTP::Post.new(uri)
    #     req["Authorization"] = "Bearer 85094a1e5159053693f063543eb3c1e30b690c15"
    #     req.set_form form, "multipart/form-data"

    #     res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    #         http.request(req)
    #     end
    #     if res.code == '200'
        
    #         data = JSON.parse(res.body)
    #         # food_d["model_versions"]["recognition_results"][0]["name"]
    #     end

    #     puts res.body
    #     puts data
    #     puts data["recognition_results"][0]["name"]
        
    # end


    # def checking 
    #     food_d = {"foodFamily":[{"id":10,"name":"bread","prob":0.56787109375}],"foodType":[{"id":1,"name":"food"},{"id":1,"name":"food"},{"id":1,"name":"food"},{"id":1,"name":"food"},{"id":1,"name":"food"},{"id":1,"name":"food"}],"imageId":1501283,"model_versions":{"foodType":"v1.0","foodgroups":"v0.7","foodrec":"v0.9","ingredients":"v0.8"},"occasion":"breakfast","recognition_results":[{"id":168,"name":"pizza","prob":0.7759509086608887,"subclasses":[{"id":2448,"name":"cheese pizza","prob":0.7759509086608887},{"id":2445,"name":"margherita pizza","prob":0.7759509086608887},{"id":2446,"name":"pepperoni pizza","prob":0.7759509086608887},{"id":2447,"name":"meat pizza","prob":0.7759509086608887},{"id":1530,"name":"focaccia ai pomodori","prob":0.0135955810546875}]},{"id":1530,"name":"focaccia ai pomodori","prob":0.012467041611671448,"subclasses":[{"id":168,"name":"pizza","prob":0.84619140625},{"id":2448,"name":"cheese pizza","prob":0.012467041611671448},{"id":2445,"name":"margherita pizza","prob":0.012467041611671448},{"id":2446,"name":"pepperoni pizza","prob":0.012467041611671448},{"id":2447,"name":"meat pizza","prob":0.012467041611671448}]},{"id":446,"name":"chorizo","prob":0.003115011379122734,"subclasses":[{"id":9,"name":"mortadella","prob":0.003115011379122734},{"id":2387,"name":"pastrami","prob":0.003115011379122734},{"id":2388,"name":"cecina","prob":0.003115011379122734},{"id":745,"name":"chistorra","prob":0.0003294944763183594},{"id":11,"name":"serrano ham","prob":0.0003044605255126953},{"id":635,"name":"longaniza","prob":0.00021183490753173828},{"id":391,"name":"charcuterie board","prob":0.00010889768600463867}]},{"id":895,"name":"quiche lorraine","prob":0.002808932214975357,"subclasses":[{"id":2549,"name":"vegetable quiche","prob":0.002808932214975357}]},{"id":1506,"name":"roulade","prob":0.001505034975707531,"subclasses":[{"id":2569,"name":"beef roulade","prob":0.001505034975707531},{"id":2570,"name":"chicken roulade","prob":0.001505034975707531}]},{"id":2105,"name":"bacon meat","prob":0.0012094499543309212,"subclasses":[{"id":390,"name":"grilled bacon","prob":0.00046324729919433594}]}]}

    #     food_d["model_versions"]["recognition_results"][0]["name"]

    # end
       

end
