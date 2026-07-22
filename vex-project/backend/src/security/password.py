"""Secure password hashing utilities using hashlib/pbkdf2."""

import hashlib
import hmac
import os


def hash_password(password: str) -> str:
    """Hashes a password securely using PBKDF2 with SHA-256 and a random salt."""
    salt = os.urandom(16)
    key = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt, 100_000)
    return f"pbkdf2:sha256:100000${salt.hex()}${key.hex()}"


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies a plain-text password against a stored PBKDF2 hash string."""
    try:
        algorithm, hash_name, iterations_str, salt_hex, key_hex = hashed_password.split("$")
        if algorithm != "pbkdf2:sha256":
            return False
        iterations = int(iterations_str)
        salt = bytes.fromhex(salt_hex)
        expected_key = bytes.fromhex(key_hex)
        derived_key = hashlib.pbkdf2_hmac(hash_name, plain_password.encode("utf-8"), salt, iterations)
        return hmac.compare_digest(derived_key, expected_key)
    except (ValueError, AttributeError):
        return False
