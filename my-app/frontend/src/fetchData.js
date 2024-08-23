import { supabase } from './supabaseClient';

export async function fetchData(id) {
    try {
      const { data, error } = await supabase
        .from('cardsn')
        .select('struct')
        .eq('card_id', id)
        
      if (error) {
        console.error('Erro ao buscar dados:', error);
        return null;
      }
      if (data && data.length > 0) {
        const json_text = JSON.stringify(data[0].struct, null, 2); // Ajustado para 'struct'
        return json_text;
      } else {
        console.log('Nenhum dado encontrado para o ID:', id);
        return null;
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error.message);
      return null;
    }
  }
