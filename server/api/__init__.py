# filepath: fastapi-multichannel-chat-backend/app/api/__init__.py

from fastapi import APIRouter

router = APIRouter()

from . import whatsapp, instagram, facebook, users

# Include the routers from each integration
router.include_router(whatsapp.router, prefix="/whatsapp", tags=["whatsapp"])
router.include_router(instagram.router, prefix="/instagram", tags=["instagram"])
router.include_router(facebook.router, prefix="/facebook", tags=["facebook"])
router.include_router(users.router, prefix="/users", tags=["users"])