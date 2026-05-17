import { useState, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { COMERCIOS } from '../bancodeDados/dadosComercios';
import { calcularDistancia } from '../ferramentas/geoCalculo';

export function useComercios(busca: string, categoriaSelecionada: string) {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [favoritos, setFavoritos] = useState<string[]>([]);

  useEffect(() => {
    const carregarDados = async () => {
      const salvos = await AsyncStorage.getItem('@favoritos');
      if (salvos) setFavoritos(JSON.parse(salvos));

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
      }
    };
    carregarDados();
  }, []);

  const alternarFavorito = async (id: string) => {
    const novaLista = favoritos.includes(id) 
      ? favoritos.filter(favId => favId !== id) 
      : [...favoritos, id];
    
    setFavoritos(novaLista);
    await AsyncStorage.setItem('@favoritos', JSON.stringify(novaLista));
  };

  const comerciosFiltrados = useMemo(() => {
    return COMERCIOS.filter(item => {
      const matchesCategoria = categoriaSelecionada === 'Todas as Lojas' || 
        (categoriaSelecionada === 'Favoritos' ? favoritos.includes(item.id) : item.categoria === categoriaSelecionada);
      
      const buscaLower = busca.toLowerCase();
      const matchesNome = item.nome.toLowerCase().includes(buscaLower);
      const matchesTags = item.tags?.some(tag => tag.toLowerCase().includes(buscaLower));
      
      return matchesCategoria && (matchesNome || matchesTags);
    }).map(item => ({
      ...item,
      distancia: location ? calcularDistancia(location.coords.latitude, location.coords.longitude, item.latitude, item.longitude) : null,
      isFavorito: favoritos.includes(item.id)
    }));
  }, [busca, categoriaSelecionada, favoritos, location]);

  return { comerciosFiltrados, alternarFavorito };
}