import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  containerCenter: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#32e0c4',
    padding: 18,
    borderRadius: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#32e0c4',
    backgroundColor: '#ffffff',
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  todoItem: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 8,
    // height: 40,
    padding: 8,
  },
  smallIcon: {
    width: 20,
    height: 20,
    margin: 4,
    tintColor: '#444',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: 300,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2196F3',
  },
  modalClose: {
    backgroundColor: '#f66',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});
