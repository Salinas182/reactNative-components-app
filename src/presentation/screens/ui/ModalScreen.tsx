import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Modal, Platform, View } from 'react-native';
import { Button } from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title safe text="Modal" />

      <Button
        text="Open modal"
        onPress={() => setIsVisible(true)}
      />

      <Modal
        visible={isVisible}
        animationType="fade"
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Title text="Modal Content" safe />
          </View>

          <View style={{ flex: 1 }} />

          <Button
            text="Close modal"
            onPress={() => setIsVisible(false)}
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
