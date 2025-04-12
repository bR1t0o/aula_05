import { View, Button } from 'react-native';

const Botao = ({ title, onPress }) => {

    return (
        <View style={{ width: '100%' ,}}>
                  <Button color={'rgb(85, 168, 216)'}
             title={title} 
             onPress={onPress} />
        
                </View>
            

    );

};
export default Botao;