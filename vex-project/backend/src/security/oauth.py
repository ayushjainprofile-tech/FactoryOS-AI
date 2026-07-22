"""OAuth2 and Enterprise SSO integration abstraction layer."""

from typing import Any, Dict, Optional
from pydantic import BaseModel


class SSOUserInfo(BaseModel):
    """Normalized user info from external identity provider (OIDC/SAML/OAuth2)."""

    provider: str  # e.g., "google", "azure_ad", "okta"
    external_id: str
    email: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    tenant_id: Optional[str] = None


class OAuth2ProviderClient:
    """Pluggable OAuth2 / SSO Client interface."""

    def __init__(self, provider_name: str, client_id: str, client_secret: str, redirect_url: str):
        self.provider_name = provider_name
        self.client_id = client_id
        self.client_secret = client_secret
        self.redirect_url = redirect_url

    def get_authorization_url(self, state: str) -> str:
        """Constructs external IDP login authorization URL."""
        return f"https://auth.{self.provider_name}.com/oauth/authorize?client_id={self.client_id}&redirect_uri={self.redirect_url}&state={state}"

    async def exchange_code_for_user_info(self, code: str) -> SSOUserInfo:
        """Exchanges authorization code for verified external user identity."""
        # Simulated OAuth2 exchange payload
        return SSOUserInfo(
            provider=self.provider_name,
            external_id=f"{self.provider_name}_user_12345",
            email="sso_user@factoryos.com",
            first_name="SSO",
            last_name="User",
        )
