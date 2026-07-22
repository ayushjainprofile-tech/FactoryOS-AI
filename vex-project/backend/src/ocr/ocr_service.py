"""OCR Service dispatcher for all supported file types backed by OCRRouter."""

import asyncio
from typing import Any, Dict, Optional
from src.ocr.ocr_router import OCRRouter


class OCRService:
    """Dispatches file extraction based on file format via the multi-engine OCRRouter."""

    def __init__(self, router: Optional[OCRRouter] = None) -> None:
        self.router = router or OCRRouter()

    def process_document(
        self,
        file_bytes: bytes,
        filename: str,
        options: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """Synchronous wrapper for processing documents through the OCR router."""
        try:
            loop = asyncio.get_event_loop()
        except RuntimeError:
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)

        if loop.is_running():
            # In an already running event loop, create task or execute router directly
            import nest_asyncio  # fallback if needed or run async directly
            result = asyncio.run_coroutine_threadsafe(
                self.router.route_and_process(file_bytes, filename, options), loop
            ).result(timeout=10)
        else:
            result = loop.run_until_complete(
                self.router.route_and_process(file_bytes, filename, options)
            )

        return {
            "text": result.text,
            "ocr_used": result.ocr_needed,
            "confidence": result.confidence,
            "pages": len(result.pages),
            "metadata": {
                **result.metadata,
                "engine_used": result.engine_used,
                "remote_vision_used": result.remote_vision_used,
            },
        }

    async def process_document_async(
        self,
        file_bytes: bytes,
        filename: str,
        options: Optional[Dict[str, Any]] = None,
    ) -> Dict[str, Any]:
        """Asynchronous document extraction via OCR router."""
        result = await self.router.route_and_process(file_bytes, filename, options)
        return {
            "text": result.text,
            "ocr_used": result.ocr_needed,
            "confidence": result.confidence,
            "pages": len(result.pages),
            "metadata": {
                **result.metadata,
                "engine_used": result.engine_used,
                "remote_vision_used": result.remote_vision_used,
            },
        }
