const handleRegister = async () => {
    setLoading(true);
    setSuccessMessage(''); // Reset success message
  
    try {
      await axios.post('http://localhost:5001/users', {
        username,
        email,
        password
      });
      
      setSuccessMessage('User registered successfully!');
      setOpenAuthDialog(false); // Close auth dialog
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
  