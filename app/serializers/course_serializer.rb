class CourseSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title, :instructors, :price
end
