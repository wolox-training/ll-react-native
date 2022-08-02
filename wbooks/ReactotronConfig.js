import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron;
Reactotron.setAsyncStorageHandler(AsyncStorage)

  .configure({
    name: 'React Native Demo'
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/
    },
    editor: false,
    errors: { veto: () => false },
    overlay: false
  })
  .use(reactotronRedux())
  .connect();

export default reactotron;
