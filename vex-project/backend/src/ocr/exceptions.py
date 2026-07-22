"""OCR Exceptions hierarchy."""


class OCRError(Exception):
    """Base exception for all OCR operations."""

    pass


class EngineUnavailableError(OCRError):
    """Raised when a requested OCR engine is not installed or configured."""

    pass


class RemoteVisionDisabledError(OCRError):
    """Raised when remote vision processing is requested but disabled by policy."""

    pass


class LowConfidenceError(OCRError):
    """Raised when OCR extraction falls below acceptable threshold across engines."""

    pass
