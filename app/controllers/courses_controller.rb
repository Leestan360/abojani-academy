class CoursesController < ApplicationController

  skip_before_action :authorize, only: :create

  def index
    courses = Course.all
    render json: courses, status: :ok
  end

  def show
    course = find_course_by_id
    render json: course, status: :ok
  end

  def create
    course = Course.create!(course_params)
    render json: course, status: :created
  end

  def destroy
    course = find_course_by_id
    course.destroy
    head :no_content
  end

  private

  def course_params
    params.permit(:image_url, :title, :instructors, :price)
  end

  def find_course_by_id
    Course.find(params[:id])
  end

end