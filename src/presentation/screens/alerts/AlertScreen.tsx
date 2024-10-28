import React from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import { Alert, View } from 'react-native';
import { showPrompt } from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onShowPrompt = () => {
    showPrompt({
      title: 'Test prompt',
      subtitle: 'Test message',
      buttons: [
        {text: 'Ok', onPress: () => console.log('ok')},
      ],
      placeholder: 'Test placeholder',
    });
    // ! THIS NATIVE SOLUTION ONLY WORKS IN IOS AT THE MOMENT
    /* Alert.prompt(
      'Password',
      'gdrgsga agdsgs gdsgs',
      (value: string) => console.log({ value }),
      'secure-text',
      'Default value',
      'number-pad'
    ); */
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerts" />

      <Button text="Alert - 2 buttons" onPress={() => createTwoButtonAlert()} />

      <View style={{ height: 10 }} />

      <Button text="Alert - 3 buttons" onPress={createThreeButtonAlert} />

      <View style={{ height: 10 }} />

      <Button text="Prompt - input" onPress={onShowPrompt} />
    </CustomView>
  );
};
