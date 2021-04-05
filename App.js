import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text, Switch, ScrollView} from 'react-native';
import { Formik } from 'formik'
import * as Yup from 'yup';
import Logo from './src/components/logo';
import Input from './src/components/input';
import CustomPicker from './src/components/customPicker';
import CustomSlider from './src/components/customSlider';
import BtnSubmit from './src/components/btnSubmitForm';
import InfoField from './src/components/infoField';

const validationSchema = Yup.object().shape({
  nome: Yup.string()
      .matches(/^[A-Za-z ]*$/, 'Insira um nome válido')
      .max(50, 'O limite de caracteres é 50')
      .required('O nome é obrigatório'),
  idade: Yup.number()
      .typeError('Somente números são aceitos')
      .positive('Somente números positivos são aceitos')
      .integer('Somente números inteiros são aceitos')
      .required('A idade é obrigatória'),
  curso: Yup.string()
      .required('O curso é obrigatório'),
  periodo: Yup.string()
        .required('O período é obrigatório'),
  turno: Yup.string()
    .required('O turno é obrigatório'),

})

const formikInitialValues = {
  nome: '',
  idade: '',
  curso: '',
  periodo: '',
  turno: '',
  renda: '',
  foiBolsista: ''
}

class App extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      curso: '',
      periodo: '',
      turno: '',
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
      renda: 0,
      foiBolsista: false,
      successSubmit: false,
      teste: ''
    };

    this.alterarNome = this.alterarNome.bind(this)
    this.selecionaCurso = this.selecionaCurso.bind(this)
    this.selecionaPeriodo = this.selecionaPeriodo.bind(this)
    this.selecionaTurno = this.selecionaTurno.bind(this)
    this.alteraIdade = this.alteraIdade.bind(this)
    this.alteraRenda = this.alteraRenda.bind(this)
    this.customHandleSubmit = this.customHandleSubmit.bind(this)
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

  customHandleSubmit(data) {
    this.alterarNome(data.nome)
    this.alteraIdade(data.idade)
    this.setState({successSubmit: true})
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Logo />
            <Text style={styles.titulo}>Solicitação de bolsa</Text>
          </View> 
          <View style={styles.body}>
            { this.state.successSubmit ? 
              <React.Fragment>
                <Text style={styles.infoTitle}>Informações inseridas:</Text> 
                <InfoField 
                  label="Nome"
                  info={this.state.nome}
                />
                <InfoField 
                  label="Idade"
                  info={this.state.idade}
                />
                <InfoField 
                  label="Curso"
                  info={this.state.cursos[this.state.curso].descricao}
                />
                <InfoField 
                  label="Período"
                  info={this.state.periodos[this.state.periodo].descricao}
                />
                <InfoField 
                  label="Turno"
                  info={this.state.turnos[this.state.turno].descricao}
                />
                <InfoField 
                  label="Renda"
                  info={`R$ ${this.state.renda.toFixed(2)}`}
                />
                <InfoField 
                  label="Já foi bolsista?"
                  info={this.state.foiBolsista ? 'Sim' : 'Não'}
                />
              </React.Fragment>   
            :
              <Formik
                validationSchema={validationSchema}
                enableReinitialize={true}
                initialValues={formikInitialValues}
                onSubmit={values => this.customHandleSubmit(values)}
              >
                {({ values, handleChange, errors, setFieldValue, touched, handleSubmit }) => (
                  <React.Fragment>
                    <Text style={styles.formTitle}>Selecione os parâmetros: </Text>    
                    <Input
                      label="Nome:"
                      placeholder="Digite seu nome"
                      action={handleChange('nome')}
                      value={values.nome}
                      tipoTeclado={"default"}
                    />
                    {errors.nome && touched.nome &&
                      <Text style={{ fontSize: 10, color: 'red' }}>{errors.nome}</Text>
                    }
                    <Input
                      label="Idade:"
                      placeholder="Digite seu idade"
                      action={handleChange('idade')}
                      value={values.idade}
                      tipoTeclado={"numeric"}
                    />
                    {errors.idade && touched.idade &&
                      <Text style={{ fontSize: 10, color: 'red' }}>{errors.idade}</Text>
                    }
                    <CustomPicker 
                      label="Curso:"
                      valorSelecionado={this.state.curso}
                      listaItens={this.state.cursos}
                      action={this.selecionaCurso}
                      formikAction={setFieldValue}
                      field='curso'
                    />
                    {errors.curso && touched.curso &&
                      <Text style={{ fontSize: 10, color: 'red' }}>{errors.curso}</Text>
                    }
                    <CustomPicker 
                      label="Período:"
                      valorSelecionado={this.state.periodo}
                      listaItens={this.state.periodos}
                      action={this.selecionaPeriodo}
                      formikAction={setFieldValue}
                      field='periodo'
                    />
                    {errors.periodo && touched.periodo &&
                      <Text style={{ fontSize: 10, color: 'red' }}>{errors.periodo}</Text>
                    }
                    <CustomPicker 
                      label="Turno:"
                      valorSelecionado={this.state.turno}
                      listaItens={this.state.turnos}
                      action={this.selecionaTurno}
                      formikAction={setFieldValue}
                      field='turno'
                    /> 
                    {errors.turno && touched.turno &&
                      <Text style={{ fontSize: 10, color: 'red' }}>{errors.turno}</Text>
                    }
                    <CustomSlider 
                      titulo="Informe sua renda"
                      valorMin={0}
                      valorMax={10000}
                      action={this.alteraRenda}
                      valorSlider={`R$ ${this.state.renda.toFixed(2)}`}
                    />
                    <View style={styles.switchContainer}>
                          <Text> Já foi bolsista? </Text>
                          <View style={styles.switchContainer2}>
                              <Switch 
                                  onValueChange={(valorSwitch) => this.setState({foiBolsista: valorSwitch})}
                                  value={this.state.foiBolsista}
                                  trackColor={{ false: "#dddfda", true: "#154c79" }}
                                  thumbColor={this.state.foiBolsista ? "#ff5916" : "#dddfda"}
                              />
                              <Text>{this.state.foiBolsista ? 'Sim' : 'Não'}</Text>
                          </View>
                    </View>
                    <BtnSubmit 
                      action={handleSubmit}
                      btnText={'Enviar solicitação'}
                    />
                  </React.Fragment>
                )}
              </Formik>  
            }
          </View>       
        </ScrollView>  
      </SafeAreaView>
    );
  }
}  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ff5916',
    height: 80,
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    marginLeft: 20
  },
  body:{
    padding: 20
  },
  switchContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center'
  },
  switchContainer2: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 40
  },
  formTitle: {
    fontSize: 16,
    marginBottom: 10
  },
  infoTitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '900'
  },
  
  
});

export default App;
