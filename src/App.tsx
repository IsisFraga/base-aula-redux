import React, { useEffect, useCallback, useState } from "react";
import { Wrapper, StyledButton, SidebarButtonBox } from "./App.styles";
import Badge from "@mui/material/Badge";
import AddShoppingCartRounded from "@mui/icons-material/AddShoppingCartRounded";
import Drawer from "@mui/material/Drawer";
import { useUi } from "./contexts/UI";
import { Grid, Skeleton } from "@mui/material";
import { useProducts } from "./contexts/Products";
import { Product } from "./components/Product";
import { useDispatch } from "react-redux";

function App() {
  // const [cartOpen, setCartOpen] = useState(false);
  const { isSidebarOpen, setIsSidebarOpen, isLoading, setIsLoading } = useUi();
  const { listOfProducts, getProducts } = useProducts();
  const dispatch = useDispatch();

  function openSidebar() {
    // setCartOpen(true);
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    // setCartOpen(false);
    setIsSidebarOpen(false);
  }

  useEffect(() => {
    // alert("vou carregar os produtos!");
    startGetProducts();
  }, []);

  const startGetProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      await getProducts();
    } catch (e) {
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleAddProduct = (product) => {
    dispatchEvent(addProduct(product));
  };

  return (
    <Wrapper>
      {/* <Drawer anchor="right" open={cartOpen} onClose={closeSidebar}> */}
      <Drawer anchor="right" open={isSidebarOpen} onClose={closeSidebar}>
        Estou aberta!
      </Drawer>
      <SidebarButtonBox>
        <StyledButton onClick={openSidebar}>
          <Badge>
            <AddShoppingCartRounded />
          </Badge>
        </StyledButton>
      </SidebarButtonBox>
      {/* {isLoading && <div>estou carregando!</div>} */}
      {isLoading && (
        <Grid container spacing={3}>
          {[...Array(10).keys()].map((item, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={118} />{" "}
            </Grid>
          ))}
        </Grid>
      )}
      {
        <Grid container spacing={3}>
          {listOfProducts?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Product item={item} onPressAdd={() => handleAddProduct(item)} />
            </Grid>
          ))}
        </Grid>
      }
      {/* {listOfProducts.length > 0 && <div>lista de produtos disponível!</div>} */}
      {/* [...Array(10).keys()].map((item) => <p>bloco em loading</p>)} */}
    </Wrapper>
  );
}

export default App;
