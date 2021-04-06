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
import ErrorValidationMessage from './src/components/errorValidationMsg.js'
import LoadingModal from './src/components/loadingModal';


const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Apenas letras são aceitas')
    .max(50, 'O limite de caracteres é 50')
    .required('O nome é obrigatório'),
  idade: Yup.number()
    .typeError('Somente números são aceitos')
    .positive('Somente números positivos são aceitos')
    .integer('Somente números inteiros são aceitos')
    .required('A idade é obrigatória'),
  sexo: Yup.string()
    .required('O sexo é obrigatório'),    
  curso: Yup.string()
    .required('O curso é obrigatório'),
  periodo: Yup.string()
    .required('O período é obrigatório'),
  turno: Yup.string()
    .required('O turno é obrigatório'),
  renda: Yup.number()  
    .required('A renda é obrigatória'),
  foiBolsista: Yup.boolean()
    .required('É obrigatório informar se você já foi bolsista')  

})

const formikInitialValues = {
  nome: '',
  idade: '',
  sexo: '',
  curso: '',
  periodo: '',
  turno: '',
  renda: 0,
  foiBolsista: false
}

class App extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      curso: '',
      periodo: '',
      turno: '',
      sexo: '',
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
      sexos: [
        {id: 1, descricao: "Masculino"},
        {id:2, descricao: "Feminino"}
      ],
      idade: '',
      renda: 0,
      foiBolsista: false,
      successSubmit: false,
      isLoading: false
    };

    this.alteraNome = this.alteraNome.bind(this)
    this.selecionaSexo = this.selecionaSexo.bind(this)
    this.selecionaCurso = this.selecionaCurso.bind(this)
    this.selecionaPeriodo = this.selecionaPeriodo.bind(this)
    this.selecionaTurno = this.selecionaTurno.bind(this)
    this.alteraIdade = this.alteraIdade.bind(this)
    this.alteraRenda = this.alteraRenda.bind(this)
    this.customHandleSubmit = this.customHandleSubmit.bind(this)
  }

  alteraNome(novoNome) {
    this.setState({nome: novoNome })
  }

  selecionaSexo(novoSexo) {
    this.setState({sexo: novoSexo})
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

  customHandleSubmit() {
    this.setState({isLoading: true})
    setTimeout(() => {this.setState({isLoading: false, successSubmit: true})}, 3000)
  }

  render(){
    return (
      <SafeAreaView style={styles.container}>
        <LoadingModal modalVisible={this.state.isLoading} />
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
                  label="Nome:"
                  info={this.state.nome}
                />
                <InfoField 
                  label="Idade:"
                  info={this.state.idade}
                />
                <InfoField 
                  label="Sexo:"
                  info={this.state.sexos[this.state.sexo].descricao}
                />
                <InfoField 
                  label="Curso:"
                  info={this.state.cursos[this.state.curso].descricao}
                />
                <InfoField 
                  label="Período:"
                  info={this.state.periodos[this.state.periodo].descricao}
                />
                <InfoField 
                  label="Turno:"
                  info={this.state.turnos[this.state.turno].descricao}
                />
                <InfoField 
                  label="Renda:"
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
                      formikAction={handleChange('nome')}
                      action={this.alteraNome}
                      value={values.nome}
                      tipoTeclado={"default"}
                    />
                    {errors.nome && touched.nome &&
                      <ErrorValidationMessage message={errors.nome} />
                    }
                    <Input
                      label="Idade:"
                      placeholder="Digite seu idade"
                      formikAction={handleChange('idade')}
                      action={this.alteraIdade}
                      value={values.idade}
                      tipoTeclado={"numeric"}
                    />
                    {errors.idade && touched.idade &&
                      <ErrorValidationMessage message={errors.idade} />
                    }
                    <CustomPicker 
                      label="Sexo:"
                      valorSelecionado={this.state.sexo}
                      listaItens={this.state.sexos}
                      action={this.selecionaSexo}
                      formikAction={setFieldValue}
                      field='sexo'
                    />
                    {errors.sexo && touched.sexo &&
                      <ErrorValidationMessage message={errors.sexo} />
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
                      <ErrorValidationMessage message={errors.curso} />
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
                      <ErrorValidationMessage message={errors.periodo} />
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
                      <ErrorValidationMessage message={errors.turno} />
                    }
                    <CustomSlider 
                      titulo="Informe sua renda"
                      valorMin={0}
                      valorMax={10000}
                      action={this.alteraRenda}
                      formikAction={setFieldValue}
                      field='renda'
                      valorSlider={`R$ ${this.state.renda.toFixed(2)}`}
                    />
                    {errors.renda && touched.renda &&
                      <ErrorValidationMessage message={errors.renda} />
                    }
                    <View style={styles.switchContainer}>
                          <Text> Já foi bolsista? </Text>
                          <View style={styles.switchContainer2}>
                              <Switch 
                                onValueChange={(valorSwitch) => {this.setState({foiBolsista: valorSwitch}); setFieldValue('foiBolsista', valorSwitch)}}
                                value={this.state.foiBolsista}
                                trackColor={{ false: "#dddfda", true: "#154c79" }}
                                thumbColor={this.state.foiBolsista ? "#ff5916" : "#dddfda"}
                              />
                              <Text>{this.state.foiBolsista ? 'Sim' : 'Não'}</Text>
                          </View>
                    </View>
                    {errors.foiBolsista && touched.foiBolsista &&
                      <ErrorValidationMessage message={errors.foiBolsista} />
                    }
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
