# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Seeding the database...'
Course.create!(title: "Real Estate Masterclass", instructors: "James Omwami, Ivy Muthoni", image_url: "https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_1150-17809.jpg?size=626&ext=jpg&uid=R49278779&ga=GA1.2.1858690084.1658745301", price: 100000 )
Course.create!(title: "Financial Analysis", instructors: "Christine Njeri, Paul Gadot", image_url: "https://img.freepik.com/free-photo/close-up-business-items_1098-1988.jpg?w=900&t=st=1665643019~exp=1665643619~hmac=829e8a563060523e5ff0d6712483d7dd41f4f2bf7a6f75457b5031782a8fa003", price: 79000 )
Course.create!(title: "Investing Masterclass", instructors: "Ezekiel Mbuvi, Mary Anne", image_url: "https://img.freepik.com/free-photo/coin-wooden-table-blurred-nature_1150-17703.jpg?size=626&ext=jpg&uid=R49278779&ga=GA1.2.1858690084.1658745301", price: 20000 )
Course.create!(title: "Personal Finance Masterclass", instructors: "James Omwami, Paul Gadot", image_url: "https://img.freepik.com/free-photo/account-assets-audit-bank-bookkeeping-finance-concept_53876-132605.jpg?t=st=1665643187~exp=1665643787~hmac=f5aa63333b0f661488e4c9e1e21919498c5a2fcedfc3e3be2beb06afef0ef088", price: 40000 )


Course.create!(title: "Internal Audit", instructors: "James Omwami, Ivy Muthoni", image_url: "https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-128.jpg?size=626&ext=jpg", price: 10000 )
Course.create!(title: "Stock Market Analysis", instructors: "Christine Njeri, Paul Gadot", image_url: "https://img.freepik.com/free-vector/stock-market-analysis-concept_52683-40756.jpg?size=626&ext=jpg", price: 7000 )
Course.create!(title: "Accounting Masterclass", instructors: "Ezekiel Mbuvi, Mary Anne", image_url: "https://img.freepik.com/premium-photo/close-up-businessman-is-analyzing-data-office_33799-4480.jpg?size=626&ext=jpg", price: 2000 )
Course.create!(title: "Project Management", instructors: "James Omwami, Paul Gadot", image_url: "https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?size=626&ext=jpg", price: 4000 )


Course.create!(title: "Tax Masterclass", instructors: "James Omwami, Ivy Muthoni", image_url: "https://img.freepik.com/free-vector/finance-leaders-concept-illustration_114360-7413.jpg?size=338&ext=jpg", price: 10000 )
Course.create!(title: "Business Consulting", instructors: "Christine Njeri, Paul Gadot", image_url: "https://img.freepik.com/free-photo/workplace-results-professional-report-accounting-during_1418-61.jpg?size=626&ext=jpg", price: 7000 )
Course.create!(title: "Finacial Accounting Masterclass", instructors: "Ezekiel Mbuvi, Mary Anne", image_url: "https://img.freepik.com/free-photo/business-office-scene_1387-14.jpg?size=626&ext=jpg", price: 2000 )
Course.create!(title: "Budget Planning Masterclass", instructors: "James Omwami, Paul Gadot", image_url: "https://img.freepik.com/free-photo/finance-money-debt-credit-balance-concept_53876-133849.jpg?size=626&ext=jpg", price: 4000 )


Course.create!(title: "Financial  Masterclass", instructors: "James Omwami, Ivy Muthoni", image_url: "https://img.freepik.com/free-photo/graph-plan-growing-strategy-marketing-business-finance-concept-pink-background-3d-rendering_56104-1435.jpg?size=626&ext=jpg", price: 10000 )
Course.create!(title: "Financial Market", instructors: "Christine Njeri, Paul Gadot", image_url: "https://img.freepik.com/premium-photo/businessman-holding-tablet-showing-holographic-graphs-stock-market-statistics-gain-profits_79161-706.jpg?size=626&ext=jpg", price: 7000 )
Course.create!(title: "Project Planning Masterclass", instructors: "Ezekiel Mbuvi, Mary Anne", image_url: "https://img.freepik.com/premium-photo/businessman-drawing-increases-graph-virtual-screen_9083-2285.jpg?size=626&ext=jpg", price: 2000 )
Course.create!(title: "Forex management Masterclass", instructors: "James Omwami, Paul Gadot", image_url: "hhttps://img.freepik.com/premium-photo/stock-market-forex-trading-graph-graphic-concept-suitable-financial-investment-economic-trends-business-idea-all-art-work-design-abstract-finance-background_73426-181.jpg?size=626&ext=jpg", price: 4000 )

Course.create!(title: "Valuation", instructors: "Chris Ugwe, Odenigbo Ojukwu", price: 44577, image_url: "https://img.freepik.com/free-photo/business-people-discussing-results-successful-teamwork_1421-95.jpg?size=626&ext=jpg" )
Course.create!(title: "Stategic Investment Management", instructors: "Akinyi Otieno, Marion Mwendwa", price: 64300, image_url: "shorturl.at/pIJ18")
Course.create!(title: "Mergers and acquisitions", instructors: "James Katana, Higson Leigh", price: 54000 , image_url: "shorturl.at/lmNS3")
Course.create!(title: "Entrepreneurial Business", instructors: "Amani Obare, Keith Lusivi", price: 39000 , image_url: "https://as2.ftcdn.net/v2/jpg/01/58/03/71/1000_F_158037191_kZGQXudKVFk96VlOtndJCmCxNlGWX288.jpg")
Course.create!(title: "Green Finance", instructors: "Okiki Amayo, Tor Vagen", price: 71000 , image_url: "https://as2.ftcdn.net/v2/jpg/02/80/41/05/1000_F_280410548_EQxZNCz1TwO32BuSsNbzJNfLnfpyDTMH.jpg")


puts 'Seeding done!'
