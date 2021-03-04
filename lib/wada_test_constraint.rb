class WadaTestConstraint
  def matches?(request)
    SiteSetting.wada_test_enabled
  end
end
