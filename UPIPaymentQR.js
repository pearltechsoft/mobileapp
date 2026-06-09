import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const UPIPaymentQR = ({ amount, bookingId, customerName }) => {
  const merchantUPI = "test@upi"; 
  const merchantName = "Booking App";
  const upiURL = `upi://pay?pa=${merchantUPI}&pn=${encodeURIComponent(merchantName)}&tn=${encodeURIComponent('Booking ' + bookingId)}&am=${amount}&cu=INR&tr=${bookingId}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan to Pay</Text>
      <Text style={styles.amount}>₹{amount}</Text>
      
      <View style={styles.qrContainer}>
        <QRCode value={upiURL} size={220} backgroundColor="white" color="black" />
      </View>

      <Text style={styles.subtitle}>Customer: {customerName}</Text>
      <Text style={styles.footer}>Supports GPay, PhonePe, Paytm & BHIM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#fff', borderRadius: 15 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  amount: { fontSize: 32, fontWeight: 'bold', color: '#2e7d32', marginBottom: 20 },
  qrContainer: { padding: 15, backgroundColor: '#fff', borderRadius: 10, elevation: 3, marginBottom: 15 },
  subtitle: { fontSize: 15, color: '#444', fontWeight: '500' },
  footer: { fontSize: 12, color: '#aaa', marginTop: 10 },
});

export default UPIPaymentQR;