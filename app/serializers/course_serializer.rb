class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructors, :price
end
