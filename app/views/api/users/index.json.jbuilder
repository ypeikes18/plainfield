@users.each do |user|
    json.set! user.id do 
        json.extract! user, :email, :name, :created_at
    end
end