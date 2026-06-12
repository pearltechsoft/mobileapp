import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import UPIPaymentQR from './UPIPaymentQR'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.cardContainer}>
        {/* Testing your dynamic payment engine live with ID 2 */}
        <UPIPaymentQR 
          amount="4.00" 
          bookingId="TEST003" 
          customerName="Test User1" 
          upiId="78xxxxxxxx@xyz"  
          accountName="Reciever1"
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
