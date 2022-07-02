import React from "react";
import Button from "@mui/material/Button";
import { Wrapper } from "./styles";

export function Product(props) {
  return (
    <Wrapper>
      <img src={props.item.image} alt={props.item.title} />
      <div>
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <h3>R${props.item.price}</h3>
      </div>
      <Button onClick={() => props.onPressAdd()}>Adicionar ao carrinho</Button>
    </Wrapper>
  );
}
