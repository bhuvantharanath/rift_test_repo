# src/utils.py
# Utility module for the backend API
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
import os # <--- LINE 15: LINTING ERROR (Unused import)

def get_system_status():
    """Returns the basic system status."""
    return {"status": "healthy", "uptime": 99.9}
