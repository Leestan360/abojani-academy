class Course < ApplicationRecord

  validates :image_url, presence: true
  validates :title, presence: true
  validates :instructors, presence: true
  validates :price, presence: true, numericality: { only_integer: true }

end
