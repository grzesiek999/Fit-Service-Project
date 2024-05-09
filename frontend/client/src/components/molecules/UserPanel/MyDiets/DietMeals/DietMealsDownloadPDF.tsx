import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import DietMealProductToPDF from '../../../../atoms/DietMealProduct/DietMealProductToPDF';
import upperFirstLetter from '../../../../../utils/UpperFirstLetter';

interface DietMeal {
  id: number, 
  diet_id: number, 
  meal: number, 
  name: string, 
  describe: string, 
  product1_weight: number | null, 
  product1_id: number | null,
  product2_weight: number | null, 
  product2_id: number | null,
  product3_weight: number | null, 
  product3_id: number | null,
  product4_weight: number| null, 
  product4_id: number | null,
  product5_weight: number | null, 
  product5_id: number | null,
  product6_weight: number | null, 
  product6_id: number | null,
  product7_weight: number | null, 
  product7_id: number | null,
  product8_weight: number | null, 
  product8_id: number | null,
  product9_weight: number | null, 
  product9_id: number | null,
  product10_weight: number | null, 
  product10_id: number | null,
  product11_weight: number | null, 
  product11_id: number | null,
  product12_weight: number | null, 
  product12_id: number | null
}

type DietMealsDownloadPDFProps = {
  firstMeal: DietMeal[]; 
  secondMeal: DietMeal[]; 
  thirdMeal: DietMeal[]; 
  fourthMeal: DietMeal[]; 
  fifthMeal: DietMeal[];
  sixthMeal: DietMeal[]
}

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});

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


const DietMealsDownloadPDF = ({firstMeal, secondMeal, thirdMeal, fourthMeal, fifthMeal, sixthMeal}: DietMealsDownloadPDFProps) => (
  <div className='diet-meals-dowload-pdf-div-wrapper'>
    <PDFDownloadLink document={<MyDocument firstMeal={firstMeal} secondMeal={secondMeal} thirdMeal={thirdMeal} fourthMeal={fourthMeal} fifthMeal={fifthMeal} sixthMeal={sixthMeal} />} fileName="document.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Ładowanie dokumentu...' : 'Pobierz PDF'
      }
    </PDFDownloadLink>
  </div>
);


const MyDocument = ({firstMeal, secondMeal, thirdMeal, fourthMeal, fifthMeal, sixthMeal}: DietMealsDownloadPDFProps) => (

  <Document>
    <Page size="A4" style={styles.page}>
      <>
        {firstMeal.map((diet_meal: DietMeal) => (
          <View key={diet_meal.id} style={styles.section}>
            <Text style={styles.text}>Pierwszy posiłek: {upperFirstLetter(diet_meal.name)}</Text>
            <Text style={styles.text}>Opis:</Text>
            <Text style={styles.text}>{diet_meal.describe}</Text>
            <Text style={styles.text}>Składniki:</Text>
            { diet_meal.product1_id && <DietMealProductToPDF product_id={diet_meal.product1_id} product_weight={diet_meal.product1_weight} /> }
            { diet_meal.product2_id && <DietMealProductToPDF product_id={diet_meal.product2_id} product_weight={diet_meal.product2_weight} /> }
            { diet_meal.product3_id && <DietMealProductToPDF product_id={diet_meal.product3_id} product_weight={diet_meal.product3_weight} /> }
            { diet_meal.product4_id && <DietMealProductToPDF product_id={diet_meal.product4_id} product_weight={diet_meal.product4_weight} /> }
            { diet_meal.product5_id && <DietMealProductToPDF product_id={diet_meal.product5_id} product_weight={diet_meal.product5_weight} /> }
            { diet_meal.product6_id && <DietMealProductToPDF product_id={diet_meal.product6_id} product_weight={diet_meal.product6_weight} /> }
            { diet_meal.product7_id && <DietMealProductToPDF product_id={diet_meal.product7_id} product_weight={diet_meal.product7_weight} /> }
            { diet_meal.product8_id && <DietMealProductToPDF product_id={diet_meal.product8_id} product_weight={diet_meal.product8_weight} /> }
            { diet_meal.product9_id && <DietMealProductToPDF product_id={diet_meal.product9_id} product_weight={diet_meal.product9_weight} /> }
            { diet_meal.product10_id && <DietMealProductToPDF product_id={diet_meal.product10_id} product_weight={diet_meal.product10_weight} /> }
            { diet_meal.product11_id && <DietMealProductToPDF product_id={diet_meal.product11_id} product_weight={diet_meal.product11_weight} /> }
            { diet_meal.product12_id && <DietMealProductToPDF product_id={diet_meal.product12_id} product_weight={diet_meal.product12_weight} /> }
          </View>
        ))}
        {secondMeal.map((diet_meal: DietMeal) => (
          <View key={diet_meal.id} style={styles.section}>
            <Text style={styles.text}>Drugi posiłek: {upperFirstLetter(diet_meal.name)}</Text>
            <Text style={styles.text}>Opis:</Text>
            <Text style={styles.text}>{diet_meal.describe}</Text>
            <Text style={styles.text}>Składniki:</Text>
            { diet_meal.product1_id && <DietMealProductToPDF product_id={diet_meal.product1_id} product_weight={diet_meal.product1_weight} /> }
            { diet_meal.product2_id && <DietMealProductToPDF product_id={diet_meal.product2_id} product_weight={diet_meal.product2_weight} /> }
            { diet_meal.product3_id && <DietMealProductToPDF product_id={diet_meal.product3_id} product_weight={diet_meal.product3_weight} /> }
            { diet_meal.product4_id && <DietMealProductToPDF product_id={diet_meal.product4_id} product_weight={diet_meal.product4_weight} /> }
            { diet_meal.product5_id && <DietMealProductToPDF product_id={diet_meal.product5_id} product_weight={diet_meal.product5_weight} /> }
            { diet_meal.product6_id && <DietMealProductToPDF product_id={diet_meal.product6_id} product_weight={diet_meal.product6_weight} /> }
            { diet_meal.product7_id && <DietMealProductToPDF product_id={diet_meal.product7_id} product_weight={diet_meal.product7_weight} /> }
            { diet_meal.product8_id && <DietMealProductToPDF product_id={diet_meal.product8_id} product_weight={diet_meal.product8_weight} /> }
            { diet_meal.product9_id && <DietMealProductToPDF product_id={diet_meal.product9_id} product_weight={diet_meal.product9_weight} /> }
            { diet_meal.product10_id && <DietMealProductToPDF product_id={diet_meal.product10_id} product_weight={diet_meal.product10_weight} /> }
            { diet_meal.product11_id && <DietMealProductToPDF product_id={diet_meal.product11_id} product_weight={diet_meal.product11_weight} /> }
            { diet_meal.product12_id && <DietMealProductToPDF product_id={diet_meal.product12_id} product_weight={diet_meal.product12_weight} /> }
          </View>
        ))}
        {thirdMeal.map((diet_meal: DietMeal) => (
          <View key={diet_meal.id} style={styles.section}>
            <Text style={styles.text}>Trzeci posiłek: {upperFirstLetter(diet_meal.name)}</Text>
            <Text style={styles.text}>Opis:</Text>
            <Text style={styles.text}>{diet_meal.describe}</Text>
            <Text style={styles.text}>Składniki:</Text>
            { diet_meal.product1_id && <DietMealProductToPDF product_id={diet_meal.product1_id} product_weight={diet_meal.product1_weight} /> }
            { diet_meal.product2_id && <DietMealProductToPDF product_id={diet_meal.product2_id} product_weight={diet_meal.product2_weight} /> }
            { diet_meal.product3_id && <DietMealProductToPDF product_id={diet_meal.product3_id} product_weight={diet_meal.product3_weight} /> }
            { diet_meal.product4_id && <DietMealProductToPDF product_id={diet_meal.product4_id} product_weight={diet_meal.product4_weight} /> }
            { diet_meal.product5_id && <DietMealProductToPDF product_id={diet_meal.product5_id} product_weight={diet_meal.product5_weight} /> }
            { diet_meal.product6_id && <DietMealProductToPDF product_id={diet_meal.product6_id} product_weight={diet_meal.product6_weight} /> }
            { diet_meal.product7_id && <DietMealProductToPDF product_id={diet_meal.product7_id} product_weight={diet_meal.product7_weight} /> }
            { diet_meal.product8_id && <DietMealProductToPDF product_id={diet_meal.product8_id} product_weight={diet_meal.product8_weight} /> }
            { diet_meal.product9_id && <DietMealProductToPDF product_id={diet_meal.product9_id} product_weight={diet_meal.product9_weight} /> }
            { diet_meal.product10_id && <DietMealProductToPDF product_id={diet_meal.product10_id} product_weight={diet_meal.product10_weight} /> }
            { diet_meal.product11_id && <DietMealProductToPDF product_id={diet_meal.product11_id} product_weight={diet_meal.product11_weight} /> }
            { diet_meal.product12_id && <DietMealProductToPDF product_id={diet_meal.product12_id} product_weight={diet_meal.product12_weight} /> }
          </View>
        ))}
        {fourthMeal.map((diet_meal: DietMeal) => (
          <View key={diet_meal.id} style={styles.section}>
            <Text style={styles.text}>Czwarty posiłek: {upperFirstLetter(diet_meal.name)}</Text>
            <Text style={styles.text}>Opis:</Text>
            <Text style={styles.text}>{diet_meal.describe}</Text>
            <Text style={styles.text}>Składniki:</Text>
            { diet_meal.product1_id && <DietMealProductToPDF product_id={diet_meal.product1_id} product_weight={diet_meal.product1_weight} /> }
            { diet_meal.product2_id && <DietMealProductToPDF product_id={diet_meal.product2_id} product_weight={diet_meal.product2_weight} /> }
            { diet_meal.product3_id && <DietMealProductToPDF product_id={diet_meal.product3_id} product_weight={diet_meal.product3_weight} /> }
            { diet_meal.product4_id && <DietMealProductToPDF product_id={diet_meal.product4_id} product_weight={diet_meal.product4_weight} /> }
            { diet_meal.product5_id && <DietMealProductToPDF product_id={diet_meal.product5_id} product_weight={diet_meal.product5_weight} /> }
            { diet_meal.product6_id && <DietMealProductToPDF product_id={diet_meal.product6_id} product_weight={diet_meal.product6_weight} /> }
            { diet_meal.product7_id && <DietMealProductToPDF product_id={diet_meal.product7_id} product_weight={diet_meal.product7_weight} /> }
            { diet_meal.product8_id && <DietMealProductToPDF product_id={diet_meal.product8_id} product_weight={diet_meal.product8_weight} /> }
            { diet_meal.product9_id && <DietMealProductToPDF product_id={diet_meal.product9_id} product_weight={diet_meal.product9_weight} /> }
            { diet_meal.product10_id && <DietMealProductToPDF product_id={diet_meal.product10_id} product_weight={diet_meal.product10_weight} /> }
            { diet_meal.product11_id && <DietMealProductToPDF product_id={diet_meal.product11_id} product_weight={diet_meal.product11_weight} /> }
            { diet_meal.product12_id && <DietMealProductToPDF product_id={diet_meal.product12_id} product_weight={diet_meal.product12_weight} /> }
          </View>
        ))}
        {fifthMeal.map((diet_meal: DietMeal) => (
          <View key={diet_meal.id} style={styles.section}>
            <Text style={styles.text}>Piąty posiłek: {upperFirstLetter(diet_meal.name)}</Text>
            <Text style={styles.text}>Opis:</Text>
            <Text style={styles.text}>{diet_meal.describe}</Text>
            <Text style={styles.text}>Składniki:</Text>
            { diet_meal.product1_id && <DietMealProductToPDF product_id={diet_meal.product1_id} product_weight={diet_meal.product1_weight} /> }
            { diet_meal.product2_id && <DietMealProductToPDF product_id={diet_meal.product2_id} product_weight={diet_meal.product2_weight} /> }
            { diet_meal.product3_id && <DietMealProductToPDF product_id={diet_meal.product3_id} product_weight={diet_meal.product3_weight} /> }
            { diet_meal.product4_id && <DietMealProductToPDF product_id={diet_meal.product4_id} product_weight={diet_meal.product4_weight} /> }
            { diet_meal.product5_id && <DietMealProductToPDF product_id={diet_meal.product5_id} product_weight={diet_meal.product5_weight} /> }
            { diet_meal.product6_id && <DietMealProductToPDF product_id={diet_meal.product6_id} product_weight={diet_meal.product6_weight} /> }
            { diet_meal.product7_id && <DietMealProductToPDF product_id={diet_meal.product7_id} product_weight={diet_meal.product7_weight} /> }
            { diet_meal.product8_id && <DietMealProductToPDF product_id={diet_meal.product8_id} product_weight={diet_meal.product8_weight} /> }
            { diet_meal.product9_id && <DietMealProductToPDF product_id={diet_meal.product9_id} product_weight={diet_meal.product9_weight} /> }
            { diet_meal.product10_id && <DietMealProductToPDF product_id={diet_meal.product10_id} product_weight={diet_meal.product10_weight} /> }
            { diet_meal.product11_id && <DietMealProductToPDF product_id={diet_meal.product11_id} product_weight={diet_meal.product11_weight} /> }
            { diet_meal.product12_id && <DietMealProductToPDF product_id={diet_meal.product12_id} product_weight={diet_meal.product12_weight} /> }
          </View>
        ))}
        {sixthMeal.map((diet_meal: DietMeal) => (
          <View key={diet_meal.id} style={styles.section}>
            <Text style={styles.text}>Szósty posiłek: {upperFirstLetter(diet_meal.name)}</Text>
            <Text style={styles.text}>Opis:</Text>
            <Text style={styles.text}>{diet_meal.describe}</Text>
            <Text style={styles.text}>Składniki:</Text>
            { diet_meal.product1_id && <DietMealProductToPDF product_id={diet_meal.product1_id} product_weight={diet_meal.product1_weight} /> }
            { diet_meal.product2_id && <DietMealProductToPDF product_id={diet_meal.product2_id} product_weight={diet_meal.product2_weight} /> }
            { diet_meal.product3_id && <DietMealProductToPDF product_id={diet_meal.product3_id} product_weight={diet_meal.product3_weight} /> }
            { diet_meal.product4_id && <DietMealProductToPDF product_id={diet_meal.product4_id} product_weight={diet_meal.product4_weight} /> }
            { diet_meal.product5_id && <DietMealProductToPDF product_id={diet_meal.product5_id} product_weight={diet_meal.product5_weight} /> }
            { diet_meal.product6_id && <DietMealProductToPDF product_id={diet_meal.product6_id} product_weight={diet_meal.product6_weight} /> }
            { diet_meal.product7_id && <DietMealProductToPDF product_id={diet_meal.product7_id} product_weight={diet_meal.product7_weight} /> }
            { diet_meal.product8_id && <DietMealProductToPDF product_id={diet_meal.product8_id} product_weight={diet_meal.product8_weight} /> }
            { diet_meal.product9_id && <DietMealProductToPDF product_id={diet_meal.product9_id} product_weight={diet_meal.product9_weight} /> }
            { diet_meal.product10_id && <DietMealProductToPDF product_id={diet_meal.product10_id} product_weight={diet_meal.product10_weight} /> }
            { diet_meal.product11_id && <DietMealProductToPDF product_id={diet_meal.product11_id} product_weight={diet_meal.product11_weight} /> }
            { diet_meal.product12_id && <DietMealProductToPDF product_id={diet_meal.product12_id} product_weight={diet_meal.product12_weight} /> }
          </View>
        ))}
      </>
    </Page>
  </Document>
);

export default DietMealsDownloadPDF;