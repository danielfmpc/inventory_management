import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import api from "./services/api";

export default function App(){
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api.get('projects').then(
      response => {
        setProjects(response.data);
      }
    )
  }, []);

  async function handleAddProject()  {
    const response = await api.post('projects', {
      title: `Novo projeto mobile ${Date.now()}`,
      owner: 'Daniel'
    });
    const project = response.data;
    setProjects([...projects,  project]);
  }

  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor='#7159c1' />
      <SafeAreaView style={styles.container}>
      <FlatList         
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({item: project})=>(
          <Text style={styles.title}>
              {project.title}
            </Text>
        )} 
        />
      </SafeAreaView>

      <TouchableOpacity act style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar Projeto</Text>
      </TouchableOpacity>
        
      {/* {projects.map(
          (
            project =>  
            <Text style={styles.title} key={project.id}>
              {project.title}
            </Text>
          )
        )} */}
    </>
  )
} 

const styles = StyleSheet.create(
  {
    container: {
      flex:1,
      backgroundColor: '#7159c1',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color: '#fff',
      fontSize: 20,
    },
    button: {
      backgroundColor: '#fff',
      alignSelf: 'center',
      margin: 20,
      height: 50,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
    }
  }
)