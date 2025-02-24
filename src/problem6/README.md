## Features: 
- Login / Register (authorization/authentication): Ensure only valid use can update scores.
- Show score board (top 10 user): Stores and retrieves the highest-scoring users.
- Secure score update: Prevents unauthorized score modifications.
- Performance: Optimized to handle request efficiently.

## Execution flow:
- User completed an action that increase point.
- The client sends a POST request to API (/api/score/update).
- The server authenticates that request.
- If authentication succeeds:
  - The server validates the request data.
  - The user's score is updated in the database.
- If the score update is valid, send response to client
- The scoreboard is updated the new value.

## Security:
- Authentication & Authorization:
  - Use JWT (JSON Web Token) or OAuth2 for authentication. 
  - Ensure only authenticated users can update scores. 
- Input Validation.
  - Verify user_id
  - Make sure the user's score is reasonable
- Rate Limiting:
  - Rate limit request per user.
- Log score update for monitoring .

## Improvement:
- Use web sockets for real-time scoreboard.
- Caching value 10 user’s scores (redis, filesystem, memcached...).