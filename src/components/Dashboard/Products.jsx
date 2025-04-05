"use client";

import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Grid, 
  List, 
  Plus, 
  Search, 
  Edit, 
  Trash, 
  Package, 
  Image as ImageIcon,
  DollarSign,
  Percent,
  Box
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useMediaQuery } from "@/hooks/use-media-query";

// Sample product data
const sampleProducts = [
  {
    id: "PRD-1001",
    name: "Premium Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    stock: 45,
    discount: 10,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "PRD-1002",
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 299.99,
    stock: 30,
    discount: 0,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "PRD-1003",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse for comfortable use",
    price: 49.99,
    stock: 100,
    discount: 5,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "PRD-1004",
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with customizable switches",
    price: 129.99,
    stock: 25,
    discount: 15,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "PRD-1005",
    name: "4K Monitor",
    description: "27-inch 4K monitor with HDR support",
    price: 399.99,
    stock: 15,
    discount: 0,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

// Product form component
const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState(product || {
    id: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    discount: 0,
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price ($)</Label>
          <Input
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="stock">Stock</Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="discount">Discount (%)</Label>
          <Input
            id="discount"
            name="discount"
            type="number"
            min="0"
            max="100"
            value={formData.discount}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="featured" />
        <Label htmlFor="featured">Featured Product</Label>
      </div>
      
      <SheetFooter className="pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {product ? "Update Product" : "Add Product"}
        </Button>
      </SheetFooter>
    </form>
  );
};

export default function Products() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [products, setProducts] = useState(sampleProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const side = isMobile ? "bottom" : "right";


  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle product save
  const handleSaveProduct = (productData) => {
    if (selectedProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === selectedProduct.id ? { ...productData, id: p.id } : p
      ));
    } else {
      // Add new product
      const newId = `PRD-${1000 + products.length + 1}`;
      setProducts([...products, { ...productData, id: newId }]);
    }
    setIsDrawerOpen(false);
    setSelectedProduct(null);
  };

  // Handle product delete
  const handleDeleteProduct = (productId) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  // Open drawer for adding/editing product
  const openProductDrawer = (product = null) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen} side={side} >
            <SheetTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 " />
               <span className="hidden sm:block">Add Product</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md" side={side}>
              <SheetHeader>
                <SheetTitle>{selectedProduct ? "Edit Product" : "Add New Product"}</SheetTitle>
                <SheetDescription>
                  {selectedProduct 
                    ? "Update the product details below." 
                    : "Fill in the details to add a new product."}
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <ProductForm 
                  product={selectedProduct} 
                  onSave={handleSaveProduct} 
                  onCancel={() => setIsDrawerOpen(false)} 
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <Tabs value={viewMode} onValueChange={setViewMode}>
          <TabsList>
            <TabsTrigger value="grid">
              <Grid className="h-4 w-4 mr-2" />
              Grid
            </TabsTrigger>
            <TabsTrigger value="list">
              <List className="h-4 w-4 mr-2" />
              List
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 bg-background/80 backdrop-blur-sm"
                    onClick={() => openProductDrawer(product)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-bold">{product.price.toFixed(2)}</span>
                  </div>
                  {product.discount > 0 && (
                    <Badge variant="destructive">
                      <Percent className="h-3 w-3 mr-1" />
                      {product.discount}% OFF
                    </Badge>
                  )}
                </div>
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Box className="h-4 w-4 mr-1" />
                  <span>{product.stock} in stock</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Badge variant="outline">{product.category}</Badge>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Product List</CardTitle>
            <CardDescription>Manage your product inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-md overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1">
                            {product.description}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      {product.discount > 0 ? (
                        <Badge variant="destructive">{product.discount}% OFF</Badge>
                      ) : (
                        <span className="text-muted-foreground">No discount</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => openProductDrawer(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 