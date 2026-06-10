import { supabase } from './supabase.js'
import { currentUser } from './auth.js'

function uid() { return currentUser?.id }

// ---- ALUNOS ----
export async function getAlunos() {
  const { data, error } = await supabase
    .from('alunos')
    .select('*')
    .eq('user_id', uid())
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function createAluno(payload) {
  const { data, error } = await supabase
    .from('alunos')
    .insert([{ ...payload, user_id: uid(), status: payload.status || 'Ativo' }])
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updateAluno(id, payload) {
  const { data, error } = await supabase
    .from('alunos')
    .update(payload)
    .eq('id', id)
    .eq('user_id', uid())
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteAluno(id) {
  const { error } = await supabase
    .from('alunos')
    .delete()
    .eq('id', id)
    .eq('user_id', uid())
  if (error) throw error
}

// ---- TREINOS ----
export async function getTreinos() {
  const { data, error } = await supabase
    .from('treinos')
    .select('*')
    .eq('user_id', uid())
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function createTreino(payload) {
  const { data, error } = await supabase
    .from('treinos')
    .insert([{ ...payload, user_id: uid() }])
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteTreino(id) {
  const { error } = await supabase
    .from('treinos')
    .delete()
    .eq('id', id)
    .eq('user_id', uid())
  if (error) throw error
}

// ---- PAGAMENTOS ----
export async function getPagamentos() {
  const { data, error } = await supabase
    .from('pagamentos')
    .select('*')
    .eq('user_id', uid())
    .order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

export async function createPagamento(payload) {
  const { data, error } = await supabase
    .from('pagamentos')
    .insert([{ ...payload, user_id: uid() }])
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deletePagamento(id) {
  const { error } = await supabase
    .from('pagamentos')
    .delete()
    .eq('id', id)
    .eq('user_id', uid())
  if (error) throw error
}

// ---- STATS ----
export async function getStats() {
  const [alunos, pagamentos, treinos] = await Promise.all([
    getAlunos(),
    getPagamentos(),
    getTreinos()
  ])
  return {
    totalAlunos: alunos.length,
    alunosAtivos: alunos.filter(a => a.status === 'Ativo').length,
    inadimplentes: alunos.filter(a => a.status === 'Inativo').length,
    receitaMensal: pagamentos.filter(p => p.status === 'Pago').reduce((s, p) => s + Number(p.valor || 0), 0),
    aReceber: pagamentos.filter(p => p.status === 'Pendente').reduce((s, p) => s + Number(p.valor || 0), 0),
    emAtraso: pagamentos.filter(p => p.status === 'Atrasado').reduce((s, p) => s + Number(p.valor || 0), 0),
    totalTreinos: treinos.length,
    alunos,
    pagamentos,
    treinos
  }
}
