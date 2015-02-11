class IndexController < ApplicationController
  def index
  end
  
  def create_user
    @user = User.create(user_params)
    
    respond_to do |format|
      format.json { render json: {return_text: @user.full_name}.to_json }
    end
  end

  private
  def user_params
    params.require(:user).permit(:fname, :mname, :lname)
  end
end
