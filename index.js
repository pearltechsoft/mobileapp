import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import UPIPaymentQR from './UPIPaymentQR'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.cardContainer}>
        {/* Testing your dynamic payment engine live with ID 2 */}
        <UPIPaymentQR 
          amount="1.00" 
          bookingId="TEST003" 
          customerName="A Pavithra" 
          upiId="6302267557@axl"  // <-- This is your second PhonePe ID
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardContainer: { 
    width: '90%' 
  },
});