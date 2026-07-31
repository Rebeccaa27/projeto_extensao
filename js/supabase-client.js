/* Supabase client para registrar resultados do quiz
   Projeto: Defesa Digital · UNINTER 2026
*/

const SUPABASE_URL = 'COLOQUE_SUA_URL_DO_SUPABASE_AQUI';
const SUPABASE_ANON_KEY = 'COLOQUE_SUA_ANON_KEY_AQUI';

let supabaseClient = null;

function initSupabase() {
  if (window.supabase && !supabaseClient) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
}

async function registrarResultadoQuiz(pct, corretas, total, origem = 'site', observacoes = null) {
  try {
    if (!supabaseClient) {
      initSupabase();
    }
    if (!supabaseClient) {
      console.warn('Supabase não inicializado — resultado não será registrado.');
      return;
    }

    const { error } = await supabaseClient
      .from('quiz_resultados')
      .insert({
        pontuacao_percentual: pct,
        corretas: corretas,
        total_perguntas: total,
        origem: origem,
        observacoes: observacoes
      });

    if (error) {
      console.error('Erro ao registrar resultado do quiz no Supabase:', error);
    }
  } catch (err) {
    console.error('Falha inesperada ao registrar resultado do quiz:', err);
  }
}

// Inicializa Supabase quando a página carregar
document.addEventListener('DOMContentLoaded', initSupabase);
