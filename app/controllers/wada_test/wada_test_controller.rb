module WadaTest
  class WadaTestController < ::ApplicationController
  # class WadaTestController < ListController
  #   include ReverseProxy::Controller
    requires_plugin WadaTest

    # before_action :ensure_logged_in
    #
    # before_action(only: [:hoge]) { set_category }

    # not called!
    def index
      logger.info "testes"
    end

    def hoge
      logger.info "----"
      logger.info current_user
      logger.info request.original_url


      # @category = Category.find_by(id: 5)
      # logger.info @category
      # render_serialized(@category, CategorySerializer)
      # return
      #
      # redirect_to controller: :categories, action: :show, id: 5 and return
      # redirect_to path("/c/5-category/5") and return
      #

      # controller_you_want = ListController.new
      # controller_you_want.request = request
      # controller_you_want.response = response
      # controller_you_want.top(category: 5) and return

      # params.permit(:category_slug_path_with_id)
      # params[:category_slug_path_with_id] = "5-category"
      # public_method(:top).super_method.call(category: 5) and return
      #
      # reverse_proxy "http://localhost:3000", path: "/categories", verify_ssl: false
      # reverse_proxy "http://www.yahoo.co.jp", verify_ssl: true
      # return


      if current_user.nil?

        logger.info("---3")

        #  sso
        secret = "12345abcde"

        # destination_url = cookies[:destination_url] || session[:destination_url]
        # logger.info request.request_uri

        sso = DiscourseSingleSignOn.generate_sso(request.original_url)

        # sso = SingleSignOn.parse(request.query_string, secret)
        sso.email = "jgpuauno@gmail.com"
        sso.name = "admin"
        sso.username = "admin"
        sso.external_id = "123"
        sso.sso_secret = secret

        logger.info("---------2")

        redirect_to sso.to_url(Discourse.base_url + "/session/sso_login")
        return
      end

      detail = []

      params[:catId] = 5
      if params[:catId] then

        cat = Category.find(params[:catId])

        # logger.info Topic.find(params[:topicId])
        topics = Topic.where(category_id: params[:catId])
        topics.each do |topic|
          comments = Post.where(topic_id: topic.id).map { |x| {user_id: x.user_id, val: x.raw} }
          detail.push({
            user_id: topic.user_id,
            title: topic.title,
            val: topic.excerpt,
            comments: comments
                      })
        end
      end

      res = {cat: cat.name, topics:detail}

      # render json: {topics: topics}
      render json: JSON.pretty_generate(res.as_json())
    end
  end
end
