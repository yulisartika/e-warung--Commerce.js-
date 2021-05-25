import React from 'react'
import { Grid } from "@material-ui/core"

import Product from './Product'
import useStyles from "./styles"

const products = [
    { id: 1, name: "Shoes", description: "Running shoes", price: "$10", image: "https://www.kicksonfire.com/wp-content/uploads/2020/09/Nike-Air-Zoom-Tempo-NEXT-FlyEase-2.jpg"},
    { id: 2, name: "Laptop", description: "Apple macbook", price: "$19", image: "https://exacoat.com/wp-content/uploads/2019/01/Macbook-Pro-Chameleon.png"}
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4} >
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products