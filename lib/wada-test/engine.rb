module WadaTest
  class Engine < ::Rails::Engine
    engine_name "WadaTest".freeze
    isolate_namespace WadaTest

    config.after_initialize do
      Discourse::Application.routes.append do
        mount ::WadaTest::Engine, at: "/wada-test"
      end
    end
  end
end
