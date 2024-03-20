import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { format } from 'date-fns';
import { getAuth , onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, child, push, get } from 'firebase/database';

const ProductTable = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    batchNumber: '',
    manufactureDate: '',
    expiryDate: ''
  });

  const [products, setProducts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userId = user.uid;
        const db = getDatabase();
        const productsRef = ref(db, `products/${userId}`);

        try {
          const snapshot = await get(productsRef);
          if (snapshot.exists()) {
            const productsData = snapshot.val();
            const productsArray = Object.values(productsData);
            setProducts(productsArray);
          } else {
            console.log('No data available');
            setProducts([]);
          }
        } catch (error) {
          console.error('Error fetching products:', error);
          setProducts([]);
        }
      }
    });
  }, []);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddProduct = () => {
    const auth = getAuth();
    const userId = auth.currentUser.uid;
    const db = getDatabase();
    const productsRef = ref(db, `products/${userId}`);
    push(productsRef, newProduct);
    setProducts([...products, newProduct]);
    handleClose();
  };

  const getDaysLeft = (expiryDate) => {

    if (!expiryDate || isNaN(expiryDate)) {
        return 'N/A'; // or any default value you prefer
    }

    const currentDate = new Date();
    const diffInMs = expiryDate - currentDate;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays <= 0) {
      return 0;
    }
    return diffInDays;
  };

  // Filter products based on search input
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ width: '70%', margin: 'auto', marginTop: 20 }}>
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
        Product Inventory
      </Typography>
      <Button variant="outlined" color="primary" onClick={handleOpen} style={{ marginBottom: 20 }}>
        Add Product
      </Button>
      <br />
      <TextField
        label="Search by Product Name"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Batch Number</TableCell>
              <TableCell>Manufacture Date</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Days Left for Expiry</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.batchNumber}</TableCell>
                <TableCell>{format(product.manufactureDate, 'MM/dd/yyyy')}</TableCell>
                <TableCell>{format(product.expiryDate, 'MM/dd/yyyy')}</TableCell>
                <TableCell>{getDaysLeft(product.expiryDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            name="productName"
            label="Product Name"
            variant="outlined"
            fullWidth
            value={newProduct.productName}
            onChange={handleInputChange}
            style={{ marginBottom: 20 }}
          />
          <TextField
            name="batchNumber"
            label="Batch Number"
            variant="outlined"
            fullWidth
            value={newProduct.batchNumber}
            onChange={handleInputChange}
            style={{ marginBottom: 20 }}
          />
          <TextField
            name="manufactureDate"
            label="Manufacture Date"
            variant="outlined"
            type="date"
            fullWidth
            value={newProduct.manufactureDate}
            onChange={handleInputChange}
            style={{ marginBottom: 20 }}
          />
          <TextField
            name="expiryDate"
            label="Expiry Date"
            variant="outlined"
            type="date"
            fullWidth
            value={newProduct.expiryDate}
            onChange={handleInputChange}
            style={{ marginBottom: 20 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddProduct} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductTable;
