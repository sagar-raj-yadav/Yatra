


const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access Denied. No Token Provided.' });
  
    try {
      const verified = jwt.verify(token, 'your_jwt_secret');
      req.user = verified;  // Attaching the verified user to the request object
      next();  // Pass control to the next middleware or route
    } catch (err) {
      res.status(400).json({ message: 'Invalid Token' });
    }
  };

  export default authMiddleware;