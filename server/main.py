from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import whatsapp, instagram, facebook, users

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(whatsapp.router, prefix="/whatsapp", tags=["WhatsApp"])
app.include_router(instagram.router, prefix="/instagram", tags=["Instagram"])
app.include_router(facebook.router, prefix="/facebook", tags=["Facebook"])
app.include_router(users.router, prefix="/users", tags=["Users"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the Multi-Channel Chat API"}