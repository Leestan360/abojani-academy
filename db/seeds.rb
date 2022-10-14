# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding the database...'
Course.create!(title: "Real Estate Masterclass", instructors: "James Omwami, Ivy Muthoni",, price: 100000, image_url: "https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_1150-17809.jpg?size=626&ext=jpg&uid=R49278779&ga=GA1.2.1858690084.1658745301" )
Course.create!(title: "Financial Analysis", instructors: "Christine Njeri, Paul Gadot" , price: 79000, image_url: "https://img.freepik.com/free-photo/close-up-business-items_1098-1988.jpg?w=900&t=st=1665643019~exp=1665643619~hmac=829e8a563060523e5ff0d6712483d7dd41f4f2bf7a6f75457b5031782a8fa003" )
Course.create!(title: "Investing Masterclass", instructors: "Ezekiel Mbuvi, Mary Anne", price: 20000, image_url: "https://img.freepik.com/free-photo/coin-wooden-table-blurred-nature_1150-17703.jpg?size=626&ext=jpg&uid=R49278779&ga=GA1.2.1858690084.1658745301" )
Course.create!(title: "Personal Finance Masterclass", instructors: "James Omwami, Paul Gadot",price: 40000, image_url: "https://img.freepik.com/free-photo/account-assets-audit-bank-bookkeeping-finance-concept_53876-132605.jpg?t=st=1665643187~exp=1665643787~hmac=f5aa63333b0f661488e4c9e1e21919498c5a2fcedfc3e3be2beb06afef0ef088" )

Course.create!(title: "Valuation", instructors: "Chris Ugwe, Odenigbo Ojukwu", price: 44577, image_url: "https://img.freepik.com/free-photo/business-people-discussing-results-successful-teamwork_1421-95.jpg?size=626&ext=jpg" )
Course.create!(title: "Stategic Investment Management", instructors: "Akinyi Otieno, Marion Mwendwa", price: 64300, image_url: "https://img.freepik.com/free-photo/modern-business-buildings-financial-district_1359-346.jpg?w=1380&t=st=1665676418~exp=1665677018~hmac=199a88ad8ec128b7e486a6af38cb1f2a409dc7c0ad5afdf51de938fe8da61144")
Course.create!(title: "Mergers and acquisitions", instructors: "James Katana, Higson Leigh", price: 54000 , image_url: "https://img.freepik.com/free-photo/group-business-people-analysis-with-marketing-report-graph-young-specialists-are-discussing-business-ideas-new-digital-start-up-project_1150-1819.jpg?w=1380&t=st=1665677482~exp=1665678082~hmac=fdb67c1bbcb69032c565a7970daad1fc7d4e2359bcc70d4257d0aa4e98a81b2d")
Course.create!(title: "Entrepreneurial Business", instructors: "Amani Obare, Keith Lusivi", price: 39000 , image_url: "https://as2.ftcdn.net/v2/jpg/01/58/03/71/1000_F_158037191_kZGQXudKVFk96VlOtndJCmCxNlGWX288.jpg")
Course.create!(title: "Green Finance", instructors: "Okiki Amayo, Tor Vagen", price: 71000 , image_url: "https://as2.ftcdn.net/v2/jpg/02/80/41/05/1000_F_280410548_EQxZNCz1TwO32BuSsNbzJNfLnfpyDTMH.jpg")


puts 'Seeding done!'
