import React, { useEffect, useState } from "react";
import upperFirstLetter from "../../../utils/UpperFirstLetter";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';

interface Product {
    id: number,
    name: string,
    weight: number,
    energy: number,
    proteins: number,
    carbohydrates: number,
    fats: number,
    fiber: number
  }
  

type DietMealProductToPDFProps = {
    product_id: number;
    product_weight: number | null;
}

const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 35,
      fontFamily: "Roboto"
    },
    section: {
      margin: 10,
      padding: 10,
      flexDirection: 'column',
      borderBottom: '1px solid #333333',
    },
    text: {
      flexDirection: 'row',
      fontSize: 14,
      color: '#000000',
      marginBottom: 10,
    },
  });

const DietMealProductToPDF = ({product_id, product_weight}: DietMealProductToPDFProps) => {

    const [product, setProduct] = useState<Product>();

    const fetchProduct = async () =>{
        const response = await fetch(`http://localhost:8000/api/products/getbyid?product_id=${product_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            const content = await response.json();
            setProduct(content);
        }
    }

    useEffect( ()=>{
        fetchProduct();
    },[])

    return(
        <Text style={styles.text}>
            <Text style={styles.text}>{upperFirstLetter(product?.name)}</Text>
            <Text style={styles.text}> - </Text>
            <Text style={styles.text}>{product_weight}g</Text>
        </Text>
    )
    
}

export default DietMealProductToPDF;