class FooController < ApplicationController
  def index
    render :inline => '<p>Hello, World!</p>', :layout => true
  end
end
