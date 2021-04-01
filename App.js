import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text} from 'react-native';
import Logo from './src/components/logo';
import Input from './src/components/input';
import CustomPicker from './src/components/customPicker';
import CustomSlider from './src/components/customSlider';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      curso: 0,
      periodo: 0,
      turno: 0,
      cursos: [
        {id: 1, descricao: "Sistemas de Informação"},
        {id: 2, descricao: "Administração"},
        {id: 3, descricao: "Direito"},
        {id: 4, descricao: "Medicina"},
      ],
      periodos: [
        {id: 1, descricao: "1°"},
        {id: 2, descricao: "2°"},
        {id: 3, descricao: "3°"},
        {id: 4, descricao: "4°"},
        {id: 5, descricao: "5°"},
        {id: 6, descricao: "6°"},
        {id: 7, descricao: "7°"},
        {id: 8, descricao: "8°"}
      ],
      turnos: [
        {id: 1, descricao: "Manhã"},
        {id: 2, descricao: "Noite"},
        {id: 3, descricao: "Integral"}
      ],
      idade: null,
      renda: 0
    };

    this.alterarNome = this.alterarNome.bind(this)
    this.selecionaCurso = this.selecionaCurso.bind(this)
    this.selecionaPeriodo = this.selecionaPeriodo.bind(this)
    this.selecionaTurno = this.selecionaTurno.bind(this)
    this.alteraIdade = this.alteraIdade.bind(this)
    this.alteraRenda = this.alteraRenda.bind(this)
  }

  alterarNome(novoNome) {
    this.setState({nome: novoNome })
  }

  selecionaCurso(novoCurso) {
    this.setState({curso: novoCurso})
  }

  selecionaPeriodo(novoPeriodo) {
    this.setState({periodo: novoPeriodo})
  }

  selecionaTurno(novoTurno) {
    this.setState({turno: novoTurno})
  }
  
  alteraIdade(novaIdade) {
    this.setState({idade: novaIdade})
  }

  alteraRenda(novaRenda) {
    this.setState({renda: novaRenda})
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Logo />
        </View> 
        <View style={styles.body}>
          <Text>Selecione os parâmetros: </Text>    
          <Input
            placeholder="Digite seu nome"
            action={this.alterarNome}
            tipoTeclado={"default"}
          />
          <CustomPicker 
            valorSelecionado={this.state.curso}
            listaItens={this.state.cursos}
            action={this.selecionaCurso}
          />
          <CustomPicker 
            valorSelecionado={this.state.periodo}
            listaItens={this.state.periodos}
            action={this.selecionaPeriodo}
          />
          <CustomPicker 
            valorSelecionado={this.state.turno}
            listaItens={this.state.turnos}
            action={this.selecionaTurno}
          /> 
          <Input
            placeholder="Digite seu idade"
            action={this.alteraIdade}
            tipoTeclado={"numeric"}
          />
          <CustomSlider 
            titulo="Renda"
            valorMin={0}
            valorMax={10000}
            action={this.alteraRenda}
          />

          <Text style={styles.infoTitle}>Informações inseridas:</Text> 
          <Text style={styles.infoLabel}>
            Nome: <Text style={styles.infoValue}>{this.state.nome}</Text>
          </Text>      
          <Text style={styles.infoLabel}>
            Curso: <Text style={styles.infoValue}>{this.state.cursos[this.state.curso].descricao}</Text>
          </Text>  
          <View style={styles.infoDiv}>
            <Text style={styles.infoLabel}>
              Período: <Text style={styles.infoValue}>{this.state.periodos[this.state.periodo].descricao}</Text>
            </Text>
            <Text style={styles.infoLabel}>
              Turno: <Text style={styles.infoValue}>{this.state.turnos[this.state.turno].descricao}</Text>
            </Text>
          </View>          
        </View>         
      </SafeAreaView>
    );
  }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ff5916',
    height: 80,
    justifyContent: 'center',
    padding: 20,
  },
  body:{
    padding: 20
  },
  infoDiv: {
    flexDirection: 'row',
  },
  infoTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '900'
  },
  infoLabel: {
    fontWeight: 'bold',
    marginVertical: 8,
    marginRight: 30
  },
  infoValue: {
    fontWeight: 'normal',
  }
  
});

export default App;
