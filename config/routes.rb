require_dependency "wada_test_constraint"

WadaTest::Engine.routes.draw do
  get "/" => "wada_test#index", constraints: WadaTestConstraint.new
  get "/cat" => "cat#index", constraints: WadaTestConstraint.new
  get "/cat/:id" => "cat#index", constraints: WadaTestConstraint.new
  get "/actions" => "actions#index", constraints: WadaTestConstraint.new
  get "/actions/:id" => "actions#show", constraints: WadaTestConstraint.new
  get '/hoge' => 'wada_test#hoge', constraints: WadaTestConstraint.new
  get '/name' => 'wada_test#index', constraints: WadaTestConstraint.new
  put '/update_username' => 'cat#update_username', constraints: WadaTestConstraint.new
end
