import { supabase } from '../lib/supabase.js'
import { navigate } from '../lib/router.js'

export let currentUser = null

export async function checkSession() {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    currentUser = session.user
    return true
  }
  return false
}

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  currentUser = data.user
  return data.user
}

export async function register(email, password, fullName, gymName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName, gym_name: gymName } }
  })
  if (error) throw error
  currentUser = data.user
  return data.user
}

export async function logout() {
  await supabase.auth.signOut()
  currentUser = null
  navigate('landing')
}

export function getDisplayName() {
  if (!currentUser) return 'Admin'
  const meta = currentUser.user_metadata || {}
  return meta.full_name || currentUser.email?.split('@')[0] || 'Admin'
}

export function getGymName() {
  if (!currentUser) return 'Academia'
  return currentUser.user_metadata?.gym_name || 'Minha Academia'
}
