from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.tokens import PasswordResetTokenGenerator
import six

class AccountActivationTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, admin, timestamp):
        return (
            six.text_type(admin.pk) + six.text_type(timestamp) + six.text_type(admin.is_active)
        )