# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Load all seed files from db/seeds directory
Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each do |seed_file|
  puts "Loading seed file: #{seed_file}"
  load seed_file
end

# Create testimonials based on the example website
testimonials_data = [
  {
    name: "Aftab",
    age: 36,
    location: "Assam",
    content: "I was on heavy type 2 diabetes medication for 4 years, around 4 pills a day. Even the best medicine for type 2 diabetes didn't work. Then a friend who had diabetes told me about Breathe Well-being and since then, my health has only improved. I no longer have to take diabetes medication. Not a single pill! It's an amazing, easy to follow program. Highly recommended!",
    hba1c_before: 9.2,
    hba1c_after: 5.8,
    weight_lost: 8.5,
    program_duration: 6,
    featured: true
  },
  {
    name: "Atanu Majumder",
    age: 48,
    location: "Kolkata",
    content: "When I was diagnosed with type 2 diabetes, I was told that my eating habits were the cause. But I just couldn't resist good food. So Breathe Well-being helped me replace my favorite meals with healthier ones that tasted equally delicious. And it was the perfect solution! My blood sugar levels started dropping and now I don't need any diabetes medication.",
    hba1c_before: 8.7,
    hba1c_after: 5.4,
    weight_lost: 12.0,
    program_duration: 8,
    featured: true
  },
  {
    name: "Deepa Nair",
    age: 50,
    location: "Mumbai",
    content: "I am so much more active and fit than I ever was. Before joining Breathe's program, I had hbA1c levels of more than 9.4 and nothing seemed to work. But within just 8 months, my health has taken a remarkable turn. I achieved hba1c normal range - 5.2 in just 7 months and I lost 12 kgs too!",
    hba1c_before: 9.4,
    hba1c_after: 5.2,
    weight_lost: 12.0,
    program_duration: 7,
    featured: true
  },
  {
    name: "Shweta Bansal",
    age: 45,
    location: "Ludhiana",
    content: "I didn't believe that type 2 diabetes can be reversed naturally, but Breathe Well-being changed my thinking. They found my type 2 diabetes causes, suggested little diet & lifestyle changes and it worked wonders! Now I have hbA1c normal range and there are no type 2 diabetes symptoms.",
    hba1c_before: 8.9,
    hba1c_after: 5.6,
    weight_lost: 9.5,
    program_duration: 12,
    featured: true
  },
  {
    name: "Nihar Ranjan Kalita",
    age: 48,
    location: "Guwahati",
    content: "I had high blood sugar levels for 3 years. They didn't go down below 210 mg/dL even after trying everything. Luckily, I found out about Breathe Well-being's diabetes reversal program. Within 6 months only, my blood sugar levels dropped to 110-120 mg/dL. And now, I don't have diabetes anymore.",
    hba1c_before: 10.1,
    hba1c_after: 5.9,
    weight_lost: 15.0,
    program_duration: 6,
    featured: true
  }
]

testimonials_data.each do |testimonial_attrs|
  Testimonial.find_or_create_by!(name: testimonial_attrs[:name]) do |testimonial|
    testimonial.assign_attributes(testimonial_attrs)
  end
end

# Create diabetes reversal programs
programs_data = [
  {
    title: "Diabetes Reversal Program",
    description: "India's Best Type 2 Diabetes Reversal Program - Clinically proven program to Control Blood Sugar and HbA1c Levels Naturally.",
    features: "Personalized Diet & Fitness Plans|Dedicated Health Coaches|The Best Diabetes Doctors|Continuous Glucose Monitoring|Track Your Progress Anytime|Face Based Vitals",
    price: 15000.00,
    duration: 6,
    program_type: :comprehensive,
    active: true
  },
  {
    title: "Basic Diabetes Management",
    description: "Essential diabetes management program for beginners looking to understand and control their condition.",
    features: "Basic Diet Guidelines|Weekly Check-ins|Educational Resources|Blood Sugar Tracking",
    price: 8000.00,
    duration: 3,
    program_type: :basic,
    active: true
  },
  {
    title: "Premium Diabetes Reversal",
    description: "Advanced program with 24/7 support and personalized coaching for complete diabetes reversal.",
    features: "24/7 Health Coach Support|Advanced CGM Monitoring|Personalized Meal Plans|Exercise Coaching|Stress Management|Sleep Optimization",
    price: 25000.00,
    duration: 12,
    program_type: :premium,
    active: true
  }
]

programs_data.each do |program_attrs|
  Program.find_or_create_by!(title: program_attrs[:title]) do |program|
    program.assign_attributes(program_attrs)
  end
end

puts "Seeded #{Testimonial.count} testimonials and #{Program.count} programs"
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
