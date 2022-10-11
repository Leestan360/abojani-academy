class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :instructors
      t.integer :price

      t.timestamps
    end
  end
end
