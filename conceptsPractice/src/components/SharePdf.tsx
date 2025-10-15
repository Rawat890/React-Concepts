import React from 'react';
import { View, Text, Alert } from 'react-native';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import Button from './Button';

export default function SharePdf() {
  const sharePdf = async () => {
    try {
      const pdfUrl = 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf';
      const localPath = `${RNFS.CachesDirectoryPath}/sample.pdf`;

      const download = await RNFS.downloadFile({
        fromUrl: pdfUrl,
        toFile: localPath,
      }).promise;

      if (download.statusCode === 200) {
        console.log('PDF downloaded to:', localPath);

        // 2. Ensure file exists
        const exists = await RNFS.exists(localPath);
        if (!exists) {
          throw new Error('Downloaded file not found at: ' + localPath);
        }

        // 3. Share file
        const shareOptions = {
          title: 'Share PDF',
          message: 'Check out this PDF!',
          url: 'file://' + localPath, // ✅ file URI with prefix
          type: 'application/pdf',
          failOnCancel: false,
        };

        await Share.open(shareOptions);
      } else {
        Alert.alert('Download failed', 'Could not download PDF file.');
      }
    } catch (error: any) {
      console.error('Error sharing PDF:', error);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Share PDF Example</Text>
      <Button title="Share PDF" onPress={sharePdf} />
    </View>
  );
}
