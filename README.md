# react-native-simple-collapsible-view

A simple JS collapsible view for React Native

## Installation

```sh
npm install --save react-native-simple-collapsible-view react-native-svg
cd ios && pod install && cd ..
```

## Usage

```js
import { CollapsibleView } from 'react-native-simple-collapsible-view';

// ...

<CollapsibleView
  title="Title"
  containerStyle={styles.container}
  headerContainerStyle={styles.headerContainer}
  titleStyle={styles.title}
>
  <View style={styles.contentContainer}>
    <Text>Component inside</Text>
  </View>
</CollapsibleView>

// ...

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  container: {
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    marginHorizontal: 20,
  },
  headerContainer: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});
```

## Demo

![demo](https://github.com/benoitquero/react-native-simple-collapsible-view/assets/33760332/3cdc30d2-2f0b-40b2-8b2c-142d3337ea4b)

## Properties

| Prop                   | Description                                         | Type                   | Default               |
| ---------------------- | --------------------------------------------------- | ---------------------- | --------------------- |
| **`animated`**         | Enable/disable animation when opening/closing       | Boolean                | `true`                |
| **`arrowIcon`**        | Custom arrow icon for the collapsible header        | ReactNode        | -         |
| **`arrowSize`**        | Size of the arrow icon                              | Number                 | `24`                  |
| **`children`**         | Content to be displayed when the view is open       | ReactNode        | -                     |
| **`containerStyle`**   | Style for the main container View                   | ViewStyle              | -                     |
| **`defaultState`**     | Initial state of the collapsible view (`open` or `closed`) | String          | `closed`            |
| **`headerContainerStyle`** | Style for the header container View             | ViewStyle              | -                     |
| **`title`**            | Title text displayed in the header                 | String                 | -                     |
| **`titleStyle`**       | Style for the title text                            | TextStyle              | -                     |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

