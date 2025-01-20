const handleRegister = async () => {
    setLoading(true);
    setSuccessMessage(''); // Reset success message
  
    try {
      await axios.post('https://react-recipe-server.onrender.com/users', {
        username,
        email,
        password
      });
      
      setSuccessMessage('User registered successfully!');
      setOpenAuthDialog(false); 
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error registering user:', error);
      setSuccessMessage('Failed to register user.');
    } finally {
      setLoading(false);
    }
  };
  