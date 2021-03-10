# frozen_string_literal: true

# name: WadaTest
# about: test
# version: 0.1
# authors: hitokun-s
# url: https://github.com/hitokun-s

register_asset 'stylesheets/common/wada-test.scss'
register_asset 'stylesheets/desktop/wada-test.scss', :desktop
register_asset 'stylesheets/mobile/wada-test.scss', :mobile

enabled_site_setting :wada_test_enabled

PLUGIN_NAME ||= 'WadaTest'

load File.expand_path('lib/wada-test/engine.rb', __dir__)

after_initialize do
  # https://github.com/discourse/discourse/blob/master/lib/plugin/instance.rb

  module PrependMethods2
    def post_approved(user, opts)
      notification_email(user, opts)
    end
  end
  UserNotifications.prepend PrependMethods2

  class NotificationEmailer::EmailUser
    def post_approved
      enqueue :post_approved
    end
  end

  class Jobs::UserEmail
    module PrependMethods
      def always_email_regular?(user, type)
        return true
        # type.to_s != "user_private_message" && user.user_option.email_level == UserOption.email_level_types[:always]
      end
    end
    prepend PrependMethods
  end
end
