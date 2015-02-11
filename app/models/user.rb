class User < ActiveRecord::Base

  def full_name
    "#{self.fname}#{self.mname.present? ? ' '+ self.mname : ''} #{self.lname}"
  end
end
