import { navigate } from '../lib/router.js'

export function renderLanding() {
  return `
  <div id="page-landing" class="page">
    <!-- NAV -->
    <nav class="landing-nav">
      <div class="nav-logo">FIT<span>PRO</span></div>
      <div class="nav-links">
        <a href="#features">Funcionalidades</a>
        <a href="#pricing">Planos</a>
        <button class="btn btn-outline btn-sm" data-goto="login">Entrar</button>
        <button class="btn btn-accent btn-sm" data-goto="register">Começar grátis</button>
      </div>
      <button class="nav-mobile-toggle" id="mobile-menu-btn">☰</button>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">🏋️ Plataforma #1 para Academias no Brasil</div>
        <h1 class="hero-title">GERENCIE SUA<br><span class="hero-hl">ACADEMIA</span><br>COM PODER</h1>
        <p class="hero-desc">Sistema completo para gestão de alunos, treinos, pagamentos e desempenho. Tudo em um único lugar, do jeito que uma academia precisa.</p>
        <div class="hero-btns">
          <button class="btn btn-accent" style="font-size:1rem;padding:.95rem 2.2rem" data-goto="register">Começar gratuitamente →</button>
          <button class="btn btn-outline" style="font-size:1rem;padding:.95rem 2.2rem" data-goto="login">Já tenho conta</button>
        </div>
        <div class="hero-stats">
          <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Academias ativas</div></div>
          <div class="stat-item"><div class="stat-num">120K</div><div class="stat-label">Alunos gerenciados</div></div>
          <div class="stat-item"><div class="stat-num">98%</div><div class="stat-label">Satisfação dos clientes</div></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-card-float">
          <div class="hcf-label">Alunos este mês</div>
          <div class="hcf-value">+47</div>
          <div class="hcf-trend">↑ 18% vs mês anterior</div>
        </div>
        <div class="hero-card-float" style="margin-top:1rem;margin-left:3rem">
          <div class="hcf-label">Receita mensal</div>
          <div class="hcf-value">R$ 24.890</div>
          <div class="hcf-trend" style="color:var(--green)">↑ 12% crescimento</div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features-section" id="features">
      <div class="section-label">Funcionalidades</div>
      <h2 class="section-title">TUDO QUE SUA ACADEMIA PRECISA</h2>
      <p class="section-sub">Uma plataforma completa para você focar no que importa: seus alunos.</p>
      <div class="features-grid">
        ${[
          { icon: '👤', title: 'Gestão de Alunos', desc: 'Cadastro completo, histórico de treinos, avaliações físicas e controle de frequência em tempo real.' },
          { icon: '💪', title: 'Planos de Treino', desc: 'Crie e distribua treinos personalizados para cada aluno com progressão detalhada de exercícios.' },
          { icon: '💳', title: 'Controle Financeiro', desc: 'Mensalidades, pagamentos, inadimplência e relatórios financeiros em um só painel.' },
          { icon: '📊', title: 'Dashboard Analítico', desc: 'Métricas em tempo real para decisões baseadas em dados: frequência, receita, retenção.' },
          { icon: '📅', title: 'Agendamentos', desc: 'Agende avaliações, aulas em grupo e consultas com professores diretamente pelo sistema.' },
          { icon: '📱', title: 'App para Alunos', desc: 'Seus alunos acessam treinos, frequência e cobranças direto pelo celular, em qualquer hora.' },
        ].map(f => `
          <div class="feature-card">
            <div class="feature-icon">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
          </div>`).join('')}
      </div>
    </section>

    <!-- PRICING -->
    <section class="pricing-section" id="pricing">
      <div style="text-align:center;margin-bottom:3.5rem">
        <div class="section-label">Planos</div>
        <h2 class="section-title">ESCOLHA SEU PLANO</h2>
        <p class="section-sub" style="margin:0 auto">Sem contratos longos. Cancele quando quiser.</p>
      </div>
      <div class="plans-grid">
        <div class="plan-card">
          <div class="plan-name">Starter</div>
          <div class="plan-price">R$ 97<span>/mês</span></div>
          <ul class="plan-features">
            <li>Até 100 alunos</li><li>Treinos ilimitados</li>
            <li>Controle financeiro</li><li>Suporte por email</li>
          </ul>
          <button class="btn btn-outline" style="width:100%" data-goto="register">Começar agora</button>
        </div>
        <div class="plan-card plan-popular">
          <div class="plan-badge">Mais popular</div>
          <div class="plan-name">Pro</div>
          <div class="plan-price">R$ 197<span>/mês</span></div>
          <ul class="plan-features">
            <li>Até 500 alunos</li><li>App para alunos</li>
            <li>Relatórios avançados</li><li>Agendamentos</li><li>Suporte prioritário</li>
          </ul>
          <button class="btn btn-accent" style="width:100%" data-goto="register">Começar agora</button>
        </div>
        <div class="plan-card">
          <div class="plan-name">Enterprise</div>
          <div class="plan-price">R$ 397<span>/mês</span></div>
          <ul class="plan-features">
            <li>Alunos ilimitados</li><li>Multi-unidades</li>
            <li>API de integração</li><li>Gerente de conta dedicado</li><li>SLA garantido</li>
          </ul>
          <button class="btn btn-outline" style="width:100%" data-goto="register">Falar com vendas</button>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="landing-footer">
      <div class="footer-logo">FIT<span>PRO</span></div>
      <p>© ${new Date().getFullYear()} FitPro — Sistema de gestão para academias.</p>
      <p style="margin-top:.3rem;font-size:.8rem">Feito com ❤️ para personal trainers e donos de academia.</p>
    </footer>
  </div>`
}

export function initLanding() {
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.goto
      if (target === 'login' || target === 'register') {
        navigate('auth')
        setTimeout(() => switchAuthTab(target), 50)
      } else {
        navigate(target)
      }
    })
  })
}

function switchAuthTab(tab) {
  const event = new CustomEvent('auth:switch', { detail: tab })
  document.dispatchEvent(event)
}
