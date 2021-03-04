module WadaTest
  class ActionsController < ::ApplicationController
    requires_plugin WadaTest

    before_action :ensure_logged_in

    def index
      # render_json_dump({ actions: [] })
      logger.info "testes"
      render json: {message: "hello!"}
    end

    def show
      logger.info "testes"
      render_json_dump({ action: { id: params[:id] } })
    end
  end
end
