/* Supabase client para registrar resultados do quiz
   Projeto: Defesa Digital · UNINTER 2026
*/

const SUPABASE_URL = 'https://dkycnsojkcqoubdpdeaf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRreWNuc29qa2Nxb3ViZHBkZWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MjA1ODEsImV4cCI6MjEwMTA5NjU4MX0.tsRTrUKBFHc-mx50317Vg1D3i5NpBqACtcuRwL9JNhs';

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
