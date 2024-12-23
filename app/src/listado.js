import React from 'react';
import { FlatList, View, Text,  Button, Image, ActivityIndicator } from 'react-native';
import { database, ref, onValue } from './firebase/firebase.js';  
import Detalle from './detalle';  
import Mensajes from './firebase/mensajes.js';
import Mystyles from './mystyles.js';

 
class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadores: [], 
      selectedJugador: null,  
      page: 1,  
      allJugadores: [],  
    };
  }

  componentDidMount() {
    this.loadJugadores();  
  }

 
  loadJugadores = () => {
    const jugadoresRef = ref(database, '/jugadores');


    this.setState({ loading: true });

    onValue(jugadoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const jugadoresArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));

    
        const primeros10Jugadores = jugadoresArray.slice(0, 10);

        this.setState({
          jugadores: primeros10Jugadores,  
          allJugadores: primeros10Jugadores,  
          loading: false,
        });
      } else {
        this.setState({ jugadores: [], loading: false });
      }
    });
  };

  
  handleEndReached = () => {
    const { loading, jugadores, allJugadores, page } = this.state;

    
    if (loading) return;

    this.setState(
      (prevState) => ({
        page: prevState.page + 1, 
      }),
      () => {
        
        const jugadoresRepetidos = jugadores.map((jugador, index) => ({
          ...jugador,
          id: `${jugador.id}_duplicado_${allJugadores.length + index}`, // Asignamos un nuevo ID único basado en el índice total
        }));

        this.setState((prevState) => ({
          jugadores: [...prevState.jugadores, ...jugadoresRepetidos], // Añadimos los mismos jugadores al final
          allJugadores: [...prevState.allJugadores, ...jugadoresRepetidos], // Actualizamos la lista de todos los jugadores
          loading: false,  
        }));
      }
    );
  };

 
  handlePress = (item) => {
    this.setState({ selectedJugador: item });
  };

  renderItem = ({ item }) => (



    <View style={Mystyles.item}>

      <Image
        source={{ uri: item.img1 }}  
        style={Mystyles.image}
      />
      <Text style={Mystyles.name}>Nombre: {item.nombre}</Text>
      <Text>Apellido: {item.apellido}</Text>
      <Text>Posición: {item.posicion}</Text>
      <Button title="Ver Detalles Jugador" onPress={() => this.handlePress(item)} />
    </View>
  );

  render() {
    const { selectedJugador, jugadores, loading } = this.state;

    if (this.state.loading){
    return(
            <View style ={Mystyles.contenedor}>
                <Text>Cargando</Text>
            </View>

    )
    }
    else {
        return (
          <View style={Mystyles.container}>
            <Text style={Mystyles.title}>Lista de Jugadores</Text>

            {selectedJugador ? (
              <Detalle jugador={selectedJugador} onBack={() => this.setState({ selectedJugador: null })} />
            ) : (
              <FlatList
                data={jugadores}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
                onEndReached={this.handleEndReached}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null} // Mostrar cargando
              />
            )}
          </View>
        );
      }
  }
}

export default Listado;
