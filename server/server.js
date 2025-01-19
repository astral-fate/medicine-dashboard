// server.js
app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.1.14:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
  
  // Add error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
  });