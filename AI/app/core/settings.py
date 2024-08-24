from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    cors_origins: list[str]
    
    class Config:
        env_file = ".env"
        extra = "forbid"

    
    @classmethod
    def validate_cors_origins(cls, value):
        if isinstance(value, str):
            return value.split(",")
        return value
        
settings = Settings()